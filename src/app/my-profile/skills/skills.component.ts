import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { takeWhile, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        style({ width: '0px' }),
        animate(1000, style({ width: '{{width1}}%' })),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  public finalWidthCpp = 90;
  public finalWidthHtml = 90;
  public finalWidthCss = 75;
  public finalWidthJs = 85;
  public finalWidthNode = 85;
  public finalWidthNg = 85;
  public finalWidthReact = 45;
  public finalWidthMongo = 65;

  public widthObj = {
    widthcpp: 0,
    widthhtml: 0,
    widthcss: 0,
    widthjs: 0,
    widthnode: 0,
    widthng: 0,
    widthreact: 0,
    widthmongo: 0,
  };

  constructor() {}

  ngOnInit(): void {
    this.increaseWidth(this.finalWidthCpp, 'cpp');
    this.increaseWidth(this.finalWidthHtml, 'html');
    this.increaseWidth(this.finalWidthCss, 'css');
    this.increaseWidth(this.finalWidthJs, 'js');
    this.increaseWidth(this.finalWidthNode, 'node');
    this.increaseWidth(this.finalWidthNg, 'ng');
    this.increaseWidth(this.finalWidthReact, 'react');
    this.increaseWidth(this.finalWidthMongo, 'mongo');
  }

  increaseWidth(width, type) {
    const source1 = interval(20)
      .pipe(
        tap(() => {
          if (type === 'cpp') {
            this.widthObj.widthcpp++;
          } else if (type === 'html') {
            this.widthObj.widthhtml++;
          } else if (type === 'css') {
            this.widthObj.widthcss++;
          } else if (type === 'js') {
            this.widthObj.widthjs++;
          } else if (type === 'node') {
            this.widthObj.widthnode++;
          } else if (type === 'ng') {
            this.widthObj.widthng++;
          } else if (type === 'react') {
            this.widthObj.widthreact++;
          } else if (type === 'mongo') {
            this.widthObj.widthmongo++;
          }
        }),
        takeWhile((x) => this.isWidthWithinLimit(width, type))
      )
      .subscribe();
  }
  isWidthWithinLimit(val, t) {
    if (this.widthObj['width' + t] === val) {
      return false;
    }
    return true;
  }
}
