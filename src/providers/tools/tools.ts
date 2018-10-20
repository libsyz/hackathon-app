import { ToolsProblemStatementPage } from './../../pages/tools-problem-statement/tools-problem-statement';
import { Injectable } from '@angular/core';
import { ToolsEmpathisePage } from '../../pages/tools-empathise/tools-empathise';

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {

  constructor() {
    console.log('Hello ToolsProvider Provider');
  }

  getTools(currentPhase){
   switch (currentPhase) {
     case 1:
       return ToolsProblemStatementPage;
     case 2: 
       return ToolsEmpathisePage;
     case 3:
       console.log("work in progress! - Phase 3");
     case 4:
       console.log("work in progress! - Phase 4");
     default:
       return ToolsProblemStatementPage;
   }
  }

}
