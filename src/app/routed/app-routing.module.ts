import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routes as Paths } from '../config/routes.enum';

import { HomeComponent } from './home/home.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { SecondAppComponent } from './second-app/second-app.component';
import { ThirdAppComponent } from './third-app/third-app.component';

const components = [
	HomeComponent,
	FirstAppComponent,
	SecondAppComponent,
	ThirdAppComponent,
];
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: Paths.home, component: HomeComponent },
	{ path: Paths.firstApp, component: FirstAppComponent },
	{ path: Paths.secondApp, component: SecondAppComponent },
	{ path: Paths.thirdApp, component: ThirdAppComponent },

	{ path: '**', pathMatch: 'full', redirectTo: Paths.home },
];

@NgModule({
	declarations: [...components],
	imports: [RouterModule.forRoot(routes)],
	exports: [
		RouterModule,
		...components,
	]
})
export class AppRoutingModule { }
