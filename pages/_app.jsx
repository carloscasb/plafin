import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../source/store'
//import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
  //ENVOLVEMOS O COMPONENTE COM O PROVIDER DO REDUX que vai ter um STORE(a storere que criamos)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
  
}
