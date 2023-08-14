import { ViewGame } from '@shared/back/types';
import { UpgradeStage } from './upgrade/types';

export type GAMES = Record<number, ViewGame | undefined>

/** State of a single "stage" in the upgrade system (each individual downloadable upgrade is called a "stage"). */
export type UpgradeStageState = {
  /** If the stage was already installed when the launcher started up (this value is only meaningful if the stage checks are done). */
  alreadyInstalled: boolean;
  /** If the checks has been performed (this is to check if the stage has already been installed). */
  checksDone: boolean;
  /** Whether the stage is up to date (checked via hash comparison) */
  upToDate: boolean;
  /** If the stage is currently being downloaded or installed. */
  isInstalling: boolean;
  /** If the stage was installed during this session (this is so the user can be told to restart the application). */
  isInstallationComplete: boolean;
  /** Current progress note of the installation (visible text meant to inform the user about the current progress of the download or install). */
  installProgressNote: string;
}
