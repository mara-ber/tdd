function game(left, right) {
    return right === "scissors"
        || (left === "scissors" && right === "rock")
        ? "right" : "left";
}


describe("rock, scissors, paper", () => {
    it("right should win for paper vs. scissors", () => {
        const left = "paper";
        const right = "scissors";

        const result = game(left, right);

        expect(result).toBe("right");
    });

    it("left should win for paper vs. rock", () => {
        const left = "paper";
        const right = "rock";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    it("left should win for scissors vs. paper", () => {
        const left = "scissors";
        const right = "paper";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    it("right should win for scissors vs. rock", () => {
        const left = "scissors";
        const right = "rock";

        const result = game(left, right);

        expect(result).toBe("right");
    });
})