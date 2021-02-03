function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(str = "*") {
  return function inner(adj = "special") {
    return `You are ${str}${adj}${str}!`;
  };
}

let Calculator = {
  add: function () {
    return 1 + 3;
  },
  subtract: function () {
    return 1 - 3;
  },
  multiply: function () {
    return 1 * 3;
  },
  divide: function () {
    return 10 / 5;
  },
};

function actionApplyer(i, arr) {
  if (!arr.length) {
    return i;
  } else {
    arr.forEach(function (func) {
      i = func(i);
    });
    return i;
  }
}
