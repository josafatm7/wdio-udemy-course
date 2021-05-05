import Base from '../Base';

class ResultsPage extends Base {
	get resultsTitle() {
		return $('h2');
	}
	resultsTitleIsVisible() {
		this.resultsTitle.waitForExist();
	}
}
export default new ResultsPage();
