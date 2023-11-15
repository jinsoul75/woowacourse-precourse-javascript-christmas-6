import BADGE from '../constants/badge/badge';
import NUMBERS from '../constants/numbers/numbers';

class Badge {
  constructor(totalBenefitAmount) {
    this.totalBenefitAmount = totalBenefitAmount;
    this.badge = BADGE.nothing;
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
