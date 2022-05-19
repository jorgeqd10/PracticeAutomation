import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import DressesPage from '../po/DressesPage.po'

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user is able to add items to the shopping cart in the list view', async t => {
    await t.navigateTo('http://automationpractice.com/index.php')
    await MainPage.clickdressesTab()
    await MainPage.clickListView()
    await DressesPage.clickAddToCart()
    await DressesPage.addedSuccessMsg()
    await DressesPage.clickPrintedDress()
});

