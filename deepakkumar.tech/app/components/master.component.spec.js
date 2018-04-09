"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var master_component_1 = require("./master.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('MasterComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [master_component_1.MasterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(master_component_1.MasterComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
});
//# sourceMappingURL=master.component.spec.js.map