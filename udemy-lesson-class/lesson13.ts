class Person {
  // フィールド(readonly => final的な？[constructorでの上書きはできる])
  private readonly github: string;
  private readonly twitter: string;
  private readonly facebook: string;
  private readonly site: string;

  // コンストラクター
  constructor(
    githubAccount: string,
    twitterAccount: string,
    facebookAccount: string,
    siteUrl: string
  ) {
    this.github = githubAccount;
    this.twitter = twitterAccount;
    this.facebook = facebookAccount;
    this.site = siteUrl;
  }

　/* 
  別の書き方
  constructor(
    private readonly githubAccount: string,
    private readonly　twitterAccount: string,
    private readonly　facebookAccount: string,
    private readonly　siteUrl: string
  ) {}
  */


  public perseUrl(key: string): string {
    enum SNS {
      GITHUB = 'github',
      TWITTER = 'twitter',
      FACEBOOK = 'facebook',
      SITE = 'site',
    }

    // readonlyなので書き換え不可能
    // エラーをわざと起こす: this.facebook = 'hoge'

    switch (key) {
      case SNS.GITHUB:
        return this.makeSnsUrl('https://github.com', this.github);
      case SNS.TWITTER:
        return this.makeSnsUrl('https://twitter.com', this.twitter);
      case SNS.FACEBOOK:
        return this.makeSnsUrl('https://ja-jp.facebook.com', this.facebook);
      case SNS.SITE:
        return `${this.site}`;
      default:
        return '未定義';
    }
  }

  private makeSnsUrl(snsUrl: string, account: string): string {
    if (/[a-zA-Z0-9]/.test(account)) {
      return snsUrl;
    } else {
      return '未登録';
    }
  }
}

let taka = new Person('taka1156', 'taka_Program', '未登録', 'https://www.taka1156.site');

console.log('=== result: クラス===');

console.log(taka);
let url = taka.perseUrl('github');
console.log(url);
url = taka.perseUrl('twitter');
console.log(url);
url = taka.perseUrl('facebook');
console.log(url);
url = taka.perseUrl('site');
console.log(url);
url = taka.perseUrl('line');
console.log(url);

// privateなのでクラスの外部から変更、読み取り、実行などができない
// エラーをわざと起こす: taka.site = 'https://blog.taka1156.site';
// エラーをわざと起こす: console.log(taka.site)
// エラーをわざと起こす: url = taka.makeSnsUrl('https://github.com', 'taka1156')
