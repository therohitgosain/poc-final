import { ConfigurationService } from "../sdk/ConfigSDK";

async function startApplication() {
    console.log("--- STARTING CLIENT APPLICATION ---");

    const configSDK = new ConfigurationService({
        appName: "FIS-Demo-App",
        environment: "Local"
    });














    // Test 1: Valid Key
    console.log("Test 1: Fetching 'tax_rate'...");
    try {
        const tax = await configSDK.getString("tax_rate");
        console.log(`SUCCESS: Retrieved Tax Rate: ${tax}`);
    } catch (error: any) {
        console.error(`ERROR: ${error.message}`);
    }

    console.log("-------------------------------------------------");







    
    // Test 2: Invalid Key
    console.log("Test 2: Fetching 'invalid_key'...");
    try {
        await configSDK.getString("invalid_key");
    } catch (error: any) {
        console.log(`SUCCESS: SDK threw expected error: "${error.message}"`);
    }

    
}

startApplication();