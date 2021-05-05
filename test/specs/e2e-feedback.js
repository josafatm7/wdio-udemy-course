import App from '../../page-objects/App';
import FeedbackPage from '../../page-objects/pages/FeedbackPage';

describe('E2E Feedback', () => {
	it('Load feedback form', () => {
		App.openFeedbackPage();
		FeedbackPage.formIsVisible();
	});

	it('Submit feeback form', () => {
		FeedbackPage.formIsVisible();
		FeedbackPage.fillForm(
			'name',
			'example@gmail.com',
			'subject',
			'this is a message'
		);
		FeedbackPage.submitForm();
		expect(browser).toHaveUrl(
			'http://zero.webappsecurity.com/sendFeedback.html'
		);
	});
});
