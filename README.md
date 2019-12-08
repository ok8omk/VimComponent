# Vinput

Vi like `<input>` React Component.

## Try it

[:octocat: Github pages](https://ok8omk.github.io/Vinput)

## Component Interface

```js
/**
 * [Vinput]
 * @param  {string} [name]                         Input name props.
 * @param  {number} [width=500]                    Component width.
 * @param  {number} [fontSize=24]                  Component font size.
 * @param  {string} [fontFamilies=["Inconsolata"]] Component font families. monospace fonts are recommended.
 */
```

## Font configuration

By default, this component uses Inconsolata font.
Therefore append this link tag in head tag.

```html
<link
  href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
  rel="stylesheet"
/>
```

If you wanna use another font, inject the font reference.
Also you have to assign correspond font for Vinput arguments.

## Usage Example

```tsx
<Vinput
  name="email"
  width={1024}
  fontSize={18}
  fontFamilies={["Noto", "Inconsolata"]}
/>
```
