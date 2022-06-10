import { t, Selector } from "testcafe"

class MainPage {
    constructor() {
        //Following selectors are working using CSS selector value, in case app changes then most probably we have to 
        //update them however app like automationpractice is not having constantly changes we can trust on this way
        this.gridView = Selector('.icon-th-large')
        this.listView = Selector('.icon-th-list')
        this.searchFld = Selector('#search_query_top')
        this.opt1List = Selector('div.ac_results > ul > li:first-child')
        this.categoryBar = Selector('#columns > div.breadcrumb.clearfix')
        this.shoppingCartBtn = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b')
        this.noResultMsg = Selector('#center_column > p')
        this.searchBtn = Selector('#searchbox > button')
        this.resultFirstSquareLbl = Selector('li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > h5 > a')
        this.firstListResultName = Selector('#center_column > ul > li > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > h5 > a')
        this.firstListResultDescription = Selector('#center_column > ul > li > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > p')
        this.firstListResultPrice = Selector('#center_column > ul > li > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.content_price.col-xs-5.col-md-12 > span')
        this.cartElement = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')
        this.titleSecondRow = Selector('#center_column > ul > li:nth-child(2) > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > h5 > a')

        //Following selectors are working by using an attribute using as property+value or text, in case
        //there is more than one webelement having same property we can identify webelement by index 
        this.dressesTab = Selector('a').withAttribute('title', 'Dresses').nth(1)
        this.image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
        this.addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)
        this.confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
        this.searchIcon = Selector('button').withAttribute('name', 'submit_search')
    }

    //Function to validate data product is displayed correctly and calculate produc price + 2 for shipping
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

    getTitle2Row = async () => {
        var text1 = await this.titleSecondRow.innerText
        console.log(text1)
        return text1
    }

    //Function to display how many products are on cart before next action
    validateNumberProductsCart = async () => {
        var text = await this.cartElement.innerText
        console.log("Display how many products are in the cart:" + text)
    }

    //Function to click on specific path of the dress
    validateCategoryBar = async (category) => {
        var text = await this.categoryBar.innerText
        console.log(text)
        await t.expect(this.categoryBar.innerText).contains(category)
    }

    //Function to validate 
    validateFirstProductName = async (productName) => {
        await t.expect(this.resultFirstSquareLbl.innerText).contains(productName)
    }

    //Function to click on Search button
    clickSearchBtn = async () => {
        await t.click(this.searchBtn)
    }

    //Function to validate message displayed
    validateResultMsg = async (message) => {
        await t.expect(this.noResultMsg.innerText).contains(message)
    }

    //Function to click on Grid View option
    clickGridView = async () => {
        await t.click(this.gridView)
    }

    //Function to click on List View option
    clickListView = async () => {
        await t.click(this.listView)
    }

    //Function to enter string on Search field
    typeSearchField = async (text) => {
        await t.typeText(this.searchFld, text)
    }

    //Function to click on first option of the dropdown displayed on Search field
    clickFirstOptList = async () => {
        await t.wait(2000)
        await t.click(this.opt1List)
    }

    //Function to click Search Icon personal exercise please ignore
    clickSearchIcon = async () => {
        await t.click(this.searchIcon)
    }

    //Function to click on Shopping Cart button
    clickShoppingCartBtn = async () => {
        await t.click(this.shoppingCartBtn)
    }

    //Function to hover mouse over Shopping Cart button
    hoverShoppingCart = async () => {
        await t.hover(this.shoppingCartBtn)
    }

    //Function to click remove button
    clickRemoveBtn = async () => {
        await t.click(this.removeBtn)
    }

    //Function to click on Dresses tab
    clickDressesTab = async () => {
        await t.click(this.dressesTab)
    }
}

export default new MainPage()