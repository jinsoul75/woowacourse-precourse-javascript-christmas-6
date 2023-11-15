import { Console } from '@woowacourse/mission-utils';
import ASK_MESSAGES from '../constants/messages/askMessages';

const InputView = {
  async readDate() {
    const expectedDate = await Console.readLineAsync(ASK_MESSAGES.expectedDate);
    return expectedDate;
  },
  async readOrder() {
    const orderList = await Console.readLineAsync(ASK_MESSAGES.orderList);
    return orderList;
  },
};

export default InputView;
