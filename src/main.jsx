import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="282169679183-n2452boltve24ijihjlu2n68ve4rjf0o.apps.googleusercontent.com">...
    <App />

    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
