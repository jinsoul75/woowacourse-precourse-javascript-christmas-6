import ExpectedDate from '../model/ExpectedDate.js';
import OrderList from '../model/OrderList.js';
import stringToObject from '../utils/stringToObject.js';

import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
  constructor() {
    this.expectedDate = 0;
    this.orderList = [];
  }

  async start() {
    await this.getExpectedDate();
    await this.getOrderList();
    OutputView.printMenu(this.orderList);
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
}

export default EventPlannerController;
