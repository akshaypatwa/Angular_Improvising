import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-testev',
  template: `
              <div>
                <h2>
                Hallo !! {{new1()}}
                </h2>
                <h1>
                {{stringUrl}}
                </h1>
              </div>

              <div class="twowaybinding">
              <input [(ngModel)] = "name1" type="text"> 
              {{name1}}
              </div>

              <div class = "ngIfstat">
                <div *ngIf="toggle; else elseblock">
                  <h2>IfBlock</h2>
                </div>

                <ng-template #elseblock>
                  <h2> Elseblock </h2>
                </ng-template>
              </div>


              <div class = ngForstat>
              <div *ngFor ="let color of colors">
              <h2>{{color}} </h2>
              </div>
              </div>

            `,
  styles: [`

            h2
            {
              color: red;
            }

          `]
})
export class TestevComponent implements OnInit {
  public name = "Akki";
  public toggle = true;
  public colors = ["red", "pink", "red"];
  public stringUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }
   public name1 ="";
   new1() {
    
    return "Hallo" + this.name

  }

}
