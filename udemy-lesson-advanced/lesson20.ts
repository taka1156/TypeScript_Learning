interface Disigner {
  name: string;
  // age: number;
  [index: string]: string;
}

const disigner: Disigner = {
  name: 'Quill',
  //age: 24
};

console.log('=== result: インデックスシグネチャ===');
