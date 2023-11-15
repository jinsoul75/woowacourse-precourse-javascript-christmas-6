import BADGE from '../constants/badge/badge.js';
import NUMBERS from '../constants/numbers/numbers.js';

class Badge {
  constructor(totalBenefitAmount) {
    this.totalBenefitAmount = totalBenefitAmount;
    this.badge = '';
  }

  getEventBadge() {
    if (this.totalBenefitAmount >= NUMBERS.santaBadgeAmount) {
      this.badge = BADGE.santa;
      return this.badge;
    }

    if (this.totalBenefitAmount >= NUMBERS.treeBadgeAmount) {
      this.badge = BADGE.tree;
      return this.badge;
    }

    if (this.totalBenefitAmount >= NUMBERS.starBadgeAmount) {
      this.badge = BADGE.star;
      return this.badge;
    }

    return this.badge;
  }
}

export default Badge;
