import OrderList from '../src/model/OrderList';

describe('주문 예외 테스트', () => {
  test('없는 메뉴 주문시 예외', () => {
    expect(() => {
      const orderList = new OrderList([['푸딩', '2']]);
      orderList.contains();
    }).toThrow('유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
  test('수량 잘못 입력시 예외', () => {
    expect(() => {
      const orderList = new OrderList([['아이스크림', '두개']]);
      orderList.isValidNumber();
    }).toThrow('유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
  test('중복된 메뉴 주문시 예외', () => {
    expect(() => {
      const orderList = new OrderList([
        ['해산물파스타', '2'],
        ['해산물파스타', '2'],
      ]);
      orderList.isDuplicate();
    }).toThrow('유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
  test('최대 수량 초과 주문시 예외', () => {
    expect(() => {
      const orderList = new OrderList([['양송이수프', '30']]);
      orderList.isOverTwenty();
    }).toThrow('유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
  test('음료만 주문시 예외', () => {
    expect(() => {
      const orderList = new OrderList([
        ['제로콜라', '1'],
        ['레드와인', '3'],
      ]);
      orderList.isOnlyDrinks();
    }).toThrow('음료만 주문할 수 없습니다. 다시 입력해 주세요.');
  });
});
