import { Cat } from './Cat'
import { Dog } from './Dog'
import { Slots } from './Slots';
import { JustChildren } from './JustChildren'
import { Wrapper } from './Wrapper';

export function App() {
  return (
    <Wrapper>
      Hello world!
      <JustChildren>
        <Cat />
        <Dog />
      </JustChildren>
    </Wrapper>
  )
}