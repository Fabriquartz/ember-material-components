# Material Button
There are four variants of the button: default, elevated, outlined and raised. Each of these types of buttons contains a
text and none, one or two icons.

## Notes
The Material Button consists of two elements: a wrapper div containing a button:
- Splattributes are attached to the button.
- Attach CSS to the wrapper div using @class

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-0.hbs">
    <MaterialButton
      @raised={{true}}
      @hasLeadingIcon={{true}}
      {{on 'click' this.toggleIsLiked}}
      as |Icon Text|
    >
      <Icon>
        {{if this.isLiked 'thumb_down' 'thumb_up'}}
      </Icon>
      <Text>
        {{if this.isLiked 'Unlike' 'Like!'}}
      </Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-0.hbs" />
  <demo.snippet @name="demo-material-button-0.js" @label="component.js" />
</DocsDemo>

## Examples

### Default button

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-1.hbs">
    <MaterialButton as |Icon Text|>
      <Text>Default</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-1.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-2.hbs">
    <MaterialButton @hasLeadingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading icon</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-2.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-3.hbs">
    <MaterialButton @hasTrailingIcon={{true}} as |Icon Text|>
      <Text>Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-3.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-4.hbs">
    <MaterialButton @hasLeadingIcon={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading & Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-4.hbs" />
</DocsDemo>

### Unelevated button

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-5.hbs">
    <MaterialButton @unelevated={{true}} as |Icon Text|>
      <Text>Default</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-5.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-6.hbs">
    <MaterialButton @unelevated={{true}} @hasLeadingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading icon</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-6.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-7.hbs">
    <MaterialButton @unelevated={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Text>Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-7.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-8.hbs">
    <MaterialButton @unelevated={{true}} @hasLeadingIcon={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading & Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-8.hbs" />
</DocsDemo>

### Outlined button

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-9.hbs">
    <MaterialButton @outlined={{true}} as |Icon Text|>
      <Text>Default</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-9.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-10.hbs">
    <MaterialButton @outlined={{true}} @hasLeadingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading icon</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-10.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-11.hbs">
    <MaterialButton @outlined={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Text>Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-11.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-12.hbs">
    <MaterialButton @outlined={{true}} @hasLeadingIcon={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading & Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-12.hbs" />
</DocsDemo>

### Raised button

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-13.hbs">
    <MaterialButton @raised={{true}} as |Icon Text|>
      <Text>Default</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-13.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-14.hbs">
    <MaterialButton @raised={{true}} @hasLeadingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading icon</Text>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-14.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-15.hbs">
    <MaterialButton @raised={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Text>Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-15.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-button-16.hbs">
    <MaterialButton @raised={{true}} @hasLeadingIcon={{true}} @hasTrailingIcon={{true}} as |Icon Text|>
      <Icon>save</Icon>
      <Text>Leading & Trailing Icon</Text>
      <Icon>favorite</Icon>
    </MaterialButton>
  </demo.example>
  <demo.snippet @name="demo-material-button-16.hbs" />
</DocsDemo>