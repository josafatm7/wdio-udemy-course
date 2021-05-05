import Base from '../Base';

class InsideNavbar extends Base {
	get accountActivity() {
		return $('#account_activity_tab');
	}

	get filtersLink() {
		return $('#tabs>ul>li:nth-child(2)>a');
	}

	get paybillsTab() {
		return $('#pay_bills_tab');
	}

	clickAccountActivity() {
		this.accountActivity.waitForExist();
		this.accountActivity.click();
	}

	clickFiltersLink() {
		this.filtersLink.waitForExist();
		this.filtersLink.click();
	}
	clickPayBillsTab() {
		this.paybillsTab.waitForExist();
		this.paybillsTab.click();
	}
}

export default new InsideNavbar();
