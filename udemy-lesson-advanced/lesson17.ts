class Dog_17 {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-bow');
  }

  bite() {
    console.log('gabu');
  }
}

class Bird_17 {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }

  fly() {
    console.log('flutter');
  }
}

type Pet_17 = Dog_17 | Bird_17;

function havePet_17(pet: Pet_17) {
  pet.speak();

  switch (pet.kind) {
    case 'dog':
      pet.bite();
      break;
    case 'bird':
      pet.fly();
      break;
  }

}

// Dog or Bird
havePet_17(new Dog_17());

console.log('=== result: タグ付きUnion===');
