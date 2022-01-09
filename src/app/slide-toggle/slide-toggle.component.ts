import { Component, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
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

  checked: boolean;

  readonly ICON_CHECKED = 'task_alt';
  readonly ICON_UNCHECKED = 'highlight_off';

  ngAfterViewInit() {
    this.renderer.appendChild(
      this.matSlideToggle._thumbEl.nativeElement.children[0],
      this.matIcon._elementRef.nativeElement
    );
  }

  constructor(private renderer: Renderer2) {}
}
