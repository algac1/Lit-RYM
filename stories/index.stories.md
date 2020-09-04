```js script
import { html } from '@open-wc/demoing-storybook';
import '../rm-component.js';

export default {
  title: 'RmComponent',
  component: 'rm-component',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# RmComponent

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add rm-component
```

```js
import 'rm-component/rm-component.js';
```

```js preview-story
export const Simple = () => html`
  <rm-component></rm-component>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <rm-component title="Hello World"></rm-component>
`;
```
