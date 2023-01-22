Feature: Decodificar un token que contiene informión de una tarjeta
  Scenario Outline: Logra decodificar con éxito
    Given Envia token <token> por path parametros
    When Ejecuta decodificar token
    Then Se obtendrá el resultado <result>

    Examples:
        | result                        | token                     |
        | decodeCardTokenSuccessOutput  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNhcmROdW1iZXIiOjIwMDAxMjE0NTY3ODkwMTUsImN2diI6MTIzLCJleHBpcmF0aW9uTW9udGgiOiIxMiIsImV4cGlyYXRpb25ZZWFyIjoiMjAyOCIsImVtYWlsIjoiZW1pQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NzQ0MjQ5MTJ9.drqFrp8G2IJXJcXd_NM5w5eM4EXONFiT3Hm2Ili0d2w   |

  Scenario Outline: Se tienen problemas para desencriptar el token
    Given Envia token <token> por path parametros
    When Ejecuta decodificar token
    Then Se obtendrá el resultado <result>

    Examples:
        | result                            | token                     |
        | decodeCardTokenExpiredErrorOutput | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNhcmROdW1iZXIiOjIwMDAxMjE0NTY3ODkwMTUsImN2diI6MTIzLCJleHBpcmF0aW9uTW9udGgiOiIxMiIsImV4cGlyYXRpb25ZZWFyIjoiMjAyOCIsImVtYWlsIjoiZW1pQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NzQ0MjUyOTcsImV4cCI6MTY3NDQyNTM1N30.-9yJ86glYxIis612l9i8lngnvlc5OEwgkXwfuEXs5uo   |
        | decodeCardTokenInvalidErrorOutput | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC.eyJwYXlsb2FkIjp7ImNhcmROdW1iZXIiOjIwMDAxMjE0NTY3ODkwMTUsImN2diI6MTIzLCJleHBpcmF0aW9uTW9udGgiOiIxMiIsImV4cGlyYXRpb25ZZWFyIjoiMjAyOCIsImVtYWlsIjoiZW1pQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NzQ0MjUyOTcsImV4cCI6MTY3NDQyNTM1N30.-9yJ86glYxIis612l9i8lngnvlc5OEwgkXwfuEXs5uo   |
