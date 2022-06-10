import { t, Selector } from "testcafe"
const emptyCartMsg = "Your shopping cart is empty."

class CartPage {
    constructor() {
        this.emptyCartLbl = Selector('#center_column > p')

    }

    //Function to validate shp cart is empty, assertion is done validating text is contained into locator innertext value
    validateEmptyCartMsg = async () => {
        await t.expect(this.emptyCartLbl.innerText).contains(emptyCartMsg)
    }
}

export default new CartPage()