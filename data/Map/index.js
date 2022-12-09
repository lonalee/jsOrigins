// Copyright 2013-2022 AFI, Inc. All Rights Reserved.

/**
 * @desc 배열로부터 원하는 값을 필터링 하고자 함
 * 기존의 방식
 * 1. 사용자가 필터링하려는 값을 객체에 주입
 * 2. 기준 객체로 배열을 필터링 (find/filter 메소드 사용)
 * cons : filters 객체(순수한 오브젝트)를 다루기
 */
const handleObject = () => {
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
};

const handleMap = () => {
  // 필터를 생성하는 함수 작성해보기
  const makeMapFilters = (key, value) => {
    let filters2 = new Map([
      [key, value],
      // [key2,value2]
      // [key3,value3] ...
    ]);
    return filters2;
  };
  const makeMapFilters2 = (keys, values) => {
    let filters2 = new Map([]);
    keys.forEach((key, i) => {
      filters2.set(key, values[i]);
    });
    return filters2;
  };

  // 파라미터(키/밸류 페어)들을 배열로 전달하기
  const mapFilter = makeMapFilters2(
    ['색상', '견종', '나이'],
    ['옐로', '리트리버', 9]
  );
  // const mapFilter2 = makeMapFilters2({
  //   '견종':'요크셔', '나이':8
  // })

  // for (const iterator of mapFilter) {
  // console.log('chk iterator -->', iterator);
  // }

  // forin은 동작 안함
  for (const key in mapFilter) {
    console.log('&&&&&&&&&&&&&&&&&&');
  }

  // mapFilter.keys()
  // mapFilter.entries() // 키/밸류 쌍을 하나의 배열에 각각 담아 맵 엔트리 형태로 리턴한다.
  //맵 엔트리(이터레이터?)는 또 뭔가?

  const spread = [...mapFilter];
  console.log('spread syntax', spread);
  console.log('spread syntax', spread.sort()); // 정렬 가능!!
  console.log('spread syntax', spread[1]);
  console.log('원본 비교 ', mapFilter);
};

module.exports = { handleMap };
