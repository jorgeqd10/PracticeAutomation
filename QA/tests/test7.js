import { t } from 'testcafe'
import DressesPage from '../po/DressesPage.po'
const dataSet = require('../data/data.json')

fixture`Getting Started`
    .page`https://the-internet.herokuapp.com/login`
    .disablePageCaching;



dataSet.forEach(data => {
    test('Working with json file data driven ', async t => {
        //    await t.navigateTo('https://the-internet.herokuapp.com/login')
        await DressesPage.enterUserName(data.username)
        await DressesPage.enterPassword(data.password)
        await DressesPage.clickLogin()
        await DressesPage.validatedExpectedMsg(data.expectedMessage, data.scenario)

    })
});

