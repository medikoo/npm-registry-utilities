"use strict";

const { assert } = require("chai");

const resolvePackageMetadata = require("../resolve-package-metadata");

describe("resolve-package-metadata.js", () => {
	it("should resolve npm package metadata", async () => {
		const result = await resolvePackageMetadata("d");
		assert.equal(result.name, "d");
		assert.equal(typeof result.versions[Object.keys(result.versions)[0]].version, "string");
	});
});
