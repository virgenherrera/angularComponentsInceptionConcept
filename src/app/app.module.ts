import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './routed/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { selector, MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule
} from '@angular/material';

@NgModule({
	declarations: [
		MyNavComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	providers: [],
	bootstrap: [MyNavComponent],
	entryComponents: [MyNavComponent],
})
export class AppModule {
	constructor(private _injector: Injector) {
		customElements.define(selector, createCustomElement(MyNavComponent, { injector: this._injector }));
	}
}
