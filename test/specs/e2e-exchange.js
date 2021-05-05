import App from '../../page-objects/App';
import Navbar from '../../page-objects/components/navbar';
import LoginPage from '../../page-objects/pages/LoginPage';

describe('E2E Tests - Currency exchange', () => {
	it('Log into the application', () => {
		App.openLoginpage();
		LoginPage.login('username', 'password');
		Navbar.navbarisVisible();
	});

	// it('Exchange currency', () => {
	// 	$('#pay_bills_tab').waitForExist();
	// 	$('#pay_bills_tab').click();
	// 	$('#tabs > ul > li:nth-child(3) > a').waitForExist();
	// 	$('#tabs > ul > li:nth-child(3) > a').click();
	// 	$('#pc_currency').waitForExist();
	// 	$('#pc_currency').selectByAttribute('value', 'GBP');
	// 	$('#pc_amount').setValue('100');
	// 	$('#pc_inDollars_true').click();
	// 	$('#purchase_cash').click();
	// 	const alertMessage = $('#alert_content');
	// 	expect(alertMessage).toHaveText(
	// 		'Foreign currency cash was successfully purchased.'
	// 	);
	// 	browser.pause(3000);
	// });
});
