import { t, Selector } from "testcafe"

class MainPage {
    constructor() {
        this.dressesTab = Selector('a').withAttribute('title', 'Dresses').nth(1)
        this.gridView = Selector('.icon-th-large')
        this.listView = Selector('.icon-th-list')
        this.image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
        this.addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
        this.confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
        this.searchFld = Selector('#search_query_top')
        this.opt1List = Selector('div.ac_results > ul > li:first-child')
        this.categoryBar = Selector('#columns > div.breadcrumb.clearfix')
        this.searchIcon = Selector('button').withAttribute('name', 'submit_search')
        this.shoppingCartBtn = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b')
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)
        this.noResultMsg = Selector('#center_column > p')
        this.searchBtn = Selector('#searchbox > button')
        this.resultFirstSquareLbl = Selector('li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > h5 > a')
        this.firstListResultName = Selector('#center_column > ul > li > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > h5 > a')
        this.firstListResultDescription = Selector('#center_column > ul > li > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > p')
        this.firstListResultPrice = Selector('#center_column > ul > li > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.content_price.col-xs-5.col-md-12 > span')
        this.cartElement = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')

    }

    validateListFirstProductData = async (productName, productDescription, productPrice) => {
        await t.expect(this.firstListResultName.innerText).contains(productName)
        await t.expect(this.firstListResultDescription.innerText).contains(productDescription)
        await t.expect(this.firstListResultPrice.innerText).contains(productPrice)
        var text = await Selector('#center_column > ul > li > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.content_price.col-xs-5.col-md-12 > span').innerText
        console.log(text)
        text = text.substring(1);
        text = parseFloat(text)
        text = text + 2.00
        console.log(text)

    }

    validateNumberProductsCart = async () => {
        var text = await this.cartElement.innerText
        console.log("Display how many products are in the cart:" + text)

    }

    validateCategoryBar = async (category) => {
        var text = await this.categoryBar.innerText
        console.log(text)
        await t.expect(this.categoryBar.innerText).contains(category)
    }

    validateFirstProductName = async (productName) => {
        await t.expect(this.resultFirstSquareLbl.innerText).contains(productName)
    }

    clickSearchBtn = async () => {
        await t.click(this.searchBtn)
    }

    validateResultMsg = async (message) => {
        await t.expect(this.noResultMsg.innerText).contains(message)
    }

    clickGridView = async () => {
        await t.click(this.gridView)
    }

    clickListView = async () => {
        await t.click(this.listView)
    }

    typeSearchField = async (text) => {
        await t.typeText(this.searchFld, text)
    }

    clickFirstOptList = async () => {
        await t.wait(2000)
        await t.click(this.opt1List)
    }

    clickSearchIcon = async () => {
        await t.click(this.searchIcon)
    }

    clickShoppingCartBtn = async () => {
        await t.click(this.shoppingCartBtn)
    }

    hoverShoppingCart = async () => {
        await t.hover(this.shoppingCartBtn)
    }

    clickRemoveBtn = async () => {
        await t.click(this.removeBtn)
    }

    clickDressesTab = async () => {
        await t.click(this.dressesTab)
    }


}

export default new MainPage()