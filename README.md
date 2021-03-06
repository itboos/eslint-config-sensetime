# eslint-config-sensetime

> Sensetime DCP shared config for eslint.

## Installation

1.Install the correct versions of each package, which are listed by the command:

```console

npm info "eslint-config-sensetime@latest" peerDependencies
```

If using npm 5+, use this shortcut

```console

npx install-peerdeps --dev eslint-config-sensetime
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
