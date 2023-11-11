import InputView from '../view/InputView.js';
import ExpectedDate from '../model/ExpectedDate.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
  async start() {
    try {
      const dateInput = await InputView.readDate();
      const removedWhiteSpaceDate = dateInput.replace(/\s/g, '');
      const expectedDate = new ExpectedDate(removedWhiteSpaceDate);
    } catch (error) {
      OutputView.printError(error);
      this.start();
    }
  }
}

export default EventPlannerController;
