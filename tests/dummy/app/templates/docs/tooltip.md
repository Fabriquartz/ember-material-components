# Material Tooltip

The tooltip is a short text that appears when the user hovers their cursor over 
the element to which the tooltip is attached.

## Notes

The Material Tooltip consists of two elements: a wrapper div containing a button:

- The css classes passed with `@class` and the splattributes are appended
to the tooltip.
- The tooltip is (and should be) rendered in the root element ```#ember-material-components-wormhole```
- A temporary element (```tether-for-[guid]```) is created to determine which 
element to hang the tooltip on. This will be removed after rendering the tooltip.

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-tooltip-0.hbs">
    <MaterialIconButton>
      star
      <MaterialTooltip>
        Star!
      </MaterialTooltip>
    </MaterialIconButton>
    <MaterialIconButton>
      favorite
      <MaterialTooltip>
        Favorite!
      </MaterialTooltip>
    </MaterialIconButton>
  </demo.example>
  <demo.snippet @name="demo-material-tooltip-0.hbs" />
</DocsDemo>

## Examples

<DocsDemo as |demo|>
  <demo.example @name="demo-material-tooltip-1.hbs">
    <MaterialButton>
      Button with tooltip
      <MaterialTooltip>
        Tooltip for the button
      </MaterialTooltip>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-tooltip-1.hbs" />
</DocsDemo>