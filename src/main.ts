import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, RootComponent } from './app';

async function main() {
    try {
        await bootstrapApplication(RootComponent, appConfig);
    } catch (error) {
        console.log(error);
    }
}

(async () => await main())();
