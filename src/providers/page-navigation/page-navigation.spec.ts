import { PageNavigationProvider } from './page-navigation';
import { DefineTestProtocolPage } from './../../pages/define-test-protocol/define-test-protocol';
import { UploadPicturePage } from './../../pages/upload-picture/upload-picture';
import { DefineProblemPage } from './../../pages/define-problem/define-problem';

describe("Page Navigation Service", ()=> {

    let pageNavSrvc: PageNavigationProvider;

    pageNavSrvc = new PageNavigationProvider;

    it("Should send to Problem Statement page during Phase 1", ()=> {
        expect(pageNavSrvc.getPage(1)).toBe(DefineProblemPage);
    })

    it("Should send to UploadPicturePage page during Phases 2, 3 and 4", ()=> {
        expect(pageNavSrvc.getPage(2)).toBe(UploadPicturePage);
        expect(pageNavSrvc.getPage(3)).toBe(UploadPicturePage);
        expect(pageNavSrvc.getPage(4)).toBe(UploadPicturePage);
    })

    it("Should send to Define Test Protocol page during Phase 5", ()=> {
        expect(pageNavSrvc.getPage(5)).toBe(DefineTestProtocolPage);
    })


})