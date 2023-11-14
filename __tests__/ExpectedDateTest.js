import ExpectedDate from '../src/model/ExpectedDate';

describe('날짜 예외 테스트', () => {
  test.each([42, -1, 0])('1일과 31일 사이의 날짜가 맞는지 테스트', input => {
    expect(() => {
      const expectedDate = new ExpectedDate(input);
      expectedDate.isInRange();
    }).toThrow('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });

  test.each(['이십일', '#'])('숫자가 맞는지 테스트', input => {
    expect(() => {
      const expectedDate = new ExpectedDate(input);
      expectedDate.isANumber();
    }).toThrow('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });

  test('공백 테스트', () => {
    expect(() => {
      const expectedDate = new ExpectedDate('');
      expectedDate.isEmpty();
    }).toThrow('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });
});
