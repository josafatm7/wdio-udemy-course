import Base from '../Base';

class PaymentPage extends Base {
	get Payee() {
		return $('#sp_payee');
	}
	get account() {
		return $('#sp_account');
	}
	get amount() {
		return $('#sp_amount');
	}
	get date() {
		return $('#sp_date');
	}
	get description() {
		return $('#sp_description');
	}

	get payButton() {
		return $('#pay_saved_payees');
	}
	get alertMessage() {
		return $('#alert_content');
	}

	selectPayee(value, payee) {
		this.Payee.waitForExist();
		this.Payee.selectByAttribute(value, payee);
		//this.Payee.click();
	}
	selectAccount(account) {
		this.account.waitForExist();
		this.account.selectByVisibleText(account);
	}
	selectAmount(amount) {
		this.amount.waitForExist();
		this.amount.setValue(amount);
	}
	selectDate(date) {
		this.date.waitForExist();
		this.date.setValue(date);
	}
	insertDescription(description) {
		this.description.setValue(description);
	}
	clickPayButton() {
		this.payButton.waitForExist();
		this.payButton.click();
	}
}

export default new PaymentPage();
