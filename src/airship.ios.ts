import { AirshipSettings, Common } from './airship.common';

declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;
declare const UAPushNotificationDelegate: any;
declare const UAConfig: any;
declare const UAirship: any;

export class NsAirship implements Common {

    private static instance: NsAirship = new NsAirship();

    constructor() {
        if (NsAirship.instance) {
            throw new Error("Error: Instance failed: Use Airship.getInstance() instead of new.");
        }
        NsAirship.instance = this;
    }

    static getInstance() {
        return NsAirship.instance;
    }

    public startUp(urbanAirshipSettings: AirshipSettings, _application: any): void {
        let config = UAConfig.defaultConfig();
        config.detectProvisioningMode = urbanAirshipSettings.detectProvisioningMode;
        config.developmentAppKey = urbanAirshipSettings.developmentAppKey;
        config.developmentAppSecret = urbanAirshipSettings.developmentAppSecret;
        config.productionAppKey = urbanAirshipSettings.productionAppKey;
        config.productionAppSecret = urbanAirshipSettings.productionAppSecret;
        config.inProduction = urbanAirshipSettings.inProduction;
        UAirship.takeOff(config);

        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
    }

    public registerUser(userId: string): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.namedUser().identifier = userId;
    }

    public unRegisterUser(): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.namedUser().identifier = null;
    }

    public notificationOptIn(): Promise<boolean> {
        return this.setOptIn(true);
    }

    public notificationOptOut(): Promise<boolean> {
        return this.setOptIn(false);
    }

    private setOptIn(optIn: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            if (!this.pushIsValid()) {
                return;
            }
            UAirship.push().userPushNotificationsEnabled = optIn;
            resolve(this.isOptIn());
        });
    }

    public isOptIn(): boolean {
        if (!this.pushIsValid()) {
            return false;
        }
        return UAirship.push().userPushNotificationsEnabled;
    }

    public getChannelID(): string {
        if (!this.pushIsValid()) {
            return undefined;
        }

        return UAirship.channel().identifier;
    }

    // delegate is type of UAPushNotificationDelegate
    public setNotificationDelegate(delegate: any): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().pushNotificationDelegate = delegate;
    }

    // support only for android
    // public getRegistrationToken(): string {
    //     return "";
    // }

    public resetBadgeCount(): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().resetBadge();
    }

    private pushIsValid(): boolean {
        if (UAirship.push() === null) {
            console.error('pushIsValid - UAAirship.push() is null please check credentials');
            return false;
        }
        return true;
    }

    helloWorld() {
        return 'Hello world';
    }
}
