
import { useState } from 'react';
import 'styles/styles.css';
import { BadgeButton } from './BadgeButton';
import { Text } from './Text';

export function Image(props) {

    const w = props.width
    const h = props.height
    const frame = props.frameColor ? `p-2 bg-${props.frameColor}` : ''
    const objectContain = props.scaling ? `${props.scaling}` : 'object-contain'

    const [state, setState] = useState({
        loading: false,
        error: false,
    })

    const onError = (event) => {
        setState({
            error: true,
            loading: false,
        })
    }

    const onLoad = () => {
        setState({
            error: false,
            loading: false,
        })
    }
    let defaultW = w
    let defaultH = h
    if (!defaultH && defaultW) { 
        defaultH = defaultW.replaceAll('w-', 'h-') 
    }
    if (!defaultW && defaultH) {
        defaultW = defaultH.replaceAll('h-', 'w-')
    }
    if(!defaultW) {
        defaultW = 'w-16'
    }
    if(!defaultH) {
        defaultH = 'h-16'
    }

    return (
        <div class='flex flex-col m-2 items-center'>
            <div class={`relative ${frame} shadow-lg lg:shadow-xl justify-center`}>
                {(state.loading && defaultW && defaultH) ? 
                    <div class={`${defaultW} ${defaultH} bg-yellow-200`} /> 
                : (state.error && defaultW && defaultH) ?
                    <div class={`${defaultW} ${defaultH} bg-gray-200`} />
                :
                    <img class={`bg-gray-100 ${w} ${h} ${objectContain}`} src={`${props.src}`} onLoad={onLoad} onError={onError} />
                }
                { props.badgeTitle && 
                    <div class="absolute -top-4 -right-4">
                        <BadgeButton theme={props.badgeTheme} title={`${props.badgeTitle}`} />
                    </div>
                }
            </div>
            { props.subtitle && 
                    <div class='flex flex-row mt-4 justify-items-center'>
                        <Text theme='subtitle' title={`${props.subtitle}`} textColor='text-gray-500' />

                    </div>
            }
        </div>
    );
}

export function localPath(name) {
    return `${process.env.PUBLIC_URL}/images/${name}`
}