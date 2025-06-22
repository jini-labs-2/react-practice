import Sub1 from './Sub1'
import { DEFAULT_SERVE_LANG, DEFAULT_THEME } from '../constants'

export default function ContentComponent() {
  return (
    <div>
      <div className="App context-test" style={DEFAULT_THEME}>
        <h1>Hellow world</h1>
        <Sub1 />
        <h2> Service Language is {DEFAULT_SERVE_LANG}</h2>
      </div>
    </div>
  )
}
