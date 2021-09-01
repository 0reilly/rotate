const {rotate}  = require("./rotate");

test('rotates 2x2 array', () => {
    var arr = [1, 2, 3, 4];
    var newArr = new Array(arr.length);
    rotate(arr,newArr);

    expect(newArr).toEqual([3,1,4,2]);
  });

test('rotates 3x3 array', () => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var newArr = new Array(arr.length);
  rotate(arr,newArr);
  expect(newArr).toEqual([4,1,2,7,5,3,8,9,6]);
});

test('rotates 4x4 array', () => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  var newArr = new Array(arr.length);
  rotate(arr,newArr);

  expect(newArr).toEqual([5,1,2,3,9,10,6,4,13,11,7,8,14,15,16,12]);
});

test('rotates 5x5 array', () => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  var newArr = new Array(arr.length);
  rotate(arr,newArr);

  expect(newArr).toEqual([6,1,2,3,4,11,12,7,8,5,16,17,13,9,10,21,18,19,14,15,22,23,24,25,20]);
});

test('rotates 6x6 array', () => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  var newArr = new Array(arr.length);
  rotate(arr,newArr);

  expect(newArr).toEqual([7,1,2,3,4,5,13,14,8,9,10,6,19,20,21,15,11,12,25,26,22,16,17,18,31,27,28,29,23,24,32,33,34,35,36,30]);
});

test('invalid array returns empty', () => {
  var arr = [1, 2];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

test('invalid array returns empty', () => {
  var arr = [2, 2, 2, 2, 2, 2, 2];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

test('array with all the same numbers doesnt change', () => {
  var arr = [2, 2, 2, 2];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([2, 2, 2, 2]);
});

test('empty array doesnt change', () => {
  var arr = [];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

test('first example from challenge', () => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([4,1,2,7,5,3,8,9,6]);
});

test('second example from challenge', () => {
  var arr = [40, 20, 90, 10];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([90,40,10,20]);
});
test('third example from challenge', () => {
  var arr = [-5];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([-5]);
});

test('fourth example from challenge', () => {
  var arr = [2, -0];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

test('fifth example from challenge', () => {
  var arr = [2, -5, -5];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

test('sixth example from challenge', () => {
  var arr = [1, 1, 1, 1, 1];
  var newArr = [];
  rotate(arr,newArr);
  expect(newArr).toEqual([]);
});

