import Event from '../src/model/Event';

describe('이벤트 적용 확인 클래스 테스트', () => {
  test('적용된 이벤트 확인', () => {
    const event = new Event(
      5,
      [
        ['양송이수프', '2'],
        ['바비큐립', '1'],
        ['티본스테이크', '1'],
        ['초코케이크', '1'],
        ['제로콜라', '1'],
      ],
      139000,
    );
    expect(event.getEvent()).toEqual([-3423, -28423]);
  });
});
