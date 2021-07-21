import { MessageCard } from 'components/MessageCard';
import { Button } from 'components/Button';
import { BadgeButton } from 'components/BadgeButton';
import { Text } from 'components/Text';
import { Input } from 'components/Input';
import { linkStyles} from 'styles/LinkStyles'
import { sampleText } from 'assets/Samples'
import { Image, localPath } from 'components/Image';

export function StyleDemo() {
    const cardContent = {
        title: "Card title",
        message: sampleText.medium
      };
    
      const imagesIdx = [1, 2, 3, 4]
      
    return (
        <div className="App" class={`m-4 sm:m-16`}>
      
        <MessageCard {...cardContent} theme="darkgray"/>
        <MessageCard {...cardContent} theme="yellow"/>
        <MessageCard {...cardContent} theme="default"/>         
        <MessageCard {...cardContent} theme="white"/>    
        
        <p class='my-4 sm:my-8'>
  
          <Text title={`Heading 1 text`} theme='h1' />
          <Text title={`Heading 2 text`} theme='h2' />
          <Text title={`Title text: ${sampleText.short}`} theme='title' />
          <Text title={`Subtitle text: ${sampleText.long}`} theme='subtitle' />
          <Text title={`Normal text: ${sampleText.long}`} theme='default' />
  
        </p>
  
        <p>
          <Text title='Inputs' theme='title' />
          <div class='flex flex-row flex-wrap items-top'>
            <Input theme='default' title="Input label" subtitle='Input label subtitle text' value='Default input' placeholder='Default placeholder' /> 
            <Input theme='success' title='Enter something' subtitle='Well done.' placeholder='Success placeholder' /> 
            <Input theme='fail' title='Enter something else' subtitle='Failures reason text goes here' value='Failed input' placeholder='Failed placeholder' /> 
          </div>
        </p>
  
        <Text title='Buttons' theme='title' />
        <div class='flex flex-row flex-wrap items-top'>
          <Button theme='primary' title='Primary Button' /> 
          <Button theme='secondary' title='Secondary Button'/> 
          <Button theme='default' title='Default Button'/>
        </div>
  
        <Text title='Badges' theme='title' />
        <div class='flex flex-row items-center flex-wrap'>
          <BadgeButton theme='blue' title='42' /> 
          <BadgeButton theme='red' title='Failed'/>
          <BadgeButton theme='green' title='Ok'/> 
          <BadgeButton theme='yellow' size='large' title='Large'/>
          <BadgeButton theme='gray' size='xlarge' title='Extra large'/>
        </div>
  
        <Text title='Links' theme='title' />
        <p class='my-4 sm:my-8'>
          {sampleText.medium} <a class={linkStyles.default} href='https://apps.no'> with some link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.bold} href='https://apps.no'> with some bold link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.subtitle} href='https://apps.no'> with some subtitle link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.subtitleBold} href='https://apps.no'> with some bold subtitle link </a> {sampleText.medium}
        </p>      
  
        <Text title='Images' theme='title' />
        <div class='flex flex-col flex-wrap place-content-center gap-4'>

          <Image src={localPath('a-image-1.jpg')} frameColor='gray-50' a-width='w-80' a-height='h-80' subtitle='Broken auto x auto'/>
          <Image src={localPath('a-mage-1.jpgs')} frameColor='gray-50' width='w-96' height='h-96' subtitle='Broken 96 x 96'/>
      
          <Image src={localPath('image-1.jpg')} frameColor='gray-50' a-width='w-80' a-height='h-80' subtitle='Image auto x auto'/>
          <Image src={localPath('image-1.jpg')} frameColor='gray-50' width='w-96' a-height='h-96' subtitle='Image 96 x auto'/>
          <Image src={localPath('image-1.jpg')} frameColor='gray-50' a-width='w-96' height='h-96' subtitle='Image auto x 96'/>
          <div class='flex flew-row flex-wrap'>
            <Image src={localPath('image-1.jpg')} scaling='object-cover' width='w-80' a-height='h-96' subtitle='Scaling - cover'/>
            <Image src={localPath('image-1.jpg')} scaling='object-none' width='w-80' a-height='h-96' subtitle='Scaling - none'/>
          </div>

        </div>

      </div>
    );
} 