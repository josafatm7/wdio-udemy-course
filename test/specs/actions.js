import { short, medium, long } from '../specs/lib/timeouts';

describe('Browser actions', () => {
	it('Inputs', () => {
		browser.url('https://devexpress.github.io/testcafe/example/');
		const input = $('#developer-name');
		input.waitForExist();
		input.setValue('Josafat');
		browser.pause(short);
		input.clearValue();
		input.addValue('Melendez');
	});

	it('click actions', () => {
		const buttonPopulate = $('#populate');
		buttonPopulate.click();
		browser.pause(short);
	});

	it('Click radio button', () => {
		const radioButton = $('#linux');
		radioButton.waitForExist();
		radioButton.click();
		browser.pause(short);
	});

	it('Select box', () => {
		const select = $('#preferred-interface');
		select.waitForExist();
		select.selectByVisibleText('JavaScript API');
		browser.pause(short);
	});
});
