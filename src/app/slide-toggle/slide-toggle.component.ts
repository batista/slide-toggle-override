import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  Renderer2,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatIcon } from '@angular/material/icon';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle',
  templateUrl: 'slide-toggle.component.html',
  styleUrls: ['slide-toggle.component.scss'],
})
export class SlideToggleComponent implements AfterViewInit {
  @ViewChild(MatSlideToggle) matSlideToggle: MatSlideToggle;
  @ViewChild(MatIcon) matIcon: MatIcon;

  @ViewChild('toggles', { read: ViewContainerRef }) toggleVCR: ViewContainerRef;
  @ViewChild('icons', { read: ViewContainerRef }) iconVCR: ViewContainerRef;

  checked: boolean;

  ngAfterViewInit() {
    console.log('Mat-Slide-Toggle');

    this.renderer.appendChild(
      this.matSlideToggle._thumbEl.nativeElement.children[0],
      this.matIcon._elementRef.nativeElement
    );

    console.log(this.matIcon._elementRef.nativeElement);
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
}
