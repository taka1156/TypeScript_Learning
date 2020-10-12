type Enginner = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: string;
};

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return '';
  }
}

type NomadWoker = Enginner | Blogger;

function describeProfile(nomadWoker: NomadWoker) {
  console.log(nomadWoker);
  // 変数nomadWokerに`role`は存在するか
  if ('role' in nomadWoker) {
    console.log(nomadWoker.role);
  }
  if ('follower' in nomadWoker) {
    console.log(nomadWoker.follower);
  }
}

class Dog {
  speak() {
    console.log('bow-bow');
  }

  bite() {
    console.log('gabu');
  }
}

class Bird {
  speak() {
    console.log('tweet-tweet');
  }

  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();

  if (pet instanceof Bird) {
    pet.fly();
  }

  if (pet instanceof Dog) {
    pet.bite();
  }
}

// Dog or Bird
havePet(new Dog());

havePet({
  speak() {
    console.log('Hello');
  },
  fly() {
    // 実行されない(Birdから生成されたものではない)
    console.log('Not fly');
  },
});

console.log('=== result: type guard===');
