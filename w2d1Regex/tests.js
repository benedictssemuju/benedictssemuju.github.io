"use strict";
describe("Form Validators", function () {
    describe("password validator", function () {
        it("Password validator tests whether the password is at least 10 characters and contains"
            + "at least one uppercase letter, one lowercase letter and one number", () => {
            assert.isTrue(isValidPassword("abcEFG901k"));
        });
    });
    describe("url validator", function () {
        it("URL validator tests whether the url begins with 'http://' or 'https://'", () => {
            assert.isTrue(isValidUrl("https://www.google.com"));
        });
    });
});