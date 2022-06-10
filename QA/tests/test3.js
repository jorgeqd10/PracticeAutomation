import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
const dataSet = require('../data/data4.json') //Retrieving data from data3.json file

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

dataSet.forEach(data => {
    test('The user is able to selects a suggestion from the search box', async t => {
        await MainPage.typeSearchField(data.seek)
        await MainPage.clickFirstOptList()
        await MainPage.validateCategoryBar(data.categoryPath)
    })
});

