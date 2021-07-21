import { Text } from 'components/Text'
import { sampleText } from 'assets/Samples';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Categories } from './Category/Categories';
import { Button } from 'components/Button';
import { linkStyles } from 'styles/LinkStyles';

export function Home() {

    return (
        <div class='mx-4 mb-4 xl:w-1/2 lg:w-2/3 sm:w-3/4'>
            <Switch>
                <Route exact path="/">
                    <Text theme='h1' title='Welcome!' />
                    <Link to='/categories' class={linkStyles.bold}> Check out the categories </Link>
                    <Text theme='title' title='This is the home screen'/>                
                    <Text theme='subtitle' title={sampleText.short} />
                    <Text theme='' title={sampleText.long} />
                </Route>
                <Route path="/categories">
                    <Categories />
                </Route>
            </Switch>
        </div>
    );
}
