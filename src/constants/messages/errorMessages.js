import NUMBERS from '../numbers/numbers.js';

const ERROR_MESSAGES = Object.freeze({
  errorHeader: '[ERROR]',
  dateOutOfRange: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  emptyInput: '빈 값을 입력하셨습니다.',
  notANumber: '숫자를 입력해주세요',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  overtwenty: `메뉴 개수의 합이 ${NUMBERS.maxMenuQuentity}을 넘을 수 없습니다.`,
  onlyDrinks: '음료만 주문할 수 없습니다. 다시 입력해 주세요.',
});

export default ERROR_MESSAGES;
