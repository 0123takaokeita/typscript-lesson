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
  name: 'Jack',
  age: 21
}

// 配列型
const fruits: string[] = ['aple', 'banana', 'grape']
const fruit = fruits[0];
// stringが使用するメソッドが使用できる。
fruit.length

// tuple型を使用して順番を固定できる。
const book: [string, number, boolean] = ['business', 1500, false];
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
  size: CoffeeSize.GRANDE
}

// any型について
// 何でも代入できてしまう型
// jsから移行するプロジェクトなどのときは便利だが頼らないように使用！
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true]
anything = {};
anything.aaa = 'aaa'

// union型について
// 文字も数字も入れたいときに使用できる。
let unionType: number | string = 10;
// 配列で使用することもできる。
let unionTypes: (number | string)[] = [21, 'hello']

// constを使用するとliteral型になる。
const apple: 'apple' = 'apple';

// union型とliterarl型を組み合わすことでenum型を作ることもできる。
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}

// エイリアス型。型の変数を作成することができる。
type ClothSize = 'small' | 'medium' | 'large';
let clothSizes: ClothSize = 'large';


// 関数に型をつける。
function add(num1: number, num2: number): number {
  return num1 + num2
}

// void型について
function sayHello(): void {
  console.log('hello');
  return;
}

console.log(sayHello());
let tmp: void;

// アロー関数の使い方
const anotherAdd: (n1: number, n2: number) => number = function(num1: number, num2: number){
  return num1 + num2;
};
const doubleNumber: (num: number) => number = num => num * 2;


// callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum;
});

