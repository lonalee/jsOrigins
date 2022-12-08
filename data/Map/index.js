// Copyright 2013-2022 AFI, Inc. All Rights Reserved.

/**
 * @desc 배열로부터 원하는 값을 필터링 하고자 함
 * 기존의 방식
 * 1. 사용자가 필터링하려는 값을 객체에 주입
 * 2. 기준 객체로 배열을 필터링 (find/filter 메소드 사용)
 * cons : filters 객체를 다루기
 */

const collection = [
  { name: 'paul', 견종: '요크셔', 나이: 1 },
  { name: 'terry', 견종: '요크셔', 나이: 9 },
  { name: 'charm', 견종: '요크셔', 나이: 4 },
  { name: 'edge', 견종: '요크셔', 나이: 2 },
];

let filters = {};

// --- cons ---
const addFilter = (key, value) => {
  filters[key] = value;
};
const delFilter = (key) => {
  delete filters[key];
};
const clearAllFilters = (key, value) => {
  filters = {};
};
// --- cons ---
addFilter('나이', 2);
addFilter('견종', '핏불');
delFilter('견종');
console.log('filters 확인 --------->',filters)
// ------------------------------------------------------------

const collection2 = [{ data: '1' }, { data: '2' }, 3];

const sth = collection2.entries();
// console.log(sth);

// let filters2 = new Map(sth)
const someObj = {
  name: 'edge',
  견종: '요크셔',
  나이: 10,
};
let filters2 = new Map([
  [1, someObj],
  [2, { ...someObj, 나이: 11 }],
]);

console.log('필터2-->', filters2);
const filters2keys = filters2.keys();
console.log('필터2 키값만 이터레이터-->', filters2keys)
