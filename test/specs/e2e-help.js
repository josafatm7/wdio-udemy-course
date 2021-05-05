import App from '../../page-objects/App';
import Navbar from '../../page-objects/components/navbar';
import LoginPage from '../../page-objects/pages/LoginPage';
import HelpPage from '../../page-objects/pages/HelpPage';
import { browser } from '../../lib/config';

describe('E2E test Login/Logout flow', () => {
	it('Login with invalid credentials', () => {
		App.openLoginpage();
		LoginPage.login('username', 'password');
		Navbar.navbarisVisible();
	});

	it('should load help content', () => {
		Navbar.clickSettings();
		Navbar.clickHelp();
		const title = HelpPage.title;
		expect(title).toHaveText('How do I log into my account?');
		HelpPage.clickTrasnferFundsLink();
		expect(title).toHaveText('How do I transfer funds?');
		//browser.waitAndClick($('*=pay bills'));
		HelpPage.clickPayBillsLink();
		
		expect(title).toHaveText('How do I pay bills?');
	});
});
