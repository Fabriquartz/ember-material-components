# Material Dialog

Material Dialog is a modal window that can be used for various purposes.
It ensures that interactions, such as scrolling, with the underlying page are no
longer possible. The Material Dialog has a different view on a mobile device than
on a larger screen.

## Notes

- The trigger and dialog are both in the root of the component;
- The css classes passed with `@class` and the splattributes are appended to the dialog itself;

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-0.hbs">
    <DemoMaterialDialog />
  </demo.example>
</DocsDemo>

## Examples

### Alert

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-1.hbs">
    <MaterialDialog>
      <:trigger as |open|>
        <MaterialButton {{on 'click' open}}>
          Sample
        </MaterialButton>
      </:trigger>
      <:dialog as |item close|>
        <item.content>
          Sample
        </item.content>
        <item.footer as |Button|>
          <Button @unelevated={{true}} {{on 'click' close}} as |Icon Text|>
            <Text>
              OK
            </Text>
          </Button>
        </item.footer>
      </:dialog>
    </MaterialDialog>
  </demo.example>
  <demo.snippet @name="demo-material-dialog-1.hbs" />
</DocsDemo>

### Simple

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-3.hbs">
    <MaterialDialog>
      <:trigger as |open|>
        <MaterialButton {{on 'click' open}}>
          Sample
        </MaterialButton>
      </:trigger>
      <:dialog as |item close|>
        <item.content>
          <MaterialList @avatar={{true}} as |Item|>
            <Item {{on 'click' close}} as |item|>
              Item 1
            </Item>
            <Item {{on 'click' close}} as |item|>
              Item 2
            </Item>
          </MaterialList>
        </item.content>
      </:dialog>
    </MaterialDialog>
  </demo.example>
  <demo.snippet @name="demo-material-dialog-3.hbs" />
</DocsDemo>

### Confirmation

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-5.hbs">
    <MaterialDialog>
      <:trigger as |open|>
        <MaterialButton {{on 'click' open}}>
          Sample
        </MaterialButton>
      </:trigger>
      <:dialog as |item close|>
        <item.header>
          Header text
        </item.header>
        <item.content>
          <MaterialList @avatar={{true}} as |Item|>
            <Item {{on 'click' close}} as |item|>
              <item.radioButton @leading={{true}} />
              Option 2
            </Item>
            <Item {{on 'click' close}} as |item|>
              <item.radioButton @leading={{true}} />
              Option 1
            </Item>
          </MaterialList>
        </item.content>
        <item.footer as |Button|>
          <Button {{on 'click' close}} as |Icon Text|>
            <Text>
              abort
            </Text>
          </Button>
          <Button @unelevated={{true}} {{on 'click' close}} as |Icon Text|>
            <Text>
              Confirm
            </Text>
          </Button>
        </item.footer>
      </:dialog>
    </MaterialDialog>
  </demo.example>
  <demo.snippet @name="demo-material-dialog-5.hbs" />
</DocsDemo>

### Scrollable

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-6.hbs">
    <MaterialDialog @scrollable={{true}}>
      <:trigger as |open|>
        <MaterialButton {{on 'click' open}}>
          Sample
        </MaterialButton>
      </:trigger>
      <:dialog as |item close|>
        <item.header>
          Header text
        </item.header>
        <item.content>
          Text
        </item.content>
        <item.footer as |Button|>
          <Button @unelevated={{true}} {{on 'click' close}} as |Icon Text|>
            <Text>
              OK
            </Text>
          </Button>
        </item.footer>
      </:dialog>
    </MaterialDialog>
  </demo.example>
  <demo.snippet @name="demo-material-dialog-6.hbs" />
</DocsDemo>

### Sheet

<DocsDemo as |demo|>
  <demo.example @name="demo-material-dialog-6.hbs">
    <MaterialDialog @scrollable={{true}}>
      <:trigger as |open|>
        <MaterialButton {{on 'click' open}}>
          Sample
        </MaterialButton>
      </:trigger>
      <:dialog as |item close|>
        <item.header>
          Header text
        </item.header>
        <item.content>
          <MaterialList @avatar={{true}} as |Item|>
            <Item {{on 'click' close}} as |item|>
              <item.radioButton @leading={{true}} />
              Option 2
            </Item>
            <Item {{on 'click' close}} as |item|>
              <item.radioButton @leading={{true}} />
              Option 1
            </Item>
          </MaterialList>
        </item.content>
      </:dialog>
    </MaterialDialog>
  </demo.example>
  <demo.snippet @name="demo-material-dialog-6.hbs" />
</DocsDemo>