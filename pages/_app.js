import '../styles/globals.css'
import { Provider } from "react-redux"
import store from "../store.js"
import Layout from '../components/layout/Layout'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {
  session, ...pageProps
} }) {
  return <Provider store={store}>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </Provider>
}

export default MyApp
