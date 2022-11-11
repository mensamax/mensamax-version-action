import { ActionConfig } from '../ActionConfig'
import { VersionInformation } from '../providers/VersionInformation'
import { VersionFormatter } from './VersionFormatter'

export class DefaultVersionFormatter implements VersionFormatter {
  private formatString: string

  constructor(config: ActionConfig) {
    this.formatString = config.versionFormat
  }

  public Format(versionInfo: VersionInformation): string {
    return this.formatString
      .replace('${major}', versionInfo.major.toString())
      .replace('${database}', versionInfo.database.toString())
      .replace('${minor}', versionInfo.minor.toString())
      .replace('${patch}', versionInfo.patch.toString())
      .replace('${increment}', versionInfo.increment.toString())
  }
}
