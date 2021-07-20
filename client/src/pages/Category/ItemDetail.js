import { Text } from 'components/Text'
import { dummyInventory, sampleText } from 'assets/Samples';
import { Button } from 'components/Button';
import { imageStyles} from 'styles/ImageStyles'
import { BadgeButton } from 'components/BadgeButton';

export function ItemDetail(props) {
    const categoryInfo = dummyInventory[props.match.params.category] 
    const item = categoryInfo.items[props.match.params.id]

    return (
        <div class='pb-4'>
            <div class='flex flx-row flex-wrap gap-4 justify-between items-center'>
                <Text theme='h1' title={`${item.title}`} />
                <Text theme='title' title={`${item.subtitle}`} />
            </div>
            <Text theme='subtitle' title={`${sampleText.short}`} />
            <div class='flex flex-row gap-8 flex-wrap items-center'>
                 <div class='relative'>
                    <img class={`${imageStyles.default} w-48`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/${props.match.params.category}-1.jpg`} />
                    <div class="absolute -top-4 -right-4">
                        <BadgeButton theme='yellow' title={`${item.qty}`} />
                    </div>
                 </div>
                 <Button theme='primary' title='Buy now' />
            </div>
            <Text theme='subtitle' title={`Item id: ${item.id}`} />
            <div class=''>
                <Text theme='normal' title={`${item.title} ${sampleText.long}`} />
            </div>
            <div class='flex flex-row flex-wrap gap-2 my-4'>
                <BadgeButton theme='yellow' title={`${categoryInfo.title}`} /> 
                <BadgeButton theme='yellow' title={`${item.title}`} /> 
            </div>
            <ul>
            </ul>
        </div>
    );
}