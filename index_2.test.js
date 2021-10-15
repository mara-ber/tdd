function game(left, right) {
    return (
        (left === "rock" && right === "scissors")
        || (left === "scissors" && right === "paper")
        || (left === "paper" && right === "rock")
    )
        ? "left" : "right";
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

    it("left should win for rock vs. scissors", () => {
        const left = "rock";
        const right = "scissors";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    it("right should win for rock vs. paper", () => {
        const left = "rock";
        const right = "paper";

        const result = game(left, right);

        expect(result).toBe("right");
    });
})