/**
 * Created by albusdumble-dore on 3/8/17.
 */


moduke.exports = function Cart(oldCart) {
  this.items = oldCart.items||{};
  this.totalQuantity = oldCart.totalQuantity||0;
  this.totalPrice = oldCart.totalPrice||0;

  this.add = function (item,id) {         // function to add to shopping cart
      var storedItem = this.items[id];
      if(!storedItem){                        // item of type not previously in cart
storedItem = this.items[id]={item:item,qty:0,price:0};
      }
      stored.qty++;                                                     // if already present in cart
      storedItem.price = storedItem.item.price*stored.qty;
      this.totalQuantity++;
      this.totalPrice = storedItem.item.price;
  }


  this.generateArray = function () {
      var arr =[];
      for(var id in this.items){
          arr.push(this.items[id]);
      }
      return arr;
  }

};