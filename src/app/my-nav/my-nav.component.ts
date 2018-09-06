import { Component, ViewEncapsulation } from '@angular/core';
import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Routes } from '../config/routes.enum';

export const selector = 'app-host';

@Component({
    selector,
    templateUrl: './my-nav.component.html',
    styleUrls: ['./my-nav.component.scss'],
    // encapsulation: ViewEncapsulation.ShadowDom, // ff broken
    // encapsulation: ViewEncapsulation.Native, // ff && safari broken
	encapsulation: ViewEncapsulation.Emulated, // All fine (pending MS)?
})
export class MyNavComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map(result => result.matches));

	home = ['/', Routes.home];
	firstApp = ['/', Routes.firstApp];
	secondApp = ['/', Routes.secondApp];
	thirdApp = ['/', Routes.thirdApp];

	constructor(private breakpointObserver: BreakpointObserver) { }
}
