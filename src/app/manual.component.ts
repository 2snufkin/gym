import {Component} from '@angular/core'
// export a class
// decorate with @Component
// import component from angular core
// pass it an object with selector and templateURl/template:
//include the component inside the declaration of the ^NgModule
@Component(
  {
    selector: 'app-manual',
    templateUrl: './manual.component.html'
  }
)


export class ManualComponent{
  product: string = "first";
  isDisabled: boolean = true;
  nameButton: any = "Disabled";
  inputText: string = '';
  listProducts: string[] = []
  justANo: string = 'one';

  constructor() {
    setTimeout(()=>{
      this.product = 'Second product'
      this.isDisabled = false;
      this.nameButton = 'Enabled'
    }, 2000);
  }

  addProduct(){
    this.listProducts.push(this.inputText);
    this.inputText = '';

  }





}

