const HEADER_MESSAGES = Object.freeze({
  intro: day => `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  orderMenu: '\n<주문 메뉴>',
  totalPriceBeforeDiscount: '\n<할인 전 총주문 금액>',
  freeGift: '\n<증정 메뉴>',
  event: '\n<혜택 내역>',
  totalDiscountAmount: '\n<총혜택 금액>',
  expectedPaymentAmount: '\n<할인 후 예상 결제 금액>',
  eventBadge: '\n<12월 이벤트 배지>',
});

export default HEADER_MESSAGES;
