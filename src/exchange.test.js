import exchange from "./exchange"

test('2 peso to dolar it should return 36', () => {
    const resultado = exchange("dollar",2);
    expect(resultado).toBe(36);
})

test('18 peso to dolar it should return 1', () => {
    const resultado = exchange("peso",18);
    expect(resultado).toBe(1);
})

test('2.5 dolar to peso it should return 45', () => {
    const resultado = exchange("dollar",2.5);
    expect(resultado).toBe(45);
})

test('27 peso to dolar it should return 1.5', () => {
    const resultado = exchange("peso",27);
    expect(resultado).toBe(1.5);
})

// test('3 to 3 it shoud return error ', () => {
//     const resultado = exchange(3,3);
//     expect(resultado).toBe(resultado.error.message).toBe("only can be peso or dollar");
// })

// test('3 to euro it shoud return error ', () => {
//     const resultado = exchange("euro",3);
//     expect(resultado).toBe(resultado.error.message).toBe("only can be peso or dollar");
// })
