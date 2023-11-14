import BADGE from '../constants/badge/badge.js';
import NUMBERS from '../constants/numbers/numbers.js';

class Badge {
  constructor(expectedPaymentAmount) {
    this.expectedPaymentAmount = expectedPaymentAmount;
    this.badge = '';
  }

  getEventBadge() {
    if (this.expectedPaymentAmount >= NUMBERS.santaBadgeAmount) {
      this.badge = BADGE.santa;
      return this.badge;
    }

    if (this.expectedPaymentAmount >= NUMBERS.treeBadgeAmount) {
      this.badge = BADGE.tree;
      return this.badge;
    }

    if (this.expectedPaymentAmount >= NUMBERS.starBadgeAmount) {
      this.badge = BADGE.star;
      return this.badge;
    }

    return this.badge;
  }
}

export default Badge;
