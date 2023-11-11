import InputView from '../view/InputView.js';

class EventPlannerController {
  async start() {
    await InputView.readDate();
  }
}

export default EventPlannerController;
