// eslint 配置说明 https://cn.eslint.org/docs/user-guide/configuring
// https://github.com/prettier/eslint-config-prettier/issues/148
module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
      classes: true,
      jsx: true,
    },
  },
  rules: {
    "react/prop-types": 0,
    "react/no-array-index-key": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "import/no-named-as-default": 0,
    "react/jsx-closing-tag-location": 0,
    "no-shadow": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/prefer-stateless-function": 0,
    "guard-for-in": 0,
    camelcase: 0,
    "react/sort-comp": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/state-in-constructor": 0,
    "react/no-danger": 0,
    "react/no-unused-state": 0,
    "react/no-access-state-in-setstate": 0,
    "no-nested-ternary": 0,
    "no-empty": 0,
    "import/order": 0,
    "no-case-declarations": 0,
    "react/default-props-match-prop-types": 0,
    "prefer-destructuring": 0,
    "react/jsx-no-bind": 0,
    "no-unused-expressions": 0,
    "react/no-unused-prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "react/static-property-placement": 0,
    "consistent-return": 0,
    "prettier/prettier": ["error"], // 当代码出现 Prettier 校验出的格式化问题，ESLint 会报错
    /**
     * 关闭规则：'off' 或者 0
     * 开启规则启用警告级别的错误：'warn' 或者 1
     * 开启规则启用错误级别的错误：'error' 或者 2
     */
    /** js */
    // 忽略 require('@/assets/tour-guide/hand-icon.png')错误
    // 'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$', '.jpeg', '.gif'] }],
    semi: [
      2,
      "never",
      {
        beforeStatementContinuationChars: "always",
      },
    ], // 不允许分号
    eqeqeq: ["error", "always", { null: "ignore" }], // 全等
    "no-console": 0, // 可以使用 console
    "no-use-before-define": 0,
    "no-unused-vars": [
      0,
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none",
      },
    ],
    "no-restricted-syntax": 0, // 禁止使用特定的语法(可自定义想禁止的语法例如 try catch，in 操作符)
    "no-restricted-properties": [
      2,
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated", // 禁止访问 arguments.callee
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead", // 禁止访问数字本身的 isNaN 方法
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead", // 禁止访问 window.isNaN
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
    ], // 禁止谋陷属性
    "no-plusplus": 0, // 关闭禁止使用 ++ -- 规则
    "class-methods-use-this": 0, // 关闭 class 中必须使用 this 的规则
    "max-len": [
      2,
      {
        code: 120, // 一行代码不能超过 120 个字符
        ignoreUrls: true, // 忽略 url
      },
    ], // 单行最大长度
  },
  globals: {
    // 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告，因此需要在此定义全局变量
    window: false, // 将变量设置为 true 将允许变量被重写，或 false 将不允许被重写
  },
};
