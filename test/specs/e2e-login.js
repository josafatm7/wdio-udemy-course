import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import Navbar from '../../page-objects/components/navbar';

describe('E2E test Login/Logout flow', () => {
	it('Login with invalid credentials', () => {
		App.openHomepage();
		Navbar.clickSignIn();
		LoginPage.formIsVisible();
		LoginPage.fillForm('invalid username', 'invalid password');
		LoginPage.submitForm();
		LoginPage.pauseShort();
		const message = LoginPage.error;
		expect(message).toHaveText('Login and/or password are wrong.');
	});

	it('login wuth valid credentials', () => {
		LoginPage.formIsVisible();
		LoginPage.fillForm('username', 'password');
		LoginPage.submitForm();
		Navbar.navbarisVisible();
	});

	it('Logout from app', () => {
		App.logout();
		Navbar.signInButtonIsVisible();
	});
});
