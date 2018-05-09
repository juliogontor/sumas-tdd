import suma from "./suma";

test('it should return 4', () => {
    const resultado = suma(1,3);
    expect(resultado).toBe(4);
})

test('it should return error message when i add 1 and -3', () => {
    const resultado = suma(1,-3);
    expect(resultado.error.message).toBe("It Can't add negative number");
})

test('it should return error message when I add 1.5 and 3', () => {
    const resultado = suma(1.5 ,3);
    expect(resultado.error.message).toBe("It Can't add float number");
})

test('it should return error message when I add an string and 3', () => {
    const resultado = suma("x",3);
    expect(resultado.error.message).toBe("It Can't add strings");
})

test('it should return error message when i add an null and 3', () => {
    const resultado = suma(null,3);
    expect(resultado.error.message).toBe("It Can't add nulls values");
})

test('it should return error message when i send no params', () => {
    const resultado = suma();
    expect(resultado.error.message).toBe("Params are required");
})

test('it should return error message when I add an object and 3', () => {
    const resultado = suma({},3);
    expect(resultado.error.message).toBe("It can't add objects");
})

test('it should return error message when I add and object and 3', () => {
    const resultado = suma(() => {},3);
    expect(resultado.error.message).toBe("It can't add functions");
})