import { OpenFeature, InMemoryProvider } from '@openfeature/server-sdk';

interface ConfigOptions {
    appName: string;
    environment: string;
}

export class ConfigurationService {
    private readonly client;

    constructor(options: ConfigOptions) {
        console.log("Initializing Configuration SDK...");

        const mockData = {
            "tax_rate": {
                disabled: false,
                variants: { "default": "18.5" },
                defaultVariant: "default"
            },
            "feature_dark_mode": {
                disabled: false,
                variants: { "on": true, "off": false },
                defaultVariant: "on"
            }
        };

        const myProvider = new InMemoryProvider(mockData);
        OpenFeature.setProvider(myProvider);
        
        this.client = OpenFeature.getClient(options.appName);
        console.log(`SDK Initialized for ${options.appName} in ${options.environment}\n`);
    }

    async getString(key: string): Promise<string> {
        const MISSING_VALUE = "##MISSING##";
        
        const value = await this.client.getStringValue(key, MISSING_VALUE);

        if (value === MISSING_VALUE) {
            throw new Error(`Configuration Key '${key}' not found in system.`);
        }
        return value;
    }

    async getBoolean(key: string): Promise<boolean> {
        return await this.client.getBooleanValue(key, false);
    }

    async getNumber(key: string): Promise<number> {
        return await this.client.getNumberValue(key, 0);
    }
    
}