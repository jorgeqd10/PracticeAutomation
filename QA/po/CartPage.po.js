import { t, Selector } from "testcafe"

class CartPage {
    constructor() {

    }

    emptyCartMsg = async () => {
        await t.expect('Your shopping cart is empty.').eql('Your shopping cart is empty.', 'message displayed is wrong')
    }


}

export default new CartPage()