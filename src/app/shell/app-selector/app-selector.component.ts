import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-selector',
  templateUrl: './app-selector.component.html',
  styleUrls: ['./app-selector.component.scss'],
  animations: [
    trigger('showHiddenMew', [
      // state('hidden', style({
      //   transform: 'translateY(-100vh) scale(0)',
      //   opacity: 0
      // })),
      // state('showed', style({
      //   transform: 'translateY(0) scale(1)',
      //   opacity: 1
      // })),
      // transition('hidden => showed', [
      //   animate('3s', keyframes([
      //     style({transform: 'translateY(-100vh) scale(0)',  offset: 0}),
      //     style({transform: 'translateY(0) scale(1)',       offset: 0.33}),
      //     style({transform: 'translateY(-100vh) scale(0)',  offset: 0.66}),
      //     style({transform: 'translateY(0) scale(1)',  offset: 1})
      //   ]))
      // ]),
      transition('hidden => showed', [
        query('.app-logo-container ', style({transform: 'translateY(-100vh) scale(0)'}), { optional: true }),
        query('.app-logo-container ', 
          stagger('2000ms', [
            animate('2000ms',
              style({transform: 'translateY(0) scale(1)'})
            )
          ]), { optional: true }
        )
      ])
    ]),
  ]
})
export class AppSelectorComponent implements OnInit, AfterViewInit {

  public isShowedMew: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.isShowedMew = false;
  }

  ngAfterViewInit(): void {
    this.isShowedMew = true;
    this.changeDetector.detectChanges();
  }

  animationStart(): void {
    console.log('wjeżdża mew')
  }

  animationDone(): void {
    console.log('no i wjechał')
  }

}
