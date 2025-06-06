import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RootHarness } from '@dnd-mapp/dma-asu/testing';
import { appRoutes } from '../config';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
    @Component({
        template: '<dma-root />',
        imports: [RootComponent],
    })
    class TestComponent {}

    async function setupTest() {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [provideRouter(appRoutes)],
        });

        const harnessLoader = TestbedHarnessEnvironment.loader(TestBed.createComponent(TestComponent));

        return {
            harness: await harnessLoader.getHarness(RootHarness),
        };
    }

    it('should render', async () => {
        const { harness } = await setupTest();
        expect(harness).toBeDefined();
    });
});
