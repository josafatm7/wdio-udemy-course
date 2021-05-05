import Base from '../Base';

class FiltersPage extends Base {
	get description() {
		return $('#aa_description');
	}

	get submitButton() {
		return $('button[type="submit"]');
	}

	get resultsTable() {
		return $('#filtered_transactions_for_account');
	}

	get message() {
		return $('.well');
	}

	fillDescription(text) {
		this.description.waitForExist();
		this.description.setValue(text);
	}

	submitFilter() {
		this.submitButton.waitForExist();
		this.submitButton.click();
	}
	reslultsTableIsVisible() {
		this.resultsTable.waitForExist();
	}
}

export default new FiltersPage();
