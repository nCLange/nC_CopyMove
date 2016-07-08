System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SiteCollection;
    return {
        setters:[],
        execute: function() {
            class SiteCollection {
                constructor(name, directories, files) {
                    this.name = name;
                    this.files = files;
                    this.documentLibraries = directories;
                    this.expanded = false;
                    this.checked = false;
                }
                toggle() {
                    this.expanded = !this.expanded;
                }
                check() {
                    let newState = !this.checked;
                    this.checked = newState;
                    //      this.checkRecursive(newState);
                }
            }
            exports_1("SiteCollection", SiteCollection);
        }
    }
});
// checkRecursive(state){
//     this.documentLibraries.forEach(d => {
//         d.checked = state;
//         d.checkRecursive(state);
//     })
// } 
//# sourceMappingURL=SiteCollection.js.map