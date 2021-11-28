/* 实现一个字符串匹配算法从字符串S中查找是否存在字符串T若存在返回所在位置
不存在返回-1（不能基于indexOf/includes） */

~(function (params) {
  /* 循环原始字符串中的每一项，让每一项从当前位置向后截取
  T.length个字符串，然后和T进行比较如果不一样继续循环
  ，如果一样返回当前索引 */

  //   function myIndexOf(T) {
  //     //   this=>S
  //     let lenT = T.length,
  //       lenS = this.length,
  //       res = -1;
  //     if (lenT > lenS) return -1;
  //     for (let i = 0; i <= lenS - lenT; i++) {
  //       let char = this[i];
  //       res = this.substr(i, lenT) === T ? i : -1;
  //       if (res !== -1) break;
  //     }
  //     return res;
  //   }
  function myIndexOf(T) {
    //  this=>S
    let reg = new RegExp(T),
      res = reg.exec(this);
    return res === null ? -1 : res.index;
  }
  String.prototype.myIndexOf = myIndexOf;
})();

let S = "zhufengpeixun",
  T = "pei";
console.log(S.myIndexOf(T));
