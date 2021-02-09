const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList1(a, b) {
  const finalList = [];
  for (let i = 0; i < a.length; i++) {
    finalList.push(a[i], b[i]);
  }
  return finalList;
}
function zipList2(a, b) {
  const a2 = _.flatten(_.zip(a, b));
  return a2;
}
console.log(zipList1(list1, list2));
console.log(zipList2(list1, list2));
