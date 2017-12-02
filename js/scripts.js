function Phone(brand, price, color, available) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.available = available
}
Phone.prototype.printInfo = function() {
    var isAvailable = 'available in store';
    if (this.available == false) {
        isAvailable = 'not ' + isAvailable;
    }
    console.log('The phone\'s brand is ' + this.brand + ', it\'s color is ' + this.color + ', it costs ' + this.price + ' and is ' + isAvailable + '.');
}
Phone.prototype.setAvailablity = function(available) {
    this.available = available;
} 



var samsungGalaxyS6 = new Phone('Samsung', 1500, 'black', true);
var iPhone6s = new Phone('Apple', 2250, 'silver', true);
var onePlusOne = new Phone('OnePlus', 1000, 'white', true);

iPhone6s.setAvailablity(false);

iPhone6s.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();