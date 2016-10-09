<img alt="styled-components" src="./logo/logo.png" height="150px" />
<br />

Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅

```
npm install --save styled-components
```

Utilising [tagged template literals](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings#Tagged_Template-Strings), an ES6 (i.e. built into Javascript) feature, `styled-components` allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

> Note: If you're not using `npm` as your package manager, aren't using a module bundler or aren't sure about either of those jump to [Alternative Installation Methods](#alternative-installation-methods).

## Usage

### Basic

This creates two react components, `<Title>` and `<Wrapper>`:

```JSX
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
```

This is what they look like when rendered:

```JSX
// These are like any other react component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

<div align="center">
  <a href="http://www.webpackbin.com/VyQ9AYHpZ">
    <img alt="Screenshot of the above code ran in a browser" src="http://i.imgur.com/wUJpcjY.jpg" />
    <div><em>Live demo</em></div>
  </a>
</div>

### Passed props

Styled components pass on all their props. This is a styled `<input>`:

```JS
import React from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
```

You can just pass a `placeholder` prop into the `styled-component`. It will pass it on to the DOM node like any other react component:

```JSX
// Render a styled input with a placeholder of "@mxstbr"
<Input placeholder="@mxstbr" type="text" />
```

Here is one input without any content showing the placeholder, and one with some content:

<div align="center">
  <a href="http://www.webpackbin.com/EyBu49rab">
    <img alt="Screenshot of the above code ran in a browser" src="http://imgur.com/QoQiSui.jpg" />
    <div><em>Live demo</em></div>
  </a>
</div>

### Adapting based on props

This is a button component that has a `primary` state. By setting `primary` to `true` when rendering it we adjust the background and text color.

```JSX
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;
```

```JSX
<Button>Normal</Button>
<Button primary={true}>Primary</Button>
```

<div align="center">
  <a href="http://www.webpackbin.com/4JAqcmL6Z">
    <img alt="Screenshot of the above code ran in a browser" src="http://imgur.com/4qlEdsx.jpg" />
    <div><em>Live demo</em></div>
  </a>
</div>

### Overriding component styles

Taking the `Button` component from above and removing the primary rules, this is what we're left with – just a normal button:

```JSX
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;
```

Let's say someplace else you want to use your button component, but just in this one case you want the color and border color to be `tomato` instead of `palevioletred`. Now you _could_ pass in an interpolated function and change them based on some props, but that's quite a lot of effort for overriding the styles once.

To do this in an easier way you can call `styled` as a function and pass in the previous component. You style that like any other styled-component. It overrides duplicate styles from the initial component and keeps the others around:

```JSX
// Tomatobutton.js

import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

export default TomatoButton;
```

Even though we have only specified the `color` and the `border-color`, this is what our TomatoButton looks like:

<div align="center">
  <a href="http://www.webpackbin.com/VJZQkBU6Z">
    <img alt="Screenshot of the above code ran in a browser" src="http://imgur.com/LZZ3h5i.jpg" />
    <div><em>Live demo</em></div>
  </a>
</div>

Instead of copy and pasting or factoring out the styles into a separate function we've now reused them.

> You can also pass tag names into the `styled()` call, like so: `styled('div')`. In fact, the styled.tagname helpers are just aliases of `styled('tagname')`!

#### Third-party components

The above also works perfectly for styling third-party components, like a `react-router` `<Link />`!

```JS
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;
```

```JSX
<Link to="/">Standard, unstyled Link</Link>
<StyledLink to="/">This Link is styled!</StyledLink>
```

<div align="center">
  <a href="http://www.webpackbin.com/41PeBHU6-">
    <img alt="Screenshot of the above code ran in a browser" src="http://imgur.com/JJw4MdX.jpg" />
    <div><em>Live demo</em></div>
  </a>
</div>

### Keyframes

CSS animations with `@keyframes` don't make sense to be scoped to a single component. This is why we export a `keyframes` helper which will generate a unique name for your keyframes. You can then use that unique name throughout your app.

This way, you get all the benefits of using JavaScript, are avoiding name clashes and get your keyframes like always:

```JS
import styled, { keyframes } from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;
```

This will now rotate it's children over and over again, for example our logo:

```JSX
<Rotate>&lt;💅&gt;</Rotate>
```

<div align="center">
  <a href="http://www.webpackbin.com/EkgdOEkAZ">
    <img alt="Animated GIF of the above code ran in a browser" height="100px" src="http://imgur.com/I7Sobjv.gif" />
    <div><em>Live demo</em></div>
  </a>
</div>

## Docs

See [the documentation](./docs) for more information about using `styled-components`.

### Table of Contents

- [API Reference](./docs/api.md)
- [Tips and Tricks](./docs/tips-and-tricks.md)

## Syntax highlighting

The one thing you loose when writing CSS in template literals is syntax highlighting. We're working hard on making proper syntax highlighting happening in all editors. We currently have support for Atom.

This is what it looks like when properly highlighted:

<img alt="Syntax highlighted styled component" src="http://imgur.com/k7h45c3.jpg" height="150px" />

### Atom

[**@gandm**](https://github.com/gandm), the creator of `language-babel`, has helped us add support for `styled-components` in Atom! To get proper syntax highlighting, you just have to have the `language-babel` package installed and use it for syntax highlighting your component files!

### Other Editors

We're working on getting syntax highlighting support to other editors too, and we could use your help! If you want to start working on syntax highlighting for your editor, open an issue to let us know.

## Further Reading

These are some great articles and talks about related topics in case you're hungry for more:

- [📝 "Scale" FUD and Style Components](https://medium.com/learnreact/scale-fud-and-style-components-c0ce87ec9772#.kzjba8lcg): Using components as low-level styling constructs
- [🎙 The Future of Reusable CSS](https://www.youtube.com/watch?v=XR6eM_5pAb0): How component libraries should be styled, and why they're not yet
- [📝 Rendering Khan Academy’s Learn Menu Wherever I Please](https://medium.com/@jdan/rendering-khan-academys-learn-menu-wherever-i-please-4b58d4a9432d#.w9nshye05): Documenting the move from the handlebars + less combo to react and inline styles

## Alternative Installation Methods

If you're not using a module bundler or not using `npm` as your package manager, we also have a global ("UMD") build!

You can use that via the `unpkg` CDN to get `styled-components`, the URL is `https://unpkg.com/styled-components/dist/styled-components.min.js`.

To install `styled-components` with bower you'd do:

```
bower install styled-components=https://unpkg.com/styled-components/dist/styled-components.min.js
```

To use it from your HTML, add this at the bottom of your `index.html`, and you'll have access to the global `window.styled` variable:

```HTML
<script src="https://unpkg.com/styled-components/dist/styled-components.min.js" type="text/javascript"></script>
```

## License

Licensed under the MIT License, copyright © 2016 Glen Maddern and Maximilian Stoiber. With thanks to Charlie Somerville & lots of others.

Special thanks to [@okonet](https://github.com/okonet) for the fantastic logo.

See [LICENSE](./LICENSE) for more information.
