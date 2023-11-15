import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import HEADER_MESSAGES from '../constants/messages/headerMeassages.js';
import RESULT_MESSAGES from '../constants/messages/resultMessages.js';

const OutputView = {
  printIntro(day) {
    Console.print(HEADER_MESSAGES.intro(day));
  },

  printMenu(orderList) {
    Console.print(HEADER_MESSAGES.orderMenu);

    orderList.forEach(order => {
      const [menu, quentity] = order;
      Console.print(RESULT_MESSAGES.orderList(menu, quentity));
    });
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print(HEADER_MESSAGES.totalPriceBeforeDiscount);
    Console.print(`${price}원`);
  },

  printFreeGiftHeader() {
    Console.print(HEADER_MESSAGES.freeGift);
  },

  printFreeGift() {
    Console.print(RESULT_MESSAGES.freeGift);
  },

  printNothing() {
    Console.print(RESULT_MESSAGES.nothing);
  },

  printEvent() {
    Console.print(HEADER_MESSAGES.event);
  },

  printDdayDiscount(discountAmount) {
    Console.print(`${RESULT_MESSAGES.dDayDiscount}: ${discountAmount}원`);
  },

  printWeekendDiscount(discountAmount) {
    Console.print(`${RESULT_MESSAGES.weekendDiscount}: ${discountAmount}원`);
  },

  printWeekdayDiscount(discountAmount) {
    Console.print(`${RESULT_MESSAGES.weekdayDiscount}: ${discountAmount}원`);
  },

  printSepcialDayDiscount(discountAmount) {
    Console.print(`${RESULT_MESSAGES.specialDayDiscount}: ${discountAmount}원`);
  },

  printFreeGiftEvent(freeGiftAmount) {
    Console.print(`${RESULT_MESSAGES.freeGiftEvent}: ${freeGiftAmount}원`);
  },

  printTotalDiscountAmount(totalDiscountAmount) {
    Console.print(HEADER_MESSAGES.totalDiscountAmount);
    Console.print(`${totalDiscountAmount}원`);
  },

  printExpectedPaymentAmount(expectedPaymentAmount) {
    Console.print(HEADER_MESSAGES.expectedPaymentAmount);
    Console.print(RESULT_MESSAGES.expectedPaymentAmount(expectedPaymentAmount));
  },
  printEventBadgeHeader() {
    Console.print(HEADER_MESSAGES.eventBadge);
  },
  printEventBadge(badge) {
    Console.print(badge);
  },
  printError(error) {
    Console.print(`${ERROR_MESSAGES.errorHeader} ${error.message}`);
  },
};

export default OutputView;
