import { Text } from '../components/Text'
import { sampleText } from '../assets/Samples';

export function Home() {
    return (
        <div class='mx-4 mb-4'>
            <Text textStyle='h1' title='Welcome!' />
            <Text textStyle='Normal' title={sampleText.long} />
        </div>
    );
}