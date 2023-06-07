# Material Drawer

The Material Drawer is a sidebar that usually contains a navigation. A default
or dismissable drawer is next to the content, a modal floats above the content.
The default modal is permanently open.

## Notes

- There are two or three root elements: drawer, scrim (modal drawer), and content.
The Splattributes and ```@class``` are appended to the drawer.

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-drawer-0">
    <iFrame src={{this.demoURL}} width="100%" height="400px"></iFrame>
  </demo.example>
  <demo.snippet @name="demo-material-drawer-0.hbs" />
  <demo.snippet @name="demo-material-drawer-0.js" />
</DocsDemo>
