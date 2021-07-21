import { Text } from 'components/Text'
import { Button } from 'components/Button';
import { imageStyles } from 'styles/ImageStyles'
import { BadgeButton } from 'components/BadgeButton';
import { useState, useEffect } from 'react';
import { fetchProduct } from 'services/ProductsApi';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';

export function ItemDetail(props) {

    const [state, setState] = useState({
        data: undefined,
        error: undefined,
        loading: false,
    })

    useEffect(() => {
        const run = async () => {
            setState({
                loading: false,
            })
            const { data, error } = await fetchProduct(props.match.params.category, props.match.params.id)
            setState({
                loading: false,
                data: data,
                error: error,
            })
        }
        run()
    }, [])

    return (
        <div>
            {state.loading ?
                <Loading />
            : state.error ?
                <Error />
            : state.data &&
                getContent(props, state.data)
            }
        </div>
    );
}

function getContent(props, item) {
    return (
        <div class='pb-4'>
            <div class='flex flx-row flex-wrap gap-4 justify-between items-center'>
                <Text theme='h1' title={`${item.name}`} />
                <Text theme='title' title={`${item.currency} ${item.price}`} />
            </div>
            <Text theme='subtitle' title={`${item.name}`} />
            <div class='flex flex-row gap-8 flex-wrap items-center'>
                <div class='relative'>
                    <div class='w-48 h-48 bg-gray-100'>
                        <img class={`${imageStyles.default} w-48`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/${props.match.params.category}-1.jpg`} />
                    </div>
                    <div class="absolute -top-4 -right-4">
                        <BadgeButton theme='yellow' title={`${item.qty}`} />
                    </div>
                </div>
                <Button theme='primary' title='Buy now' />
            </div>
            <Text theme='subtitle' title={`Item id: ${item.id}`} />
            <div class=''>
                <Text theme='normal' title={`${item.description}`} />
            </div>
            <div class='flex flex-row flex-wrap gap-2 my-4'>

            </div>
            <ul>
            </ul>
        </div>
    )
}