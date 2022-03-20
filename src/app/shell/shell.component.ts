import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @ContentChild('pageContent') pageContent: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
