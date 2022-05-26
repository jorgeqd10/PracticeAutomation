import { t, Selector } from "testcafe"

class CartPage {
    constructor() {
        this.emptyCartLbl = Selector('#center_column > p')

    }

    validateEmptyCartMsg = async () => {
        await t.expect(this.emptyCartLbl.innerText).contains("Your shopping cart is empty.")
    }
}

export default new CartPage()