import {Component} from '@angular/core'
// export a class
// decorate with @Component
// import component from angular core
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

