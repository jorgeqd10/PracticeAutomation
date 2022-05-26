import { t, Selector } from "testcafe"

const shopAddedMsg = "Product successfully added to your shopping cart"
const wrongMsg = "message displayed is wrong"
class DressesPage {
    constructor() {
        this.image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
        this.Position2Img = Selector('#center_column > ul > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img')
        this.addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
        this.confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
        this.productLbl = Selector('#layer_cart_product_title').withText('Printed Dress')
        this.image2 = Selector('a').withAttribute('title', 'Printed Chiffon Dress').nth(1)
        this.addToCartBtn2 = Selector('a').withAttribute('data-id-product', '7')
        this.contShopBtn = Selector('span').withAttribute('title', 'Continue shopping')
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)
        this.userNameEdt = Selector('input#username')
        this.passwordEdt = Selector('input#password')
        this.loginBtn = Selector('button')
        this.expectedMsg = Selector('div#flash')
        this.productAddedSuccessLbl = Selector('div.layer_cart_product.col-xs-12.col-md-6 > h2')
    }

    enterUserName = async (username) => {
        await t.typeText(this.userNameEdt, username)
    }

    enterPassword = async (password) => {
        await t.typeText(this.passwordEdt, password)
    }

    clickLogin = async () => {
        await t.click(this.loginBtn)
    }

    validatedExpectedMsg = async (message, scenario) => {
        await t.expect(this.expectedMsg.innerText).contains(message)
        console.log('Result of the scenario: ' + scenario + ' is ' + message)
    }

    hoverPrintedDress = async () => {
        await t.hover(this.image)
    }

    hoverPosition2Img = async () => {
        await t.hover(this.Position2Img)
    }

    hoverPrintedChiffon = async () => {
        await t.hover(this.image2)
    }

    clickAddToCart = async () => {
        await t.click(this.addToCartBtn)
    }

    clickAddToCart2 = async () => {
        await t.click(this.addToCartBtn2)
    }

    clickContinueShop = async () => {
        await t.click(this.contShopBtn)
    }

    addedSuccessMsg = async () => {
        var text = await this.productAddedSuccessLbl.innerText
        console.log(text)
        await t.expect(this.productAddedSuccessLbl.innerText).eql(shopAddedMsg, wrongMsg)
    }

    clickPrintedDress = async () => {
        await t.click(this.productLbl)
    }
}

export default new DressesPage()