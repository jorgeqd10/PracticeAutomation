import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import DressesPage from '../po/DressesPage.po'

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user is able to add items to the shopping cart in the grid view', async t => {
    await MainPage.clickDressesTab()
    await MainPage.clickGridView()
    await DressesPage.hoverPosition2Img()
    await DressesPage.clickAddToCart()
    await DressesPage.addedSuccessMsg()
});

