import ExpectedDate from '../model/ExpectedDate';
import OrderList from '../model/OrderList';
import Price from '../model/Price';
import Event from '../model/Event';
import Badge from '../model/Badge';

import stringToArray from '../utils/stringToArray';
import addCommasToNumber from '../utils/addCommasToNumber';

import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import NUMBERS from '../constants/numbers/numbers';

class EventPlannerController {
  constructor() {
    this.expectedDate = 0;
    this.orderList = [];
    this.totalPriceBeforeDiscount = 0;
    this.event = [];
    this.totalDiscountAmount = 0;
    this.totalBenefitAmount = 0;
    this.expectedPaymentAmount = 0;
    this.eventBadge = '';
  }

  async start() {
    await this.getExpectedDate();
    await this.getOrderList();

    this.getTotalPriceBeforeDiscount(this.orderList);
    this.getFreeGift();
    this.getEvent();
    OutputView.printTotalBenefitAmount(addCommasToNumber(this.totalBenefitAmount));
    this.getExpectedPaymentAmount();
    this.getEventBadge(this.expectedPaymentAmount);
  }

  async getExpectedDate() {
    try {
      this.expectedDate = await InputView.readDate();

      const expectedDate = new ExpectedDate(this.expectedDate);

      expectedDate.isInRange();
      expectedDate.isANumber();
      expectedDate.isEmpty();
    } catch (error) {
      OutputView.printError(error);
      await this.getExpectedDate();
    }
  }

  async getOrderList() {
    try {
      const orderListInput = await InputView.readOrder();
      this.orderList = stringToArray(orderListInput);
      const orderList = new OrderList(this.orderList);

      orderList.contains();
      orderList.isValidNumber();
      orderList.isDuplicate();
      orderList.isOverTwenty();
      orderList.isOnlyDrinks();

      OutputView.printMenu(this.orderList);
      OutputView.printIntro(this.expectedDate);
    } catch (error) {
      OutputView.printError(error);
      await this.getOrderList();
    }
  }

  getTotalPriceBeforeDiscount(orderList) {
    const price = new Price(orderList);
    this.totalPriceBeforeDiscount = price.getTotalPriceBeforeDiscount(orderList);

    const priceWithComma = addCommasToNumber(this.totalPriceBeforeDiscount);
    OutputView.printTotalPriceBeforeDiscount(priceWithComma);
  }

  getFreeGift() {
    OutputView.printFreeGiftHeader();

    if (this.totalPriceBeforeDiscount > NUMBERS.minFreeGiftPrice) {
      OutputView.printFreeGift();
      return;
    }

    OutputView.printNothing();
  }

  getEvent() {
    OutputView.printEvent();

    if (this.totalPriceBeforeDiscount < NUMBERS.minEventAmount) {
      OutputView.printNothing();
      return;
    }

    const event = new Event(this.expectedDate, this.orderList, this.totalPriceBeforeDiscount);
    [this.totalDiscountAmount, this.totalBenefitAmount] = event.getEvent();

    if (this.totalDiscountAmount === 0 || this.totalBenefitAmount === 0) {
      OutputView.printNothing();
    }
  }

  getExpectedPaymentAmount() {
    this.expectedPaymentAmount = this.totalPriceBeforeDiscount + this.totalDiscountAmount;
    OutputView.printExpectedPaymentAmount(addCommasToNumber(this.expectedPaymentAmount));
  }

  getEventBadge() {
    const badge = new Badge(Math.abs(this.totalBenefitAmount));
    this.eventBadge = badge.getEventBadge();

    OutputView.printEventBadgeHeader();

    OutputView.printEventBadge(this.eventBadge);
  }
}

export default EventPlannerController;
