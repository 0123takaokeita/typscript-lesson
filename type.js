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
// 配列型
var fruits = ['aple', 'banana', 'grape'];
var fruit = fruits[0];
// stringが使用するメソッドが使用できる。
fruit.length;
// tuple型を使用して順番を固定できる。
var book = ['business', 1500, false];
// ここではエラーが出ないが実際には追加できないようになっている。
// book.push[21];
// console.log(book[3]);
// 列挙型（イーナム型）の記述方法。
// 宣言はキャメルケースを使用する。
// enumの中に文字列を指定しなければ添字のようなものが入る。
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
// any型について
// 何でも代入できてしまう型
// jsから移行するプロジェクトなどのときは便利だが頼らないように使用！
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.aaa = 'aaa';
// union型について
// 文字も数字も入れたいときに使用できる。
var unionType = 10;
// 配列で使用することもできる。
var unionTypes = [21, 'hello'];
// constを使用するとliteral型になる。
var apple = 'apple';
// union型とliterarl型を組み合わすことでenum型を作ることもできる。
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
var clothSizes = 'large';
