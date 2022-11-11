"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseInformation = void 0;
// Finds the hash of the last commit
class ReleaseInformation {
    /**
     * Creates a new instance
     * @param major - the major version number
     * @param database - the database version number
     * @param minor - the minor version number
     * @param patch - the patch version number
     * @param hash - the hash of commit of the last release
     * @param currentMajor - the major version number from the current commit
     * @param currentDatabase - the database version number from the current commit
     * @param currentMinor - the minor version number from the current commit
     * @param currentPatch - the patch version number from the current commit
     */
    constructor(major, database, minor, patch, hash, currentMajor, currentDatabase, currentMinor, currentPatch) {
        this.major = major;
        this.database = database;
        this.minor = minor;
        this.patch = patch;
        this.hash = hash;
        this.currentMajor = currentMajor;
        this.currentDatabase = currentDatabase;
        this.currentMinor = currentMinor;
        this.currentPatch = currentPatch;
    }
}
exports.ReleaseInformation = ReleaseInformation;
