import { t } from 'testcafe'
import MainPage from '../po/MainPage.po'
import DressesPage from '../po/DressesPage.po'

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`
    .disablePageCaching;

test('The user is able to selects a suggestion from the search box', async t => {
    await t.navigateTo('http://automationpractice.com/index.php')
    await MainPage.typeSearchField('Dresses')
    await MainPage.clickOpt1()
    //await MainPage.clickSearchIcon()
});

/*
test('The user is able to selects a suggestion from the search box', async t => {
    
    


    
    await t.click(opt1)
    await t.click(searchIcon)
});


test('The user is able to navigate to empty Cart', async t => {
    const cartBtn = Selector('a').withAttribute('title', 'View my shopping cart')
    const alertMsg = Selector('p').withAttribute('class', 'alert alert-warning')

    await t.click(cartBtn)
    await t.expect('Your shopping cart is empty.').eql('Your shopping cart is empty.', 'message displayed is wrong')
});


test('The user removes item from the shopping cart', async t => {
    const dressesTab = Selector('a').withAttribute('title', 'Dresses').nth(1)
    const gridView = Selector('.icon-th-large')
    const image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
    const image2 = Selector('a').withAttribute('title', 'Printed Chiffon Dress').nth(1)
    const addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
    const addToCartBtn2 = Selector('a').withAttribute('data-id-product', '7')
    const confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
    const contShopBtn = Selector('span').withAttribute('title', 'Continue shopping')
    const cartBtn = Selector('a').withAttribute('title', 'View my shopping cart')
    const removeBtn = Selector('a').withAttribute('class', 'ajax_cart_block_remove_link').nth(1)

    await t.click(dressesTab)
    await t.click(gridView)
    await t.hover(image2)
    await t.click(addToCartBtn2)
    await t.click(contShopBtn)
    await t.hover(image)
    await t.click(addToCartBtn)
    await t.click(contShopBtn)
    await t.hover(cartBtn)
    await t.click(removeBtn)
});
*/