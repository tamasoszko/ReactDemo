import { Text } from './Text'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import { linkStyles } from 'styles/LinkStyles'

function SubMenu(props) {
  return (
      <div class='flex flex-row py-4 mx-0 gap-4'>
          {props.items}
      </div>
  );
}

export function SubMenuItem(props) {
  return (
      <Link to={props.path}>
          <Text theme='' title={props.title} textColor={linkStyles.bold}/>
      </Link>
  );
}