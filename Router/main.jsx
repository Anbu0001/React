import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Test from './Test.jsx';
// import App1 from './Basic_Routing/App.jsx';

import Axios from './Axios/App.jsx'

import Route_2 from './Nested_Routing/App.jsx'
import Router_3 from './Dynamic_Routing/App.jsx';
import Router_4 from './Programmatic_Navigation/App.jsx';
import Router_5 from './404_Page/App.jsx'
import Router_6 from './Protected_Routes/App.jsx'
// import Router_7 from './Protected_Routes_App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Axios/>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <Route_2 /> */}
    {/* <Router_3/> */}
    {/* <Router_4 /> */}
    {/* <Router_5/> */}
    {/* <Router_6/> */}
   


    {/* <Test /> */}
  </StrictMode>,
)
