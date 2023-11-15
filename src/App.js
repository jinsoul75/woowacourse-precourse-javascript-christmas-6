import EventPlannerController from './controller/EventPlannerController';

class App {
  async run() {
    const eventPlannerController = new EventPlannerController();
    await eventPlannerController.start();
  }
}

export default App;
