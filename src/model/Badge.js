import BADGE from '../constants/badge/badge.js';
import NUMBERS from '../constants/numbers/numbers.js';

class Badge {
  constructor(totalDiscountAmount) {
    this.totalDiscountAmount = totalDiscountAmount;
    this.badge = '';
  }

  getEventBadge() {
    if (this.totalDiscountAmount >= NUMBERS.santaBadgeAmount) {
      this.badge = BADGE.santa;
      return this.badge;
    }

    if (this.totalDiscountAmount >= NUMBERS.treeBadgeAmount) {
      this.badge = BADGE.tree;
      return this.badge;
    }

    if (this.totalDiscountAmount >= NUMBERS.starBadgeAmount) {
      this.badge = BADGE.star;
      return this.badge;
    }

    return this.badge;
  }
}

export default Badge;
