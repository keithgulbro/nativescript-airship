import { AirshipSettings, Common } from './airship.common';

// export declare class Airship implements Common {
//   startUp(airshipSettings: AirshipSettings, application: any): void;
//   registerUser(userId: string): void;
//   setNotificationDelegate(delegate: any): void;
//   notificationOptIn(): Promise<boolean>;
//   isOptIn(): boolean;
//   getChannelID(): string;
//   notificationOptOut(): Promise<boolean>;
//   unRegisterUser(): void;
//   resetBadgeCount(): void;
//   getRegistrationToken(): string;
//   helloWorld(): string;
// }

export declare class Airship implements Common {
  startUp(airshipSettings: AirshipSettings, application: any): void;
  registerUser(userId: string): void;
  setNotificationDelegate(delegate: any): void;
  notificationOptIn(): Promise<boolean>;
  isOptIn(): boolean;
  getChannelID(): string;
  notificationOptOut(): Promise<boolean>;
  unRegisterUser(): void;
  resetBadgeCount(): void;
  getRegistrationToken(): string;
  helloWorld(): string;
}

export {AirshipSettings};

// export { AirshipSettings } from './airship.common';
