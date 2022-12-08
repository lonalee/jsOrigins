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
// console.log('filters 확인 --------->',filters)
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
// 필터를 생성한다
const makeMapFilters = (key, value) => {
  let filters2 = new Map([
    [key,value]
    // [key2,value2] 
    // [key3,value3] ...
  ])
  return filters2
}
const makeMapFilters2 = (keys, values) => {
  let filters2 = new Map([])
  keys.forEach((key,i) => {
    filters2.set(key, values[i])
  })

  return filters2
}

// 파라미터들을 배열로 전달하기
const mapFilter = makeMapFilters2(['견종','나이'], ['리트리버',9])
// const mapFilter2 = makeMapFilters2({
//   '견종':'요크셔', '나이':8
// })

console.log('필터2-->', mapFilter);


console.log('필터2-->', mapFilter.keys());

// let filters2 = new Map([
//   [1, someObj],
//   [2, { ...someObj, 나이: 11 }],
// ]);

// console.log('필터2-->', filters2);
// const filters2keys = filters2.keys();
// console.log('필터2 키값만 이터레이터-->', filters2keys)
