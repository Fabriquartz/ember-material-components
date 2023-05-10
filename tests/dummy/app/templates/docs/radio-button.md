# Material Radio Button

Material Radio Button wraps a `label` and a `MaterialRadioButton::Inner` into a form field.
The `MaterialRadioButton::Inner` wraps an input[type=checkbox] in a div.

## Notes

- The 'splattributes' are attached to input[type=radio].
- Attach CSS to the form field wrapper div using @class
- It is not possible to pass CSS to the wrapper div of input[type=radio]

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-0.hbs">
    <b>What color is three?</b>
    <ul>
      <li>
        <MaterialRadioButton
          name='radio-button-group-demo-1'
          checked={{eq this.color2 null}}
          {{on 'change' (fn (mut this.color2) null)}}
        >
          None
        </MaterialRadioButton>
      </li>
      <li>
        <MaterialRadioButton
          name='radio-button-group-demo-1'
          checked={{eq this.color2 '#d32f2f' }}
          {{on 'change' (fn (mut this.color2) '#d32f2f' )}}
        >
          Red
        </MaterialRadioButton>
      </li>
    </ul>
    <b>What's your favorite
      <span style="color: {{this.color1}}">color</span>
    </b>
    <ul>
      <li>
        <MaterialRadioButton
          name='radio-button-group-demo-2'
          checked={{eq this.color1 '#fbc02d' }}
          {{on 'change' (fn (mut this.color1) '#fbc02d' )}}
        >
          Blue!
        </MaterialRadioButton>
      </li>
      <li>
        <MaterialRadioButton
          name='radio-button-group-demo-2'
          checked={{eq this.color1 '#0d47a1' }}
          {{on 'change' (fn (mut this.color1) '#0d47a1' )}}
        >
          No! Yellow!
        </MaterialRadioButton>
      </li>
      <li>
        <MaterialRadioButton
          name='radio-button-group-demo-2'
          disabled={{if this.color2 false true}}
          {{on 'change' (fn (mut this.color1) this.color2)}}
        >
          Three
        </MaterialRadioButton>
      </li>
    </ul>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-0.hbs" />
  <demo.snippet @name="demo-material-checkbox-0.js" @label="component.js" />
</DocsDemo>

## Examples

### Default
<DocsDemo as |demo|>
  <demo.example @name="demo-material-radio-button-1.hbs">
    <MaterialRadioButton name='radio-button-group-example-1'>
      Sample
    </MaterialRadioButton>
  </demo.example>
  <demo.snippet @name="demo-material-radio-button-1.hbs" />
</DocsDemo>

### Checked
<DocsDemo as |demo|>
  <demo.example @name="demo-material-radio-button-2.hbs">
    <MaterialRadioButton name='radio-button-group-example-2' checked=true>
      Sample
    </MaterialRadioButton>
  </demo.example>
  <demo.snippet @name="demo-material-radio-button-2.hbs" />
</DocsDemo>

### Default disabled
<DocsDemo as |demo|>
  <demo.example @name="demo-material-radio-button-3.hbs">
    <MaterialRadioButton name='radio-button-group-example-3' disabled=true>
      Sample
    </MaterialRadioButton>
  </demo.example>
  <demo.snippet @name="demo-material-radio-button-3.hbs" />
</DocsDemo>

### Checked disabled
<DocsDemo as |demo|>
  <demo.example @name="demo-material-radio-button-3.hbs">
    <MaterialRadioButton name='radio-button-group-exampl-4' checked=true disabled=true>
      Sample
    </MaterialRadioButton>
  </demo.example>
  <demo.snippet @name="demo-material-radio-button-3.hbs" />
</DocsDemo>