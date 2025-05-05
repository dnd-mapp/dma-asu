import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('../home')).HomePage,
    },
];
