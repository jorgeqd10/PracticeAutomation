import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
const dataSet = require('../data/data2.json')

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;


dataSet.forEach(data => {
    test('Validate user retrieves a No results message when product does not exist on online store ', async t => {
        await MainPage.typeSearchField(data.seek)
        await MainPage.clickSearchBtn()
        await MainPage.validateResultMsg(data.errorMessage)
    })
});

