const { senhasConferem } = require("../js/validador");

test("senhas conferem corretamente", () => {
    expect(senhasConferem("123", "123")).toBe(true);
});

test("senhas diferentes retornam false", () => {
    expect(senhasConferem("123", "321")).toBe(false);
});
