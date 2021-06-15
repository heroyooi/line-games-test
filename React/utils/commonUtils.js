const utils = {};

utils.checkedBrTag = (item) => {
  const comment = item.replace(/\n/gi, "<br/>");
  return comment;
};

export default utils;
