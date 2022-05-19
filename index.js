import { t, Selector, fixture } from 'testcafe'

fixture`Getting Started`
    .page`https://demoqa.com/text-box`



test('My first test case', async t => {
    const fullname = Selector('#userName')
    const email = Selector('#userEmail')
    const currentAddress = Selector('#currentAddress')
    const permanentAddress = Selector('#permanentAddress')
    const submit = Selector('#submit')

    await t.typeText(fullname, "Jorge Quiroz")
    await t.typeText(email, "jorge@gmail.com")
    await t.typeText(currentAddress, "Merida")
    await t.typeText(permanentAddress, "Nobody knows")
    await t.click(submit)
});