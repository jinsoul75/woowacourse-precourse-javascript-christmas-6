import ExpectedDate from '../model/ExpectedDate.js';
import OrderList from '../model/OrderList.js';
import Price from '../model/Price.js';
import Event from '../model/Event.js';

import stringToObject from '../utils/stringToObject.js';
import addCommasToNumber from '../utils/addCommasToNumber.js';

import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import NUMBERS from '../constants/numbers/numbers.js';

class EventPlannerController {
  constructor() {
    this.expectedDate = 0;
    this.orderList = [];
    this.totalPriceBeforeDiscount = 0;
    this.event = [];
    this.totalDiscountAmount = 0;
    this.expectedPaymentAmount = 0;
  }

  async start() {
    await this.getExpectedDate();
    await this.getOrderList();
    OutputView.printMenu(this.orderList);
    this.getTotalPriceBeforeDiscount(this.orderList);
    this.getFreeGift(this.totalPriceBeforeDiscount);
    this.getEvent();
    OutputView.printTotalDiscountAmount(addCommasToNumber(this.totalDiscountAmount));
    this.getExpectedPaymentAmount();
  }

  async getExpectedDate() {
    try {
      this.expectedDate = await InputView.readDate();
      const expectedDate = new ExpectedDate(this.expectedDate);
    } catch (error) {
      OutputView.printError(error);
      await this.getExpectedDate();
    }
  }

  async getOrderList() {
    try {
      const orderListInput = await InputView.readOrder();
      this.orderList = stringToObject(orderListInput);
      const orderList = new OrderList(this.orderList);

      orderList.contains();
      orderList.isValidNumber();
      orderList.isDuplicate();
      orderList.isOverTwenty();
      orderList.isOnlyDrinks();

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

  getFreeGift(totalPriceBeforeDiscount) {
    OutputView.printFreeGiftHeader();

    if (totalPriceBeforeDiscount > NUMBERS.minFreeGiftPrice) {
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
    this.totalDiscountAmount = event.getEvent();
  }

  getExpectedPaymentAmount() {
    this.expectedPaymentAmount = this.totalPriceBeforeDiscount - this.totalDiscountAmount;
    OutputView.printExpectedPaymentAmount(addCommasToNumber(this.expectedPaymentAmount));
  }
}

export default EventPlannerController;
