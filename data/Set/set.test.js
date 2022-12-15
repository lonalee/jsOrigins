/**
 * @description Set를 이용해서 유일한 항목을 분류/관리하는 방법을 공부한다.
 * 세트는 한 가지 기능을 잘 수행하는 단순한 컬렉션이다. 고유 항목을 하나씩만 갖는 특화된 배열과 같다.
 */
const dogs = [
  {
    이름: "맥스",
    크기: "소형견",
    견종: "보스턴테리어",
    색상: "검정색",
  },
  {
    이름: "도니",
    크기: "대형견",
    견종: "리트리버",
    색상: "검정색",
  },
  {
    이름: "섀도",
    크기: "중형견",
    견종: "리트리버",
    색상: "갈색",
  },
];
test("using Set object", () => {
  return;
  const dogs = [
    {
      이름: "맥스",
      크기: "소형견",
      견종: "보스턴테리어",
      색상: "검정색",
    },
    {
      이름: "도니",
      크기: "대형견",
      견종: "리트리버",
      색상: "검정색",
    },
    {
      이름: "섀도",
      크기: "중형견",
      견종: "리트리버",
      색상: "갈색",
    },
  ];

  /**
   *
   * @param {*} dogs
   * @returns 색상 값만을 추출해서 배열로 만들 수는 있다. 중복된 색상이 없고 고윳값만 있는 배열로 바꾸는 것이 목표.
   */
  function getColors(dogs) {
    return dogs.map((dog) => dog["색상"]);
  }
  const attributes = getColors(dogs);
  console.log("attributes: ", attributes);

  /**
   *
   * @param {*} attributes 중복되는 속성도 포함되어 있는 배열
   * @returns 유일한 값만 모은 새로운 배열을 만든다. (방법1)
   */
  function getUnique(attributes) {
    const unique = [];
    for (const attribute of attributes) {
      if (!unique.includes(attribute)) {
        unique.push(attribute);
      }
    }
    return unique;
  }

  const unique = getUnique(attributes);
  console.log("unique :", unique);

  /**
   * best way to get unique value
   * 새로 생성되는 객체의 값은 각 색상을 하나씩만 포함하는 세트. 이제 고유한 색상만 담긴 배열이 필요하다.
   */
  const unique2 = new Set(attributes);
  const unique3 = [...new Set(attributes)];
  console.log("unique2: ", unique2);
  console.log("동일한 결과, [] ---> ", [...unique2]);
  console.log("even simpler, [] ---> ", unique3);
});

test("하나의 반복문을 이용해서 세트에 개별적으로 값을 추가", () => {
  let colors = new Set();

  for (const dog of dogs) {
    colors.add(dog["색상"]);
  }
  console.log("dog-->", colors);
  console.log("dog-->", [...colors]);
});

test("더 간단하게...?", () => {
  const res = [
    ...dogs.reduce((colors, { 색상 }) => {
      console.log("세트로 생성한 초기값 :", colors);
      console.log("dogs를 순회하며 색상 키를 추출 :", 색상);
      colors.add(색상);
      return colors;
    }, new Set()),
  ];

  console.log("res를 살펴보자 !", res);
});
