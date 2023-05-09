# Icon button

Material Icon Button is a round shaped button containing an icon.
There is a toggable variant where you can switch between two icons.

## Notes

- The css classes passed with `@class` and the splattributes are appended
to the button, which is the root element.

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-button-0.hbs">
    <MaterialIconButton @onChange={{fn (mut this.starred)}} @isToggleable={{true}} as |Icon1 Icon2|>
      <Icon1>
        star
      </Icon1>
      <Icon2>
        star_outline
      </Icon2>
    </MaterialIconButton>
    {{if this.starred "Favorite :-)" "Not a favorite :-("}}
  </demo.example>
  <demo.snippet @name="demo-material-icon-button-0.hbs" />
</DocsDemo>

## Examples
### Default

<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-button-1.hbs">
    <MaterialIconButton>
      star
    </MaterialIconButton>
  </demo.example>
  <demo.snippet @name="demo-material-icon-button-1.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-button-2.hbs">
    <MaterialIconButton disabled={{true}}>
      star
    </MaterialIconButton>
  </demo.example>
  <demo.snippet @name="demo-material-icon-button-2.hbs" />
</DocsDemo>


### Toggable

<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-button-3.hbs">
    <MaterialIconButton @isToggleable={{true}} as |Icon1 Icon2|>
      <Icon1>
        star
      </Icon1>
      <Icon2>
        star_outline
      </Icon2>
    </MaterialIconButton>
  </demo.example>
  <demo.snippet @name="demo-material-icon-button-3.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-icon-button-4.hbs">
    <MaterialIconButton disabled={{true}} @isToggleable={{true}} as |Icon1 Icon2|>
      <Icon1>
        star
      </Icon1>
      <Icon2>
        star_outline
      </Icon2>
    </MaterialIconButton>
  </demo.example>
  <demo.snippet @name="demo-material-icon-button-4.hbs" />
</DocsDemo>