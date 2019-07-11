# project-clio

> Clio React UI Library

[![NPM](https://img.shields.io/npm/v/project-clio.svg)](https://www.npmjs.com/package/project-clio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save project-clio
```

## Usage

### General

```jsx
import React, { Component } from 'react'

import MyComponent from 'project-clio'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```
### Card

```jsx
import React, { Component } from 'react'

import MyComponent from 'project-clio'

class ExampleCard extends Component {
  render () {
    return (
      <Card>
        <H3> Card Title </H3>
        <R> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
        <Button size="md" />
      </Card>
    )
  }
}
```

## License

MIT © [jialin-wu-02](https://github.com/jialin-wu-02)
