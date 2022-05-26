import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import DressesPage from '../po/DressesPage.po'
import CartPagePo from '../po/CartPage.po';

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user removes item from the shopping cart', async t => {
    await t.navigateTo('http://automationpractice.com/index.php')
    await MainPage.clickDressesTab()
    await MainPage.clickGridView()
    await DressesPage.hoverPrintedChiffon()
    await DressesPage.clickAddToCart2()
    await DressesPage.clickContinueShop()
    await DressesPage.hoverPrintedDress()
    await DressesPage.clickAddToCart()
    await DressesPage.clickContinueShop()
    await MainPage.validateNumberProductsCart()
    await MainPage.hoverShoppingCart()
    await MainPage.clickRemoveBtn()
    await MainPage.validateNumberProductsCart()
    await MainPage.clickShoppingCartBtn()

});

