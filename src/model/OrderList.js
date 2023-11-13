import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import MENU from '../constants/menu/menu.js';
import { getSecondLevelKeys } from '../utils/ObjectToArray.js';

class OrderList {
  #list;

  constructor(list) {
    this.#list = list;
    this.orderMenu = Object.keys(list);
    this.orderQuentity = Object.values(list);
  }

  // - 메뉴판에 없는 메뉴 입력시
  // - 메뉴의 개수가 숫자가 아닐 시
  // - 메뉴 형식이 예시와 다른 경우
  // - 중복 메뉴 입력시
  // `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
  // - 메뉴 개수의 합이 20개를 초과하는 경우
  // `[ERROR] 메뉴 개수의 합이 20개를 초과할 수 없습니다. 다시 입력해 주세요.`
  // - 음료만 주문한 경우
  // `[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.`

  contains() {
    const menuList = getSecondLevelKeys(MENU);
    this.orderMenu.forEach(menu => {
      if (!menuList.includes(menu)) {
        throw Error(ERROR_MESSAGES.invalidOrder);
      }
    });
  }
}

export default OrderList;
