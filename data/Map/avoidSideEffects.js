const main = () => {
  console.log("### main ###");
  const defaults = new Map()
    .set("색상", "갈색")
    .set("견종", "비글")
    .set("지역", "캔자스");
  const filters = new Map().set("색상", "은회색").set("견종", "리트리버");
  /**
   * 필터링 조건을 포함하는 새 컬렉션을 만들어야 한다면?
   * 그리고 그 컬렉션은 기본값과 사용자 선택 값을 포함하고 있어야 함
   * */

  //   const res = applyDefaults(filters, defaults);
  //   console.log("res=copy : ", res);

  memo(filters, defaults);
};

/**
 * @description 기본값에 사용자 선택값을 더하기 위한 함수
 */
const applyDefaults = (map, defaults) => {
  // ver 1 goes
  //   for (const [key, value] of defaults) {
  //     if (!map.has(key)) {
  //       map.set(key, value);
  //     }
  //   }
  //   return map;

  // ver 2 goes
  const copy = new Map(map);
  //   const copy2 = new Map([...map]); // 위 코드와 차이 없음
  for (const [key, value] of defaults) {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  }
  return copy;
};

/**
 * @description 키의 유일성을 이용해서 기본값과 사용자 선택값을 병합
 */
const memo = (map, defaults) => {
  const merged = new Map([...defaults, ...map]);
  console.log("merged -->", merged);
};

module.exports = { main };
