import { Text } from '../components/Text'
import { sampleText } from '../assets/Samples';

export function About() {
    return (
        <div class='mx-4 mb-4'>
            <Text textStyle='h1' title='React Demo' />
            <Text textStyle='title' title='v0.0.1' />
            <Text textStyle='subtitle' title={sampleText.short} />
        </div>
    );
}