import dDayCalculator from '../utils/dDayCalculator.js';
import isWeekend from '../utils/isWeekend.js';
import isSpecialDay from '../utils/isSpecialDay.js';
import NUMBERS from '../constants/numbers/numbers.js';
import { MAIN, DESERT } from '../constants/menu/menu.js';
import OutputView from '../view/OutputView.js';
import addCommasToNumber from '../utils/addCommasToNumber.js';

class Event {
  constructor(expectedDate, orderList, totalPriceBeforeDiscount) {
    this.discountAmount = 0;
    this.benefitAmount = 0;
    this.expectedDate = expectedDate;
    this.orderList = orderList;
    this.totalPriceBeforeDiscount = totalPriceBeforeDiscount;
  }

  getEvent() {
    if (this.expectedDate <= NUMBERS.christmasDate) {
      this.#getChristmasDdayDiscount();
    }

    if (isWeekend(this.expectedDate)) {
      this.#getWeekendDiscount();
    } else {
      this.#getWeekdayDiscount();
    }

    if (isSpecialDay(this.expectedDate)) {
      this.#getSpecialDayDiscount();
    }

    if (this.totalPriceBeforeDiscount > NUMBERS.minFreeGiftPrice) {
      this.#getFreeGift();
    }

    this.benefitAmount += this.discountAmount;
    return [this.discountAmount, this.benefitAmount];
  }

  #getChristmasDdayDiscount() {
    const discountAmount = dDayCalculator(this.expectedDate);
    this.discountAmount += Number(discountAmount);
    OutputView.printDdayDiscount(addCommasToNumber(discountAmount));
  }

  #getWeekendDiscount() {
    let discountAmount = 0;

    this.orderList.forEach(order => {
      const [menu, quentity] = order;

      if (Object.keys(MAIN).includes(menu)) {
        discountAmount += NUMBERS.weekDiscountAmount * quentity;
      }
    });

    if (discountAmount < 0) {
      this.discountAmount += Number(discountAmount);
      OutputView.printWeekendDiscount(addCommasToNumber(discountAmount));
    }
  }

  #getWeekdayDiscount() {
    let discountAmount = 0;

    this.orderList.forEach(order => {
      const [menu, quentity] = order;
      if (Object.keys(DESERT).includes(menu)) {
        discountAmount += NUMBERS.weekDiscountAmount * quentity;
      }
    });

    if (discountAmount < 0) {
      this.discountAmount += Number(discountAmount);
      OutputView.printWeekdayDiscount(addCommasToNumber(discountAmount));
    }
  }

  #getSpecialDayDiscount() {
    OutputView.printSepcialDayDiscount(addCommasToNumber(NUMBERS.specialDiscountAmount));
    this.discountAmount += NUMBERS.specialDiscountAmount;
  }

  #getFreeGift() {
    OutputView.printFreeGiftEvent(addCommasToNumber(NUMBERS.freeGiftAmount));
    this.benefitAmount += NUMBERS.freeGiftAmount;
  }
}

export default Event;
