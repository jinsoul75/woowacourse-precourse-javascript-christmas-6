import dDayCalculator from '../utils/dDayCalculator.js';

class Event {
  constructor() {
    this.event = [];
  }

  getChristmasDday(expectedDate) {
    // 1일 기준 1000원 이후로 100원씩 증가하는 함수 생성하기
    const discountAmount = dDayCalculator(expectedDate);
    return discountAmount;
  }
}

export default Event;

// 해당 날짜가 어디 사이인지, 주말인지 평일인지 확인해야함 => 날짜 필요

// eslint-disable-next-line no-lone-blocks
{
  /* <혜택 내역>
크리스마스 디데이 할인: -1,200원 => expectedDate
평일 할인: -4,046원 => 디저트만 => orderlist
주말 할인 => 메인만 => orderlist
특별 할인: -1,000원 => 특정 날짜만 => orderlist
증정 이벤트: -25,000원  => totalPriceBeforeDiscount  */
}
// - 크리스마스 디데이 할인
//     - `크리스마스 디데이 할인: -1,200원`
//     - 25일 이하일 시 적용
//     - 1일 기준 1000원 25일까지 100원씩 할인 금액이 증가한 금액 적용
// - 평일 할인(월~목)
//     - `평일 할인: -4,046원`
//     - 디저트 메뉴 1개당 2,023원 할인
// - 주말 할인(금,토)
//     - `주말 할인: -2,023원`
//     - 메인 메뉴 1개당 2,023원 할인
// - 특별 할인
//     - `특별 할인: -1,000원`
//     - 2,10,17,24,25,31일일시 적용
//     - 총 주문 금액에서 1,000원 할인
// - 증정이벤트
//     - 6번 기능에 따라 출력
//     - `증정 이벤트: -25,000원`
// - 적용된 이벤트 내역만 출력
// - 적용된 이벤트가 없다면 `없음` 출력
