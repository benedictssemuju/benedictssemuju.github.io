"use strict";
describe("String Filter", () => {
    it("Filter takes an array of banned words and returns " +
        "the string after removing all the banned words", () => {
        assert.equal("This house is not nice!".filter("not"), "This house is nice!");
    });
});
describe("Array BubbleSort", () => {
    it("Bubble sort is an extension on the Array prototype that sorts any array with the bubble sort algorithm", () => {
        expect([-2, 0, 1, 3, 4, 6]).to.eql([6, 4, 0, 3, -2, 1].bubbleSort());
    });
});
describe("Inheritance", () => {
    it("Teacher object derived from the Person class", () => {
        const me = new Teacher();
        me.initialize("Albert Einstein", 58);
        expect(me instanceof Person).to.be.true;
        expect("Albert Einstein, 58 years old.").to.eql(me.describe());
    });
});