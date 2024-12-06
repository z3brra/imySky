import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './scss/main.css'

function App() {

}

function PageError ({error}) {
    return ""
}

function getPageContent (page, param) {
    if (page === 'home') {
        return ""
    }
    if (page === 'weather') {
        return ""
    }
}

export default App
