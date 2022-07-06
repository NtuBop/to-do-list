

exports.getDate = getDate;

function getDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};


//more efficient way of doing same as above
exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: "long"
  };

return today.toLocaleDateString("en-US", options);

};
