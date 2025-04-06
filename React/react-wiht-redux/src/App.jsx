import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter'
import store from './store'
import AddTodos from './components/AddTodos'

function App() {

  return (
    <Provider store={store}>
    <Counter/>
    <AddTodos/>
    </Provider>
  )
}

export default App
