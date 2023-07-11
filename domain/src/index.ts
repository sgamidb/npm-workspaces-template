import { sum } from "@test-sgamid/shared-lib";

export function addAgeOfCaptain(
  ageOfCaptain: number,
  numberOfBarrels: number
): number {
  return sum(ageOfCaptain, numberOfBarrels);
}
