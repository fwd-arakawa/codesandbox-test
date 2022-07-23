// 三項演算子 条件　? true処理 : false処理 ;  １行で書けるし便利だよね

// const num = 13000000;
// // int型の値に対して金額表示(３桁区切り)する
// console.log(num.toLocaleString());

// // 変数の型を判別し、文字列で返す
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// 関数の戻り値にも三項演算子使えるよ
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100肥えてます。" : "許容範囲内です";
};
console.log(checkSum(200, 30));

/**
 * 論理演算子の本当の意味を知ろう $$ ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log('１か２はtrueになります');
// }
// if(flag1 && flag2){
//   console.log('１も２もtrueになります');
// }

// || は左側がfalseなら、右側を返す　つまり左側がtrueなら右を一切参照しない
const num = null;
const fee = num || "金額が未設定です";
console.log(fee);
// 左側がtrueなら右側を返す、　つまり　左側がfalseなら右を一切参照しない
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

// 以上のことから、&& || は段階を踏んで戻り値を返していることがわかった。
