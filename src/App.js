import { Cat } from './Cat'
import { Dog } from './Dog'
import { JustChildren } from './JustChildren'
import { Wrapper } from './Wrapper';
import { Slots } from './Slots'

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