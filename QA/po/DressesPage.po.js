import { t, Selector } from "testcafe"

class DressesPage {
    constructor() {
        this.image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
        this.addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
        this.confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
        this.productLbl = Selector('#layer_cart_product_title').withText('Printed Dress')
        this.image2 = Selector('a').withAttribute('title', 'Printed Chiffon Dress').nth(1)
        this.addToCartBtn2 = Selector('a').withAttribute('data-id-product', '7')
        this.contShopBtn = Selector('span').withAttribute('title', 'Continue shopping')
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)
    }

    hoverPrintedDress = async () => {
        await t.hover(this.image)
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
        await t.expect('Product successfully added to your shopping cart').eql('Product successfully added to your shopping cart', 'message displayed is wrong')
    }

    clickPrintedDress = async () => {
        await t.click(this.productLbl)
    }
}

export default new DressesPage()