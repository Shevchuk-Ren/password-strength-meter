import {Component, OnChanges, Input, SimpleChange} from '@angular/core';  

@Component({  
  selector: 'app-passoword-strength-bar',  
  templateUrl: './password-strength-bar.component.html',  
  styleUrls: ['./password-strength-bar.component.css']  
})  

export class PassowordStrengthBarComponent implements OnChanges  {  

  @Input() passwordToCheck: any;  
  
  bar0: any;  
  bar1: any;  
  bar2: any;  
 
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
    this.colors = this.defaultColors;
  }  

  private checkStrengthPass(pass: string) {
  if(pass.length <= 7) {

    return this.getColor2(this.passwordStrenght.short)
  } else if(pass.match(/^[A-Za-z]+$/) || pass.match(/^[0-9]+$/) || pass.match(/^[\W]+$/)) {
    
    return this.getColor2(this.passwordStrenght.simple);
  }else if(pass.match((/^[A-Za-z0-9]+$/)) || pass.match(/^[^A-Za-z]+$/) || pass.match(/^[^0-9]+$/)) {
    
    return this.getColor2(this.passwordStrenght.middle);
  } else {
    return this.getColor2(this.passwordStrenght.strong);
  }
}

private getColor2(strengthPass: string) {  

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
          (this as any)['bar' + i] = col;  
      }  
  }  
}
