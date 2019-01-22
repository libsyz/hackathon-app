import { ToolsTestPage } from './../../pages/tools-test/tools-test';
import { ToolsProblemStatementPage } from './../../pages/tools-problem-statement/tools-problem-statement';
import { Injectable } from '@angular/core';
import { ToolsEmpathisePage } from '../../pages/tools-empathise/tools-empathise';
import { ToolsIdeatePage } from '../../pages/tools-ideate/tools-ideate';
import { ToolsPrototypePage } from '../../pages/tools-prototype/tools-prototype';

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {


  constructor() {
  }

  getTools(currentPhase){
    if (currentPhase === 1) {
      return ToolsProblemStatementPage;
    }
    else if (currentPhase === 2) {
      return ToolsEmpathisePage;
    }
    else if (currentPhase === 3){
      return ToolsIdeatePage;
    }
    else if (currentPhase === 4){
      return ToolsPrototypePage;
        }
    else if (currentPhase === 5){
      return ToolsTestPage;
    }

  }

}
