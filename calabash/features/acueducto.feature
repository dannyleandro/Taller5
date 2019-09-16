Feature: Opening the "acueducto" screen

  Scenario: As a user I want to be able to open the "ruta 1" screen from the side menu the first time I open the app
    Given I press "Paraderos"
	When I swipe right	
    And I press "Acueducto"
    Then I should see "Lomitas y Capilla"