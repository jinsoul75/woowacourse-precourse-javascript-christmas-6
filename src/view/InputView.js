import { Console } from '@woowacourse/mission-utils';
import ASKMESSAGES from '../constants/askMessages.js';

const InputView = {
  async readDate() {
    const expectedDate = await Console.readLineAsync(ASKMESSAGES.expectedDate);
    return expectedDate;
  },
  // ...
};

export default InputView;
