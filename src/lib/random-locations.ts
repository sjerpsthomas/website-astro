
interface Point {
  x: number;
  y: number;
}

function distributeX(x: number): number {
  return 1 / (1 + Math.exp(-10 * (x - 0.5)));
}

/**
 * Generates n random points within a [0, 1] square,
 * ensuring each point is at least 'radius' distance from others.
 */
export function getRandomLocations(n: number, radius: number): Point[] {
  const locations: Point[] = [];
  const maxAttempts = 1000;

  for (let index = 0; index < n; index++) {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < maxAttempts) {
      const candidate: Point = {
        /* eslint-disable sonarjs/pseudo-random */
        x: distributeX(Math.random()),
        y: Math.random()
      };

      const isTooClose = locations.some(loc => {
        const dx = candidate.x - loc.x;
        const dy = candidate.y - loc.y;
        return dx * dx + dy * dy < radius * radius;
      });

      if (!isTooClose) {
        locations.push(candidate);
        placed = true;
      }

      attempts++;
    }

    if (!placed) {
      console.warn(`Could only place ${locations.length} points. The area may be too crowded.`);
      break;
    }
  }

  return locations;
}