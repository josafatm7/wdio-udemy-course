import Base from '../Base';

class Navbar extends Base {
	get searchBox() {
		return $('#searchTerm');
	}

	get signInButton() {
		return $('#signin_button');
	}
	get navbarTab() {
		return $('.nav-tabs');
	}
	get settingsButton() {
		return $('.icon-cog');
	}

	get helpButton() {
		return $('#help_link');
	}

	signInButtonIsVisible() {
		this.signInButton.waitForExist();
	}

	searchBoxIsVisible() {
		this.searchBox.waitForExist();
	}

	clickSignIn() {
		this.signInButton.waitForExist();
		this.signInButton.click();
	}
	navbarisVisible() {
		this.navbarTab.waitForExist();
	}
	clickSettings() {
		this.settingsButton.waitForExist();
		this.settingsButton.click();
	}
	clickHelp() {
		this.helpButton.waitForExist();
		this.helpButton.click();
	}

	search(text) {
		this.searchBox.waitForExist();
		this.searchBox.setValue(text);
		browser.keys('Enter');
	}
}

export default new Navbar();
