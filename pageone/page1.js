//quiz 1
const score = [1, 2, 3, 4, 5];
const getelement = (n) => {
  //check if array has a value
  if (Array.isArray(n)) {
    console.log("array has values");
    const firstelement = n.shift();
    const lastelement = n.pop();
    console.log(`firstelement:${firstelement},last-element:${lastelement}`);
    if (Number.isInteger(firstelement) && Number.isInteger(firstelement)) {
      console.log("valid value");
    }
  }
};
getelement(score);

//quiz 2
const mutatenum = () => {
  const number = window.prompt();
  const string = number.toString();
  let result = [string[0]];
  for (let x = 1; x < string.length; x++) {
    if (string[x - 1] % 2 === 0 && string[x] % 2 === 0) {
      result.push("*", string[x]);
    } else {
      result.push(string[x]);
    }
  }
  return result.join("");
};
const myreturned = mutatenum();
console.log(myreturned);

//quiz 3
//used the bubble sort algorithm
const sortedValue = function (ary) {
  let dn = false;
  while (!dn) {
    dn = true;
    for (let i = 1; i < ary.length; i += 1) {
      if (ary[i - 1] > ary[i]) {
        dn = false;
        let tmp = ary[i - 1];
        ary[i - 1] = ary[i];
        ary[i] = tmp;
      }
    }
  }

  return ary;
};
let num = [20, 14, 21, 10, 6, 7, 3, -2, -10, 12, 5, 4, 1];
console.log(sortedValue(num));

//quiz 4
const arrmode = [3, 5, 6, 7, "b", "b", "c", 1, 2, 3, "c", "a", 3, "b", "c", 3];
const mostOccurence = function () {
  let item;
  let m = 0;
  let k = 1;
  for (let i = 0; i < arrmode.length; i++) {
    for (let j = i; j < arrmode.length; j++) {
      if (arrmode[i] == arrmode[j]) m++;
      if (k < m) {
        k = m;
        item = arrmode[i];
      }
    }
    m = 0;
  }
  return `most frequent value is:${item} with(${k}) occurence `;
};
console.log(mostOccurence(arrmode));

//quiz 5
let meanscore = [
  [1, 2, 1, 24],
  [5, 7, 1, 3, 9, 2, 13],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
const multDimen = (mscore) => {
  mscore.forEach((item) => {
    console.log(`row ${meanscore.indexOf(item)} -${Object.values(item)}`);
  });
};
multDimen(meanscore);

//quiz 6
function summation(arr1, arr2, arr3) {
  const result = [];
  let ctr = 0;
  let x = 0;

  if (arr1.length === 0) return "array1 is empty";
  if (arr2.length === 0) return "array2 is empty";
  if (arr3.length === 0) return "array2 is empty";
  while (ctr < arr1.length && ctr < arr2.length && ctr < arr3.length) {
    result.push(arr1[ctr] + arr2[ctr] + arr3[ctr]);
    ctr++;
  }

  if (ctr === arr1.length) {
    for (x = ctr; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  } else {
    for (x = ctr; x < arr1.length; x++) {
      result.push(arr1[x]);
    }
  }
  if (ctr === arr2.length) {
    for (x = ctr; x < arr3.length; x++) {
      result.push(arr3[x]);
    }
  } else {
    for (x = ctr; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  }
  return result;
}
console.log([2, 5, 6, 7, 0, 11], [5, 7, 1, 3, 9, 2, 13], [3, 7, 1, 1, 23]);
console.log(
  summation([2, 5, 6, 7, 0, 11], [5, 7, 1, 3, 9, 2, 13], [3, 7, 1, 1, 23])
);

//question 7
const trialone = [10, 20, 30, 40, 50, 60];
const trialtwo = [10, 50, 60, 70, 80, 90];
const myfinalmarks = (tryone, trytwo) => {
  const final = tryone.concat(trytwo);
  const nodpvalues = [...new Set(final)];
  console.log(final, nodpvalues);
};
myfinalmarks(trialone, trialtwo);
