import { Text } from 'components/Text'
import { Button } from 'components/Button';
import { BadgeButton } from 'components/BadgeButton';
import { useState, useEffect } from 'react';
import { fetchProduct } from 'services/ProductsApi';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { Image, localPath } from 'components/Image';

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
            <div class='flex flex-col gap-4 flex-wrap items-start pb-8'>
                <Image width='w-64 sm:w-96' height='h-64 sm:h-96' badgeTitle={`${item.qty}`} src={localPath(`${props.match.params.category}-1.jpg`)} subtitle={`Item id: ${item.id}`}/>
                <Button theme='primary' title='Buy now' />
            </div>
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