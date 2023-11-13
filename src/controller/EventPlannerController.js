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
    this.expectedDate = await this.getExpectedDate();
    this.orderList = await this.getOrderList();
  }

  async getExpectedDate() {
    try {
      const dateInput = await InputView.readDate();
      const expectedDate = new ExpectedDate(dateInput);
    } catch (error) {
      OutputView.printError(error);
      await this.getExpectedDate();
    }
  }

  async getOrderList() {
    try {
      const orderListInput = await InputView.readOrder();
      const orderListObj = stringToObject(orderListInput);
      const orderList = new OrderList(orderListObj);
      orderList.contains();
      orderList.isNumber();
    } catch (error) {
      OutputView.printError(error);
      await this.getOrderList();
    }
  }
}

export default EventPlannerController;
