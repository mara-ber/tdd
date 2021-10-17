function game(left, right) {
    if (left === right) {
        return "draw";
    }
    return (
        (left === "rock" && right === "scissors")
        || (left === "scissors" && right === "paper")
        || (left === "paper" && right === "rock")
        || (left === "spock" && right === "scissors")
        || (left === "spock" && right === "rock")
        || left === "lizard"
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

    it("left should win for spock vs. scissors", () => {
        const left = "spock";
        const right = "scissors";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    it("left should win for spock vs. rock", () => {
        const left = "spock";
        const right = "rock";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    it("right should win for spock vs. lizard", () => {
        const left = "spock";
        const right = "lizard";

        const result = game(left, right);

        expect(result).toBe("right");
    });

    it("right should win for spock vs. paper", () => {
        const left = "spock";
        const right = "paper";

        const result = game(left, right);

        expect(result).toBe("right");
    });

    it("right should win for scissors vs. spock", () => {
        const left = "scissors";
        const right = "spock";

        const result = game(left, right);

        expect(result).toBe("right");
    });

    it("right should win for rock vs. spock", () => {
        const left = "rock";
        const right = "spock";

        const result = game(left, right);

        expect(result).toBe("right");
    });

    it("left should win for lizard vs. spock", () => {
        const left = "lizard";
        const right = "spock";

        const result = game(left, right);

        expect(result).toBe("left");
    });

    ["paper", "scissors", "rock"].forEach((both) => {
        it(`should say draw for ${both} vs. ${both}`, () => {
            expect(game(both, both)).toBe("draw");
        });
    });
})