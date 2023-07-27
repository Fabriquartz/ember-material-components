# Material List

Material List is used to create a list for various purposes, such as a checklist, option list or user list.
In addition to the text, the Material List Item can also contain one or two things, such as an icon or input.

## Notes

- When you want to group multiple lists, you start with a ```MaterialListGroup```, which has a List,
Header and Divider yield. Instead of the yielded List you can also use MaterialList - there is no difference.
- A MaterialList can be an 'avatar list' (```@avatar={{true}}```) or a 'two lined list' (```@twoLined={{true}}```)
and can be combined . The avatar list increases the prefix space of the ```MaterialListItems```, the two lined list
increases the height of the ```MaterialListItems```

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-0.hbs">
    <MaterialListGroup as |List Header Divider|>
      <Header>
        What's your name?
      </Header>
      <Divider />
      <List @twoLined={{true}} @avatar={{true}} as |Item|>
        <Item as |item|>
          <item.icon class="emdc-chip__avatar" style='background-image: url(../avatar_1.jpeg)' @leading={{true}} />
          <item.text>
            <:primary>Sir Lancelot</:primary>
            <:secondary>The Brave</:secondary>
          </item.text>
          <item.radioButton {{on 'change' (fn (mut this.name) 'Sir Lancelot' )}} name='group1' />
        </Item>
        <Item as |item|>
          <item.icon class="emdc-chip__avatar" style='background-image: url(../avatar_3.jpeg)' @leading={{true}} />
          <item.text>
            <:primary>Sir Bedevere</:primary>
            <:secondary>The Wise</:secondary>
          </item.text>
          <item.radioButton {{on 'change' (fn (mut this.name) 'Sir Bedevere' )}} name='group1' />
        </Item>
      </List>
      <Header>Journey checklist</Header>
      <Divider />
      <List as |Item|>
        <Item role='checkbox' as |item|>
          <item.icon @leading={{true}}>map</item.icon>
          Find the Holy Grail
          <item.checkbox checked={{this.value1}} {{on 'input' (fn this.update 'value1')}} />
        </Item>
        <Item role='checkbox' as |item|>
          <item.icon @leading={{true}}>directions</item.icon>
          Return to Camelot
          <item.checkbox checked={{this.value2}} {{on 'input' (fn this.update 'value2')}} />
        </Item>
      </List>
      <Header>Summary</Header>
      <Divider />
      <List as |Item|>
        <Item as |item|>
          <item.icon @leading={{true}}>article</item.icon>
          {{or this.name '(not set)'}}
          <item.affix>
            {{this.doneCount}}
          </item.affix>
        </Item>
      </List>
    </MaterialListGroup>
  </demo.example>
  <demo.snippet @name="demo-material-list-0.hbs" />
  <demo.snippet @name="demo-material-list-0.js" />
</DocsDemo>

## Examples

In addition to the text, each list item can contain something in the prefix and
suffix position, such as an icon or input (see demo). All combinations are technically
possible, but do not use two inputs (checkbox, radio button, switch) in a list item
and if the list is an avatar list, the prefix position should include an icon or
a custom element, as in the example . There is not an example for every possible
combination, see the demo for that.

### Default list

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-1.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        Default list
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-1.hbs" />
</DocsDemo>

### List with icon

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-2.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        <item.icon @leading={{true}}>star</item.icon>
        Leading icon
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-2.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-3.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        Trailing icon
        <item.icon>star</item.icon>
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-3.hbs" />
</DocsDemo>

### List with checkbox
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-4.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        <item.checkbox @leading={{true}} />
        Leading checkbox
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-4.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-5.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        Trailing checkbox
        <item.checkbox />
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-5.hbs" />
</DocsDemo>

### List with radio button
Make sure all radio buttons belonging to the same group have the same name.
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-6.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        <item.radioButton name='group2' @leading={{true}} />
        Leading radio button
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-6.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-7.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        Trailing radio button
        <item.radioButton name='group2' />
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-7.hbs" />
</DocsDemo>

### List with switch
The Switch is not an element included in the Material Design specification, but can (technically) be in a list item.
Please note that the switch only has enough space in an avatar list.

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-8.hbs">
    <MaterialList @avatar={{true}} as |Item|>
      <Item as |item|>
        Trailing switch ({{this.value3}})
        <item.switch
          @checked={{this.value3}}
          @onChange={{fn this.onChange 'value3'}} 
        />
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-8.hbs" />
</DocsDemo>
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-9.hbs">
    <MaterialList @avatar={{true}} as |Item|>
      <Item as |item|>
        <item.switch
          @leading={{true}}
          @checked={{this.value3}}
          @onChange={{fn this.onChange 'value3'}} 
        />
        Leading switch ({{this.value3}})
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-9.hbs" />
</DocsDemo>


### List with affix
The affix (by default suffix, a prefix when ```@leading={{true}}```) can be used to put something in front or after the text, such as an avatar, badge or text.
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-10.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        <item.affix @leading={{true}}>Prefix</item.affix>
        Leading affix
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-10.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-11.hbs">
    <MaterialList as |Item|>
      <Item as |item|>
        Trailing affix
        <item.affix>Suffix</item.affix>
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-11.hbs" />
</DocsDemo>

### List with avatar
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-12.hbs">
    <MaterialList @avatar={{true}} as |Item|>
      <Item as |item|>
        <item.icon class="emdc-chip__avatar" style='background: lightblue; color: white' @leading={{true}}>
          star
        </item.icon>
        Avatar icon
      </Item>
      <Item as |item|>
        <item.affix class="emdc-chip__avatar" style='background: lightblue; color: white' @leading={{true}}>
          M
        </item.affix>
        Avatar letter
      </Item>
      <Item as |item|>
        <item.affix class="emdc-chip__avatar" style='background-image: url(../avatar_1.jpeg)' @leading={{true}}>
        </item.affix>
        Avatar picture
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-12.hbs" />
</DocsDemo>

### List with two lines of text
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-13.hbs">
    <MaterialList @twoLined={{true}} as |Item|>
      <Item as |item|>
        <item.text>
          <:primary>Primary</:primary>
          <:secondary>Secondary</:secondary>
        </item.text>
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-13.hbs" />
</DocsDemo>

### List with activated item
When ```@activitated={{true}}``` is passed to one of the items, all other items become activatable
as well (only one item is ever activated at a time). This is used, among other things,
for a menu in the Material Drawer.
<DocsDemo as |demo|>
  <demo.example @name="demo-material-list-14.hbs">
    <MaterialList as |Item|>
      <Item @activated={{true}}>First Option</Item>
      <Item>Second Option</Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-list-14.hbs" />
</DocsDemo>