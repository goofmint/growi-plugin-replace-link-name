# GROIW Plugin replaces link name with the page title

This is a GROWI plugin that replaces the link name with the page title.

## Usage

### Download or folk this repository.

```bash
git clone git@github.com:goofmint/growi-plugin-replace-link-name.git
```

### Add page link in GROWI

```markdown
https://dev.growi.org/66b9bf791b0c850141d5876b
```

It will be replaced with the page title.

```html
<a href="https://dev.growi.org/66b9bf791b0c850141d5876b">GROWI</a>
```

This is plugin supports inline link.

```markdown
This is https://dev.growi.org/66b9bf791b0c850141d5876b .
↓
This is <a href="https://dev.growi.org/66b9bf791b0c850141d5876b">GROWI</a> .
```

If you want to use the original link name, you can use the link syntax.

```markdown
[Original link name](https://dev.growi.org/66b9bf791b0c850141d5876b)
↓
<a href="https://dev.growi.org/66b9bf791b0c850141d5876b">Original link name</a>
```

## License

MIT

