# Testes de Usuários – API ServeRest

---

## Caso de Teste 01: Cadastro de usuário via POST

**Endpoint:**  
POST /usuarios

**Pré-condição:**  
- API ServeRest disponível

**Passos:**  
1. Enviar requisição POST para /usuarios com dados válidos

**Resultado esperado:**  
- Status code 201  
- Usuário cadastrado com sucesso na API

---

## Caso de Teste 02: Consulta de usuário cadastrado via GET

**Endpoint:**  
GET /usuarios/{id}

**Pré-condição:**  
- API ServeRest disponível  
- Usuário previamente cadastrado

**Passos:**  
1. Enviar requisição GET para /usuarios/{id} com um ID válido

**Resultado esperado:**  
- Status code 200  
- Dados do usuário retornados com sucesso na API

---

## Caso de Teste 03: Atualização dos dados do usuário via PUT

**Endpoint:**  
PUT /usuarios/{id}

**Pré-condição:**  
- API ServeRest disponível  
- Usuário previamente cadastrado

**Dados de teste:**  
- Body em JSON com dados válidos para atualização do usuário

**Passos:**  
1. Enviar requisição PUT para /usuarios/{id} em JSON válido

**Resultado esperado:**  
- Status code 200  
- Dados do usuário alterados com sucesso na API

---

## Caso de Teste 04: Remoção de usuário via DELETE

**Endpoint:**  
DELETE /usuarios/{id}

**Pré-condição:**  
- API ServeRest disponível  
- Usuário previamente cadastrado

**Passos:**  
1. Enviar requisição DELETE para /usuarios/{id} com um ID válido

**Resultado esperado:**  
- Status code 200  
- Usuário removido com sucesso da API

**Pós-condição:**  
- Usuário não deve ser retornado em consultas futuras
