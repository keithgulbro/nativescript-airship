import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export interface AirshipSettings {
  detectProvisioningMode: boolean;
  inProduction: boolean;
  developmentAppKey: string;
  developmentAppSecret: string;
  productionAppKey: string;
  productionAppSecret: string;
  fcmSender?: string;
}

export interface Common {
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

// export class Common extends Observable {
//   public message: string;

//   constructor() {
//     super();
//     this.message = Utils.SUCCESS_MSG();
//   }

//   public greet() {
//     return "Hello, NS";
//   }
// }

// export class Utils {
//   public static SUCCESS_MSG(): string {
//     let msg = `My plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

//     setTimeout(() => {
//       dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
//     }, 2000);

//     return msg;
//   }
// }
