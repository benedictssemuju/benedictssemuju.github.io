"use strict"
describe("arithmetic operations",()=>{
    describe("sum", ()=> {
    it("adds up numbers in an array", ()=> {
      assert.equal(10,sum([3,2,5]));
    });
  
});

describe("multiply",()=>{
    it("multiplies number in an array",()=>{
        assert.equal(24,multiply([2,3,4]))
    });

});

describe("reverse",()=>{
    it("reverses a string",()=>{
        assert.equal("lennut",reverse("tunnel"))
    });
});

describe("filterLongWords",()=>{
    it("filters longer words",()=>{
        assert.deepEqual(["immaculate","moses"],filterLongWords(["ben","immaculate","moses"],4))
    });
});


});