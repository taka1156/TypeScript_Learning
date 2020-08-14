"use strict";
class Person {
    // コンストラクター
    constructor(githubAccount, twitterAccount, siteUrl) {
        this.github = githubAccount;
        this.twitter = twitterAccount;
        this.site = siteUrl;
    }
    perseUrl(key) {
        let SNS;
        (function (SNS) {
            SNS["GITHUB"] = "Github";
            SNS["TWITTER"] = "Twitter";
            SNS["SITE"] = "Site";
        })(SNS || (SNS = {}));
        switch (key) {
            case SNS.GITHUB:
                return `https://github.com/${this.github}`;
            case SNS.TWITTER:
                return `https://twitter.com/${this.twitter}`;
            case SNS.SITE:
                return `${this.site}`;
            default:
                return '未定義';
        }
    }
}
let taka = new Person('taka1156', 'taka_Program', 'https://www.taka1156.site');
console.log('=== result: クラス(メンバー変数定義)===');
console.log(taka);
let url = taka.perseUrl('Github');
console.log(url);
url = taka.perseUrl('Twitter');
console.log(url);
url = taka.perseUrl('Site');
console.log(url);
url = taka.perseUrl('Facebook');
console.log(url);
