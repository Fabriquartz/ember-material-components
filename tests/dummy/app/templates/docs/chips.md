# Material Chips

Material Checkbox wraps a `label` and a `MaterialCheckBox::Inner` into a form field.
The `MaterialCheckBox::Inner` wraps an input[type=checkbox] in a div.


## Notes

- The 'splattributes' are attached to input[type=checkbox].
- Attach CSS to the form field wrapper div using @class
- It is not possible to pass CSS to the wrapper div of input[type=checkbox]

## Examples

### Chip

<DocsDemo as |demo|>
  <demo.example @name="demo-material-chips-1.hbs">
    <MaterialChips as |Chip|>
      <Chip as |Button|>
        <Button as |Text|>
          <Text>
            Chip 1
          </Text>
        </Button>
      </Chip>
    </MaterialChips>
  </demo.example>
  <demo.snippet @name="demo-material-chips-1.hbs" />
</DocsDemo>

### Chip with icon

<DocsDemo as |demo|>
  <demo.example @name="demo-material-chips-2.hbs">
    <MaterialChips as |Chip|>
      <Chip @hasLeadingIcon={{true}} as |Button|>
        <Button as |Text Icon|>
          <Icon>
            favorite
          </Icon>
          <Text>
            Favorite
          </Text>
        </Button>
      </Chip>
    </MaterialChips>
  </demo.example>
  <demo.snippet @name="demo-material-chips-2.hbs" />
</DocsDemo>

### Chip with graphic

<DocsDemo as |demo|>
  <demo.example @name="demo-material-chips-3.hbs">
    <MaterialChips as |Chip|>
      <Chip @hasLeadingIcon={{true}} as |Button|>
        <Button as |Text Icon Graphic|>
          <Graphic>
            <div class='emdc-chip__avatar' style='background-image: url(../avatar_2.jpeg)' />{{!--
            template-lint-disable--}}
          </Graphic>
          <Text>
            Bedevere the Wise
          </Text>
        </Button>
      </Chip>
    </MaterialChips>
  </demo.example>
  <demo.snippet @name="demo-material-chips-3.hbs" />
</DocsDemo>


### Selectable chip

<DocsDemo as |demo|>
  <demo.example @name="demo-material-chips-4.hbs">
    <MaterialChips as |Chip|>
      <Chip @selectable={{true}} @hasLeadingIcon={{true}} as |Button|>
        <Button as |Text Icon|>
          <Icon>
            favorite
          </Icon>
          <Text>
            Favorite
          </Text>
        </Button>
      </Chip>
    </MaterialChips>
  </demo.example>
  <demo.snippet @name="demo-material-chips-4.hbs" />
</DocsDemo>