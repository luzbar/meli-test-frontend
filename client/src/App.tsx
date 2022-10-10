import { Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import ItemSearch from './pages/ItemSearch'
import ItemDetail from './pages/ItemDetail'

function App() {
    return (
        <div className="App">
            <Header />
            <main className="App-main">
                <Routes>
                    <Route path="" element={<></>} />
                    <Route path="items" element={<ItemSearch />} />
                    <Route path="items/:id" element={<ItemDetail />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
