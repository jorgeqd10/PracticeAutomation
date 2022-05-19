import { t, Selector, fixture } from 'testcafe'

fixture`Getting Started`
    .page`http://automationpractice.com/index.php`


/*
test('The user is able to add items to the shopping cart in the grid view', async t => {
    const dressesTab = Selector('a').withAttribute('title', 'Dresses').nth(1)
    const gridView = Selector('.icon-th-large')
    const listView = Selector('.icon-th-list')
    const image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
    const addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
    const confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')

    await t.click(dressesTab)
    await t.click(listView)
    await t.click(gridView)
    await t.hover(image)
    await t.click(addToCartBtn)
    await t.expect('Product successfully added to your shopping cart').eql('Product successfully added to your shopping cart', 'message displayed is wrong')
});

test('The user is able to add items to the shopping cart in the list view', async t => {
    const dressesTab = Selector('a').withAttribute('title', 'Dresses').nth(1)
    const gridView = Selector('.icon-th-large')
    const listView = Selector('.icon-th-list')
    const image = Selector('a').withAttribute('title', 'Printed Dress').nth(2)
    const addToCartBtn = Selector('a').withAttribute('title', 'Add to cart').nth(1)
    const confirmationLbl = Selector('h2').withText('Product successfully added to your shopping cart')
    const productLbl = Selector('#layer_cart_product_title').withText('Printed Dress')

    await t.click(dressesTab)
    await t.click(listView)
    await t.click(addToCartBtn)
    await t.expect('Product successfully added to your shopping cart').eql('Product successfully added to your shopping cart', 'message displayed is wrong')
    await t.click(productLbl)
});


test('The user is able to selects a suggestion from the search box', async t => {
    const searchFld = Selector('#search_query_top')
    const opt1 = Selector('.ac_even')
    const searchIcon = Selector('button').withAttribute('name', 'submit_search')


    await t.typeText('#search_query_top', 'Dresses')
    await t.click(opt1)
    await t.click(searchIcon)
});


test('The user is able to navigate to empty Cart', async t => {
    const cartBtn = Selector('a').withAttribute('title', 'View my shopping cart')
    const alertMsg = Selector('p').withAttribute('class', 'alert alert-warning')

    await t.click(cartBtn)
    await t.expect('Your shopping cart is empty.').eql('Your shopping cart is empty.', 'message displayed is wrong')
});
*/

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