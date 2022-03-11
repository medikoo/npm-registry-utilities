"use strict";

const { assert } = require("chai");

const ensurePackageName = require("../ensure-package-name");

describe("ensure-package-name.js", () => {
	it("should pass through valid package name", () =>
		assert.equal(ensurePackageName("npm-registry-utilities"), "npm-registry-utilities"));
	it("should reject invalid package name", () =>
		assert.throws(() => ensurePackageName("invalid name"), "Invalid package name"));
});
