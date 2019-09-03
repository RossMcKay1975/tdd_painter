const Decorator = function() {
  this.paintStock = []
}

Decorator.prototype.addToStock = function (paint) {
  this.paintStock.push(paint)
};


// the current paint stock = [paint, paint2]
Decorator.prototype.stockInLitres = function () {
  let totalLitres = 0;
  this.paintStock.forEach(function(paint){
    totalLitres += paint.litres
    return totalLitres;
  })
};


module.exports = Decorator;
