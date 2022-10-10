import React from 'react'
import './Header.css'

import { Logo } from './Logo'
import { InputSearch } from './InputSearch'

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <InputSearch />
        </header>
    )
}

export default Header
