# Material Checkbox

Material Checkbox wraps a `label` and a `MaterialCheckBox::Inner` into a form field.
The `MaterialCheckBox::Inner` wraps an input[type=checkbox] in a div.


## Notes

- The 'splattributes' are attached to input[type=checkbox].
- Attach CSS to the form field wrapper div using @class
- It is not possible to pass CSS to the wrapper div of input[type=checkbox]

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-0.hbs">
    <div class='demo-checkbox'>
      <ul>
        <li>
          <MaterialCheckbox
            checked={{this.value1}}
            @indeterminate={{this.indeterminate}}
            {{on 'change' (fn this.update 'indeterminate' )}}
          >
            Indeterminate
          </MaterialCheckbox>
        </li>
        <ul>
          <li>
            <MaterialCheckbox
              checked={{this.value1}}
              {{on 'change' (fn this.update 'value1' )}}
            >
              Checkbox 1
            </MaterialCheckbox>
          </li>
          <li>
            <MaterialCheckbox
              checked={{this.value2}}
              {{on 'change' (fn this.update 'value2' )}}
            >
              Checkbox 2
            </MaterialCheckbox>
          </li>
        </ul>
      </ul>
    </div>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-0.hbs" />
  <demo.snippet @name="demo-material-checkbox-0.js" @label="component.js" />
</DocsDemo>

## Examples

### Indeterminate
Pass `@indeterminate={{true}}` to the MaterialCheckbox when the state of the checkbox is indeterminate, for example
because it summarizes the state of checkboxes in a sublist. In that case it does not matter which status 'checked' has.
<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-1.hbs">
    <MaterialCheckbox @indeterminate={{true}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-1.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-2.hbs">
    <MaterialCheckbox disabled={{true}} @indeterminate={{true}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-2.hbs" />
</DocsDemo>

### Checked

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-3.hbs">
    <MaterialCheckbox checked={{true}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-3.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-4.hbs">
    <MaterialCheckbox checked={{true}} disabled={{true}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-4.hbs" />
</DocsDemo>

### Unchecked

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-5.hbs">
    <MaterialCheckbox checked={{false}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-5.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-checkbox-6.hbs">
    <MaterialCheckbox checked={{false}} disabled={{true}}>
      Sample
    </MaterialCheckbox>
  </demo.example>
  <demo.snippet @name="demo-material-checkbox-6.hbs" />
</DocsDemo>