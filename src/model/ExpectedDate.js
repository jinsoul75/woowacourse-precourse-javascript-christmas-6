import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import NUMBERS from '../constants/numbers/numbers.js';

class ExpectedDate {
  #date;

  constructor(date) {
    this.#date = date;
  }

  isInRange() {
    if (this.#date < NUMBERS.minDate || this.#date > NUMBERS.maxDate) {
      throw Error(ERROR_MESSAGES.dateOutOfRange);
    }
  }

  isANumber() {
    if (Number.isNaN(Number(this.#date))) {
      throw Error(ERROR_MESSAGES.notANumber);
    }
  }

  isEmpty() {
    if (this.#date.length === 0) {
      throw Error(ERROR_MESSAGES.emptyInput);
    }
  }
}

export default ExpectedDate;
