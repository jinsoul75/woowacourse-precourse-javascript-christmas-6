import NUMBERS from '../constants/numbers/numbers.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import { MENU, DRINK } from '../constants/menu/menu.js';
import { getSecondLevelKeys } from '../utils/ObjectToArray.js';

class OrderList {
  #list;

  constructor(list) {
    this.#list = list;
    this.orderMenu = [...new Map(list).keys()];
    this.orderQuentity = [...new Map(list).values()];
  }

  contains() {
    const menuList = getSecondLevelKeys(MENU);

    this.orderMenu.forEach(menu => {
      if (!menuList.includes(menu)) {
        throw Error(ERROR_MESSAGES.invalidOrder);
      }
    });
  }

  isValidNumber() {
    const regex = /^(1[0-9]|20|[1-9])$/;

    this.orderQuentity.forEach(quentity => {
      if (!regex.test(quentity)) {
        throw Error(ERROR_MESSAGES.invalidOrder);
      }
    });
  }

  isDuplicate() {
    if (this.#list.length !== this.orderMenu.length) {
      throw Error(ERROR_MESSAGES.invalidOrder);
    }
  }

  isOverTwenty() {
    const sumQuentity = this.orderQuentity.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    );
    if (sumQuentity > NUMBERS.maxMenuQuentity) {
      throw Error(ERROR_MESSAGES.invalidOrder);
    }
  }

  isOnlyDrinks() {
    const drinks = Object.keys(DRINK);
    const isOnly = menu => drinks.includes(menu);
    if (this.orderMenu.every(isOnly)) {
      throw Error(ERROR_MESSAGES.onlyDrinks);
    }
  }
}

export default OrderList;
