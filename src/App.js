import { Cat } from './Cat'
import { Dog } from './Dog'

export function App() {
  return (
    <div className="leading-relaxed container mx-auto mt-4 bg-gradient-to-br  from-yellow-100 p-5 rounded-xl to-yellow-400 text-5xl">Hello world!
      <Cat />
      <Dog />
    </div>
  )
}