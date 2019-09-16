Feature: Register into losestudiantes
    As a user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> <lastName> <university> <bachelor> <email> <termsAndConditions> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
	| name	| lastName	| university				| bachelor	| email            	| termsAndConditions 	| password | error                    |
    | 		| Apellido	| 'Universidad de los Andes'| Arte		| miso@gmail.com	| True					|    1234  | Ingresa una contraseña   |
    | Nombre|			| 'Universidad de los Andes'| Arte		| miso@gmail.com   	| True					|    1234  | Upss! El correo y        |