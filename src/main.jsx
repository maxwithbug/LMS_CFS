//component imorts
//css imports 
import './input.css'

import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
//library imports
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { Store } from './Redux/store.js'


createRoot(document.getElementById('root')).render(

    <Provider store={Store}>
        <BrowserRouter>
          <App/>
          <Toaster/>
        </BrowserRouter>

    </Provider>
)
