// var classes= ["部長","課長","主任","担当"];
//
// var members = [
//   {name: '鈴原トウジ', clazz:'主任'},
//   {name: '山本美香', clazz:'部長'},
//   {name: '影山頼', clazz:'担当'},
//   {name: '遠藤雅', clazz:'課長'},
//   {name: '久我山信彦', clazz:'担当課長'},
// ];
//
// console.log(members.sort(function(x,y){
//   return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
// }))


//Map
let m = new Map();
m.set('dog','ワンワン');
m.set('cat','ニャー');
m.set('mouse','チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

//キーを順に取得
for (let key of m.keys()) {
  console.log(key);
}

for (let value of m.values()) {
  console.log(value);
}

for (let [key,value] of m) {
  console.log(value);
}

m.delete('dog');
console.log(m.size);

//すべてのキーを削除
m.clear();
console.log(m.size);
