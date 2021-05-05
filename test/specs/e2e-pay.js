'use strict';
import App from '../../page-objects/App';
import Navbar from '../../page-objects/components/navbar';
import LoginPage from '../../page-objects/pages/LoginPage';
import PaymentPage from '../../page-objects/pages/PaymentPage';
import InsideNavbar from '../../page-objects/components/InsideNavbar';

describe('E2E Test - Pay', () => {
	it('should log into application', () => {
		App.openLoginpage();
		LoginPage.login('username', 'password');
		Navbar.navbarisVisible();
	});

	it('should make payment', () => {
		InsideNavbar.clickPayBillsTab();
		PaymentPage.selectPayee('value', 'apple');
		PaymentPage.selectAccount('Loan');
		PaymentPage.selectAmount('500');
		PaymentPage.selectDate('2021-04-29');
		PaymentPage.insertDescription('This is a short description');
		PaymentPage.clickPayButton();
		const alertMessage = PaymentPage.alertMessage;
		expect(alertMessage).toHaveText('The payment was successfully submitted.');
	});
});
