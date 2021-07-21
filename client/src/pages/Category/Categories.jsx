import { Text } from 'components/Text'
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { CategoryDetail } from './CategoryDetail';
import { SubMenuItem } from 'components/SubMenu'; 
import { fetchCategories } from 'services/CategoriesApi';
import { useState, useEffect } from 'react';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

export function Categories() {
    const [state, setState] = useState({
        data: undefined,
        error: undefined,
        loading: false,
    })

    useEffect(() => {
        const run= async () => {
            setState({
                loading: true,
            }) 
            const {data, error} = await fetchCategories()
            setState({
                loading: false,
                data: data,
                error: error,
            })
        }
        run()
    }, [])
    return (
        <div class='mx-0 mb-4'>
            <Switch>
                <Route exact path="/categories">
                    <Text theme='h1' title='Categories'/>
                    {state.loading ? 
                        <Loading />
                    : state.error ?
                        <Error/>
                    : state.data &&
                        <ul>
                            {getCategoryItems(state.data)}
                        </ul>
                    }
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

function getCategoryItems(data, props) {
    console.log(data)
    return data.map( category => {
        return (
            <div class='my-2'>
                <SubMenuItem path={`/categories/${category.id}`} title={`${category.title}`} />
            </div>
        )
    })
}
