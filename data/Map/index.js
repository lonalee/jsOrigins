// Copyright 2013-2022 AFI, Inc. All Rights Reserved.

/**
 * @desc 배열로부터 원하는 값을 필터링 하고자 함
 * 기존의 방식
 * 1. 사용자가 필터링하려는 값을 객체에 주입
 * 2. 기준 객체로 배열을 필터링 (find/filter 메소드 사용)
 * cons : filters 객체(순수한 오브젝트)를 다루기
 */

const handleMap = () => {
  // 필터를 생성하는 함수 작성해보기
  
  const makeMapFilters2 = (keys, values) => {
    let filters2 = new Map([]);
    keys.forEach((key, i) => {
      filters2.set(key, values[i]);
    });
    return filters2;
  };

  // 파라미터(키/밸류 페어)들을 배열로 전달하기
  // 더 좋은 방법이 있을지 모른다.
  const mapFilter = makeMapFilters2(
    ['색상', '견종', '나이'],
    ['옐로', '리트리버', 9]
  );

  // mapFilter.keys()
  // mapFilter.entries() // 키/밸류 쌍을 하나의 배열에 각각 담아 맵 엔트리 형태로 리턴한다.
  //맵 엔트리(이터레이터?)는 또 뭔가?

  const spread = [...mapFilter];
  /**
   * mapFilter =>
   * {
   *    "색상": "옐로",
   *    "견종": "리트리버",
   *    "나이": 9,
   * }
   * --> 이 map 객체를 스프레드 연산 후 배열에 담으면 sort 사용 가능
   */

  const spreadMapFilter = [...mapFilter];

  for (const [key, value] of spreadMapFilter.sort()) {
    // console.log("chk key,value -->", key, value);
    // 그냥 배열로 만들어서 작업하자
  }

  const arr = spreadMapFilter.sort().map((iter) => {
    // console.log(iter);
    return [key,value] = iter
  });

  console.log('final arr', new Map(arr)) // just in case you like to convert it into the Map Obj.

};

module.exports = { handleMap };
