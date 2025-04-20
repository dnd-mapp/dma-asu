import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../config';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
    @Component({
        template: '<dma-root />',
        imports: [RootComponent],
    })
    class TestComponent {}

    function setupTest() {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [provideRouter(appRoutes)],
        });

        const fixture = TestBed.createComponent(TestComponent);

        return {
            fixture: fixture,
        };
    }

    it('should render', () => {
        const { fixture } = setupTest();
        expect(fixture.debugElement.query(By.directive(RootComponent)).nativeElement).toBeDefined();
    });
});
