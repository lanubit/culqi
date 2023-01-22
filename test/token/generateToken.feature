Feature: Generar token con datos de tarjeta
  Scenario Outline: Logra generar token correctamente
    Given Envia datos de tarjeta payload <payload>
    And Todos los datos son correctos
    When Ejecuta generar token
    Then El objeto respuesta tendrá el atributo key <key>

    Examples:
        | payload                     | key   |
        | generateTokenSuccessInput   | token |

  Scenario Outline: Se envian parametros de entradas incorrectos o Bearer vacío
    Given Envia datos de tarjeta payload <payload>
    When Ejecuta generar token
    Then Se obtendrá el resultado <result> de validación

    Examples:
        | payload                       | result                          |
        | generateTokenErrorParmsInput  | generateTokenErrorParamsOutput  |
        | generateTokenSuccessInput     | generateTokenErrorBearerOutput  |

