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
    if (currentPhase === 1) {
      return ToolsProblemStatementPage;
    }
    else if (currentPhase === 2) {
      return ToolsEmpathisePage;
    }
    else {
      console.log("sorry! this toolkit is not ready yet");
    }

  }

}
