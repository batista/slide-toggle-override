import {
  Component,
  AfterViewInit,
  ViewChild,
  Renderer2,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatIcon } from '@angular/material/icon';

/**
 * @title a MatSlideToggleComponent with MatIconComponent inside the touch element
 */
@Component({
  selector: 'slide-toggle',
  templateUrl: 'slide-toggle.component.html',
  styleUrls: ['slide-toggle.component.scss'],
})
export class SlideToggleComponent implements AfterViewInit {
  @ViewChild(MatSlideToggle) matSlideToggle: MatSlideToggle;
  @ViewChild(MatIcon) matIcon: MatIcon;
  @ViewChild('innerLabel') innerLabel: ElementRef;

  @HostBinding('class.checked')
  checked: boolean = true;

  @Input() iconChecked = 'bolt';
  @Input() iconUnchecked = 'bolt';

  @Input() innerTextChecked = 'On';
  @Input() innerTextUnchecked = 'Off';

  @Input() labelText = 'MyLabel';

  ngAfterViewInit() {
    this.renderer.appendChild(
      this.matSlideToggle._thumbEl.nativeElement.children[0],
      this.matIcon._elementRef.nativeElement
    );

    this.renderer.appendChild(
      this.matSlideToggle._thumbBarEl.nativeElement,
      this.innerLabel.nativeElement
    );
  }

  constructor(private renderer: Renderer2) {}
}
