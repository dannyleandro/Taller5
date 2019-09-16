//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
	Given('I go to losestudiantes home screen', () => {
		browser.url('/');
		if(browser.isVisible('button=Cerrar')) {
		  browser.click('button=Cerrar');
		}
	});

	When('I open the login screen', () => {
		browser.waitForVisible('button=Ingresar', 10000);
		browser.pause(1000);
		browser.click('button=Ingresar');
	});

	When('I fill a wrong email and password', () => {
		var cajaLogIn = browser.element('.cajaLogIn');

		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys('wrongemail@example.com');

		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys('123467891')
	});

	When('I try to login', () => {
		var cajaLogIn = browser.element('.cajaLogIn');
		cajaLogIn.element('button=Ingresar').click()
	});

	Then('I expect to not be able to login', () => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
	});
	When(/^I fill with (.*) and (.*)$/ , (email, password) => {
		
		var cajaLogIn = browser.element('.cajaLogIn');

		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);

		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password)
	});

	Then('I expect to see {string}', error => {
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});
	
	When('I fill with correct information', () => {
		var cajaLogIn = browser.element('.cajaLogIn');
		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys('leandro@hurtado.com');
		
		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys('12345678')
	});
	
	Then('I expect to be able to login', () => {
		browser.waitForVisible('button[id="cuenta"]', 5000);
	});
	
	When(/^I fill with (.*) (.*) (.*) (.*) (.*) (.*) and (.*)$/ , (name, lastName, university, bachelor, termsAndConditions, email, password) => {
		var cajaSignUp = browser.element('.cajaSignUp');
		
		var nameInput = cajaSignUp.element('input[name="nombre"]');
		nameInput.click();
		nameInput.keys(name);
		
		var lastNameInput = cajaSignUp.element('input[name="apellido"]');
		lastNameInput.click();
		lastNameInput.keys(lastName);
				
		var mailInput = cajaSignUp.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);

		var passwordInput = cajaSignUp.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password);
		
		var universityInput = cajaSignUp.element('select[name="idUniversidad"]');
		universityInput.click();
		universityInput.keys(university);
		
		var bachelorInput = cajaSignUp.element('select[name="idPrograma"]');
		bachelorInput.click();
		bachelorInput.keys(bachelor);
		
		var tcInput = cajaSignUp.element('input[name="acepta"]');
		if(termsAndConditions)
			tcInput.click();
	});
});