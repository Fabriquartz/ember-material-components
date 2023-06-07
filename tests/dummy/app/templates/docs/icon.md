# Icon

Use this as a block element to display an icon from the material icon set.
See [Google Fonts](https://fonts.google.com/icons) for a list of available icons

## Notes

- The css classes passed with `@class` and the splattributes are appended
to the icon, which is the root element.
- Make sure to import the font into your CSS or by adding the following line to the index.html.

<DocsSnippet @name="demo-material-icon-0.html">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
</DocsSnippet>

## Demo
<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-1.hbs">
    <MaterialIcon>favorite</MaterialIcon>
  </demo.example>
  <demo.snippet @name="demo-material-icon-1.hbs" />
</DocsDemo>