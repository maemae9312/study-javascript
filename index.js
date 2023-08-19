// 変数
// let word = 'hello cat!!';
// 変数の上書き
// word = 'cat is god';
// 出力
// console.log(word);

// 定数
// 定数は上書きができない
// const animal　= 'cheetah';
// console.log(animal);

// 配列
// const bugs = ['ant','butterfly','cricket'];
// console.log(bugs);
// 任意のものを出力
// console.log(bugs[0]);

// ループ文
// let index = 0;
// // indexの値は5よりも低かったら命令を繰り返す
// while(index < 5){
//     //繰り返したい命令
//     console.log(index);
//     index++;
// }

// 配列と組み合わせる
// const bugs = ['ant','butterfly','cricket','mantis','grasshopper'];

// let index = 0;

// while(index < bugs.length){ // bugsの値の数だけ繰り返される
//     console.log(bugs[index]);
//     index++;
// }

// if / else
// const bugs = ['ant','butterfly','cricket','mantis','grasshopper'];
// if(bugs.length > 4){
//     console.log('Its full of bugs!');
// } else {
//     console.log('less insects...');
// }

// 関数
// ①同じ命令をなん度も使いたい時 ②任意のタイミングで命令を実行したい時に使用する
// const bugs = ['ant','butterfly','cricket','mantis','grasshopper'];
// const test = () => {
//     // ここに実行したい命令を書く
//     if(bugs.length > 4){
//             console.log('Its full of bugs!');
//         } else {
//             console.log('less insects...');
//         } 
// };
// 実行される
// test();

// 引数
// const bugs = ['ant','butterfly','cricket','mantis','grasshopper'];
// const test = (arg) => {
//     // ここに実行したい命令を書く
//     if(bugs.length > arg){
//             console.log('Its full of bugs!');
//         } else {
//             console.log('less insects...');
//         } 
// };
// // 実行される
// test(5);

// オブジェクト
// const hikakin = {
//     color: 'pink',
//     pet: 'maruo,mofuko',
//     address: 'tokyo',
//     greeting: () => {
//         console.log('bunbun,Hello,YouTube!!');
//     }
// };
// // console.log(hikakin);
// // console.log(hikakin.pet);
// console.log(hikakin.greeting());

// // 特殊なオブジェクト
// console.log(window);
// // windowの高さを知りたい時
// console.log(window.innerHeight);
// // windowの横幅
// console.log(window.innerWidth);
// // ポップアップ
// window.alert('Hello!!');

// console.log(document);
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByTagName('button')[0]);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    // 命令を書く
    window.alert('correct!!');
});