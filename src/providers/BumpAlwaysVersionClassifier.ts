import { ActionConfig } from '../ActionConfig'
import { CommitInfoSet } from './CommitInfoSet'
import { DefaultVersionClassifier } from './DefaultVersionClassifier'
import { ReleaseInformation } from './ReleaseInformation'
import { VersionClassification } from './VersionClassification'
import { VersionType } from './VersionType'

export class BumpAlwaysVersionClassifier extends DefaultVersionClassifier {
  constructor(config: ActionConfig) {
    super(config)
    // Placeholder for consistency
  }

  public override async ClassifyAsync(
    lastRelease: ReleaseInformation,
    commitSet: CommitInfoSet
  ): Promise<VersionClassification> {
    if (lastRelease.currentPatch !== null) {
      return new VersionClassification(
        VersionType.None,
        0,
        false,
        <number>lastRelease.currentMajor,
        <number>lastRelease.currentDatabase,
        <number>lastRelease.currentMinor,
        <number>lastRelease.currentPatch
      )
    }

    let { major, database, minor, patch } = lastRelease
    let type = VersionType.None

    if (commitSet.commits.length === 0) {
      return new VersionClassification(
        type,
        0,
        false,
        major,
        database,
        minor,
        patch
      )
    }

    for (let commit of commitSet.commits.reverse()) {
      if (this.majorPattern(commit)) {
        major += 1
        minor = 0
        patch = 0
        type = VersionType.Major
      } else if (this.databasePattern(commit)) {
        database += 1
        minor = 0
        patch = 0
        type = VersionType.Database
      } else if (this.minorPattern(commit)) {
        minor += 1
        patch = 0
        type = VersionType.Minor
      } else {
        patch += 1
        type = VersionType.Patch
      }
    }

    return new VersionClassification(
      type,
      0,
      true,
      major,
      database,
      minor,
      patch
    )
  }
}
