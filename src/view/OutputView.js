import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import HEADER_MESSAGES from '../constants/messages/headerMeassages.js';
import RESULT_MESSAGES from '../constants/messages/resultMessages.js';

const OutputView = {
  printIntro(day) {
    Console.print(HEADER_MESSAGES.intro(day));
  },

  printMenu(orderList) {
    Console.print('<주문 메뉴>');

    orderList.forEach(order => {
      const [menu, quentity] = order;
      Console.print(RESULT_MESSAGES.orderList(menu, quentity));
    });
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print(HEADER_MESSAGES.totalPriceBeforeDiscount);
    Console.print(`${price}원`);
  },

  printError(error) {
    Console.print(`${ERROR_MESSAGES.errorHeader} ${error.message}`);
  },
};

export default OutputView;
