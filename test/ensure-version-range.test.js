"use strict";

const { assert } = require("chai");

const ensureVersionRange = require("../ensure-version-range");

describe("ensure-version-range.js", () => {
	it("should pass through valid version range", () =>
		assert.equal(ensureVersionRange("^1.1.1"), "^1.1.1"));
	it("should reject invalid version range", () =>
		assert.throws(() => ensureVersionRange("invalid range"), "Invalid version range"));
});
