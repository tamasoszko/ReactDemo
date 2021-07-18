
import './styles/styles.css';
import { MessageCard } from './components/MessageCard';
import { Button } from './components/Button';
import { BadgeButton } from './components/BadgeButton';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { linkStyles} from './styles/LinkStyles'
import { imageStyles} from './styles/ImageStyles'
import { sampleText } from './assets/Samples'

function App() {

  const cardContent = {
    title: "Card title",
    message: sampleText.medium
  };

  const imagesIdx = [1, 2, 3, 4]

  return (
    <div className="App" class={`m-4 sm:m-16`}>
      
      <MessageCard {...cardContent} cardStyle="darkgray"/>
      <MessageCard {...cardContent} cardStyle="yellow"/>
      <MessageCard {...cardContent} cardStyle="default"/>         
      <MessageCard {...cardContent} cardStyle="white"/>    
      
      <p class='my-4 sm:my-8'>

        <Text title={`Heading 1 text`} textStyle='h1' />
        <Text title={`Heading 2 text`} textStyle='h2' />
        <Text title={`Title text: ${sampleText.short}`} textStyle='title' />
        <Text title={`Subtitle text: ${sampleText.long}`} textStyle='subtitle' />
        <Text title={`Normal text: ${sampleText.long}`} textStyle='default' />

      </p>

      <p>
        <div class='flex flex-row flex-wrap items-top'>
          <Input inputStyle='default' title="Input label" subtitle='Input label subtitle text' value='Default input' placeholder='Default placeholder' /> 
          <Input inputStyle='success' title='Enter something' subtitle='Well done.' placeholder='Success placeholder' /> 
          <Input inputStyle='fail' title='Enter something else' subtitle='Failures reason text goes here' value='Failed input' placeholder='Failed placeholder' /> 
        </div>
      </p>

      <div class='flex flex-row flex-wrap items-top'>
        <Button buttonStyle='primary' title='Primary Button' /> 
        <Button buttonStyle='secondary' title='Secondary Button'/> 
        <Button buttonStyle='default' title='Default Button'/>
      </div>

      <div class='flex flex-row items-top'>
        <BadgeButton buttonStyle='blue' title='Bagde+' /> 
        <BadgeButton buttonStyle='yellow' title='100+'/> 
        <BadgeButton buttonStyle='red' title='Red'/>
        <BadgeButton buttonStyle='gray' title='Gray'/>
      </div>

      <p class='my-4 sm:my-8'>
        {sampleText.medium} <a class={linkStyles.default} href='https://apps.no'> with some link </a> {sampleText.medium}
        {sampleText.medium} <a class={linkStyles.bold} href='https://apps.no'> with some bold link </a> {sampleText.medium}
        {sampleText.medium} <a class={linkStyles.subtitle} href='https://apps.no'> with some subtitle link </a> {sampleText.medium}
        {sampleText.medium} <a class={linkStyles.subtitleBold} href='https://apps.no'> with some bold subtitle link </a> {sampleText.medium}
      </p>      

      <img class={imageStyles.default} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-1.jpg`} />
      <img class={imageStyles.default} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-2.jpg`} />
      <img class={imageStyles.default} alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-3.jpg`} />
      <img alt='Sorry :(' src={`${process.env.PUBLIC_URL}/images/image-4.jpg`} />

    </div>
  );
}

export default App;
