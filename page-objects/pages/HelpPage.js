import Base from '../Base';

class HelpPage extends Base {
	get title() {
		return $('.span8>h3');
	}

	get trasnferFundsLink() {
		return $('*=transfer funds');
	}

	get payBillsLink() {
		return $('*=pay bills');
	}

	clickTrasnferFundsLink() {
		this.trasnferFundsLink.waitForExist();
		this.trasnferFundsLink.click();
	}

	clickPayBillsLink() {
		browser.waitAndClick($('*=pay bills'));
		//this.payBillsLink.waitForExist();
		//this.payBillsLink.click();
	}
}

export default new HelpPage();
