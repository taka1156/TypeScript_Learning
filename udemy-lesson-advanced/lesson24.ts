interface DownLoadedUserAccountData {
  id: number;
  user: string;
}

const downoadedUserAccountData: DownLoadedUserAccountData = {
  id: 1,
  user: 'aaaa',
};

const AccountId = downoadedUserAccountData["id"];
const AccountName = downoadedUserAccountData["user"];

console.log(AccountId);
console.log(AccountName);


console.log('=== result: LookUp型===');
