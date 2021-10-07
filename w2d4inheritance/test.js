"use strict";
describe("String Filter", () => {
    it("Filter takes an array of banned words and returns " +
        "the string after removing all the banned words", () => {
        assert.equal("This house is not nice!".filter(["not"]), "This house is nice!");
    });
});
describe("Array BubbleSort", () => {
    it("Bubble sort is an extension on the Array prototype that sorts any array with the bubble sort algorithm", () => {
        assert.deepEqual([-2, 0, 1, 3, 4, 6]),([6, 4, 0, 3, -2, 1].bubbleSort());
    });
});
describe("Inheritance", () => {
    it("Teacher object derived from the Person class", () => {
        const me = new Teacher();
        me.initialize("Anna Bella", 26);
        expect(me instanceof Person).to.be.true;
        expect("Anna Bella, 26 years old.").to.eql(me.describe());
    });
});