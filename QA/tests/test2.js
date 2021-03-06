import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import DressesPage from '../po/DressesPage.po'

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user is able to add items to the shopping cart in the list view', async t => {
    await MainPage.clickDressesTab()
    await MainPage.clickListView()
    let dressText = MainPage.getTitle2Row() //getting label dress displayed into 2nd Dress image displayed on list view
    await DressesPage.clickAddToCart()
    await DressesPage.addedSuccessMsg()
    await DressesPage.clickPrintedDress(dressText)
});

