import React from 'react'
import { Provider } from 'react-redux'
import { createStoreHook } from 'react-redux'
import { reducer } from './redux/reducers'
import PortfolioApp from './components/portfolio/PortfolioApp'

const store = createStoreHook(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

const App = () => {
    var portfolio = true;
    if (portfolio) {
        return (
            <PortfolioApp />
        )
    } else {
        return (
            <>
                <h1>Henlo</h1>
            </>
        )
    }
}

export default App