import { Console } from '@woowacourse/mission-utils';
import ASK_MESSAGES from '../constants/messages/askMessages.js';

const InputView = {
  async readDate() {
    const expectedDate = await Console.readLineAsync(ASK_MESSAGES.expectedDate);
    return expectedDate;
  },
  // ...
};

export default InputView;
