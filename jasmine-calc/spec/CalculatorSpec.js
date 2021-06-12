describe("Calculator", () => {

    const calc =  new Calc();

    describe("Sum", () => {
        it("Should get the sum of the two numbers right", () => {
            const sumResult = calc.sum(10, 2);
            expect(sumResult).toBe(12);
            expect(sumResult).toBeInstanceOf(Number);
        });
    });

    describe("Subtraction", () => {
        it("Should get the subtraction of the two numbers right", () => {
            const subtrResult = calc.subtr(10, 2);

            expect(subtrResult).toBe(8);
            expect(subtrResult).toBeInstanceOf(Number);
        });
    });

    describe("Multiplication", () => {
        it("Should get the multiplication of the two numbers right", () => {
            const multResult = calc.mult(10, 3);

            expect(multResult).toBe(30)
            expect(multResult).toBeInstanceOf(Number);
        });
    });


    describe("Division", () => {
        it("Should get the division of the two numbers right", () => {
            const divResult = calc.divide(50, 10);

            expect(divResult).toBe(5);
            expect(divResult).toBeInstanceOf(Number);
        });
    });
});
