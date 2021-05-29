describe("FizzBuzz Challenge", () => {

    describe("Fizz", () => {
        it("Should return Fizz when input is 3", () => {
            expect(FizzBuzz(3)).toBe("Fizz");
        });

        it("Should return Fizz when input is 9", () => {
            expect(FizzBuzz(9)).toBe("Fizz");
        });
    });

    describe("Buzz", () => {
        it("Should return Buzz when input is 5", () => {
            expect(FizzBuzz(5)).toBe("Buzz");
        });

        it("Should return Buzz when input is 25", () => {
            expect(FizzBuzz(25)).toBe("Buzz");
        });
    });

    describe("FizzBuzz", () => {
        it("Should return FizzBuzz when input is 15", () => {
            expect(FizzBuzz(15)).toBe("FizzBuzz");
        });

        it("Should return FizzBuzz when input is 30", () => {
            expect(FizzBuzz(30)).toBe("FizzBuzz");
        });
    });

    describe("Not divisible by 3 or 5", () => {
        it("Should return FizzBuzz when input is 2", () => {
            expect(FizzBuzz(2)).toBe(2);
        });

        it("Should return 4 when input is 4", () => {
            expect(FizzBuzz(4)).toBe(4);
        });
    });
});
