# Material Tab Bar

Material Radio Button wraps a `label` and a `button` into a form field.
The `MaterialRadioButton::Inner` wraps an input[type=checkbox] in a div.

## Notes

- The 'splattributes' are attached to input[type=radio].
- Attach CSS to the form field wrapper div using @class
- It is not possible to pass CSS to the wrapper div of input[type=radio]

## Demo

<DocsDemo as |demo|>
  <demo.example @name="demo-material-tab-bar-0.hbs">
    {{#if this._tabBar}}
    <MaterialTabBar as |Button|>
      <Button @active={{true}} @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>home</Icon>{{/if}}
        <Label>Home</Label>
      </Button>
      {{#if this.scrollable}}
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>history</Icon>{{/if}}
        <Label>history</Label>
      </Button>
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>favorite</Icon>{{/if}}
        <Label>Favorites</Label>
      </Button>
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>star</Icon>{{/if}}
        <Label>stars</Label>
      </Button>
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>thumb_up</Icon>{{/if}}
        <Label>Likes</Label>
      </Button>
      {{/if}}
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>person</Icon>{{/if}}
        <Label>profile</Label>
      </Button>
      <Button @dense={{this.dense}} @stacked={{this.stacked}} as |Icon Label|>
        {{#if this.icon}}<Icon>settings</Icon>{{/if}}
        <Label>Settings</Label>
      </Button>
    </MaterialTabBar>
    {{/if}}
    <MaterialList as |Item|>
      <Item as |item|>
        Icons
        <item.switch @checked={{this.icon}} @onChange={{fn this.update 'icon' }} />
      </Item>
      <Item as |item|>
        Dense
        <item.switch @dense={{this.dense}} @onChange={{fn this.update 'dense' }} />
      </Item>
      <Item as |item|>
        Stacked
        <item.switch @stacked={{this.stacked}} @onChange={{fn this.update 'stacked' }} />
      </Item>
      <Item as |item|>
        Scrollable
        <item.switch @stacked={{this.scrollable}} @onChange={{fn this.update 'scrollable' }} />
      </Item>
    </MaterialList>
  </demo.example>
  <demo.snippet @name="demo-material-tab-bar-0.js" @label="component.js" />

  <demo.snippet @name="demo-material-tab-bar-0.hbs" />
</DocsDemo>

## Examples

### Default
<DocsDemo as |demo|>
  <demo.example @name="demo-material-tab-bar-1.hbs">
    <MaterialTabBar as |Button|>
      <Button @active={{true}} as |Icon Label|>
        <Label>Option 1</Label>
      </Button>
      <Button as |Icon Label|>
        <Label>Option 2</Label>
      </Button>
    </MaterialTabBar>
  </demo.example>
  <demo.snippet @name="demo-material-tab-bar-1.hbs" />
</DocsDemo>

### Dense
<DocsDemo as |demo|>
  <demo.example @name="demo-material-tab-bar-2.hbs">
    <MaterialTabBar as |Button|>
      <Button @active={{true}} @dense={{true}} as |Icon Label|>
        <Label>Option 1</Label>
      </Button>
      <Button @dense={{true}} as |Icon Label|>
        <Label>Option 2</Label>
      </Button>
    </MaterialTabBar>
  </demo.example>
  <demo.snippet @name="demo-material-tab-bar-2.hbs" />
</DocsDemo>

### Icon
<DocsDemo as |demo|>
  <demo.example @name="demo-material-tab-bar-3.hbs">
    <MaterialTabBar as |Button|>
      <Button @active={{true}} as |Icon Label|>
        <Icon>favorite</Icon>
        <Label>Option 1</Label>
      </Button>
      <Button as |Icon Label|>
        <Icon>favorite</Icon>
        <Label>Option 2</Label>
      </Button>
    </MaterialTabBar>
  </demo.example>
  <demo.snippet @name="demo-material-tab-bar-3.hbs" />
</DocsDemo>

### Icon (stacked)
<DocsDemo as |demo|>
  <demo.example @name="demo-material-tab-bar-4.hbs">
    <MaterialTabBar as |Button|>
      <Button @active={{true}} @stacked={{true}} as |Icon Label|>
        <Icon>favorite</Icon>
        <Label>Option 1</Label>
      </Button>
      <Button @stacked={{true}} as |Icon Label|>
        <Icon>favorite</Icon>
        <Label>Option 2</Label>
      </Button>
    </MaterialTabBar>
  </demo.example>
  <demo.snippet @name="demo-material-tab-bar-4.hbs" />
</DocsDemo>
