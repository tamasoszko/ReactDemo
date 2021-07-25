
import './styles/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import { StyleDemo } from 'pages/StyleDemo';
import { Text } from 'components/Text';
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Login } from 'pages/Login';
import { useState, useEffect } from 'react';
import  auth from 'auth/Authentication';


function App() {

    const menuItems = [
    <MenutItem title='Home' path='/' />,
    <MenutItem title='Styles' path='/styles' />,
    <MenutItem title='About' path='/about' />,
  ]

  console.log(`isAuthenticated()=${auth.isAuthenticated()}`)

  return (
    <Router>
      <Switch>
        <Route path="/login" render={props => ( 
            <Login {...props} />  
        )}/>
        <Route path="/" render={props => (
          auth.isAuthenticated() ?
            <MainContent tabs={menuItems} {...props} />
          :
            <Login {...props} />
        )}>
        </Route>
      </Switch>
    </Router>
  );
}

function Menu(props) {
  return (
    <nav>
      <div class='flex flex-wrap flex-row justify-between sm:place-content-start gap-2 sm:gap-8 m-0 px-0 sm:px-8 py-0 bg-gray-800'> 
        {props.items}
      </div>
    </nav>
  );
}

function MenutItem(props) {
  return (
    <div class='grid m-0 px-4 sm:px-8 h-12 bg-gray-800 lg:hover:bg-gray-600 acive-bg-gray-600 place-items-center'> 
      <Link to={`${props.path}`}>
        <Text theme='' title={`${props.title}`} textColor='text-gray-100'/>
      </Link>
    </div>
  );
}

function MainContent(props) {

  useEffect(() => {
    auth.setHistory(props.history)
  }, [])

  return (
    <div flex flex-row>
        <Menu items={props.tabs}/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/styles">
            <StyleDemo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  )
}

export default App;
