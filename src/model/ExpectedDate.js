import ERROR_MESSAGES from '../constants/messages/errorMessages';
import NUMBERS from '../constants/numbers/numbers';

class ExpectedDate {
  #date;

  constructor(date) {
    this.#date = date;
  }

  isInRange() {
    if (this.#date < NUMBERS.minDate || this.#date > NUMBERS.maxDate) {
      throw Error(ERROR_MESSAGES.invalidDate);
    }
  }

  isANumber() {
    if (Number.isNaN(Number(this.#date))) {
      throw Error(ERROR_MESSAGES.invalidDate);
    }
  }

  isEmpty() {
    if (this.#date.length === 0) {
      throw Error(ERROR_MESSAGES.invalidDate);
    }
  }
}

export default ExpectedDate;
