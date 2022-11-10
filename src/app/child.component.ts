import {Component, Input} from "@angular/core";
// export a class
// decorate with @Component
// import component from angular core
//include the component inside the declaration of the ^NgModule

@Component({
  selector: 'app-child',
  template : '<p>{{variableFromOutisde}}</p>'

})



export class ChildComponenet{
  @Input() variableFromOutisde: any;
}
