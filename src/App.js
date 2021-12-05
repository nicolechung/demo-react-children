import { Cat } from './Cat'
import { Dog } from './Dog'
import { JustChildren } from './JustChildren'
import { Wrapper } from './Wrapper';

export function App() {
  return (
    <Wrapper>
      Hello world!
      <JustChildren>
        <Dog />
        <Cat />
      </JustChildren>
    </Wrapper>
  )
}