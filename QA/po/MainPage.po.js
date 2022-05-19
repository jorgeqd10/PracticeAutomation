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
        this.opt1 = Selector('.ac_even')
        this.searchIcon = Selector('button').withAttribute('name', 'submit_search')
        this.shoppingCartBtn = Selector('a').withAttribute('title', 'View my shopping cart')
        this.removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)
    }

    clickdressesTab = async () => {
        await t.click(this.dressesTab)
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

    clickOpt1 = async () => {
        await t.click(this.opt1)
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


}

export default new MainPage()