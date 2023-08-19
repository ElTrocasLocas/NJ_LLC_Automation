const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
   
    await page.goto('https://www.njportal.com/DOR/BusinessFormation/CompanyInformation/BusinessName');
    await page.waitForTimeout(3000);
    try {
        await page.select( '#BusinessType', '5' ); 
    } catch (error) {
        console.log('No se pudo seleccionar el tipo de compania');}
    try {
        await page.type('#BusinessName','DIEGOCABRERAESGAY');
    } catch (error) {
     console.log("No se pudo escribir el nombre de la compania");
    } 
    await page.click('body > div.container-fluid.content-area > div > div.span10 > div > div > form > div.form-actions > input');
    await page.waitForTimeout(3000);
    await page.select( '#BusinessNameDesignator', 'LLC' );
    await page.waitForTimeout(2500);
    await page.click('body > div.container-fluid.content-area > div > div.span10 > div > form > div.form-actions > input');
    await page.waitForTimeout(2500);
    await page.click('#btnSubmit');
    await page.waitForTimeout(5000);
    await page.click('#BusinessPurpose');
    await page.waitForTimeout(2000);
    try {
        await page.type('#BusinessPurpose','Real estate');
    } catch (error) {
        await page.waitForTimeout(30000);
        console.log('Business purpose failed, please add the purpose and press next to continue');
    }
    await page.waitForTimeout(2000);
    try {
        await page.click('#btnSubmit');
    } catch (error)  {
        console.log('error')
    }
    await page.waitForTimeout(5500);
    await page.type('#BusinessAddressLine1','420 Blaze it St');
    await page.waitForTimeout(1500);
    await page.type('#City','Snoop Dog');
    await page.waitForTimeout(1500);
    await page.select( '#State', 'New Jersey' );
    await page.waitForTimeout(1500);
    await page.type('#Zip','07420');
    await page.waitForTimeout(3000);
    try {
        await page.click('#main-bus-addr-form > div.form-actions > input');
    } catch (error) {
        await page.waitForTimeout(30000);
        console.log('automation failed');
    }
    await page.waitForTimeout(3000);
    try {
        await page.click('#ra-num-link > a');
    } catch (error) {}
    await page.waitForTimeout(5000);
    await page.type('#RegisteredAgentName','Juan Perez');
    await page.waitForTimeout(1000);
    await page.type('#RegisteredAgentEmail','ElVenadoElVenado@mail.com');
    await page.waitForTimeout(1000);
    await page.type('#OfficeAddress1','420 Blaze it St');
    await page.waitForTimeout(1000);
    await page.type('#OfficeCity','Snoop Dog');
    await page.waitForTimeout(1000);
    await page.type('#OfficeZip','07420');
    await page.waitForTimeout(1000);
    await page.click('#Attested');
    await page.waitForTimeout(1000);
    await page.click('#info-form > div.form-actions > input');
    await page.waitForTimeout(3000);
    await page.click('#add-member-btn');
    await page.waitForTimeout(2000);
    await page.type('#Name','Juan Perez');
    await page.waitForTimeout(1000);
    await page.type('#StreetAddress1','420 Blaze it St');
    await page.waitForTimeout(1000);
    await page.type('#City','Snoop Dog');
    await page.waitForTimeout(1000);
    await page.select( '#State', 'New Jersey' );
    await page.waitForTimeout(1000);
    await page.type('#Zip','07420');
    await page.waitForTimeout(3000);
    await page.click('#new-person-form > div.form-actions > input');
    await page.waitForTimeout(3000);
    await page.click('#continue-btn');
    await page.waitForTimeout(3000);
    await page.click('#additional-info-form > div > input');
    await page.waitForTimeout(3000);
    await page.click('#add-signer-btn');
    await page.waitForTimeout(3000);
    await page.type('#Name','Lalo Vette');
    await page.waitForTimeout(1000);
    await page.select( '#Title', 'Authorized Representative' );
    await page.waitForTimeout(1000);
    await page.click('#modal-save-btn');
    await page.waitForTimeout(2000);
    await page.click('#sign-ckbx-0');
    await page.waitForTimeout(1000);
    await page.click('#continue-btn');
    await page.waitForTimeout(6000);
    try {
        await page.click('##body > div.container-fluid.content-area > div > div.span10 > div > div > form > div.form-actions > input');
    } catch (error) {
        console.log('automation ubable to click continue button, please click the continue button'); //Still unable to click this button
        await page.waitForTimeout(10000);
    }
    await page.waitForTimeout(5000);
    await page.type('#FirstName','El Dustin');
    await page.waitForTimeout(1000);
    await page.type('#LastName','Rey');
    await page.waitForTimeout(1000);
    try {
        await page.type('#PhoneNumber','(888)462-3453');
    } catch (error) {
        console.log('Please put the phone number manually');
        await page.waitForTimeout(10000);
    }
    await page.waitForTimeout(1000);
    try {
        await page.select( '#ddlPayment', 'CreditCard' );
    } catch (error) {
        console.log('Please select the card manually');
        await page.waitForTimeout(10000);
    }
    await page.waitForTimeout(1000);
    try {
        await page.click('#body > div.container-fluid.content-area > div > div.span10 > div > form > div > div.form-actions > input');
    } catch (error) { 
        console.log('Pay Now button failed please click manually'); // Still unable to click this button
        await page.waitForTimeout(10000);  
    }
    await page.waitForTimeout(6000);

    // This part is for the payment and I don't want to pay by mistake so here we stop

    await page.screenshot({ path: 'Receipt.png'});
    await page.waitForTimeout(6000);
    await browser.close();
}
    
   )();
