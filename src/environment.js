/**
 * @Author Ken
 * @CreateDate 2019-06-14 12:48
 * @LastUpdateDate 2019-06-14 12:48
 * @desc 记录上下文的变量信息
 * @params
 * @return
 */
class Environment {
  constructor(parentEnv) {
    this._proto = parentEnv;
    this.map = {};
  }
  get(name) {
    let value = this.map[name];
    if (value === undefined) {
      value = this._proto.get(name);
    }
    return value;
  }
  set(name, value) {
    this.map[name] = value;
  }
}

module.exports = new Environment();
