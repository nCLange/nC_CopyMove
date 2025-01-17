System.register(['@angular/core', './documentlibrary'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, documentlibrary_1;
    var TreeViewDirectory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (documentlibrary_1_1) {
                documentlibrary_1 = documentlibrary_1_1;
            }],
        execute: function() {
            TreeViewDirectory = (function () {
                function TreeViewDirectory() {
                }
                TreeViewDirectory.prototype.select = function (directory) {
                    var that = this;
                    this.dblclick = false;
                    setTimeout(function () {
                        if (that.dblclick == false)
                            directory.toggle();
                    }, 400);
                };
                TreeViewDirectory.prototype.mark = function (directory) {
                    this.dblclick = true;
                    directory.select("--1");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', documentlibrary_1.DocumentLibrary)
                ], TreeViewDirectory.prototype, "folderLookUp", void 0);
                TreeViewDirectory = __decorate([
                    core_1.Component({
                        selector: 'tree-view-directory',
                        template: "<ul class=\"dirList\">\n                <li class=\"dirListElements\" *ngFor=\"let directory of folderLookUp.directories\"><div [style.background-color]=\"directory.getStyle()\"(dblclick)=\"mark(directory)\" (click)=\"select(directory)\"><img src=\"../images/Folders.svg\" width=\"16\" height=\"16\">&nbsp;{{directory.name}}</div><div *ngIf=\"directory.expanded\"><tree-view-directory [folderLookUp]=\"directory\"></tree-view-directory></div></li>\n               </ul>",
                        directives: [TreeViewDirectory]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreeViewDirectory);
                return TreeViewDirectory;
            }());
            exports_1("TreeViewDirectory", TreeViewDirectory);
        }
    }
});
//# sourceMappingURL=treeviewdirectory.js.map