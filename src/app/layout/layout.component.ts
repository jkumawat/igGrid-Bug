import { Component, OnInit, Inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  get layoutContainer(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('.layout-conatiner');
  }

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.prepareLayout();
  }

  prepareLayout() {

    for (let i = 0; i < this.layoutContainer.children.length; i++) {

      console.log(this.layoutContainer.children[i]);

      let htmlEle: HTMLElement = <HTMLElement>this.layoutContainer.children[i];

      switch (htmlEle.id) {
        // apply any style based on element id
        case 'Item-1':
          {
            htmlEle.classList.add('flexbox');
            htmlEle.style.border = '1px solid gray';
            break;
          }
        case 'Item-2': {
          htmlEle.classList.add('flexbox');
          htmlEle.style.width = '100%';
          htmlEle.style.height = '250px';
          htmlEle.style.border = '1px solid gray';


          // get grid container and set another height and border
          let grid: HTMLDivElement = <HTMLDivElement>htmlEle.querySelector('#grid-container');
          grid.style.border = '1px solid red';
          grid.style.flex = "1";


          break;
        }
        case 'Item-3': {
          htmlEle.classList.add('flexbox');
          htmlEle.style.border = '1px solid gray';
          break;
        }
        default: break;
      }



    }
  }

}