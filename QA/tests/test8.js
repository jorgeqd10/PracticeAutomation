import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
const dataSet = require('../data/data3.json')

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

dataSet.forEach(data => {
    test('Validate data of the products is correctly displayed ', async t => {
        await MainPage.typeSearchField(data.seek)
        await MainPage.clickSearchBtn()
        await MainPage.clickListView()
        await MainPage.validateListFirstProductData(data.seek, data.description, data.price)
    })
});

