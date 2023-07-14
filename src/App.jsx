import React from 'react'
import PortfolioApp from './components/landingPage/PortfolioApp'

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