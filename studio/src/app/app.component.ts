import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';


@Component({
    selector: 'app-root',
    imports: [LayoutComponent, LoadingComponent, ErrorMessageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {

}
