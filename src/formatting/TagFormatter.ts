import { VersionInformation } from '../providers/VersionInformation'

export interface TagFormatter {
  Format(versionInfo: VersionInformation): string
  GetPattern(): string
  Parse(
    tag: string
  ): [major: number, database: number, minor: number, patch: number]
}
