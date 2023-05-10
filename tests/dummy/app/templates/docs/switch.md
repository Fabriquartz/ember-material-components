# Material Radio Button

Material Radio Button wraps a `label` and a `button` into a form field.
The `MaterialRadioButton::Inner` wraps an input[type=checkbox] in a div.

## Notes

- The 'splattributes' are attached to input[type=radio].
- Attach CSS to the form field wrapper div using @class
- It is not possible to pass CSS to the wrapper div of input[type=radio]

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-switch-0.hbs">
    <ul>
      <li>
        <MaterialSwitch
          @checked={{this.switch1}}
          @onChange={{fn (mut this.switch1)}}
        >
          Switch 1
        </MaterialSwitch>
      </li>
      <li>
        <MaterialSwitch
          disabled={{this.switch2}}
          @checked={{this.switch2}}
          @onChange={{fn (mut this.switch2)}}
        >
          Switch 2
        </MaterialSwitch>
      </li>
      <li>
        <MaterialSwitch
          disabled={{not this.switch1}}
          @checked={{this.switch3}}
          @onChange={{fn (mut this.switch3)}}
        >
          Switch 3
        </MaterialSwitch>
      </li>
    </ul>
  </demo.example>
  <demo.snippet @name="demo-material-switch-0.hbs" />
</DocsDemo>

## Examples

### Default
<DocsDemo as |demo|>
  <demo.example @name="demo-material-switch-1.hbs">
    <MaterialSwitch>
      Sample
    </MaterialSwitch>
  </demo.example>
  <demo.snippet @name="demo-material-switch-1.hbs" />
</DocsDemo>

### Checked
<DocsDemo as |demo|>
  <demo.example @name="demo-material-switch-2.hbs">
    <MaterialSwitch @checked={{true}}>
      Sample
    </MaterialSwitch>
  </demo.example>
  <demo.snippet @name="demo-material-switch-2.hbs" />
</DocsDemo>

### Default disabled
<DocsDemo as |demo|>
  <demo.example @name="demo-material-switch-3.hbs">
    <MaterialSwitch disabled=true>
      Sample
    </MaterialSwitch>
  </demo.example>
  <demo.snippet @name="demo-material-switch-3.hbs" />
</DocsDemo>

### Checked disabled
<DocsDemo as |demo|>
  <demo.example @name="demo-material-switch-3.hbs">
    <MaterialSwitch @checked={{true}} disabled=true>
      Sample
    </MaterialSwitch>
  </demo.example>
  <demo.snippet @name="demo-material-switch-3.hbs" />
</DocsDemo>