import {Component, OnChanges, Input, SimpleChange} from '@angular/core';  

@Component({  
  selector: 'app-passoword-strength-bar',  
  templateUrl: './password-strength-bar.component.html',  
  styleUrls: ['./password-strength-bar.component.css']  
})  

export class PassowordStrengthBarComponent implements OnChanges  {  

  @Input() passwordToCheck: string;  
  
  bar0: string;  
  bar1: string;  
  bar2: string;  
 
  private colors: Array<string>;
  private defaultColors = ['#F00', '#FF0', '#0F0'];
  private defaultBaseColor: string = '#DDD';
  private passwordStrenght = {
    short: 'short',
    simple: 'simple',
    middle: 'middle',
    strong: 'strong'
  }

  constructor() {
    this.passwordToCheck = '';
    this.colors = this.defaultColors;
    this.bar0 = this.defaultBaseColor;
    this.bar1 = this.defaultBaseColor;
    this.bar2 = this.defaultBaseColor;
  }  

  private checkStrengthPass(pass: string) {
  if(pass.length <= 7) {

    return this.getColor(this.passwordStrenght.short)
  } else if(pass.match(/^[A-Za-z]+$/) || pass.match(/^[0-9]+$/) || pass.match(/^[\W]+$/)) {
    
    return this.getColor(this.passwordStrenght.simple);
  }else if(pass.match((/^[A-Za-z0-9]+$/)) || pass.match(/^[^A-Za-z]+$/) || pass.match(/^[^0-9]+$/)) {
    
    return this.getColor(this.passwordStrenght.middle);
  } else {
    return this.getColor(this.passwordStrenght.strong);
  }
}

private getColor(strengthPass: string) {  

  let indexColor: {idx: number, col: string } = {
    idx: 0,
    col: ''
  }

  if (strengthPass == this.passwordStrenght.short) {  

     indexColor.idx = 3;
     indexColor.col = this.colors[0];
  } else if (strengthPass == this.passwordStrenght.simple) {  

      indexColor.idx = 1;
      indexColor.col = this.colors[0];
  } else if (strengthPass == this.passwordStrenght.middle) {  

      indexColor.idx = 2,
      indexColor.col = this.colors[1];
  } else if (strengthPass == this.passwordStrenght.strong) {  

      indexColor.idx = 3;
      indexColor.col = this.colors[2];
  }  

  return indexColor;  
} 

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {  

    const password = changes['passwordToCheck'].currentValue;  
    this.setBarColors(3, this.defaultBaseColor);  

    if (password) {  

        let checkPass = this.checkStrengthPass(password); 
        this.setBarColors(checkPass.idx, checkPass.col)
    }  
} 
  private setBarColors(count: number, col: string): void {  

      for (let i = 0; i < count; i++) {  
          this['bar' + i] = col;  
      }  
  }  
}
