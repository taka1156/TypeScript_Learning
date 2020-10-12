interface DownLoadedUserData {
  id: number;
  user?: string;
}

const downoadedUserData: DownLoadedUserData = {
  id: 1,
  user: ''
};

const result1 = downoadedUserData.user ?? 'no-user'; // null, undefiend
const result2 = downoadedUserData.user || 'no-user'; // '' , false, null, undefiend

console.log(`result1=${result1}`);
console.log(`result2=${result2}`);

console.log('=== result: Nullish Coalescing===');
