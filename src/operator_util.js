const operators = [
  {name: '=',  priority: 3},
  {name: '==', priority: 2},
  {name: '>',  priority: 2},
  {name: '<',  priority: 2},
  {name: '+',  priority: 1},
  {name: '-',  priority: 1},
  {name: '*',  priority: 2},
  {name: '/',  priority: 2},
  {name: '%',  priority: 2},
];

const table = {};
const keys = [];
operators.forEach(o => {
  table[o.name] = o.priority;
  keys.push(o.name);
});

/**
 * @Author Ken
 * @CreateDate 2019-06-17 14:58
 * @LastUpdateDate 2019-06-17 14:58
 * @desc '+-' < '/*%<>=='
 *  '+', '*' => -1
 *  '/', '-' => 1
 *  '*', '/' => 0
 * @params
 * @return
 */
function comparePriority(operator1, operator2) {
  if (!keys.includes(operator1) || !keys.includes(operator2)) {
    throw new Error(`OperatorUtil -> comparePriority Error, operator1=${operator1}, operator2=${operator2}`);
  }
  return table[operator1] - table[operator2];
}

module.exports = {operators, keys, comparePriority};
