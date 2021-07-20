
import './styles/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { StyleDemo } from 'pages/StyleDemo';
import { Text } from 'components/Text';
import { Home } from 'pages/Home'
import { About } from 'pages/About'

function App() {

  const menuItems = [
    <MenutItem title='Home' path='/' />,
    <MenutItem title='Styles' path='/styles' />,
    <MenutItem title='About' path='/about' />,
  ]

  return (
    <Router>
      <div flex flex-row>
        <Menu items={menuItems}/>
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

function Users() {
  return <h2>Users</h2>;
}

export default App;
