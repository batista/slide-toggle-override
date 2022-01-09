import { Component, VERSION } from '@angular/core';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION } from '@angular/material/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angular = `Angular: ${VERSION.full}`;

  material = `Material: ${MAT_VERSION.full}`;

  cdk = `CDK: ${CDK_VERSION.full}`;
}
