import { validate } from "../src/cpf";

test("Deve retornar true quando um cpf sem pontuação é válido", function()  {
    // GIVEN
    const cpf = "71305755065"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(true)
})

test("Deve retornar true quando um cpf com pontuação é válido", function()  {
    // GIVEN
    const cpf = "713.057.550-65"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(true)
})

test("Deve retornar false quando um cpf é inválido e o resto é maior que 2", function()  {
    // GIVEN
    const cpf = "71305755066"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando um cpf é inválido e o resto é menor que 2", function()  {
    // GIVEN
    const cpf = "71305753966"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf é nulo", function()  {
    // GIVEN
    const cpf = null
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf é vazio", function()  {
    // GIVEN
    const cpf = ""
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf é apenas whitespace", function()  {
    // GIVEN
    const cpf = "\n \n"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf é false", function()  {
    // GIVEN
    const cpf = false
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf é undefined", function()  {
    // GIVEN
    const cpf = undefined
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando a cpf tem menos de 11 digitos", function()  {
    // GIVEN
    const cpf = "119"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando a cpf tem exatamente 10 digitos", function()  {
    // GIVEN
    const cpf = "1234567862"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando a cpf tem mais de 14 digitos", function()  {
    // GIVEN
    const cpf = "7130575506571305755065"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})


test("Deve retornar false quando a cpf tem exatamente 15 digitos", function()  {
    // GIVEN
    const cpf = "123456789012378"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando a cpf tem caracteres inválidos", function()  {
    // GIVEN
    const cpf = "713.057.550/65"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})

test("Deve retornar false quando o cpf tem todos os caracteres iguais", function()  {
    // GIVEN
    const cpf = "00000000000"
    // WHEN
    const result = validate(cpf)
    // THEN
    expect(result).toBe(false)
})
