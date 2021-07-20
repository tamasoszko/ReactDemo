import { MessageCard } from 'components/MessageCard';
import { Button } from 'components/Button';
import { BadgeButton } from 'components/BadgeButton';
import { Text } from 'components/Text';
import { Input } from 'components/Input';
import { linkStyles} from 'styles/LinkStyles'
import { imageStyles} from 'styles/ImageStyles'
import { sampleText } from 'assets/Samples'

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
          <div class='flex flex-row flex-wrap items-top'>
            <Input theme='default' title="Input label" subtitle='Input label subtitle text' value='Default input' placeholder='Default placeholder' /> 
            <Input theme='success' title='Enter something' subtitle='Well done.' placeholder='Success placeholder' /> 
            <Input theme='fail' title='Enter something else' subtitle='Failures reason text goes here' value='Failed input' placeholder='Failed placeholder' /> 
          </div>
        </p>
  
        <div class='flex flex-row flex-wrap items-top'>
          <Button theme='primary' title='Primary Button' /> 
          <Button theme='secondary' title='Secondary Button'/> 
          <Button theme='default' title='Default Button'/>
        </div>
  
        <div class='flex flex-row items-top'>
          <BadgeButton theme='blue' title='Bagde+' /> 
          <BadgeButton theme='yellow' title='100+'/> 
          <BadgeButton theme='red' title='Red'/>
          <BadgeButton theme='gray' title='Gray'/>
        </div>
  
        <p class='my-4 sm:my-8'>
          {sampleText.medium} <a class={linkStyles.default} href='https://apps.no'> with some link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.bold} href='https://apps.no'> with some bold link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.subtitle} href='https://apps.no'> with some subtitle link </a> {sampleText.medium}
          {sampleText.medium} <a class={linkStyles.subtitleBold} href='https://apps.no'> with some bold subtitle link </a> {sampleText.medium}
        </p>      
  
        <div class='flex flex-row flex-wrap place-content-center gap-8'>
          <img class={`${imageStyles.default} w-64`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-1.jpg`} />
          <img class={`${imageStyles.default} w-64`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-2.jpg`} />
          <img class={`${imageStyles.default} w-64`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-3.jpg`} />
          <img class={`${imageStyles.default} w-64`} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-4.jpg`} />
        </div>

      </div>
    );
} 