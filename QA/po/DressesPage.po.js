import { t, Selector } from "testcafe"

const shopAddedMsg = "Product successfully added to your shopping cart"  //I was testing another way to have a message on app besides to have json file
const wrongMsg = "message displayed is wrong" //this variable was used on personal test to make sure assert was working
const printedDressTxt = "Printed Dress"

class DressesPage {
    constructor() {
        //Following selectors are working by using an attribute using as property+value or text, in case
        //there is more than one webelement having same property we can identify webelement by index
        this.image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
        this.addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
        this.printedChiffonImg = Selector('a').withAttribute('title', 'Printed Chiffon Dress').nth(1)
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)

        //Following selectors are working using CSS selector value, in case app changes then most probably we have to 
        //update them however app like automationpractice is not having constantly changes we can trust on this way
        this.Position2Img = Selector('#center_column > ul > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img')
        this.confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
        this.productLbl = Selector('#layer_cart_product_title').withText('Printed Dress')
        this.addToCartBtn2 = Selector('a').withAttribute('data-id-product', '7')
        this.contShopBtn = Selector('span').withAttribute('title', 'Continue shopping')
        this.productAddedSuccessLbl = Selector('div.layer_cart_product.col-xs-12.col-md-6 > h2')

        //Following Selectors belongs to additional personal practice please ignore
        this.userNameEdt = Selector('input#username')
        this.passwordEdt = Selector('input#password')
        this.loginBtn = Selector('button')
        this.expectedMsg = Selector('div#flash')
    }

    //Function to enter data on username field... ignore
    enterUserName = async (username) => {
        await t.typeText(this.userNameEdt, username)
    }

    //Function to enter data on password field... ignore
    enterPassword = async (password) => {
        await t.typeText(this.passwordEdt, password)
    }

    //Function to click on Login button... ignore
    clickLogin = async () => {
        await t.click(this.loginBtn)
    }

    //Function to validate expected message on the case of positive or negative scenario... ignore
    validatedExpectedMsg = async (message, scenario) => {
        await t.expect(this.expectedMsg.innerText).contains(message)
        console.log('Result of the scenario: ' + scenario + ' is ' + message)
    }

    //Function to hover Printed dress image based on title + index
    hoverPrintedDress = async () => {
        await t.hover(this.image)
    }

    //This function will click on whatever product is displayed on the 2nd row into the Dresses Page
    hoverPosition2Img = async () => {
        await t.hover(this.Position2Img)
    }

    //Function to hover Printed Chiffon dress image based on title + index
    hoverPrintedChiffon = async () => {
        await t.hover(this.printedChiffonImg)
    }

    //Function to click on "Add To Cart" button
    clickAddToCart = async () => {
        await t.click(this.addToCartBtn)
    }

    //Function to click on "Add To Cart" button displayed on second position on List View
    clickAddToCart2 = async () => {
        await t.click(this.addToCartBtn2)
    }

    //Function to click on Continue Shopping button
    clickContinueShop = async () => {
        await t.click(this.contShopBtn)
    }

    //This function validates product was added succesfully, in case there is an update on the message we can update it on variable declaration section
    addedSuccessMsg = async () => {
        var text = await this.productAddedSuccessLbl.innerText
        console.log(text)
        await t.expect(this.productAddedSuccessLbl.innerText).eql(shopAddedMsg, text)
    }

    //Function to click specifically to Printed Dress Label
    clickPrintedDress = async (text) => {
        await t.click(this.productLbl)
        await t.expect(this.productLbl.innerText).eql(printedDressTxt, text) //
        console.log(text) //Displays string of the dress making sure string was returned in a function but used as parameter on this function
    }
}

export default new DressesPage()