import { Text } from 'components/Text'
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { CategoryDetail } from './CategoryDetail';
import { SubMenuItem } from 'components/SubMenu'; 
import { dummyInventory } from 'assets/Samples';

export function Categories() {

    const subMenuItems = [
        <SubMenuItem path='/categories/mobilephones' title='Mobile phones' />,
        <SubMenuItem path='/categories/tablets' title='Tablets' />,
        <SubMenuItem path='/categories/accessories' title='Accessories' />,
    ]

    const categories = Object.entries(dummyInventory).map((key, value) => {
        <SubMenuItem path={`/categories/${key}`} title={`${value.title}`} />
    })

    return (
        <div class='mx-0 mb-4'>
            <Switch>
                <Route exact path="/categories">
                    <Text theme='h1' title='Categories'/>
                    <ul>
                        {subMenuItems}
                    </ul>
                </Route>
                
                <Route path="/categories/:category" render={props => ( 
                    <div>
                        <CategoryDetail {...props} />  
                    </div>) 
                }/>

            </Switch>
        </div>
    );
}

