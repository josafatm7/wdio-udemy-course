'use strict';
import App from '../../page-objects/App';
import Navbar from '../../page-objects/components/navbar';
import ResultsPage from '../../page-objects/pages/ResultsPage';

describe('E2E Test - Search', () => {
	it('Load Homepage', () => {
		App.openHomepage();
		Navbar.searchBoxIsVisible();
	});

	it('submit search box', () => {
		Navbar.search('Bank');
		const resultsTitle = ResultsPage.resultsTitle;
		ResultsPage.resultsTitleIsVisible();
		expect(resultsTitle).toHaveText('Search Results:');
	});
});
