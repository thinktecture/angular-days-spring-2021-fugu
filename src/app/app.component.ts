import {AfterViewInit, Component, Inject} from '@angular/core';
import {PaintService} from './paint.service';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // EX #1

  // EX #11


  previousPoint: { x: number, y: number } | null = null;
  // EX #17

  constructor(private paintService: PaintService, @Inject(DOCUMENT) private document: Document) {
  }

  async ngAfterViewInit(): Promise<any> {
    // EX #2

    // EX #16
  }

  onPointerDown(event: PointerEvent): void {
    this.previousPoint = {x: Math.floor(event.offsetX), y: Math.floor(event.offsetY)};
  }

  onPointerMove(canvas: HTMLCanvasElement, event: PointerEvent): void {
    // EX #4
  }

  onPointerUp(): void {
    this.previousPoint = null;
  }

  colorChange($event) {
    // EX #6

  }

  async open(): Promise<void> {
    // EX #12
  }

  async save(): Promise<void> {
    // EX #11
    // EX #18
  }

  async copy(): Promise<void> {
    // EX #13
  }

  async paste(): Promise<void> {
    // EX #14
  }

  async share(): Promise<any> {
    // EX #15
  }
}
