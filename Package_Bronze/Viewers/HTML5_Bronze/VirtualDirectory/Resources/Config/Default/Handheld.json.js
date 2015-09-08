{
  "configuration": {
    "version": "2.4",
    "application": {
      "proxyUri": "https://geo.caymanlandinfo.ky/Proxy/proxy.ashx?",
      "allowUnsafeContent": false,
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "https://adapter.caymanlandinfo.ky/secure/rest/services/Utilities/Geometry/GeometryServer",
      "mobileMode": true
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
            "isManaged": false,
            "title": "@language-common-view-log",
            "iconUri": "Resources/Images/Icons/log.png",
            "description": "@language-log-app-log",
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
        "moduleName": "Accessibility",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityModule",
        "configuration": {
          "keyboardFocusIndicatorEnabled": true,
          "expandedMapKeyboardAccessibility": true,
          "automaticElementFocusing": true,
          "providers": [
            {
              "id": "MapTextProvider",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.MapTextProvider",
              "decimalPrecision": 4,
              "readAttributionInformation": false,
              "isEnabled": true
            }
          ]
        },
        "views": [
          {
            "id": "AccessibilityView",
            "viewModelId": "AccessibilityViewModel",
            "visible": true,
            "type": "geocortex.framework.ui.ViewBase",
            "markup": "Mapping/modules/Accessibility/AccessibilityView.html",
            "region": "AccessibilityRegion"
          }
        ],
        "viewModels": [
          {
            "id": "AccessibilityViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityViewModel",
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
        "moduleName": "Basemap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "configuration": {},
        "views": [
          {
            "id": "BasemapSliderView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSliderView",
            "markup": "Mapping/modules/Basemap/BasemapSliderView.html",
            "region": "TopRightMapRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "BasemapSwitcherView",
            "viewModelId": "BasemapSwitcherViewModel",
            "title": "@language-basemap-switcher-view-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherView.html",
            "region": "MiscViewContainerRegion",
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
            "region": "MiscViewContainerRegion",
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
              "RunChartFeatureActions",
              "ShowMap"
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
            "region": "MiscViewContainerRegion",
            "visible": false,
            "configuration": {},
            "title": "@language-feature-charts"
          }
        ],
        "viewModels": [
          {
            "id": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "libraryId": "Mapping.Charting",
            "configuration": {
              "chartingEnabled": true,
              "chartConfiguration": {
                "animationsEnabled": false,
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
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "CompactToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarModule",
        "configuration": {
          "isEnabled": true,
          "transientElements": [
            {
              "tools": [
                "MeasureDistanceTool",
                "MeasureAreaTool",
                "MeasureLineTool",
                "MeasureFreehandLineTool",
                "MeasurePolygonTool",
                "MeasureFreehandPolygonTool",
                "MeasureCircleTool",
                "MeasureRectangleTool"
              ],
              "widgetId": "SimpleMeasurementToolTransientToolbar",
              "worksWith": [
                "DeleteMeasurementTool"
              ],
              "region": "CompactToolbarTransientRegion"
            },
            {
              "tools": [
                "PointMarkupTool",
                "FreehandMarkupTool",
                "PolylineMarkupTool",
                "PolygonMarkupTool",
                "RectangleMarkupTool",
                "CircleMarkupTool",
                "EllipseMarkupTool",
                "TextMarkupTool"
              ],
              "widgetId": "DrawingToolTransientToolbar",
              "worksWith": [
                "EditMarkupTool",
                "DeleteMarkupTool"
              ],
              "region": "CompactToolbarTransientRegion"
            }
          ],
          "toolbarGroups": [
            {
              "id": "compactToolbar",
              "type": "toolbarGroup",
              "name": "Compact Toolbar",
              "items": [
                {
                  "id": "HomeButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "command": "ActivateHomePanel",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-home-sub",
                  "tooltip": "@language-toolbar-navigation-home-tooltip"
                },
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
                  "id": "PointIdentifyTool-Navigation",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "command": "Identify",
                  "drawMode": "RECTANGLE",
                  "name": "@language-toolbar-tasks-identify",
                  "tooltip": "@language-toolbar-identify-point-tooltip",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "@language-toolbar-identify-point-desc"
                },
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
              ]
            }
          ]
        },
        "viewModels": [
          {
            "id": "CompactToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarViewModel",
            "configuration": {
              "toggleCommandDisablesView": true,
              "toolbarVisibleTools": 4,
              "toolbarOpenByDefault": false,
              "toolbarGroupRefs": [
                "compactToolbar"
              ]
            }
          }
        ],
        "views": [
          {
            "id": "CompactToolbarView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": false,
            "title": "@language-compact-toolbar-name",
            "region": "TopRightShellRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarView",
            "markup": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView.html",
            "configuration": {}
          },
          {
            "id": "CompactToolbarFlyoutView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-toolbar-multi-tool",
            "region": "MiscViewContainerRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {}
          },
          {
            "id": "CompactToolbarButtonView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": true,
            "region": "HeaderRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html"
          }
        ]
      },
      {
        "moduleName": "Confirm",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "configuration": {
          "confirmRegion": "ModalWindowRegion",
          "overrideNativeConfirm": true
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
            "region": "MiscViewContainerRegion",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-feature-offline-tools",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {
              "menuId": "MapDataMenu"
            },
            "libraryId": "Mapping.Infrastructure",
            "viewModelId": "EditingMapDataMenuViewModel"
          },
          {
            "id": "TemplatePickerView",
            "viewModelId": "TemplatePickerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "region": "ResultsViewContainerRegion",
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
            "region": "ResultsViewContainerRegion",
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
            "region": "ResultsViewContainerRegion",
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
                  "statusText": "@language-feature-editing-dsk-point-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-point-tool-keyboard"
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
                  "statusText": "@language-feature-editing-dsk-polyline-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polyline-tool-keyboard"
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
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard"
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
          },
          {
            "id": "EditingMapDataMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ExportMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapModule",
        "configuration": {},
        "views": [
          {
            "id": "ExportMapView",
            "viewModelId": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapView",
            "markup": "Mapping/modules/ExportMap/ExportMapView.html",
            "region": "MiscViewContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-map-image-24.png",
            "title": "@language-export-map-description",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "FeatureDetails",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "configuration": {
          "defaultViewMode": "compact",
          "viewModes": {
            "compact": {
              "viewId": "FeatureDetailsCompactView",
              "defaultProviderTargetRegion": "FeatureRegion"
            }
          },
          "providers": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsViewModel",
              "viewId": "FeatureActionsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsView",
              "title": "@language-feature-actions",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/FeatureActionsView.html",
              "viewConfig": {
                "menuId": "FeatureActions"
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewId": "FeatureDescriptionProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "title": "@language-feature-description",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html",
              "config": {
                "longDescription": true
              },
              "enabled": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "viewId": "FeatureHyperlinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html",
              "title": "@language-feature-hyperlinks"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "viewId": "FeatureAttributesProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/MultiColumnAttributesView.html",
              "title": "@language-feature-attributes"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "viewId": "FeatureChartsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "libraryId": "Mapping.Charting",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html",
              "title": "@language-feature-charts",
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
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "viewId": "FeatureAttachmentsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html",
              "title": "@language-feature-attachments"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "viewId": "FeatureRelationsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
              "title": "@language-feature-related-features"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewId": "FeatureDataLinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
              "title": "@language-feature-datalinks",
              "config": {
                "dataLinkDetailsView": "ResultsViewContainerRegion"
              }
            }
          ]
        },
        "views": [
          {
            "id": "FeatureDetailsCompactView",
            "viewModelId": "FeatureDetailsCompactViewModel",
            "visible": false,
            "title": "@language-feature-details-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "libraryId": "Framework.UI",
            "markup": "Framework.UI/geocortex/framework/ui/MultiRegion/MultiRegionView.html",
            "region": "ResultsViewContainerRegion",
            "configuration": {
              "onDeactivated": [
                "ClearDefaultHighlights"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "FeatureDetailsCompactViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "regions": [
                {
                  "regionName": "FeatureRegion",
                  "regionType": "geocortex.framework.ui.DivStackRegionAdapter",
                  "regionCss": "feature-region"
                }
              ]
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
            "region": "MiscViewContainerRegion",
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
            "region": "MiscViewContainerRegion",
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
        "moduleName": "Geolocate",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateView",
            "viewModelId": "GeolocateViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "region": "MiscViewContainerRegion",
            "visible": false,
            "configuration": {},
            "title": "@language-geolocate-title"
          },
          {
            "id": "GeolocateStatusView",
            "viewModelId": "GeolocateStatusViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateStatusView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusView",
            "region": "BottomCenterMapRegion",
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
          },
          {
            "id": "GeolocateStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusViewModel",
            "configuration": {
              "showGeolocateCoordinates": false,
              "showTrackingCoordinates": true,
              "showFollowingCoordinates": true,
              "coordinateFormat": "dd",
              "coordinateWkid": null,
              "coordinateFractionalDigits": 4,
              "geolocateIcon": "Resources/Images/Icons/geolocate-24.png",
              "busyIcon": "Resources/Images/loader-small.gif"
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
              "statusText": "@language-mbl-identify-point-tool",
              "keyboardStatusText": "@language-toolbar-identify-point-desc-keyboard"
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
              "statusText": "@language-mbl-identify-polyline-tool",
              "keyboardStatusText": "@language-toolbar-identify-polyline-desc-keyboard"
            },
            {
              "name": "IdentifyPolygonTool",
              "command": "Identify",
              "drawMode": "POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool",
              "keyboardStatusText": "@language-toolbar-identify-polygon-desc-keyboard"
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
                "pixelTolerance": 10,
                "polygonPixelTolerance": 5,
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
            "region": "MiscViewContainerRegion",
            "title": "@language-common-welcome",
            "configuration": {},
            "visible": false
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
                },
                {
                  "iconUri": "Resources/Images/Icons/bookmark-24.png",
                  "text": "@language-menu-bookmark-add",
                  "description": "@language-menu-bookmark-add-desc",
                  "command": "ShowAddBookmark",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/basemap-24.png",
                  "text": "@language-basemap-switcher-view-name",
                  "description": "@language-basemap-switcher-view-description",
                  "command": "ActivateView",
                  "commandParameter": "BasemapSwitcherView"
                },
                {
                  "iconUri": "Resources/Images/Icons/lock-24.png",
                  "text": "@language-user-sign-in",
                  "description": "@language-user-sign-in-desc",
                  "command": "SignIn",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/lock-24.png",
                  "text": "@language-user-sign-out",
                  "description": "@language-user-sign-out-desc",
                  "command": "SignOut",
                  "hideOnDisable": true
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IWantToMenuView",
            "viewModelId": "IWantToMenuViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/arrow-down-small-16.png",
            "description": "@language-menu-description",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "region": "LeftPanelRegion",
            "configuration": {
              "menuId": "Iwantto"
            },
            "isManaged": true
          }
        ],
        "viewModels": [
          {
            "id": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "configuration": {
              "menuTitle": "@language-menu-title",
              "showMenu": true
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
            "visible": true,
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
          "panDuration": 0,
          "panRate": 50,
          "zoomDuration": 500,
          "zoomRate": 50,
          "onClick": [
            "ClearDefaultHighlights",
            "Identify"
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
              "statusText": "@language-mbl-map-center"
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
          "maxExtentLogSize": 50
        },
        "views": [
          {
            "id": "MapView",
            "viewModelId": "MapViewModel",
            "visible": true,
            "isManaged": false,
            "title": "@language-map-title",
            "iconUri": "Resources/Images/Icons/Toolbar/map-24.png",
            "description": "@language-map-surface",
            "markup": "Mapping/modules/Map/MapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "region": "ScreenRegion",
            "configuration": {
              "wrapAround180": true,
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
              "stepZoomFactor": 0.5,
              "panStep": 0.333
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
          "onCurrentFeatureChange": [
            "PanToFeatureIfOutsideMapExtent"
          ],
          "webMapFeaturePresenter": {
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
        },
        "views": [
          {
            "id": "MapTipView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipView",
            "region": "ResultsViewContainerRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "MapTipHeaderView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipHeaderView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipHeaderView",
            "region": "MapTipHeaderRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "MapTipContentView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipContent.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContent",
            "region": "MapTipContentRegion",
            "visible": true,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MapTipViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContentViewModel",
            "configuration": {}
          }
        ]
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
              "statusText": "@language-measurement-measure-distance-tool-status",
              "keyboardStatusText": "@language-measurement-measure-distance-tool-status-keyboard"
            },
            {
              "name": "MeasureAreaTool",
              "command": "MeasureArea",
              "drawMode": "POLYGON",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status",
              "keyboardStatusText": "@language-measurement-measure-area-tool-status-keyboard"
            },
            {
              "name": "DeleteMeasurementTool",
              "command": "DeleteMeasurement",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status",
              "keyboardStatusText": "@language-measurement-erase-status-keyboard"
            }
          ],
          "measurementProjectionWkid": "",
          "measurementLengthUnits": "feet",
          "measurementAreaUnits": "sqFeet",
          "enablePrediction": true,
          "calculationType": "preserveShape",
          "coordinateFractionalDigits": 4,
          "degreeFormat": "dd",
          "angleDirectionSystem": "polar",
          "measurementResultTypes": [
            "LINE",
            "POLYGON",
            "POLYLINE",
            "RECTANGLE",
            "TRIANGLE"
          ]
        },
        "views": [
          {
            "id": "MeasurementUnitSwitcherView",
            "viewModelId": "MeasurementViewModel",
            "markup": "Mapping/modules/Measurement/MeasurementUnitSwitcherView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "region": "MiscViewContainerRegion",
            "visible": false,
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
                  "description": "@language-native-attach-photo",
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
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-maptip-actions-view-details",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "command": "ShowFeatureDetails",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "LayerListActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-legend",
                  "description": "@language-menu-switch-to-legend-desc",
                  "iconUri": "Resources/Images/Icons/legend-16.png",
                  "command": "SwitchToLegendView"
                }
              ]
            },
            {
              "id": "LegendActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-layerlist",
                  "description": "@language-menu-switch-to-layerlist-desc",
                  "iconUri": "Resources/Images/Icons/layerlist-16.png",
                  "command": "SwitchToLayerView"
                }
              ]
            },
            {
              "id": "ResultsListActions",
              "description": "@language-menu-results-list-actions-desc",
              "items": [
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "hideOnDisable": true,
                  "command": "ShowChartingView"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  }
                }
              ]
            },
            {
              "id": "MobileSettingsMenu",
              "description": "@language-menu-settings-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "text": "@language-menu-home-panel",
                  "description": "@language-menu-home-panel-desc",
                  "command": "ShowHomePanel"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "text": "@language-menu-show-log",
                  "description": "@language-menu-show-log-desc",
                  "command": "ShowLog"
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
            "region": "ResultsViewContainerRegion",
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
            "region": "BottomLeftMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomInView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "ZoomOutView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "BookmarksButtonView",
            "viewModelId": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "region": "NavigationMapRegion",
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
            "region": "MiscViewContainerRegion",
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
            "region": "ResultsViewContainerRegion",
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
            },
            "isManaged": false
          },
          {
            "id": "SimpleFilterBuilderView",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "ResultsViewContainerRegion",
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
            },
            "isManaged": false
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
            ],
            "Measurement": []
          },
          "eventMappings": {
            "ResultsListFeatureClickedEvent": [
              "ZoomToFeature",
              "HighlightFeatureDefault",
              "ShowFeatureDetails"
            ],
            "ResultsListFeaturePressedEvent": [
              "ZoomToFeature",
              "HighlightFeatureDefault",
              "ShowFeatureDetails"
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
            "viewModelId": "ResultsViewModel",
            "isManaged": false,
            "visible": true,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/results.png",
            "description": "@language-common-query-results",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsListView",
            "markup": "Mapping/infrastructure/results/ResultsListView.html",
            "region": "ResultsViewContainerRegion",
            "configuration": {
              "isPaged": true,
              "pageSize": 10,
              "contentField": "longDescription"
            },
            "libraryId": "Mapping.Infrastructure"
          },
          {
            "id": "ResultsFeatureActionsView",
            "viewModelId": "ResultsViewModel",
            "isManaged": false,
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsFeatureActionsView",
            "markup": "Mapping/infrastructure/results/ResultsFeatureActionsView.html",
            "region": "ResultsViewContainerRegion",
            "configuration": {},
            "libraryId": "Mapping.Infrastructure"
          }
        ],
        "viewModels": [
          {
            "id": "ResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FlatResultsViewModel",
            "configuration": {}
          }
        ],
        "libraryId": "Mapping.Infrastructure"
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
              "showBackground": true
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
        "views": [
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
        "moduleName": "Share",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareModule",
        "configuration": {
          "shareOptions": [
            {
              "id": "facebook",
              "displayName": "Facebook",
              "url": "https://www.facebook.com/sharer/sharer.php?u={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/facebook-24.png"
            },
            {
              "id": "twitter",
              "displayName": "Twitter",
              "url": "https://twitter.com/intent/tweet?text={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/twitter-24.png"
            },
            {
              "id": "linkedin",
              "displayName": "Linkedin",
              "url": "https://www.linkedin.com/shareArticle?ro=false&mini=true&url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/linkedin-24.png"
            },
            {
              "id": "googleplus",
              "displayName": "Google+",
              "url": "https://plus.google.com/up/?continue=https://plus.google.com/share?url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/google-plus-24.png"
            },
            {
              "id": "email",
              "displayName": "Email",
              "url": "mailto:?body={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/Toolbar/contact-24.png"
            }
          ]
        },
        "views": [
          {
            "id": "ShareView",
            "viewModelId": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareView",
            "markup": "Mapping/modules/Share/ShareView.html",
            "region": "MiscViewContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
            "title": "@language-common-share",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareViewModel",
            "configuration": {
              "shareOptionIds": []
            }
          }
        ]
      },
      {
        "moduleName": "SharingLink",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.sharingLink.SharingLinkModule",
        "configuration": {
          "sharingLinkProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemeSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayersSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ExtentSharingLinkProvider",
              "generate": false
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CenterSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ScaleSharingLinkProvider"
            }
          ]
        }
      },
      {
        "moduleName": "Shells",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "configuration": {
          "css": [
            "Resources/Styles/Handheld.css",
            "Resources/Styles/SmallShell.css",
            "{ViewerConfigUri}../../Styles/Custom/Handheld.css"
          ],
          "homePanelVisible": false
        },
        "views": [
          {
            "id": "BottomPanelViewContainerView",
            "viewModelId": "BottomPanelViewContainerViewModel",
            "visible": true,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.ShellPanelView",
            "markup": "Mapping/modules/Shells/Components/Panels/ShellPanelView.html",
            "region": "BottomPanelRegion",
            "configuration": {}
          },
          {
            "id": "LayerDataContainerView",
            "viewModelId": "LayerDataContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "BottomPanelViewContainerRegion",
            "configuration": {}
          },
          {
            "id": "ResultsViewContainerView",
            "viewModelId": "ResultsViewContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "BottomPanelViewContainerRegion",
            "configuration": {}
          },
          {
            "id": "MiscContainerView",
            "viewModelId": "MiscContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "Misc",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "BottomPanelViewContainerRegion",
            "configuration": {}
          },
          {
            "id": "ModalContainerView",
            "viewModelId": "ModalContainerViewModel",
            "visible": false,
            "isManaged": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "ApplicationRegion",
            "configuration": {}
          },
          {
            "id": "ShellView",
            "viewModelId": "ShellViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.SmallShellView",
            "markup": "Mapping/modules/Shells/Small/SmallShellView.html",
            "region": "ApplicationRegion",
            "configuration": {
              "resizeShell": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "ShellViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.SmallShellViewModel",
            "configuration": {
              "openToMaximum": false,
              "bottomPanelHeightPercent": 75
            }
          },
          {
            "id": "BottomPanelViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.ShellPanelViewModel",
            "configuration": {
              "containerRegionName": "BottomPanelViewContainerRegion",
              "menuRegion": "MiscViewContainerRegion",
              "headerIsVisible": true,
              "showHeaderForStandaloneViews": false,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {
                "LayerDataContainerView": 0,
                "ResultsViewContainerView": 1,
                "MiscContainerView": 2
              }
            }
          },
          {
            "id": "ResultsViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerTitle": "@language-common-results",
              "containerRegionName": "ResultsViewContainerRegion",
              "headerIsVisible": false,
              "backButtonOnRootView": false,
              "ordering": {
                "SearchView": 0,
                "ResultsListView": 1,
                "ResultsFeatureActionsView": 2,
                "FeatureDetailsView": 3,
                "EditorView": 4
              }
            }
          },
          {
            "id": "LayerDataContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerTitle": "@language-layerlist-title",
              "containerRegionName": "LayerDataContainerRegion",
              "headerIsVisible": false,
              "backButtonOnRootView": false,
              "ordering": {
                "LayerListView": 0,
                "LayerActionsView": 1,
                "LegendView": 2,
                "ServiceLayersFailureView": 3
              }
            }
          },
          {
            "id": "MiscContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "MiscViewContainerRegion",
              "headerIsVisible": false,
              "backButtonOnRootView": false,
              "ordering": {
                "ToolbarFlyoutView": 0,
                "CompactToolbarFlyoutView": 1
              }
            }
          },
          {
            "id": "ModalContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "ModalWindowRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true
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
            "region": "LayerDataViewContainerRegion",
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
        "moduleName": "TabbedToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarModule",
        "configuration": {
          "transientElements": [
            {
              "tools": [
                "PointMarkupTool",
                "FreehandMarkupTool",
                "PolylineMarkupTool",
                "PolygonMarkupTool",
                "RectangleMarkupTool",
                "CircleMarkupTool",
                "EllipseMarkupTool",
                "TextMarkupTool"
              ],
              "widgetId": "MarkupPaletteSmall",
              "worksWith": [
                "EditMarkupTool",
                "DeleteMarkupTool"
              ],
              "region": "TopRightShellRegion"
            },
            {
              "tools": [
                "EditMarkupTool"
              ],
              "widgetId": "MarkupEditToolPaletteSmall",
              "region": "TopRightShellRegion"
            },
            {
              "tools": [
                "DeleteMarkupTool"
              ],
              "widgetId": "MarkupDeleteToolPaletteSmall",
              "region": "TopRightShellRegion"
            },
            {
              "tools": [
                "MeasureDistanceTool",
                "MeasureAreaTool",
                "MeasureLineTool",
                "MeasureFreehandLineTool",
                "MeasurePolygonTool",
                "MeasureFreehandPolygonTool",
                "MeasureCircleTool",
                "MeasureRectangleTool"
              ],
              "widgetId": "MeasurementToolTransientToolbar",
              "worksWith": [
                "DeleteMeasurementTool"
              ],
              "region": "TopRightShellRegion"
            }
          ],
          "toolbarGroups": [
            {
              "id": "ToolsTab",
              "type": "toolbarGroup",
              "name": "Tools",
              "items": [
                {
                  "id": "HomeGroup",
                  "type": "toolbarGroup",
                  "name": "Basic",
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
                      "name": "@language-toolbar-tasks-identify",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    },
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
                  "id": "kCXXWfHs",
                  "type": "toolbarGroup",
                  "name": "Tasks",
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
                    },
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
                    },
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
                    },
                    {
                      "id": "AC2mL7Fc",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Custom/Lease-24.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "Search_Leases",
                      "hideOnDisable": true,
                      "name": "Leases",
                      "tooltip": "Search for Lease Comparables"
                    },
                    {
                      "id": "3SJQFLcX",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Custom/Sales-24.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "Search_Sales_HTML5",
                      "hideOnDisable": true,
                      "name": "Sales",
                      "tooltip": "Search for Sales Comparables"
                    }
                  ],
                  "layout": "Large"
                }
              ],
              "layout": "Large"
            }
          ],
          "isEnabled": false
        },
        "views": [
          {
            "id": "IWantToMenuButtonView",
            "visible": true,
            "viewModelId": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuButtonView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuButtonView.html",
            "region": "HeaderRegion",
            "configuration": {}
          },
          {
            "id": "SearchView",
            "viewModelId": "SearchViewModel",
            "visible": true,
            "isManaged": false,
            "title": "@language-search-title",
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "markup": "Mapping/modules/Search/SearchView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "region": "HeaderRegion",
            "configuration": {}
          },
          {
            "id": "TabbedToolbarButtonView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": true,
            "region": "HeaderRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html"
          },
          {
            "id": "TabbedToolbarView",
            "viewModelId": "TabbedToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarView",
            "markup": "Mapping/modules/Toolbar/SmallToolbarView.html",
            "isManaged": true,
            "visible": false,
            "title": "@language-toolbar-name",
            "iconUri": "Resources/Images/Icons/Toolbar/tools-32.png",
            "region": "MiscViewContainerRegion",
            "configuration": {}
          },
          {
            "id": "NavBarSmallView",
            "viewModelId": "BottomPanelViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.NavBarSmallView",
            "markup": "Mapping/modules/Shells/Components/NavBarSmallView.html",
            "region": "SmallNavigationRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "NavButtonView",
            "viewModelId": "NavButtonViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.NavButtonView",
            "markup": "Mapping/modules/Shells/Components/Navigation/NavButtonView.html",
            "region": "BottomRightMapRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "ToolbarFlyoutView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-toolbar-multi-tool",
            "region": "MiscViewContainerRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "TabbedToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarViewModel",
            "configuration": {
              "toolbarGroupRefs": [
                "ToolsTab"
              ],
              "toolbarOpenByDefault": false
            }
          },
          {
            "id": "NavButtonViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.NavButtonViewModel",
            "configuration": {}
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
              "statusText": "@language-toolbar-markup-edit-desc",
              "keyboardStatusText": "@language-toolbar-markup-edit-desc-keyboard"
            },
            {
              "name": "DeleteMarkupTool",
              "command": "DeleteMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc",
              "keyboardStatusText": "@language-toolbar-markup-delete-desc-keyboard"
            }
          ]
        }
      },
      {
        "moduleName": "User",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Workflow",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "configuration": {
          "showTitleInFormBody": false,
          "defaultContainerRegionName": "ModalWindowRegion",
          "defaultContainerTitle": "@language-workflow-title",
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "showCaptureStatusMessages": true,
          "displayResultPickerTemplateComplexity": "simple",
          "startupWorkflows": [
            "Launch_Map"
          ],
          "formItems": {
            "geocortex.forms.items.DatePickerFormItemView": {
              "markup": "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html",
              "codebehind": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView.js"
            }
          },
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
              "regionName": "MiscViewContainerRegion",
              "isManaged": true,
              "displayHeader": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            },
            {
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "MiscViewContainerRegion",
              "isManaged": true,
              "displayHeader": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
              "allowClose": false
            },
            {
              "name": "Extract",
              "title": "@language-common-extract-data",
              "regionName": "MiscViewContainerRegion",
              "isManaged": true,
              "displayHeader": false,
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png"
            },
            {
              "name": "ModalWindow",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "isManaged": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png"
            },
            {
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "isManaged": false,
              "iconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
              "allowClose": false
            }
          ]
        },
        "views": [
          {
            "id": "WorkflowListView",
            "viewModelId": "WorkflowViewModel",
            "title": "@language-workflow-workflows",
            "description": "@language-workflow-site-workflows",
            "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "region": "MiscViewContainerRegion",
            "visible": false,
            "configuration": {
              "hideOnClickWorkflow": false
            },
            "showBackButtonAsX": true
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
      }
    ],
    "widgets": [
      {
        "id": "MarkupPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/MarkupPaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "MarkupEditToolPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/EditPaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "MarkupDeleteToolPaletteSmall",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/DeletePaletteSmall.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
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
          "allowHorizontal": false
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
          "allowHorizontal": false
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
        "id": "MeasurementToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "markup": "Mapping/modules/Measurement/Widgets/MeasurementTransientView.html",
        "viewModelId": "MeasurementViewModel"
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
        "id": "DrawingToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteView",
        "markup": "Mapping/modules/Markup/ToolPalettes/EditPaletteLarge.html",
        "viewModelId": "TransientMarkupPaletteViewModel"
      },
      {
        "id": "SimpleMeasurementToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "markup": "Mapping/modules/Measurement/MeasurementView.html",
        "viewModelId": "MeasurementViewModel"
      }
    ]
  }
}