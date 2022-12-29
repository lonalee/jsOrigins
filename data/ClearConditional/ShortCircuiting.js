// 사용자가 지정한 배열이 없음
const userConfig1 = {};
// 1.빈 객체에서 images 배열의 특정 요소를 참조한다.
// 2.const image = userConfig1.images[0] || 'default.png'
// 3.결과--> Property 'images' does not exist on type '{}', 의도는 사용자 지정값이 없으면 기본값을 할당하는 것이었다. 하지만 이것은 타입오류를 발생 시킨다.

// 내용이 없는 배열
const userConfig2 = {
  images: [],
};

// 내용이 있는 배열
const userConfig3 = {
  images: ['me.png', 'you.png'],
};

//
// 3.해결을 위해 조건식으로 처리하는 함수를 정의한다.
const getFirstImage = (userConfig) => {
  try {
    let img = 'default.png';
    // if (userConfig.images) {
    img = userConfig.images[0] || img;
    // }
    return img;
  } catch (error) {
    console.log(error);
  }
};

const image = getFirstImage(userConfig2);

module.exports = { getFirstImage };
