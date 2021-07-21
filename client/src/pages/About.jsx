import { Text } from 'components/Text'
import { sampleText } from 'assets/Samples';

export function About() {
    return (
        <div class='mx-4 mb-4'>
            <Text theme='h1' title='React Demo' />
            <Text theme='title' title='v0.0.1' />
            <Text theme='subtitle' title={sampleText.short} />
        </div>
    );
}