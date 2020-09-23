import { launchEvent, LaunchEventData,
    on as applicationOn, run as applicationRun } from "tns-core-modules/application";

    import { NsAirship, AirshipSettings } from 'nativescript-airship';    

const airshipSettings:AirshipSettings = {
    // Test / Development
    developmentAppKey: "<Development_App_Key>",
    developmentAppSecret: "<Development_App_Secret>",
    
    fcmSender: "Your Google API Project Number",

    detectProvisioningMode: false,

    // Toggles between the development and production app credentials
    // Before submitting your application to an app store set to true
    inProduction: false,

    // Production / Live
    productionAppKey: "<Production_App_Key>",
    productionAppSecret: "<Production_App_Secret>"
};    

applicationOn(launchEvent, (args: LaunchEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        NsAirship.getInstance().startUp(airshipSettings, null);
        console.log("Launched iOS application");
    }
});