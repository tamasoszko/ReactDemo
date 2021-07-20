import { Text } from 'components/Text'
import { sampleText } from 'assets/Samples';

export function Accessories() {
    return (
        <div class='mx-4 mb-4'>
            <Text theme='h1' title='Accessories' />
            <ul>
                <li><Text theme='Normal' title='Apple accessories' /></li>
                <li><Text theme='Normal' title='Samsung accessories' /></li>
                <li><Text theme='Normal' title='Other Android accessories' /></li>
            </ul>
        </div>
    );
}