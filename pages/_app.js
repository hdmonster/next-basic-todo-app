import '../styles/globals.css'
import Layout from '../components/Layout'
import { TodosProvider } from '../context/todos'
import { Provider } from 'react-redux'
import store from '../app/store'

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </TodosProvider>
  )
}

export default MyApp
