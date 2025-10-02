class dog{
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says woof!`);
    }   

    info() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }           
}