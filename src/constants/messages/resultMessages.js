const RESULT_MESSAGES = Object.freeze({
  orderList: (menu, quentity) => `${menu} ${quentity}개`,
  freeGift: '샴페인 1개',
  nothing: '없음',
  dDayDiscount: '크리스마스 디데이 할인',
  weekdayDiscount: '평일 할인',
  weekendDiscount: '주말 할인',
  specialDayDiscount: '특별 할인',
  freeGiftEvent: '증정 이벤트',
  expectedPaymentAmount: expectedPaymentAmount => `${expectedPaymentAmount}원`,
});

export default RESULT_MESSAGES;
