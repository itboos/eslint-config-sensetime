# eslint-config-sensetime

> Sensetime DCP shared config for eslint.

## Installation

```console
npm install eslint-config-sensetime --save-dev
npm install-peerdeps --dev eslint-config-sensetime
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "eslint-config-sensetime"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs:

```json
{
  "extends": "eslint-config-sensetime",
  "rules": {
    "semi": "off"
  }
}
```

## [License](LICENSE)
