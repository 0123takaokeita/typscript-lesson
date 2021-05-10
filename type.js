// // 真偽値の型は他と同じ考えでもいい。
// let hasValue: boolean = true;
// // number型は整数、浮動小数、符号付きを定義できる。
// let count: number = 10;
// let float: number = 3.14;
// let minus: number = -0.12;
// // stringは文字列で記号は３パターン使用できる。
// let single: string = 'hello';
// let double: string = "hello";
// let back: string = `hello`;
// 型注釈を使用すると冗長になるため基本的には型推論を使用しよう。
// 真偽値の型は他と同じ考えでもいい。
var hasValue = true;
// number型は整数、浮動小数、符号付きを定義できる。
var count = 10;
var float = 3.14;
var minus = -0.12;
// stringは文字列で記号は３パターン使用できる。
var single = 'hello';
var double = "hello";
var back = "hello";
// オブジェクト型を型推論で書いた場合
var person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
// 配列型
var fruits = ['aple', 'banana', 'grape'];
var fruit = fruits[0];
// stringが使用するメソッドが使用できる。
fruit.length;
// tuple型を使用して順番を固定できる。
var book = ['business', 1500, false];
// ここではエラーが出ないが実際には追加できないようになっている。
book.push[21];
console.log(book);
