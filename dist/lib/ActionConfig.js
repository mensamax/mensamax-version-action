"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConfig = void 0;
/** Represents the input configuration for the semantic-version action */
class ActionConfig {
    constructor() {
        /** Set to specify a specific branch, default is the current HEAD */
        this.branch = 'HEAD';
        /** The prefix to use to identify tags */
        this.tagPrefix = 'v';
        /** Use branches instead of tags */
        this.useBranches = false;
        /** A string which, if present in a git commit, indicates that a change represents a major (breaking) change. Wrap with '/' to match using a regular expression. */
        this.majorPattern = '(MAJOR)';
        /** A string which indicates the flags used by the `majorPattern` regular expression. */
        this.majorFlags = '';
        /** A string which, if present in a git commit, indicates that a change represents a minor (feature) change. Wrap with '/' to match using a regular expression. */
        this.databasePattern = '(DATABASE)';
        /** A string which indicates the flags used by the `databasePattern` regular expression. */
        this.databaseFlags = '';
        /** A string which, if present in a git commit, indicates that a change represents a database migration. Wrap with '/' to match using a regular expression. */
        this.minorPattern = '(MINOR)';
        /** A string which indicates the flags used by the `minorPattern` regular expression. */
        this.minorFlags = '';
        /** Pattern to use when formatting output version */
        this.versionFormat = '${major}.${database}.${minor}.${patch}';
        /** Path to check for changes. If any changes are detected in the path the 'changed' output will true. Enter multiple paths separated by spaces. */
        this.changePath = '';
        /** Use to create a named sub-version. This value will be appended to tags created for this version. */
        this.namespace = '';
        /** If true, every commit will be treated as a bump to the version. */
        this.bumpEachCommit = false;
        /** If true, the body of commits will also be searched for major/minor patterns to determine the version type */
        this.searchCommitBody = false;
        /** The output method used to generate list of users, 'csv' or 'json'. Default is 'csv'. */
        this.userFormatType = 'csv';
    }
}
exports.ActionConfig = ActionConfig;
