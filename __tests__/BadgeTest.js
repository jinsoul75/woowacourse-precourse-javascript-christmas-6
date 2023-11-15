import Badge from '../src/model/Badge';

describe('뱃지 클래스 테스트', () => {
  test('적용된 뱃지가 맞는지 확인', () => {
    const event = new Badge(30000);
    expect(event.getEventBadge()).toEqual('산타');
  });
});
