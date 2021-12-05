# demo-react-children
Demo of using slots versus react-children

![design](./img/design.png)


## The original


```jsx

import { Cat } from './Cat'
import { Dog } from './Dog'
import { Wrapper } from './Wrapper';

export function App() {
  return (
    <Wrapper>Hello world!
      <Cat />
      <Dog />
    </Wrapper>
  )
}
```

## Slots

Without children in place: 

```jsx
import { Slots } from './Slots';
import { Wrapper } from './Wrapper';

export function App() {
  return (
    <Wrapper>
      Hello world!
      <Slots  />
    </Wrapper>
  )
}
```

## Children

