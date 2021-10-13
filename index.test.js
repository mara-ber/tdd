// it function (provided by jest) to register a test
// passing name og the test (as a string) and the body of the test as a function
it("should work", () => {
    //establish expectation
    // arrange ('given') set up preconditions
    const left = 1;
    const right = 2;

    // act ('when') do some work
    const result = left + right;

    // assert ('then') make sure that work was done correctly
    expect(result).toBe(3);
});

