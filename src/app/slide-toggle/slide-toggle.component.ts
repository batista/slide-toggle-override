import {
  Component,
  AfterViewInit,
  ViewChild,
  Renderer2,
  ElementRef,
  Input,
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

  checked: boolean;

  readonly ICON_CHECKED = 'task_alt';
  readonly ICON_UNCHECKED = 'highlight_off';

  @Input()
  TEXT_CHECKED = 'På';

  @Input()
  TEXT_UNCHECKED = 'Av';

  ngAfterViewInit() {
    this.renderer.appendChild(
      this.matSlideToggle._thumbEl.nativeElement.children[0],
      this.matIcon._elementRef.nativeElement
    );

    this.renderer.appendChild(
      this.matSlideToggle._thumbBarEl.nativeElement.children[0],
      this.innerLabel.nativeElement
    );
  }

  constructor(private renderer: Renderer2) {}
}
