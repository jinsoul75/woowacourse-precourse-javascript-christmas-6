import { MENU } from '../constants/menu/menu';

class Price {
  constructor(orderList) {
    this.orderList = orderList;
    this.eachPrice = 0;
  }

  getTotalPriceBeforeDiscount(orderList) {
    let totalPrice = 0;
    orderList.forEach(order => {
      const [menu, quentity] = order;
      totalPrice += Number(this.getEachPrice(menu)) * quentity;
    });

    return totalPrice;
  }

  getEachPrice(menu) {
    this.eachPrice = 0;

    MENU.forEach(category => {
      if (category[menu]) {
        this.eachPrice = category[menu];
      }
    });

    return this.eachPrice;
  }
}

export default Price;
