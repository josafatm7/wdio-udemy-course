import { short, medium, long } from '../specs/lib/timeouts';
import { mobile, tablet, desktop } from '../specs/lib/devices';

describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com/');
		browser.pause(short);
		expect(browser).toHaveUrl('http://www.example.com/');
		expect(browser).toHaveTitle('Example Domain');
	});

	it('H1 tag should be visible', () => {
		//Get selector and sce it to variable
		const h1 = $('h1');
		h1.waitForExist();
		//assertion element
		expect(h1).toBeVisible();
	});

	it('p tag should be visible', () => {
		//Get selector and sce it to variable
		const p = $('p');
		p.waitForExist();
		//assertion element
		expect(p).toBeVisible();
	});

	it('Check link value', () => {
		const link = $('a');
		expect(link).toHaveLink('https://www.iana.org/domains/example');
	});

	it('Get element text', () => {
		const text = $('h1').getText();
		const h1 = $('h1');
		h1.waitForExist();
		expect(h1).toHaveText('Example Domain');
	});

	it('Assert Attribute', () => {
		browser.url('https://devexpress.github.io/testcafe/example');
		const button = $('#submit-button');
		button.waitForExist();
		expect(button).toHaveAttrContaining('type', 'submit');
	});

	it('Assert Value', () => {
		const button = $('#populate');
		button.waitForExist();
		expect(button).toHaveValue('Populate');
	});

	it('Save screenshot', () => {
		browser.saveScreenshot('first-screenshot.png');
	});

	it('Change browser viewport', () => {
		browser.setWindowSize(800, 600);
		browser.pause(1000);
	});

	it('Set mobile view', () => {
		browser.setWindowSize(mobile[0], mobile[1]);
	});

	it('Set tablet view', () => {
		browser.setWindowSize(tablet[0], tablet[1]);
	});

	it('Set desktop view', () => {
		browser.setWindowSize(desktop[0], desktop[1]);
	});
});
