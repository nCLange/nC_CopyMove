System.register(['./dataservice', './itemdl', './sitecollection', './documentlibrary', './directory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dataservice_1, itemdl_1, sitecollection_1, documentlibrary_1, directory_1;
    var CopyRoot;
    return {
        setters:[
            function (dataservice_1_1) {
                dataservice_1 = dataservice_1_1;
            },
            function (itemdl_1_1) {
                itemdl_1 = itemdl_1_1;
            },
            function (sitecollection_1_1) {
                sitecollection_1 = sitecollection_1_1;
            },
            function (documentlibrary_1_1) {
                documentlibrary_1 = documentlibrary_1_1;
            },
            function (directory_1_1) {
                directory_1 = directory_1_1;
            }],
        execute: function() {
            class CopyRoot {
                constructor(delafter, sitecollections) {
                    this.targetUrl = sitecollection_1.SiteCollection.targetPath;
                    this.targetTitle = documentlibrary_1.DocumentLibrary.targetTitle;
                    this.rootpath = "";
                    this.rootFolder = null;
                    this.dataService = new dataservice_1.DataService();
                    this.maxCalls = 1;
                    this.currentCalls = 0;
                    this.srcUrl = _spPageContextInfo.webAbsoluteUrl;
                    this.fields = [];
                    this.canceled = false;
                    this.srcListId = new RegExp('[\?&]SPListId=([^&#]*)').exec(window.location.href)[1];
                    console.log(this.srcListId);
                    var tempItemIds = new RegExp('[\?&]SPListItemId=([^&#]*)').exec(window.location.href);
                    this.selectedItemIds = tempItemIds[1].split(",").map(Number);
                    this.dataService.getListInfoFromId(this).then(response => {
                        if (directory_1.Directory.selectedPath != undefined && directory_1.Directory.selectedPath != "" && directory_1.Directory.selectedPath != null) {
                            this.rootpath = directory_1.Directory.selectedPath;
                            this.dataService.getFolderFromUrl(this).then(response => {
                                this.items = [];
                                this.deleteAfterwards = delafter;
                                for (var id = 0; id < this.selectedItemIds.length; id++) {
                                    this.items.push(new itemdl_1.ItemDL(this.selectedItemIds[id], this, this.rootpath, this.rootFolder));
                                }
                            }, response => { console.log("getFolderFromUrl Error " + response); });
                        }
                        else {
                            this.items = [];
                            this.deleteAfterwards = delafter;
                            for (var id = 0; id < this.selectedItemIds.length; id++) {
                                this.items.push(new itemdl_1.ItemDL(this.selectedItemIds[id], this));
                            }
                        }
                    }, response => {
                        console.log("getListTitleFromIdError " + response);
                    });
                    //  this.targetUrlArray = null;
                    // this.folderString = "";
                    /*
                    for (var i = 0; i < sitecollections.length; i++) {
                        var url;
                        if (sitecollections[i].expanded) {
                            this.targetUrl = sitecollections[i].path;
                          
                           for (var j = 0; j < sitecollections[i].documentLibraries.length; j++) {
                               if (sitecollections[i].documentLibraries[j].expanded) {
                                   this.targetTitle = sitecollections[i].documentLibraries[j].name;
                                   var folder:any = sitecollections[i].documentLibraries[j];
                                   while (folder.expanded) {
                                       for (var k = 0; k < folder.directories.length; k++) {
                                         
                                           if (folder.directories[k].expanded) {
                                               folder = folder.directories[k];
                                              // -> if folder expanded and children folder isnt -> get absolute URL
                                              // -> if DL expanded and children folder isnt -> get url DL
                                           }
                                       }
                                       break;
                                   }
                               }
            
                            }
                        }
                    }*/
                    // console.log("FolderString " +this.folderString);
                }
                addToArray(id, folderURL, parentFolderId) {
                    this.items.push(new itemdl_1.ItemDL(id, this, folderURL, parentFolderId));
                    //  console.log("ID:" + id + " folderURL: " + folderURL);
                    //console.log(folderURL);
                }
            }
            exports_1("CopyRoot", CopyRoot);
        }
    }
});
//# sourceMappingURL=copyroot.js.map