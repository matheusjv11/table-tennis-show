import { Ball } from "~~/classes/Ball";
import { Racket } from "~~/classes/Racket";
import Velocity from "~~/interfaces/Velocity";

export default class Calculation {
    
    static getDistance(x1: number, y1: number, x2: number, y2: number) {
        const xDist = x2 - x1
        const yDist = y2 - y1
    
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    }     
    
    /**
     * Rotates coordinate system for velocities
     *
     * Takes velocities and alters them as if the coordinate system they're on was rotated
     *
     * @param  Velocity | velocity | The velocity of an individual particle
     * @param  Float  | angle    | The angle of collision between two objects in radians
     * @return Object | The altered x and y velocities after the coordinate system has been rotated
     */
    
    static rotate(velocity: Velocity, angle: number) {
      const rotatedVelocities = {
          x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
          y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
      };
    
      return rotatedVelocities;
    }
    
    /**
     * Swaps out two colliding particles' x and y velocities after running through
     * an elastic collision reaction equation
     *
     * @param  Ball | particle      | A particle object with x and y coordinates, plus velocity
     * @param  Racket | racket | A particle object with x and y coordinates, plus velocity
     * @return Null | Does not return a value
     */
    
    static resolveCollision(ball: Ball, racket: Racket) {
      const xVelocityDiff = ball.velocity.x - racket.velocity.x;
      const yVelocityDiff = ball.velocity.y - racket.velocity.y;
    
      const xDist = racket.x - ball.x;
      const yDist = racket.y - ball.y;

      // Prevent accidental overlap of balls
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
          // Grab angle between the two colliding balls
          const angle = -Math.atan2(racket.y - ball.y, racket.x - ball.x);
    
          // Store mass in var for better readability in collision equation
          const m1 = ball.mass;
          const m2 = racket.mass;
    
          // Velocity before equation
          const u1 = this.rotate(ball.velocity, angle);
          const u2 = this.rotate(racket.velocity, angle);
    
          // Velocity after 1d collision equation
          const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
          const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
    
          // Final velocity after rotating axis back to original location
          const vFinal1 = this.rotate(v1, -angle);
          const vFinal2 = this.rotate(v2, -angle);
    
          // Swap ball velocities for realistic bounce effect
          ball.velocity.x = vFinal1.x;
          ball.velocity.y = vFinal1.y;
    
          racket.velocity.x = vFinal2.x;
          racket.velocity.y = vFinal2.y;
      }
    }
}