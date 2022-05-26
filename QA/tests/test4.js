import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import CartPagePo from '../po/CartPage.po'


fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user is able to navigate to empty Cart', async t => {
    await MainPage.clickShoppingCartBtn()
    await CartPagePo.validateEmptyCartMsg()
});

