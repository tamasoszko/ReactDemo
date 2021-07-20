import { Text } from 'components/Text'
import { sampleText, dummyInventory } from 'assets/Samples'
import { SubMenuItem } from 'components/SubMenu'
import {
    Switch,
    Route,
  } from "react-router-dom";
import { ItemDetail } from './ItemDetail';

export function CategoryDetail(props) {

    const categoryInfo = dummyInventory[props.match.params.category]
    console.log([props.match.url, props.match.path])
    const items = Object.values(categoryInfo.items).map(item => 
        <div class='my-4'>
            <SubMenuItem path={`${props.match.url}/${item.id}`} title={`${item.title}`}/>
        </div>
    )
    return (
        <div class='mx-4 mb-4'>
            <Switch>
                <Route exact path={props.match.path}>
                    <Text theme='h1' title={`${categoryInfo.title}`} />
                    <Text theme='title' title={sampleText.medium} />
                    <ul>
                        {items}
                    </ul>
                </Route>
                <Route path={`${props.match.path}/:id`} render={props => (
                    <ItemDetail {...props}/>
                )} />
            </Switch>
        </div>
    );
}