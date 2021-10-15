function game(left, right) {
    return right === "rock" ? "left" : "right";
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
})