// stylelint rules : https://stylelint.io/user-guide/rules
// stylelint-config-standard: https://stylelint.io/user-guide/rules/list#stylistic-issues
// stylelint 不识别 scss 语法解决方案： https://github.com/stylelint/stylelint/issues/3190

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // 允许 ignoreTypes 里下面这些独有的标签作为 css 选择器
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['page'],
      },
    ],
    // fix stylelint 不识别 scss 语法
    'at-rule-no-unknown': null,
    // fix stylelint 不识别 scss 语法
    'scss/at-rule-no-unknown': true,
    // 忽略 rpx 的校验
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    // 关闭声明块的冒号之后必须有换行符或不能有空白符
    'declaration-colon-newline-after': null,
    // 关闭逗号后需要新起一行
    'value-list-comma-newline-after': null,
    // 要求或禁止小于 1 的小数的前导 0
    'number-leading-zero': 'always',
    // 在值列表的逗号之后要求有一个空格
    'value-list-comma-space-after': 'always',
    /** 对空行的处理 */
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration'],
      },
    ],
    // 关键词大小写
    'value-keyword-case': null,
    // 代码块之间需要换行
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
    // 每行句末不允许有多余空格
    'no-eol-whitespace': true,
    // 大小写处理
    'unit-case': 'lower',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    // 最多一行空行
    'max-empty-lines': 1,
    // "{" 前必须有空格
    'block-opening-brace-space-before': 'always',
    // 属性名 : 前后是否要有空格
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    // 声明属性末尾 ";" 前不能有空格
    'declaration-block-semicolon-space-before': 'never',
    // 选择器例如 ">、+、~" 前后必须要有空格
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    // 注释相关
    'comment-no-empty': true,
    'no-empty-source': true,
    'no-descending-specificity': null,
    // plugins: stylelint-order
    /**
     * property list: https://www.tutorialrepublic.com/css-reference/css3-properties.php
     */
    'order/properties-order': [
      [
        {
          groupName: 'Positioning',
          emptyLineBefore: 'always',
          order: 'flexible',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        },
        {
          groupName: 'Display & Box Model',
          emptyLineBefore: 'always',
          order: 'flexible',
          properties: [
            'box-sizing',
            'display',
            'overflow',
            'float',
            'visibility',
            'flex',
            'flex-direction',
            'flex-shrink',
            'align-items',
            'justify-content',
            'align-self',
            'flex-wrap',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'border',
            'border-radius',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          groupName: 'Font',
          emptyLineBefore: 'always',
          order: 'flexible',
          properties: [
            'font-family',
            'font-size',
            'color',
            'font-style',
            'font-weight',
            'text-align',
            'text-justify',
            'text-overflow',
            'line-height',
            'letter-spacing',
            'white-space',
            'word-break',
            'word-wrap',
            'white-space',
          ],
        },
        {
          groupName: 'Color',
          emptyLineBefore: 'always',
          order: 'flexible',
          properties: [
            'box-shadow',
            'background',
            'background-color',
            'background-size',
            'background-origin',
            'background-repeat',
            'background-position',
            'background-image',
            'opacity',
            'transform',
            'translation',
            'animation',
          ],
        },
        {
          groupName: 'Others',
          emptyLineBefore: 'always',
          order: 'flexible',
          properties: ['cursor'],
        },
      ],
    ],
  },
}
