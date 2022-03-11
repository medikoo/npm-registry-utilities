"use strict";

const { assert } = require("chai");

const resolveVersionMetadata = require("../resolve-version-metadata")
    , resolvePackageMetadata = require("../resolve-package-metadata");

describe("resolve-version-metadata.js", () => {
	it("should resolve latest version metadata when no version range provided", async () => {
		const result = await resolveVersionMetadata("d");
		const metadata = await resolvePackageMetadata("d");
		assert.equal(result.version, metadata["dist-tags"].latest);
	});
	it("should resolve specific version metadata", async () => {
		const result = await resolveVersionMetadata("d", "1.0.0");
		assert.equal(result.version, "1.0.0");
	});
	it("should resolve latest version in a range", async () => {
		const result = await resolveVersionMetadata("d", "^0.1");
		assert.equal(result.version, "0.1.1");
	});
});
