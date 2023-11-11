import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },

  printError(error) {
    Console.print(`${ERROR_MESSAGES.errorHeader}: ${error.message}`);
  },
};

export default OutputView;
