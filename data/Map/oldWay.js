const handleObject = () => {
  const collection = [
    { name: "paul", 견종: "요크셔", 나이: 1 },
    { name: "terry", 견종: "요크셔", 나이: 9 },
    { name: "charm", 견종: "요크셔", 나이: 4 },
    { name: "edge", 견종: "요크셔", 나이: 2 },
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
  addFilter("나이", 2);
  addFilter("견종", "핏불");
  delFilter("견종");
  // console.log('filters 확인 --------->',filters)
  // ------------------------------------------------------------
};

module.exports = { handleObject };
