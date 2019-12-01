# Vinput

Vi like `<input>` Component.

## Example

[:octocat: Github pages](https://ok8omk.github.io/Vinput)

## Component Interface

- [Vinput]
- @param {string} [name] Input name props.
- @param {number} [width=500] Component width.
- @param {number} [fontSize=24] Component font size.
- @param {string} [fontFamilies=["Inconsolata"]] Component font families. monospace fonts are recommended.

## Basic Usage

By default, this component uses Inconsolata font.
Therefore append this link tag in head tag.

```html
<link
  href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
  rel="stylesheet"
/>
```

## Features

### INSERT Mode

|    キー    |      機能       |
| :--------: | :-------------: |
| 普通のキー |      入力       |
|    ESC     | NORMAL モードへ |

### NORMAL Mode

| キー |             機能             |
| :--: | :--------------------------: |
|  h   |             左へ             |
|  l   |             右へ             |
|  \$  |             行末             |
|  0   |             行頭             |
|  i   |       INSERT モードへ        |
|  I   |   行頭から INSERT モードへ   |
|  a   | 次の文字から INSERT モードへ |
|  A   |   行末から INSERT モードへ   |
|  d   |            全消し            |
|  w   |         次の word へ         |
|  W   |         次の WORD へ         |
