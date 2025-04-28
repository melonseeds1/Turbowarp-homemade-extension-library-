(function (Scratch) {
  'use strict';

  const digitMap = {
    '0': '零', '1': '一', '2': '二', '3': '三', '4': '四',
    '5': '五', '6': '六', '7': '七', '8': '八', '9': '九'
  };

  const reverseDigitMap = {
    '零': '0', '一': '1', '二': '2', '三': '3', '四': '4',
    '五': '5', '六': '6', '七': '7', '八': '8', '九': '9'
  };

  class ChineseNumberConverter {
    getInfo() {
      return {
        id: 'chineseNumber',
        name: '数字大小写转换',
        // 新增颜色设置 ▼▼▼
        color: '#F1AD17',  // 蜂蜜橙色
        // 新增颜色设置 ▲▲▲
        blocks: [
          {
            opcode: 'numberToChinese',
            blockType: Scratch.BlockType.REPORTER,
            text: '数字转中文 [NUM]',
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '123'
              }
            }
          },
          {
            opcode: 'chineseToNumber',
            blockType: Scratch.BlockType.REPORTER,
            text: '中文转数字 [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '一二三'
              }
            }
          }
        ]
      };
    }

    numberToChinese(args) {
      const input = Scratch.Cast.toString(args.NUM);
      return this._convert(input, digitMap);
    }

    chineseToNumber(args) {
      const input = Scratch.Cast.toString(args.TEXT);
      return this._convert(input, reverseDigitMap);
    }

    _convert(input, mapping) {
      let result = '';
      for (const char of input) {
        result += mapping[char] || char;
      }
      return result;
    }
  }

  Scratch.extensions.register(new ChineseNumberConverter());
})(Scratch);
