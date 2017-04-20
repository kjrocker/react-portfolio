import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { reduxFirebase } from 'react-redux-firebase'

// Replace with your Firebase config
const fbConfig = {
  apiKey: 'AIzaSyBblWmW4g2XFh0ggGT8G6uU6s_1G3g10qc',
  authDomain: 'portfolio-13a33.firebaseapp.com',
  databaseURL: 'https://portfolio-13a33.firebaseio.com'
}

export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
