/**
 * Position-based scoring. Order is 1-based (index + 1).
 * Desktop & mobile both derive from the same list position so rank,
 * score and stars always stay sequential with the displayed order.
 */

/** Score out of 10: 10.0, 9.9, 9.8 … floored at 9.5 */
export function calculateRating(order: number): number {
  const score = 10 - (Math.max(1, order) - 1) * 0.1;
  return Math.max(9.5, Math.round(score * 10) / 10);
}

/** Star rating from list position */
export function calculateStars(order: number): number {
  if (order <= 3) return 5;
  if (order <= 7) return 4.5;
  return 4;
}

/** Rank badge label for the top positions */
export function getRankBadge(order: number): string | null {
  if (order === 1) return "Editor's Choice";
  if (order === 2) return "Most Popular";
  if (order === 3) return "Top Pick";
  return null;
}

export interface PositionMetrics {
  order: number;
  rating: number;
  stars: number;
  badge: string | null;
}

export function getPositionMetrics(index: number): PositionMetrics {
  const order = index + 1;
  return {
    order,
    rating: calculateRating(order),
    stars: calculateStars(order),
    badge: getRankBadge(order),
  };
}
