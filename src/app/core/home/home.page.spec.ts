import { TestBed } from '@angular/core/testing';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { HomeHarness } from '@dnd-mapp/dma-asu/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
    @Component({
        template: ` <dma-home />`,
        imports: [HomePage],
    })
    class TestComponent {}

    async function setupTest() {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });

        const harnessLoader = TestbedHarnessEnvironment.loader(TestBed.createComponent(TestComponent));

        return {
            harness: await harnessLoader.getHarness(HomeHarness),
        };
    }

    it('should render', async () => {
        const { harness } = await setupTest();
        expect(harness).toBeDefined();
    });
});
