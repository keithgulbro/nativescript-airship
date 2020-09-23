import { Observable } from "tns-core-modules/data/observable";
import { NsAirship } from 'nativescript-airship';

export class HomeViewModel extends Observable {
    public airshipChannelId:string;
    public optStatusMessage:string;
    
    constructor() {
        super();
        this.set('airshipChannelId', 'Current Channel ID: N/A');
        this.fetchPushNotificationsOptStatus();
    }

    /**
     * Fetch Airship channel ID
     * 
     * @return void
     */
    fetchAirshipChannelId(): void {
        console.log(`Current Airship Channel ID: ${NsAirship.getInstance().getChannelID()}`)
        this.set('airshipChannelId', `Current Channel ID: ${NsAirship.getInstance().getChannelID()}`);
    }

    /**
     * Opt In to Airship push notifications
     * 
     * @return void
     */
    optInPushNotifications(): void {
        NsAirship.getInstance().notificationOptIn();
        this.fetchPushNotificationsOptStatus();
    }

    /**
     * Opt In to Airship push notifications
     * 
     * @return void
     */
    optOutPushNotifications(): void {
        NsAirship.getInstance().notificationOptOut();
        this.fetchPushNotificationsOptStatus();
    }

    /**
     * Fetch the current opt in status of the user regarding push notifications
     * 
     * @return boolean
     */
    fetchPushNotificationsOptStatus(): Boolean {
        const optStatus:boolean = NsAirship.getInstance().isOptIn();
        let optStatusMessage:string;

        if(optStatus) {
            optStatusMessage = 'You have opted into push notifications';
        } else {
            optStatusMessage = 'You have not opted into push notifications yet';
        }

        this.set('optStatusMessage', optStatusMessage);
        return optStatus;
    }

    /**
     * Reset the push notifications badge overlaying the application icon
     * 
     * @return void
     */
    resetPushNotificationsBadge(): void {
        NsAirship.getInstance().resetBadgeCount();
    }
}
