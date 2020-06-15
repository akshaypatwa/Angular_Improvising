import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testev',
  template: `
              <div>
                <h2>
                Hallo !! {{new1()}}
                </h2>
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

  constructor() { }

  ngOnInit(): void {
  }

   new1() {
    
    return "Hallo" + this.name

  }

}
