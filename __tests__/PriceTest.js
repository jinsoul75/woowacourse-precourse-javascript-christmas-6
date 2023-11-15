import Price from '../src/model/Price';

describe('메뉴 가격 클래스 테스트', () => {
  test('개별 가격 확인 테스트', () => {
    const price = new Price();

    expect(price.getEachPrice('양송이수프')).toEqual(6000);
  });

  test('총 가격 테스트', () => {
    const price = new Price();

    expect(
      price.getTotalPriceBeforeDiscount([
        ['티본스테이크', '1'],
        ['초코케이크', '1'],
      ]),
    ).toEqual(70000);
  });
});
