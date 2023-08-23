const assert = require('assert');
let homework_url = "http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx";


describe ('Pre-conditions', () => {
    beforeEach(async() => {
        await browser.setWindowSize(1920, 1080);
        await browser.url(homework_url)
    });

    it('Happy path scenario', async () => {
        await $('//*[@id="ctl00_MainContent_username"]').setValue("Tester"); // Username
        await $('//*[@id="ctl00_MainContent_password"]').setValue("test"); // Password
        await $('//*[@id="ctl00_MainContent_login_button"]').click(); // Login button
        await $('//*[@id="ctl00_menu"]/li[3]/a').click(); // clicking the "Order" tab
        await $('//*[@id="ctl00_MainContent_fmwOrder_txtQuantity"]').setValue("10"); // Quantity
        await $('//*[@id="ctl00_MainContent_fmwOrder_txtUnitPrice"]').setValue("100"); // Price for unit
        await $('//*[@id="ctl00_MainContent_fmwOrder_txtDiscount"]').setValue("8"); // Discount
        await $('//*[@id="ctl00_MainContent_fmwOrder_txtName"]').setValue("Konstantin Manokhin"); // Customer name
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox2"]').setValue("Liberty street"); // Street
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox3"]').setValue("Los Angeles"); // City
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox4"]').setValue("LA"); // State
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox5"]').setValue("12345"); // Zip
        await $('//*[@id="ctl00_MainContent_fmwOrder_cardList_0"]').click(); // Visa radio-button
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox6"]').setValue("1111444411114444"); // Card Number
        await $('//*[@id="ctl00_MainContent_fmwOrder_TextBox1"]').setValue("12/24"); // Expiration Number
        await $('//*[@id="ctl00_MainContent_fmwOrder_InsertButton"]').click(); // Process button
        await $('//*[@id="ctl00_menu"]/li[1]/a').click(); // clicking the "View all orders" tab
        await $('//*[@id="ctl00_MainContent_orderGrid"]/tbody/tr[2]/td[2]').getValue();
        await new Promise(resolve => setTimeout(resolve, 5000));
        });
    });