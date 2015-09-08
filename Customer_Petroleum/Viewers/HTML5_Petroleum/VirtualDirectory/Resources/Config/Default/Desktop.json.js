{
  "configuration": {
    "version": "2.3",
    "application": {
      "proxyUri": "https://geo.caymanlandinfo.ky/Proxy/proxy.ashx?",
      "allowUnsafeContent": false,
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "https://adapter.caymanlandinfo.ky/secure/rest/services/Utilities/Geometry/GeometryServer"
    },
    "defaultLibraryId": "Mapping",
    "libraries": [
      {
        "id": "Framework.UI",
        "uri": "Resources/Compiled/Framework.UI.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping",
        "uri": "Resources/Compiled/Mapping.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Infrastructure",
        "uri": "Resources/Compiled/Mapping.Infrastructure.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          }
        ]
      },
      {
        "id": "Charting",
        "uri": "Resources/Compiled/Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Charting",
        "uri": "Resources/Compiled/Mapping.Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          }
        ]
      }
    ],
    "modules": [
      {
        "moduleName": "Log",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
        "views": [
          {
            "id": "LogView",
            "viewModelId": "LogViewModel",
            "visible": false,
            "markup": "Mapping/modules/Log/LogView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
            "region": "ApplicationRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Alert",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
        "configuration": {
          "alertRegion": "ModalWindowRegion",
          "overrideNativeAlert": true
        }
      },
      {
        "moduleName": "Authentication",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
        "configuration": {
          "region": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Banner",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerModule",
        "configuration": {},
        "views": [
          {
            "id": "BannerView",
            "viewModelId": "BannerViewModel",
            "visible": false,
            "markup": "Mapping/modules/Banner/BannerView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerView",
            "region": "HeaderRegion",
            "configuration": {}
          },
          {
            "id": "UserInfoView",
            "viewModelId": "UserInfoViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoView",
            "markup": "Mapping/modules/User/UserInfoView.html",
            "region": "BannerContentRegion"
          },
          {
            "id": "SignInView",
            "viewModelId": "SignInViewModel",
            "visible": true,
            "markup": "Mapping/modules/User/SignInView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInView",
            "region": "BannerContentRegion",
            "configuration": {}
          },
          {
            "id": "SearchView",
            "viewModelId": "SearchViewModel",
            "visible": true,
            "title": "@language-search-title",
            "iconUri": "Resources/Images/Icons/Toolbar/search-32.png",
            "markup": "Mapping/modules/Search/SearchView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "region": "BannerContentRegion",
            "configuration": {}
          },
          {
            "id": "SearchHintsView",
            "viewModelId": "SearchViewModel",
            "visible": false,
            "markup": "Mapping/modules/Search/SearchHintsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchHintsView",
            "region": "SearchHintsRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BannerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerViewModel",
            "configuration": {
              "applicationTitle": "",
              "applicationSubtitle": "",
              "titleColor": "#1B7DBF",
              "subtitleColor": "#959398",
              "backgroundColor": "#FFFFFF",
              "backgroundImage": "Resources/Images/Banners/default-banner-bg.png",
              "leftImage": "Resources/Images/Banners/default-banner.png",
              "rightImage": "",
              "height": 60
            }
          }
        ]
      },
      {
        "moduleName": "Basemap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "configuration": {},
        "views": [
          {
            "id": "BasemapSwitcherButtonView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherButtonView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherButtonView.html",
            "region": "BasemapMapRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "BasemapSwitcherView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherView.html",
            "region": "BasemapListRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Bookmarks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksModule",
        "configuration": {},
        "views": [
          {
            "id": "BookmarksView",
            "viewModelId": "BookmarksViewModel",
            "markup": "Mapping/modules/Bookmarks/BookmarksView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "region": "BookmarksListRegion",
            "title": "@language-toolbar-bookmark",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksViewModel",
            "configuration": {
              "bookmarksEnabled": true,
              "showBookmarksButton": true
            }
          }
        ]
      },
      {
        "moduleName": "Browser",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.browser.BrowserModule",
        "configuration": {
          "title": "Caymap Mobile 1.10"
        }
      },
      {
        "moduleName": "Confirm",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "configuration": {
          "confirmRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Editing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditingModule",
        "configuration": {},
        "views": [
          {
            "id": "MapDataMenuView",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-feature-offline-tools",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {
              "menuId": "MapDataMenu"
            },
            "libraryId": "Mapping.Infrastructure"
          },
          {
            "id": "TemplatePickerView",
            "viewModelId": "TemplatePickerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-template-picker",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {}
          },
          {
            "id": "EditorView",
            "viewModelId": "EditorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorView",
            "markup": "Mapping/modules/Editing/Editor/EditorView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-editing",
            "description": "@language-common-feature-editing-desc",
            "configuration": {
              "showXButton": false
            }
          },
          {
            "id": "EditLogView",
            "viewModelId": "EditLogViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogView",
            "markup": "Mapping/modules/FeatureLayer/EditLogView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-feature-layer-edits-and-sync",
            "description": "@language-common-feature-editlog-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "TemplatePickerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerViewModel",
            "configuration": {}
          },
          {
            "id": "EditLogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.EditLogViewModel",
            "configuration": {}
          },
          {
            "id": "EditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorViewModel",
            "configuration": {
              "validateGeometry": true,
              "tools": [
                {
                  "name": "EditingPointTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-feature-editing-dsk-point-tool"
                },
                {
                  "name": "EditingLineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "LINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-line-tool"
                },
                {
                  "name": "EditingPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-polyline-tool"
                },
                {
                  "name": "EditingFreehandPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polyline-tool"
                },
                {
                  "name": "EditingPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool"
                },
                {
                  "name": "EditingFreehandPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "EditingCircleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "CIRCLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool"
                },
                {
                  "name": "EditingEllipseTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "ELLIPSE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool"
                },
                {
                  "name": "EditingRectangleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "EXTENT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool"
                }
              ],
              "editGeometry": true
            }
          }
        ]
      },
      {
        "moduleName": "FeatureDetails",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "configuration": {
          "providers": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsView",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/FeatureActionsView.html",
              "viewConfig": {
                "menuId": "FeatureActions"
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "libraryId": "Mapping.Charting",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html",
              "config": {
                "infrastructureLibraryId": "Charting",
                "containerRegionName": "SingleFeatureChartsRegion",
                "chartConfiguration": {
                  "animationsEnabled": true,
                  "gradientsEnabled": false,
                  "interactiveLegendEnabled": false,
                  "pieStartAngle": 180,
                  "renderAs": "svg"
                }
              }
            },
            {
              "enabled": false,
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "iconUri": "",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html",
              "config": {
                "longDescription": false
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
              "config": {
                "relatedFeatureView": "DataRegion"
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
              "config": {
                "dataLinkView": "DataRegion"
              }
            }
          ],
          "regionNames": [
            "FeatureRegion"
          ]
        },
        "views": [
          {
            "id": "FeatureDetailsView",
            "viewModelId": "FeatureDetailsViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "DataFrameResultsContainerRegion",
            "title": "@language-feature-details-title",
            "visible": false,
            "configuration": {
              "onDeactivated": [
                "ClearDefaultHighlights"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "FeatureDetailsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "viewToActivate": "FeatureDetailsView"
            }
          }
        ]
      },
      {
        "moduleName": "FeatureLayer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerModule",
        "configuration": {},
        "views": [
          {
            "id": "FeatureLayerDetailsView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerDetailsView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerDetailsView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-layer-details",
            "description": "@language-common-feature-layer-details-desc",
            "configuration": {}
          },
          {
            "id": "FeatureLayerListView",
            "viewModelId": "FeatureLayerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layer-list-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerListView",
            "markup": "Mapping/modules/FeatureLayer/FeatureLayerListView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "title": "@language-common-feature-sync-settings",
            "description": "@language-common-feature-sync-settings-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "FeatureLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.featureLayer.FeatureLayerViewModel",
            "configuration": {
              "showWhereClause": false
            }
          }
        ]
      },
      {
        "moduleName": "Highlight",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Highlight.HighlightModule",
        "configuration": {
          "fillColor": "#00000000",
          "borderColor": "#FF0000FF"
        }
      },
      {
        "moduleName": "Identify",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
        "configuration": {
          "resultsDisplayName": "@language-identify-results-header",
          "tools": [
            {
              "name": "IdentifyPointTool",
              "command": "Identify",
              "drawMode": "POINT",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
              "statusText": "@language-dsk-identify-point-tool"
            },
            {
              "name": "IdentifyRectangleTool",
              "command": "Identify",
              "drawMode": "RECTANGLE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
              "statusText": "@language-identify-rectangle-tool"
            },
            {
              "name": "IdentifyPolylineTool",
              "command": "Identify",
              "drawMode": "POLYLINE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
              "statusText": "@language-dsk-identify-polyline-tool"
            },
            {
              "name": "IdentifyPolygonTool",
              "command": "Identify",
              "drawMode": "POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool"
            },
            {
              "name": "IdentifyFreehandPolygonTool",
              "command": "Identify",
              "drawMode": "FREEHAND_POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
              "statusText": "@language-identify-freehand-polygon-tool"
            }
          ],
          "identifyProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.MapIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {
                "topMostLayerOnly": false,
                "pixelTolerance": 5,
                "polygonPixelTolerance": 0,
                "returnGeometry": true
              }
            }
          ]
        }
      },
      {
        "moduleName": "Info",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoModule",
        "configuration": {},
        "views": [
          {
            "id": "InfoView",
            "viewModelId": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoView",
            "markup": "Mapping/modules/Info/InfoView.html",
            "region": "HomePanelContainerRegion",
            "title": "@language-common-welcome",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoViewModel",
            "configuration": {
              "content": "%3Ca%20href%3D%22http%3A%2F%2Fwww.caymanlandinfo.ky%2FCaymap2x%2FHelp%2FMetaData.aspx%22%3E%3Cspan%20style%3D%22text-decoration%3A%20underline%3B%22%3E%3Cspan%20style%3D%22font-style%3A%20italic%3B%22%3ELayer%20Metadata%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fa%3E",
              "included": false,
              "title": "@language-common-welcome"
            }
          }
        ]
      },
      {
        "moduleName": "IWantToMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
        "configuration": {
          "menus": [
            {
              "id": "Iwantto",
              "description": "@language-menu-menus-description",
              "moduleId": "IWantToMenu",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "{ViewerConfigUri}../../../Custom/Location-24.png",
                  "text": "Search for a Location",
                  "command": "RunWorkflowById",
                  "commandParameter": "Find_Location"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Custom/Parcel-24.png",
                  "text": "Search for a Parcel",
                  "command": "RunWorkflowById",
                  "commandParameter": "Find_Parcel"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Custom/Lease-24.png",
                  "text": "Search Lease Comparables",
                  "command": "RunWorkflowById",
                  "commandParameter": "Search_Leases"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Custom/Sales-24.png",
                  "text": "Search Sales Comparables",
                  "command": "RunWorkflowById",
                  "commandParameter": "Search_Sales_HTML5"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "See map layers",
                  "description": "",
                  "command": "ShowLayerList"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "text": "Go to initial view",
                  "description": "",
                  "command": "ZoomToInitialExtent"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IWantToMenuButtonView",
            "visible": true,
            "viewModelId": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuButtonView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuButtonView.html",
            "region": "NavigationMapRegion",
            "title": "@language-menu-title",
            "configuration": {}
          },
          {
            "id": "IWantToMenuView",
            "viewModelId": "IWantToMenuViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "region": "IWantToMenuRegion",
            "configuration": {
              "menuId": "Iwantto"
            }
          }
        ],
        "viewModels": [
          {
            "id": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Legend",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendModule",
        "configuration": {},
        "views": [
          {
            "id": "LegendView",
            "viewModelId": "LegendViewModel",
            "title": "@language-legend-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendView",
            "markup": "Mapping/modules/Legend/LegendView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LegendViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Map",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
        "configuration": {
          "panDuration": 350,
          "panRate": 50,
          "zoomDuration": 500,
          "zoomRate": 50,
          "onClick": [
            "InvokeMapTip",
            "ClearDefaultHighlights"
          ],
          "onFeatureClick": [
            "ShowMapTip"
          ],
          "showLoadingStatus": true,
          "loadingMessageTiming": [
            1000,
            3000,
            3000
          ],
          "defaultPointFeatureZoomScales": [],
          "tools": [
            {
              "name": "CenterMapTool",
              "command": "PanToPoint",
              "drawMode": "POINT",
              "isSticky": true,
              "statusText": "@language-dsk-map-center"
            },
            {
              "name": "ZoomInTool",
              "command": "ZoomToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-in"
            },
            {
              "name": "ZoomOutTool",
              "command": "ZoomOutToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-out"
            }
          ],
          "longClickMilliseconds": 500,
          "onLongClick": [],
          "maxExtentLogSize": 100
        },
        "views": [
          {
            "id": "MapView",
            "viewModelId": "MapViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "region": "MapRegion",
            "configuration": {
              "wrapAround180": false,
              "extentBroadcastFrequency": 20,
              "showAttribution": true,
              "fitTiledMapsToExtent": false
            }
          }
        ],
        "viewModels": [
          {
            "id": "MapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
            "configuration": {
              "stepZoomFactor": 0.5
            }
          }
        ]
      },
      {
        "moduleName": "MapTips",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
        "configuration": {
          "allowMultiple": false,
          "contentField": "longDescription",
          "onClose": [
            "ClearDefaultHighlights"
          ],
          "featurePresenter": {
            "featurePropertyName": "currentFeature",
            "view": {
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "libraryId": "Mapping"
            },
            "viewModel": {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "libraryId": "Mapping"
            },
            "force": false
          }
        }
      },
      {
        "moduleName": "Markup",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupModule",
        "viewModels": [
          {
            "id": "MarkupViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "defaultPointMarkup": {
                "pointStyle": "Circle",
                "pointSize": 16,
                "pointColor": "#FF4CA0D8"
              },
              "defaultLineMarkup": {
                "lineStyle": "Dash",
                "lineWidth": 3,
                "lineColor": "#FF4CA0D8"
              },
              "defaultPolygonMarkup": {
                "polygonBorderStyle": "Solid",
                "polygonFillStyle": "Solid",
                "polygonBorderWidth": 3,
                "polygonFillColor": "#4D4CA0D8",
                "polygonBorderColor": "#FF4CA0D8"
              },
              "defaultTextMarkup": {
                "textStyle": "Normal",
                "textStyleWeight": "Normal",
                "textSize": "12pt",
                "textColor": "#FF000000",
                "textFamily": "Arial"
              },
              "customMarkupTools": {
                "point": [],
                "polyline": [],
                "polygon": [],
                "text": []
              }
            }
          },
          {
            "id": "StyleSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.styleSelector.StyleSelectorViewModel",
            "configuration": {
              "customPointStyles": [],
              "customLineStyles": [],
              "customPolygonStyles": [],
              "customTextStyles": []
            }
          },
          {
            "id": "TransientMarkupPaletteViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteViewModel",
            "configuration": {}
          }
        ],
        "views": [
          {
            "id": "MarkupEditView",
            "viewModelId": "TransientMarkupPaletteViewModel",
            "visible": true,
            "markup": "Mapping/modules/Markup/ToolPalettes/EditPaletteLarge.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
            "region": "MarkupEditRegion",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Measurement",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementModule",
        "configuration": {
          "tools": [
            {
              "name": "MeasureDistanceTool",
              "command": "MeasureDistance",
              "drawMode": "POLYLINE",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
              "statusText": "@language-measurement-measure-distance-tool-status"
            },
            {
              "name": "MeasureAreaTool",
              "command": "MeasureArea",
              "drawMode": "POLYGON",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status"
            },
            {
              "name": "DeleteMeasurementTool",
              "command": "DeleteMeasurement",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status"
            }
          ],
          "measurementProjectionWkid": "",
          "measurementLengthUnits": "feet",
          "measurementAreaUnits": "sqFeet",
          "enablePrediction": true,
          "calculationType": "preserveShape"
        },
        "views": [
          {
            "id": "MeasurementView",
            "viewModelId": "MeasurementViewModel",
            "visible": true,
            "markup": "Mapping/modules/Measurement/MeasurementView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "region": "MeasurementToolControlRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MeasurementViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "lineColor": "#0000FF",
              "fillColor": "#6495ED",
              "textColor": "#000000",
              "textOffset": "5",
              "textSize": "12px",
              "addMarkupToMapByDefault": true
            }
          }
        ]
      },
      {
        "moduleName": "Menu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
        "configuration": {
          "menus": [
            {
              "id": "MapDataMenu",
              "description": "@language-menu-open-offline-tools-menu",
              "moduleId": "FeatureEditing",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-manage-24.png",
                  "text": "@language-menu-manage-sync-settings",
                  "description": "@language-menu-manage-sync-settings-desc",
                  "command": "ActivateView",
                  "commandParameter": "FeatureLayerListView"
                },
                {
                  "text": "@language-menu-view-edit-log",
                  "description": "@language-menu-view-edit-log-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                  "command": "ActivateView",
                  "commandParameter": "EditLogView"
                },
                {
                  "text": "@language-clear-storage",
                  "description": "@language-menu-clear-offline-data-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "ActivateView",
                  "commandParameter": "ClearDataView"
                }
              ]
            },
            {
              "id": "LayerActions",
              "description": "@language-layer-actions-desc",
              "moduleId": "LayerList",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-add-a-feature",
                  "description": "@language-menu-add-a-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "command": "ShowFeatureTemplatePicker",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-layer",
                  "description": "@language-menu-zoom-to-layer-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToLayerExtent",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-visible-scale",
                  "description": "@language-menu-zoom-to-visible-scale-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToLayerVisibleScale",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FeatureActions",
              "description": "@language-feature-actions-description",
              "moduleId": "FeatureDetails",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-feature-layer-edit",
                  "description": "@language-feature-layer-edit-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "StartEditingFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-file-from-browser",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "MapTipActions",
              "description": "@language-menu-maptip-actions",
              "moduleId": "MapTips",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-maptip-actions-view-details",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ShowFeatureDetails",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-feature-layer-edit",
                  "description": "@language-feature-layer-edit-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "StartEditingFeature",
                  "hideOnDisable": false
                }
              ]
            }
          ]
        }
      },
      {
        "moduleName": "NativeIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.NativeIntegrationModule",
        "configuration": {},
        "views": [
          {
            "id": "AttachFileView",
            "viewModelId": "AttachFileViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-native-attach-file",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileView",
            "markup": "Mapping/modules/Native/AttachFileView.html",
            "region": "FeatureEditingContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "AttachFileViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileViewModel",
            "configuration": {
              "attachFileViewId": "AttachFileView"
            }
          }
        ]
      },
      {
        "moduleName": "Navigation",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.navigation.NavigationModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateButtonView",
            "viewModelId": "GeolocateViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "markup": "Mapping/modules/Geolocate/GeolocateButtonView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomInView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomOutView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "TopLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "BookmarksButtonView",
            "viewModelId": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "region": "TopLeftMapRegion",
            "visible": true
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "OptimizerIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.optimizerIntegration.OptimizerIntegrationModule",
        "configuration": {
          "enabled": false,
          "userName": "DefaultUser",
          "dataRelayUri": "http://localhost/Geocortex/Optimizer/Rest/DataRelay/LogData.ashx?f=json"
        }
      },
      {
        "moduleName": "Printing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingModule",
        "configuration": {},
        "views": [
          {
            "id": "PrintingView",
            "viewModelId": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingView",
            "markup": "Mapping/modules/Printing/PrintingView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
            "title": "@language-print-map",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Prompt",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
        "configuration": {
          "promptRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Pushpins",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.pushpins.PushpinsModule",
        "configuration": {
          "pushpinsEnabled": true,
          "pushpinMarkerUri": "Resources/Images/Pushpins/map-marker-red-32.png",
          "pushpinMarkerWidth": 32,
          "pushpinMarkerHeight": 32,
          "offsetX": 0,
          "offsetY": 16,
          "eventMappings": {
            "PushpinClickedEvent": [
              "ShowMapTip",
              "HighlightFeatureDefault"
            ],
            "PushpinMouseLeftButtonDownEvent": [],
            "PushpinMouseLeftButtonUpEvent": [],
            "PushpinMouseRightButtonDownEvent": [],
            "PushpinMouseRightButtonUpEvent": [],
            "PushpinMouseEnterEvent": [],
            "PushpinMouseLeaveEvent": []
          }
        }
      },
      {
        "moduleName": "Results",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsModule",
        "configuration": {
          "resultMappings": {
            "Identify": [
              "RemovePushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "MapTip": [
              "ShowMapTipResults"
            ],
            "Workflow": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Search": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "QueryBuilder": [
              "AddPushpins",
              "ShowResultsList",
              "SetCollectionOfInterest"
            ]
          },
          "eventMappings": {
            "ResultsListFeatureClickedEvent": [
              "ShowFeatureDetails",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ],
            "ResultsListFeaturePressedEvent": [
              "ShowFeatureDetails",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ],
            "ResultsTableFeatureClickedEvent": [
              "ShowMapTip",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ],
            "ResultsTableFeaturePressedEvent": [
              "ShowMapTip",
              "ZoomToFeature",
              "HighlightFeatureDefault"
            ]
          }
        },
        "views": [
          {
            "id": "ResultsListView",
            "viewModelId": "ResultsListViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsListView",
            "markup": "Mapping/infrastructure/results/ResultsListView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "configuration": {
              "isPaged": true,
              "pageSize": 50,
              "contentField": "longDescription"
            },
            "libraryId": "Mapping.Infrastructure"
          },
          {
            "id": "ResultsTableView",
            "viewModelId": "ResultsTableViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsTableView",
            "markup": "Mapping/infrastructure/results/ResultsTableView.html",
            "region": "ResultsRegion",
            "visible": false,
            "configuration": {
              "isPaged": true,
              "pageSize": 50
            },
            "libraryId": "Mapping.Infrastructure"
          }
        ],
        "viewModels": [
          {
            "id": "ResultsListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FlatResultsViewModel",
            "configuration": {}
          },
          {
            "id": "ResultsTableViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.TabbedResultsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Search",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
        "configuration": {
          "autoLoadSiteGeocoders": true,
          "searchProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerQuerySearchProvider",
              "enable": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.InstantSearchProvider",
              "name": "@language-search-instant-provider-name",
              "description": "@language-search-instant-provider-description",
              "enable": true,
              "configuration": {
                "maxResults": 50,
                "maxHints": 5,
                "enableSearchHints": true,
                "precedenceToNearbyResults": true
              }
            }
          ]
        },
        "views": [],
        "viewModels": [
          {
            "id": "SearchViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
            "configuration": {
              "enableSearchRefinement": true,
              "minimumPopulateDelay": 300,
              "minimumPrefixLength": 3
            }
          }
        ]
      },
      {
        "moduleName": "Shells",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "configuration": {
          "css": [
            "Resources/Styles/Desktop.css",
            "{ViewerConfigUri}../../Styles/Custom/Desktop.css"
          ],
          "homePanelVisible": false
        },
        "views": [
          {
            "id": "ShellView",
            "viewModelId": "ShellViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellView",
            "markup": "Mapping/modules/Shells/DesktopShellView.html",
            "region": "ApplicationRegion",
            "configuration": {}
          },
          {
            "id": "DataFrameViewContainer",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "LeftPanelRegion",
            "configuration": {}
          },
          {
            "id": "ModalViewContainerView",
            "viewModelId": "ModalViewContainerViewModel",
            "visible": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "ModalWindowPlaceholderRegion",
            "configuration": {}
          },
          {
            "id": "ResultsRegionViewContainerView",
            "viewModelId": "ResultsRegionViewContainerViewModel",
            "visible": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "BottomPanelRegion",
            "configuration": {}
          },
          {
            "id": "FeatureEditingContainerView",
            "viewModelId": "FeatureEditingContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          },
          {
            "id": "LayerDataContainerView",
            "viewModelId": "LayerDataContainerViewModel",
            "visible": true,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          },
          {
            "id": "HomePanelContainerView",
            "viewModelId": "HomePanelContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-welcome",
            "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          },
          {
            "id": "DataFrameResultsContainerView",
            "viewModelId": "DataFrameResultsContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/search-results-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          },
          {
            "id": "SimpleQueryBuilderContainerView",
            "viewModelId": "SimpleQueryBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-title",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          },
          {
            "id": "SimpleFilterBuilderContainerView",
            "viewModelId": "SimpleFilterBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-querybuilder-simple-filter-title",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "libraryId": "Framework.UI",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "markup": "Framework.UI/geocortex/framework/ui/ViewContainer/ViewContainerView.html",
            "region": "DataRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ShellViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellViewModel",
            "configuration": {
              "minWidth": 200,
              "maxWidth": 500,
              "dataFrameWidth": 350,
              "dataFrameOpenByDefault": false,
              "bottomRegionHeight": 300
            }
          },
          {
            "id": "DataFrameViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-results-24.png",
              "containerRegionName": "DataRegion",
              "headerIsVisible": false,
              "showHeaderForStandaloneViews": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "footerInsertMarkup": "Framework.UI/geocortex/framework/ui/ViewContainer/ButtonTabStripView.html",
              "footerInsertType": "geocortex.framework.ui.ViewContainer.ButtonTabStripView",
              "ordering": {
                "DataFrameResultsContainerView": 0
              }
            }
          },
          {
            "id": "DataFrameResultsContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "DataFrameResultsContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "ResultsListView": 0,
                "FeatureDetailsView": 1
              }
            }
          },
          {
            "id": "LayerDataContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "LayerDataContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "LayerActionsView": 1,
                "LegendView": 2,
                "MapDataMenuView": 3,
                "FeatureLayerListView": 4,
                "FeatureLayerDetailsView": 5,
                "EditLogView": 6,
                "LayerListView": 0
              }
            }
          },
          {
            "id": "HomePanelContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "HomePanelContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "InfoView": 0
              }
            }
          },
          {
            "id": "FeatureEditingContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "FeatureEditingContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "ordering": {
                "TemplatePickerView": 0,
                "AttributeEditorView": 1
              }
            }
          },
          {
            "id": "ModalViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "ModalWindowRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "closeOnEscape": true
            }
          },
          {
            "id": "ResultsRegionViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "ResultsRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "ordering": {
                "ResultsTableView": 0
              }
            }
          },
          {
            "id": "SimpleQueryBuilderViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "SimpleQueryBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {}
            }
          },
          {
            "id": "SimpleFilterBuilderViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "configuration": {
              "containerRegionName": "SimpleFilterBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "Site",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
        "configuration": {
          "siteUri": "{ViewerConfigUri}../../../../../.."
        },
        "views": [
          {
            "id": "ServiceLayersFailureView",
            "viewModelId": "ServiceLayersFailureViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureView",
            "markup": "Mapping/modules/Site/ServiceLayersFailureView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          },
          {
            "id": "SignInErrorView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.SignInErrorView",
            "markup": "Mapping/modules/Site/SignInErrorView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ServiceLayersFailureViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Status",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
        "configuration": {
          "busyIcon": "Resources/Images/loader-small.gif"
        },
        "views": [
          {
            "id": "StatusIndicatorView",
            "viewModelId": null,
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
            "markup": "Mapping/modules/Status/StatusIndicatorView.html",
            "region": "BottomCenterMapRegion",
            "configuration": {}
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "Toolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarModule",
        "configuration": {
          "transientElements": [],
          "toolbarGroups": [
            {
              "id": "ToolsTab",
              "type": "toolbarGroup",
              "name": "Home",
              "items": [
                {
                  "id": "HomeGroup",
                  "type": "toolbarGroup",
                  "name": "Tools",
                  "items": [
                    {
                      "id": "InitialExtentButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                      "command": "ZoomToInitialExtent",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-navigation-initial-extent",
                      "tooltip": "@language-toolbar-navigation-initial-extent-tooltip"
                    },
                    {
                      "id": "ClearMarkup",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "Clear_All",
                      "hideOnDisable": false,
                      "name": "@language-toolbar-markup-clear",
                      "tooltip": "@language-toolbar-markup-clear-tooltip"
                    }
                  ],
                  "layout": "Large"
                },
                {
                  "id": "sGezh4u0",
                  "type": "toolbarGroup",
                  "name": "Identify",
                  "items": [
                    {
                      "id": "FreehandIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
                      "command": "Identify",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-identify-freehand",
                      "tooltip": "@language-toolbar-identify-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-freehand-desc"
                    },
                    {
                      "id": "PolygonIdentifyTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
                      "command": "Identify",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-identify-polygon",
                      "tooltip": "@language-toolbar-identify-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-identify-polygon-desc"
                    },
                    {
                      "id": "PointIdentifyTool-Navigation",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "name": "Identify",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    }
                  ],
                  "layout": "Large"
                },
                {
                  "id": "L5RMaCBf",
                  "type": "toolbarGroup",
                  "name": "Search",
                  "items": [
                    {
                      "id": "zKfOQaf9",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Custom/Location-24.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "Find_Location",
                      "hideOnDisable": true,
                      "name": "Locations",
                      "tooltip": "Search for Locations"
                    },
                    {
                      "id": "dE1b4ttR",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Custom/Parcel-24.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "Find_Parcels",
                      "hideOnDisable": true,
                      "name": "Parcels",
                      "tooltip": "Search For Parcels"
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            },
            {
              "id": "FmJcL0Ks",
              "type": "toolbarGroup",
              "name": "Tools",
              "items": [
                {
                  "id": "Xuqk11Xe",
                  "type": "toolbarGroup",
                  "name": "Measuring",
                  "items": [
                    {
                      "id": "MeasureDistanceTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "POLYLINE",
                      "name": "@language-measurement-measure-distance-tool-name",
                      "tooltip": "@language-measurement-measure-distance-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-distance-tool-status"
                    },
                    {
                      "id": "MeasureAreaTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
                      "command": "MeasureArea",
                      "drawMode": "POLYGON",
                      "name": "@language-measurement-measure-area-tool-name",
                      "tooltip": "@language-measurement-measure-area-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-area-tool-status"
                    },
                    {
                      "id": "MeasurementToolControlRegion",
                      "type": "region",
                      "regionName": "MeasurementToolControlRegion"
                    }
                  ],
                  "layout": "Large"
                },
                {
                  "id": "ENdhbmV1",
                  "type": "toolbarGroup",
                  "name": "Query",
                  "items": [
                    {
                      "id": "ShowSimpleQueryBuilderButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/query-24.png",
                      "command": "ActivateView",
                      "commandParameter": "SimpleQueryBuilderView",
                      "hideOnDisable": false,
                      "name": "@language-querybuilder-simple-title",
                      "tooltip": "@language-querybuilder-simple-tooltip"
                    },
                    {
                      "id": "ShowSimpleFilterBuilderButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/filter-24.png",
                      "command": "ActivateView",
                      "commandParameter": "SimpleFilterBuilderView",
                      "hideOnDisable": false,
                      "name": "@language-querybuilder-simple-filter-title",
                      "tooltip": "@language-querybuilder-simple-filter-tooltip"
                    }
                  ],
                  "layout": "Large"
                },
                {
                  "id": "UT8k48lK",
                  "type": "toolbarGroup",
                  "name": "Print",
                  "items": [
                    {
                      "id": "PrintMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                      "command": "PrintMap",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-print-map",
                      "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            },
            {
              "id": "8MJH38O3",
              "type": "toolbarGroup",
              "name": "Drawing",
              "items": [
                {
                  "id": "DrawingTools",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-markup-drawing-tools",
                  "items": [
                    {
                      "id": "PointMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-point",
                      "tooltip": "@language-toolbar-markup-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-point-desc"
                    },
                    {
                      "id": "TextMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                      "command": "AddTextMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-text",
                      "tooltip": "@language-toolbar-markup-text-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-text-desc"
                    },
                    {
                      "id": "PolylineMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYLINE",
                      "name": "@language-toolbar-markup-polyline",
                      "tooltip": "@language-toolbar-markup-polyline-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polyline-desc"
                    },
                    {
                      "id": "FreehandMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                      "command": "AddMarkup",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-markup-freehand",
                      "tooltip": "@language-toolbar-markup-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-freehand-desc"
                    },
                    {
                      "id": "EllipseMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                      "command": "AddMarkup",
                      "drawMode": "ELLIPSE",
                      "name": "@language-toolbar-markup-ellipse",
                      "tooltip": "@language-toolbar-markup-ellipse-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-ellipse-desc"
                    },
                    {
                      "id": "CircleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "CIRCLE",
                      "name": "@language-toolbar-markup-circle",
                      "tooltip": "@language-toolbar-markup-circle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-circle-desc"
                    },
                    {
                      "id": "PolygonMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-markup-polygon",
                      "tooltip": "@language-toolbar-markup-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polygon-desc"
                    },
                    {
                      "id": "RectangleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-markup-rectangle",
                      "tooltip": "@language-toolbar-markup-rectangle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-rectangle-desc"
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            },
            {
              "id": "TTitMbTy",
              "type": "toolbarGroup",
              "name": "Edit",
              "items": [
                {
                  "id": "Cp4kTh2y",
                  "type": "toolbarGroup",
                  "name": "Create",
                  "items": [
                    {
                      "id": "CreateNewFeatureButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                      "command": "ActivateView",
                      "commandParameter": "TemplatePickerView",
                      "hideOnDisable": false,
                      "name": "@language-toolbar-editing-create-new-feature",
                      "tooltip": "@language-toolbar-editing-create-new-feature-tooltip"
                    },
                    {
                      "id": "MarkupEditRegion",
                      "type": "region",
                      "regionName": "MarkupEditRegion"
                    }
                  ],
                  "layout": "Large"
                },
                {
                  "id": "OfflineManagementGroup",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-group-offline-management",
                  "items": [
                    {
                      "id": "ManageOfflineDataButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-manage-24.png",
                      "command": "ActivateView",
                      "commandParameter": "MapDataMenuView",
                      "hideOnDisable": false,
                      "name": "@language-toolbar-editing-manage-offline-data",
                      "tooltip": "@language-toolbar-editing-manage-offline-data-tooltip"
                    },
                    {
                      "id": "SyncButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                      "command": "ActivateView",
                      "commandParameter": "EditLogView",
                      "hideOnDisable": false,
                      "name": "@language-toolbar-editing-sync",
                      "tooltip": null
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            }
          ]
        },
        "viewModels": [
          {
            "id": "MainToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarViewModel",
            "configuration": {
              "toolbarGroupRefs": [
                "ToolsTab",
                "FmJcL0Ks",
                "8MJH38O3",
                "TTitMbTy"
              ],
              "toolbarOpenByDefault": true
            }
          }
        ],
        "views": [
          {
            "id": "MainToolbarView",
            "viewModelId": "MainToolbarViewModel",
            "visible": false,
            "title": "Main Toolbar",
            "region": "ToolbarRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarView",
            "markup": "Mapping/modules/Toolbar/LargeToolbarView.html",
            "configuration": {}
          },
          {
            "id": "ToolbarButtonView",
            "viewModelId": "MainToolbarViewModel",
            "visible": true,
            "region": "TopRightMapRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html"
          }
        ]
      },
      {
        "moduleName": "Tools",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
        "configuration": {
          "showStatusMessages": true,
          "tools": [
            {
              "name": "EditMarkupTool",
              "command": "EditMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/edit-markup-24.png",
              "statusText": "@language-toolbar-markup-edit-desc"
            },
            {
              "name": "DeleteMarkupTool",
              "command": "DeleteMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc"
            }
          ]
        }
      },
      {
        "moduleName": "User",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "configuration": {},
        "views": [],
        "viewModels": [
          {
            "id": "SignInViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInViewModel",
            "configuration": {
              "linkColor": "#1B7DBF"
            }
          },
          {
            "id": "UserInfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoViewModel",
            "configuration": {
              "linkColor": "#1B7DBF",
              "textColor": "#333333",
              "backgroundColor": "#FFFFFF"
            }
          }
        ]
      },
      {
        "moduleName": "Workflow",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "configuration": {
          "showTitleInFormBody": false,
          "defaultContainerRegionName": "DataRegion",
          "defaultContainerTitle": "@language-workflow-title",
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "showCaptureStatusMessages": true,
          "displayResultPickerTemplateComplexity": "complex",
          "startupWorkflows": [
            "Launch_Map"
          ],
          "formItems": {},
          "icons": {
            "Resources/Images/ParcelByID.png": "Resources/Images/Icons/Toolbar/house-number-24.png",
            "Resources/Images/ParcelByOwner.png": "Resources/Images/Icons/Toolbar/house-owner-24.png",
            "Resources/Images/ParcelByValue.png": "Resources/Images/Icons/Toolbar/house-value-24.png",
            "Resources/Images/SearchSchools.png": "Resources/Images/Icons/Toolbar/school-24.png"
          },
          "containers": [
            {
              "name": "Default",
              "title": "@language-workflow-title",
              "regionName": "DataRegion"
            },
            {
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "DataRegion",
              "allowClose": false
            },
            {
              "name": "Extract",
              "title": "@language-common-extract-data",
              "regionName": "DataRegion",
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png"
            },
            {
              "name": "ModalWindow",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion"
            },
            {
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion"
            }
          ]
        },
        "views": [
          {
            "id": "WorkflowListView",
            "viewModelId": "WorkflowViewModel",
            "title": "@language-workflow-workflows",
            "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
            "description": "@language-workflow-site-workflows",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "region": "DataRegion",
            "showBackButtonAsX": true,
            "visible": false,
            "configuration": {
              "hideOnClickWorkflow": false
            }
          }
        ],
        "viewModels": [
          {
            "id": "WorkflowViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ZoomControl",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Scalebar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarModule",
        "configuration": {},
        "views": [
          {
            "id": "ScalebarView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarView",
            "markup": "Mapping/modules/Scalebar/ScalebarView.html",
            "region": "BottomLeftMapRegion",
            "configuration": {
              "scalebarStyle": "ruler",
              "scalebarUnit": "metric",
              "showBackground": false
            },
            "viewModelId": "ScalebarViewModel"
          }
        ],
        "viewModels": [
          {
            "id": "ScalebarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Charting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingModule",
        "libraryId": "Mapping.Charting",
        "configuration": {
          "infrastructureLibraryId": "Charting",
          "adapters": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.FeatureChartPointAdapter",
              "source": "Field",
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.DataLinkChartPointAdapter",
              "source": "DataLink",
              "configuration": {}
            }
          ],
          "eventMappings": {
            "ChartPointMouseHoverBeginEvent": [
              "ClearChartHighlights",
              "HighlightChartFeatureSet"
            ],
            "ChartPointMouseHoverEndEvent": [
              "ClearChartHighlights"
            ],
            "ChartPointMouseDownEvent": [
              "RunChartFeatureActions"
            ]
          }
        },
        "views": [
          {
            "id": "ChartingView",
            "viewModelId": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingView",
            "markup": "Mapping.Charting/modules/Charting/ChartingView.html",
            "libraryId": "Mapping.Charting",
            "region": "BottomPanelRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "libraryId": "Mapping.Charting",
            "configuration": {
              "mobileMode": false,
              "chartingEnabled": true,
              "chartConfiguration": {
                "animationsEnabled": true,
                "gradientsEnabled": false,
                "interactiveLegendEnabled": false,
                "pieStartAngle": 180,
                "renderAs": "svg"
              },
              "infrastructureLibraryId": "Charting",
              "containerRegionName": "ChartingRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "showXButton": true,
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-24.png",
              "headerIsVisible": true,
              "showHeaderForStandaloneViews": false,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "Geolocate",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateView",
            "viewModelId": "GeolocateViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "region": "GeolocateMenuRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "GeolocateViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateViewModel",
            "configuration": {
              "geolocateEnabled": true,
              "trackingEnabled": true,
              "followingEnabled": true,
              "enableHighAccuracy": true,
              "geolocateAccuracyCircleEnabled": true,
              "adjustExtentZoomOnGeolocate": true,
              "geolocateExtentZoomLevel": 50000,
              "geolocationIndicator": "Resources/Images/Icons/geolocate-position-32.png"
            }
          }
        ]
      },
      {
        "moduleName": "LayerList",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListModule",
        "configuration": {
          "enableLegendIntegration": true,
          "autoActivateAncestorVisibilities": false,
          "enableLayerIcons": false
        },
        "views": [
          {
            "id": "LayerListView",
            "viewModelId": "LayerListViewModel",
            "title": "@language-layerlist-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListView",
            "markup": "Mapping/modules/LayerList/LayerListView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          },
          {
            "id": "LayerActionsView",
            "viewModelId": "LayerActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "markup": "Mapping/modules/LayerList/LayerActions/LayerActionsView.html",
            "title": "@language-layer-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsView",
            "region": "LayerDataContainerRegion",
            "configuration": {
              "menuId": "LayerActions"
            }
          }
        ],
        "viewModels": [
          {
            "id": "LayerListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListViewModel",
            "configuration": {
              "showTransparencySlider": true,
              "autoExpandLegendSwatches": false
            }
          },
          {
            "id": "LayerActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "LayerThemes",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemesModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "QueryBuilder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.QueryBuilderModule",
        "configuration": {},
        "views": [
          {
            "id": "SimpleQueryBuilderView",
            "viewModelId": "SimpleQueryBuilderViewModel",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "query"
            }
          },
          {
            "id": "SimpleFilterBuilderView",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-filter-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "filter"
            }
          }
        ],
        "viewModels": [
          {
            "id": "SimpleQueryBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          },
          {
            "id": "SimpleFilterBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {}
          }
        ]
      }
    ],
    "widgets": [
      {
        "id": "AutoCompleteBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.AutoCompleteBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/AutoCompleteBoxFormItemView.html"
      },
      {
        "id": "CheckBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.CheckBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/CheckBoxFormItemView.html"
      },
      {
        "id": "ComboBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ComboBoxFormItemView.html"
      },
      {
        "id": "ContainerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ContainerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ContainerFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        }
      },
      {
        "id": "DatePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html"
      },
      {
        "id": "FilePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FilePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/FilePickerFormItemView.html"
      },
      {
        "id": "GroupBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.GroupBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/GroupBoxFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        }
      },
      {
        "id": "HyperlinkFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.HyperlinkFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/HyperlinkFormItemView.html"
      },
      {
        "id": "ImageFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/ImageFormItemView.html"
      },
      {
        "id": "LabelFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.FormItemViewBase",
        "markup": "Mapping/modules/Workflow/Forms/Items/LabelFormItem.html"
      },
      {
        "id": "ListBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.ListBoxFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/ListBoxFormItemView.html"
      },
      {
        "id": "RadioButtonFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.RadioButtonFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/RadioButtonFormItemView.html"
      },
      {
        "id": "TextAreaFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextAreaFormItemView.html"
      },
      {
        "id": "TextBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TextEntryFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TextBoxFormItemView.html"
      },
      {
        "id": "TimePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.TimePickerFormItemView",
        "markup": "Mapping/modules/Workflow/Forms/Items/TimePickerFormItemView.html"
      },
      {
        "id": "MapTipActionsWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipActionsView",
        "markup": "Mapping/modules/MapTips/MapTipActionsView.html",
        "configuration": {
          "menuId": "MapTipActions"
        }
      }
    ]
  }
}