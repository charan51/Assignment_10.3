class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('woof');
        return 'woff';
    }
};
class Labrador extends Dog {
    constructor(name, color, breedWeight) {
        super(name);
        this.name = name;
        this.color = color;
        this.breedWeight = breedWeight;
    }
    speak() {
        super.speak();
        console.log('Labrador says WOOF');
        return 'Labrador says WOOF';
    }
};

var Dog1 = new Labrador('Jim', 'Black', 180);
Dog1.speak();