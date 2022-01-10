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
  /** The status of the switch */
  @HostBinding('class.checked')
  checked: boolean = true;

  /** The icon to display when the switch is checked */
  @Input() iconChecked = 'bolt';

  /** The icon to display when the switch is unchecked */
  @Input() iconUnchecked = 'bolt';

  /** The text to display when the switch is checked */
  @Input() innerTextChecked = 'On';

  /** The text to display when the switch is unchecked */
  @Input() innerTextUnchecked = 'Off';

  /** The label of the switch */
  @Input() labelText = 'MyLabel';

  @ViewChild(MatSlideToggle) private matSlideToggle: MatSlideToggle;
  @ViewChild('innerButton') private matIcon: MatIcon;
  @ViewChild('innerLabel') private innerLabel: ElementRef;

  ngAfterViewInit() {
    this.repositionDomElements();
  }

  constructor(private renderer: Renderer2) {}

  /**
   * Repositions the injected elements inside the MatSlideToggle Component.
   */
  private repositionDomElements() {
    const slideToggleButtonEl =
      this.matSlideToggle._thumbEl.nativeElement.children[0];
    const matIconEl = this.matIcon._elementRef.nativeElement;
    this.renderer.appendChild(slideToggleButtonEl, matIconEl);

    const slideToggleBarEl = this.matSlideToggle._thumbBarEl.nativeElement;
    const innerLabelSpanEl = this.innerLabel.nativeElement;
    this.renderer.appendChild(slideToggleBarEl, innerLabelSpanEl);
  }
}
