Feature: Opening the "ruta 1" screen

  Scenario: As a user I want to be able to open the "ruta 1" screen from the side menu the first time I open the app
    Given I press "Rutas"               
    When I press "Portal El Dorado >> Universidades"
    Then I should see "Recorrido: Portal El Dorado >> Universidades"