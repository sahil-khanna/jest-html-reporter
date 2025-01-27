import { ConsoleBuffer } from "@jest/console";
import { Config } from "@jest/types";
import { AggregatedResult } from "@jest/test-result";

export interface JestHTMLReporterProps {
  testData: AggregatedResult;
  options: IJestHTMLReporterConfigOptions;
  jestConfig?: Config.GlobalConfig;
  consoleLogs?: IJestHTMLReporterConsole[];
}

export type IJestHTMLReporterConfigOptions = {
  append?: boolean;
  boilerplate?: string;
  customScriptPath?: string;
  dateFormat?: string;
  executionTimeWarningThreshold?: number;
  includeConsoleLog?: boolean;
  includeFailureMsg?: boolean;
  includeStackTrace?: boolean;
  includeSuiteFailure?: boolean;
  includeObsoleteSnapshots?: boolean;
  logo?: string;
  outputPath?: string;
  pageTitle?: string;
  sort?: JestHTMLReporterSortType;
  statusIgnoreFilter?: string;
  styleOverridePath?: string;
  theme?: string;
  useCssFile?: boolean;
};

export interface IJestHTMLReporterConfigOption<T> {
  environmentVariable: string;
  configValue?: T;
  defaultValue: T;
}

export type IJestHTMLReporterConfig = {
  [key in keyof IJestHTMLReporterConfigOptions]: IJestHTMLReporterConfigOption<
    IJestHTMLReporterConfigOptions[key]
  >;
};

export interface IJestHTMLReporterConsole {
  filePath: string;
  logs: ConsoleBuffer;
}

export type JestHTMLReporterSortType =
  | "status"
  | "executiondesc"
  | "executionasc"
  | "titledesc"
  | "titleasc";
