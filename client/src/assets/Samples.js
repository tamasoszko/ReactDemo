
const fullLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget aliquet nibh praesent tristique magna sit amet. Tortor pretium viverra suspendisse potenti nullam ac. Et odio pellentesque diam volutpat commodo. Sit amet justo donec enim diam vulputate ut pharetra. Arcu dictum varius duis at consectetur lorem donec massa sapien. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Lacinia at quis risus sed vulputate odio ut enim. Arcu non sodales neque sodales ut etiam sit amet nisl. Diam in arcu cursus euismod quis viverra nibh. Augue mauris augue neque gravida. Sem integer vitae justo eget magna. Et odio pellentesque diam volutpat commodo. Massa eget egestas purus viverra. Nunc faucibus a pellentesque sit amet porttitor eget. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Turpis massa tincidunt dui ut ornare lectus sit amet. Pulvinar sapien et ligula ullamcorper malesuada proin. Neque gravida in fermentum et sollicitudin. Commodo viverra maecenas accumsan lacus. Congue eu consequat ac felis donec et odio pellentesque diam. Fringilla phasellus faucibus scelerisque eleifend donec pretium."


const dummyPhones = [
    'iPhone XS', 
    'iPhone XS Pro', 
    'iPhone 8', 
    'iPhone 8 plus', 
    'iPhone SE', 
    'Samsung Galaxy S10',
    'Samsung Galaxy S20',
    'Samsung Galaxy S20+',
    'Samsung Galaxy Fold'
]

const dummyTablets = [
    'Apple iPad', 
    'Apple iPad Pro', 
    'Apple iPad Air', 
    'Samsung Galaxy Tab X',
]

const dummyAccessories = [
    'Apple Airpod', 
    'Apple Charger', 
    'Apple iPhone case', 
    'Samsung Charger',
    'Android universal charger',
]

 function getDummyItems(names, basePrice, interval) { 
    let dict = {}
    names.forEach((item, index) => {
        const id = `${index + 1}`
        const price = basePrice + Math.floor(Math.random() * interval)
        const qty = 1 + Math.floor(Math.random() * 100)
        dict[id] = {id: `${id}`, title: `${item}`, subtitle: `${price},-`, qty: qty}
    })
    return dict
}

export const dummyInventory = { 
    'mobilephones': {items: getDummyItems(dummyPhones, 500, 500), title: 'Phones' },
    'tablets': {items: getDummyItems(dummyTablets, 1000, 1000), title: 'Tablets'},
    'accessories': {items: getDummyItems(dummyAccessories, 50, 100), title: 'Accessories'},
}

export const sampleText = {
    long: fullLoremIpsum,
    medium: fullLoremIpsum.substring(0, 148),
    short: fullLoremIpsum.substring(0, 26),
};