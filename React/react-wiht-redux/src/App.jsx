import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter'
import store from './store'

function App() {

  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  )
}

export default App
