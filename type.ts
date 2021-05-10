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
let hasValue = true;

// number型は整数、浮動小数、符号付きを定義できる。
let count = 10;
let float = 3.14;
let minus = -0.12;

// stringは文字列で記号は３パターン使用できる。
let single = 'hello';
let double = "hello";
let back = `hello`;


// オブジェクト型を型推論で書いた場合
const person: {
  // 型注釈で書いた場合。
  name: string;
  age: number;
} = {
  name:'Jack',
  age: 21
}

// 配列型
const fruits: string[] = ['aple','banana','grape']
const fruit = fruits[0];
// stringが使用するメソッドが使用できる。
fruit.length

// tuple型を使用して順番を固定できる。
const book: [string,number, boolean] = ['business', 1500, false];
// ここではエラーが出ないが実際には追加できないようになっている。
// book.push[21];
// console.log(book[3]);

// 列挙型（イーナム型）の記述方法。
// 宣言はキャメルケースを使用する。
// enumの中に文字列を指定しなければ添字のようなものが入る。
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size:CoffeeSize.GRANDE
}





