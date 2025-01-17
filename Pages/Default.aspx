﻿<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

    <%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

        <%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                <%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                    <%-- The markup and script in the following Content element will be placed in the <head> of the page --%>



                        <asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
                            <WebPartPages:AllowFraming runat="server" />
                            <script type="text/javascript" src="../../_layouts/15/sp.RequestExecutor.js"></script>
                            <script type="text/javascript" src="../../_layouts/15/sp.runtime.js"></script>
                            <script type="text/javascript" src="../../_layouts/15/sp.js"></script>
                            <script type="text/javascript" src="../../_layouts/15/sp.taxonomy.js"></script>
                            <script type="text/javascript" src="../../_layouts/15/SP.DocumentManagement.js"></script>
                            <script type="text/javascript" src="../../_layouts/15/MicrosoftAjax.js"></script>

                            <script src="../libs/es6-shim.min.js"></script>
                            <script src="../libs/system-polyfills.js"></script>
                            <script src="../libs/zone.js"></script>
                            <script src="../libs/Reflect.js"></script>
                            <script src="../libs/system.js"></script>
                            <script src="../libs/Rx.js"></script>
                            <script src="../scripts/systemjs.config.js"></script>
                            <script src="../libs/angular2.min.js"></script>
                            <script src="../libs/jquery.min.js"></script>
                            <link rel="stylesheet" href="../styles/layout.css">

                            <script type="text/javascript">
                          /*    $(document).ready(function() {
                                   var spButtons = jQuery('.ms-dlgTitleBtns', window.parent.document);
                                    spButtons.find('a.ms-dlgCloseBtn').remove();
                                    spButtons.append('<a accesskey="C" class="ms-dlgCloseBtn" title="Close dialog" onClick="window.parent.location.reload()">' +
                                    '<span style="padding: 8px; height: 16px; width: 16px; display: inline-block;">' +
                                    '<span class="s4-clust" style="height: 16px; width: 16px; position: relative; display: inline-block; overflow: hidden;">' +
                                    '<img class="ms-dlgCloseBtnImg" style="left: -0px !important; top: -645px !important; position: absolute;" alt="Close dialog" src="../_layouts/15/images/fgimg.png" />' +
                                    '</span></span></a>');
                                });*/

                            </script>

                            <script>
        System.config({
            packages: {
                '../scripts': {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
        System.import('../scripts/boot')
              .then(null, console.error.bind(console));
    </script>
                        </asp:Content>

    <%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
        <asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
            <WebPartPages:AllowFraming runat="server" /> Page Title
        </asp:Content>

    <%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
        <asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
            <WebPartPages:AllowFraming runat="server" />


            <app-main></app-main>

        </asp:Content>