class App {
	openHomepage() {
		browser.url('http://zero.webappsecurity.com/index.html');
	}
	openLoginpage() {
		browser.url('http://zero.webappsecurity.com/login.html');
	}
	logout() {
		browser.url('http://zero.webappsecurity.com/logout.html');
	}
	openFeedbackPage() {
		browser.url('http://zero.webappsecurity.com/feedback.html');
	}
}

export default new App();
