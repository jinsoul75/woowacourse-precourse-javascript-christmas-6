import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import NUMBERS from '../constants/numbers/numbers.js';

class ExpectedDate {
  #date;

  constructor(date) {
    this.#validator(date);
    this.#date = date;
  }

  #validator(date) {
    if (date < NUMBERS.minDate || date > NUMBERS.maxDate) {
      throw Error(ERROR_MESSAGES.dateOutOfRange);
    }
    if (Number.isNaN(Number(date))) {
      throw Error(ERROR_MESSAGES.dateOutOfRange);
    }
    if (date.length === 0) {
      throw Error(ERROR_MESSAGES.dateOutOfRange);
    }
  }
}

export default ExpectedDate;
