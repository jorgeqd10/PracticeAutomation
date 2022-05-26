import { Selector, t, ClientFunction } from "testcafe";

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(() => window.location);

fixture('Data Driven Demo')

test
    .page("https://the-internet.herokuapp.com/login")
    ('Login Page Validation', async t => {

        await t.maximizeWindow()
            .typeText(Selector('input#username'), "tomato")
            .typeText(Selector('input#password'), "test")
            .click('button');

        await t.expect(Selector('div#flash').innerText).contains("our username is invalid!")

    })