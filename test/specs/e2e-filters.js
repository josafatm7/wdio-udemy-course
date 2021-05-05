import InsideNavbar from '../../page-objects/components/insideNavbar';
import FiltersPage from '../../page-objects/pages/FiltersPage';
import App from '../../page-objects/App';
import Navbar from '../../page-objects/components/navbar';
import LoginPage from '../../page-objects/pages/LoginPage';

describe('E2E Test - Transactions  Filter', () => {
	it('should log into application', () => {
		App.openLoginpage();
		LoginPage.login('username', 'password');
		Navbar.navbarisVisible();
	});

	it('Transaction Filter should work', () => {
		InsideNavbar.clickAccountActivity();
		InsideNavbar.clickFiltersLink();
		FiltersPage.fillDescription('text for desscription');
		FiltersPage.submitFilter();
		FiltersPage.reslultsTableIsVisible();
		const message = FiltersPage.message;
		expect(message).toHaveText('No results.');
	});
});
