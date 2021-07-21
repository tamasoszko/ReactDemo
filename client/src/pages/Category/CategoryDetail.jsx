import { Text } from 'components/Text'
import { sampleText } from 'assets/Samples'
import { SubMenuItem } from 'components/SubMenu';

import {
    Switch,
    Route,
  } from "react-router-dom";
import { ItemDetail } from './ItemDetail';
import { fetchCategory } from 'services/CategoriesApi';
import { fetchProducts } from 'services/ProductsApi';
import { useState, useEffect } from 'react';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { BadgeButton } from 'components/BadgeButton';

export function CategoryDetail(props) {
    const [state, setState] = useState({
        category: undefined,
        products: undefined,
        error: undefined,
        loading: false,
    })

    useEffect(() => {
        const run = async () => {
            setState({loading: true})
            const respCategory = await fetchCategory(props.match.params.category)
            const respProducts = await fetchProducts(props.match.params.category)
            setState({ 
                category: respCategory.data, 
                products: respProducts.data, 
                loading: false})
        }
        run()
    }, [])

    return (
        <div class='mx-4 mb-4'>
            <Switch>
                <Route exact path={props.match.path}>
                    {state.loading ? 
                        <Loading />
                    : state.error ?
                        <Error/>
                    :
                        getContent(props, state)
                    }
                </Route>
                <Route path={`${props.match.path}/:id`} render={props => (
                    <ItemDetail {...props}/>
                )} />
            </Switch>
        </div>
    );
}

function getContent(props, state) {
    return (
        <div>
            {state.category && 
                <div>
                    <Text theme='h1' title={`${state.category.title}`} />                    
                    <div class='flex flex-row gap-2 items-center'>
                        <Text theme='title' title={`Prices from`} />
                        <BadgeButton theme='yellow' size='xlarge' title={`${state.category.currency} ${state.category.minPrice}`} />
                    </div>
                    <div class='flex flex-row gap-4 items-center'>
                        <div class='flex flex-row gap-2 items-center'>
                            <BadgeButton theme='gray' size='large' title={`${state.category.totalQty}`} />
                            <Text theme='title' title='items' />
                        </div>
                        <div class='flex flex-row gap-1 items-center'>
                            <BadgeButton theme='gray' size='large' title={`${state.category.numberOfProducts}`} />
                            <Text theme='title' title='products' />
                        </div>
                    </div>
                    <Text theme='' title={`${state.category.description}`}/>
                </div>
            }
            {state.products &&
                <ul>
                    {state.products.map(item => {
                        return (
                            <div class='my-4'>
                                <SubMenuItem path={`${props.match.url}/${item.id}`} title={`${item.name}`}/>
                           </div>
                        )
                    })}
                </ul>
            }
        </div>
    )
}