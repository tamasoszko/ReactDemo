import { Text } from "./Text"

export function Error(props) {
    return (
        <div class='flex flex-row h-80 text-xl gap-4 bg-red-200 items-center justify-center'>
            <Text theme='h2' title='🥺'/>
            <Text theme='title' title='Oops, something went wrong'/>  
        </div>
    )
}