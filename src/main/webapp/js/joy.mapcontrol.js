/*! by joyone.cn 厦门展网信息技术有限公司  joyone 2015-04-30  1.0.20 */
!function(a,b){var c=window.joy,d=c.getPluginLang(),e=c.ui.Widget,f=a.proxy,g=(c.keys,[]),h=0,i=0,j=0,k=0,l=null,m=null,n=null,o=null,p=null,q=null,r=null,s=null,t="arcgisDynamic",u="arcgisImage",v="arcgisTield",w="arcgisFeature",x="webTield",y="asawms",z="wms",A="wmts",B="onMapClick",C="onMapDblClick",D="onExtentChange",E="onLayerAdd",F="onLoad",G="onLayerRemove",H="onPan",I="onPanEnd",J="onPanStart",K="onZoom",L="onZoomEnd",M="onZoomStart",N="onResize",O="onLayerIndexChange",P="onLayerVisibleChange",Q="onAddLayerLoad",R=[{level:0,resolution:156543.03392800014,scale:591657527.591555},{level:1,resolution:78271.51696399994,scale:295828763.795777},{level:2,resolution:39135.75848200009,scale:147914381.897889},{level:3,resolution:19567.87924099992,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.992452562495,scale:4622324.434309},{level:8,resolution:611.4962262813797,scale:2311162.217155},{level:9,resolution:305.74811314055756,scale:1155581.108577},{level:10,resolution:152.87405657041106,scale:577790.554289},{level:11,resolution:76.43702828507324,scale:288895.277144},{level:12,resolution:38.21851414253662,scale:144447.638572},{level:13,resolution:19.10925707126831,scale:72223.819286},{level:14,resolution:9.554628535634155,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.388657133974685,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176}],S=e.extend({init:function(a,b){var c=this;e.fn.init.call(c,a,b),a=c.wrapper=c.element,b=c.options,this._graphics()},options:{name:"Mapcontrol",center:null,mapParts:null,panable:!0,urls:null,wkid:3857,wrapAround180:!1,zoom:1,zoomable:!0,layerXml:null,maxLod:16,minLod:0,iconUrl:"",autoResize:!1,mapType:""},events:[B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q],_graphics:function(){var a=this,b=a.element,c=a.options,e=c.mapParts,g=c.urls,h=(c.wkid,c.center),i=c.zoom,j=c.mapType,k=a.map,l=R.slice(c.minLod,c.maxLod);g&&require(["esri/map","esri/dijit/InfoWindowLite1","esri/geometry/Point","esri/SpatialReference","dojo/dom-construct"],function(o,p,q,r,t){if(k=new esri.Map(b.attr("id"),{showAttribution:!1,slider:null!==e&&e.indexOf("zoomslider")>-1?!0:!1,sliderStyle:"large",logo:!1,lods:l,autoResize:a.options.autoResize}),a._setMap(k),"single"===j){var u=g.baseLayer,v=g.baseLayerType?g.baseLayerType:"arcgisTield",w={url:u,type:v,name:"baseLayer",text:"",visible:!0};a.addLayer(w)}else{var x=g.satellite,y=g.satelliteType?g.satelliteType:"arcgisTield",z={url:x,type:y,name:"satellite",text:d.mapcontrol.image,visible:!1};a.addLayer(z);var A=g.topo,B=g.topoType?g.topoType:"arcgisTield",C={url:A,type:B,name:"topo",visible:!0,text:d.mapcontrol.map};a.addLayer(C),m=k.getLayer("topo"),n=k.getLayer("satellite")}if(c.panable||(k.disablePan(),k.disableMapNavigation()),c.zoomable||(k.disableDoubleClickZoom(),k.disableScrollWheelZoom(),k.disableShiftDoubleClickZoom()),a._addParts(e),k.on("click",f(a._mapClick,a)),k.on("dbl-click",f(a._mapDblClick,a)),k.on("extent-change",f(a._mapExtentChange,a)),k.on("layer-add",f(a._layerAdd,a)),k.on("load",f(a._load,a)),k.on("layer-remove",f(a._layerRemove,a)),k.on("pan",f(a._pan,a)),k.on("pan-end",f(a._panEnd,a)),k.on("pan-start",f(a._panStart,a)),k.on("zoom",f(a._zoom,a)),k.on("zoom-end",f(a._zoomEnd,a)),k.on("zoom-start",f(a._zoomStart,a)),k.on("resize",f(a._resize,a)),s=new p(null,t.create("div",null,null,k.root)),s.startup(),k.setInfoWindow(s),i&&k.setZoom(i),h){var D=new q(h[0],h[1],new r(h[3]?h[3]:4326));k.centerAt(D)}})},_addParts:function(a){var b=this;null!==a&&a.indexOf("overview")>-1&&require(["esri/dijit/OverviewMap"],function(a){var b=new a({map:l,visible:!0,attachTo:"bottom-right",height:180,width:180});b.startup()}),null!==a&&a.indexOf("scalebar")>-1&&require(["esri/dijit/Scalebar"],function(a){new a({map:l,scalebarUnit:"dual"})}),null!==a&&a.indexOf("maptoggle")>-1&&require(["dojo/dom"],function(a){this._bmap=dojo.create("div",{id:"bmap",innerHTML:d.mapcontrol.map},a.byId(l.id)),this._bimage=dojo.create("div",{id:"bimage",innerHTML:d.mapcontrol.image},a.byId(l.id)),dojo.addClass("bmap","bmap-selected"),dojo.addClass("bimage","bimage"),dojo.connect(this._bmap,"onclick",this,function(){b.setLayerVisible("topo",!0),b.setLayerVisible("satellite",!1),dojo.removeClass("bmap","bmap"),dojo.addClass("bmap","bmap-selected"),dojo.removeClass("bimage","bimage-selected"),dojo.addClass("bimage","bimage")}),dojo.connect(this._bimage,"onclick",this,function(){b.setLayerVisible("topo",!1),b.setLayerVisible("satellite",!0),dojo.removeClass("bmap","bmap-selected"),dojo.addClass("bmap","bmap"),dojo.removeClass("bimage","bimage"),dojo.addClass("bimage","bimage-selected")})}),null!==a&&a.indexOf("navicontrol")>-1&&require(["dojo/dom"],function(a){this._global=dojo.create("div",{id:"global"},a.byId(l.id)),this._panN=dojo.create("div",{"class":"BMap_button BMap_panN",title:d.mapcontrol.panN},this._global),this._panW=dojo.create("div",{"class":"BMap_button BMap_panW",title:d.mapcontrol.panW},this._global),this._panE=dojo.create("div",{"class":"BMap_button BMap_panE",title:d.mapcontrol.panE},this._global),this._panS=dojo.create("div",{"class":"BMap_button BMap_panS",title:d.mapcontrol.panS},this._global),dojo.connect(this._panN,"onclick",this,function(){l.panUp()}),dojo.connect(this._panW,"onclick",this,function(){l.panLeft()}),dojo.connect(this._panE,"onclick",this,function(){l.panRight()}),dojo.connect(this._panS,"onclick",this,function(){l.panDown()})}),null!==a&&a.indexOf("logo")>-1&&(b.options.iconUrl?b.setLogo(b.options.iconUrl):b.setLogo())},_setMap:function(a){l=a},_updateLayerIndex:function(b,c){var d=this,e=0;e=0==c?-1:1,a(g).each(function(){this.index>=b&&(this.index+=e)}),this.trigger(O,[d.getMapLayersInfo()])},_mapClick:function(a){var b=[a.mapPoint.y,a.mapPoint.x],c=[a.screenPoint.x,a.screenPoint.y];this.trigger(B,[b,c,a])},_mapDblClick:function(a){var b=[a.mapPoint.y,a.mapPoint.x],c=[a.screenPoint.x,a.screenPoint.y];this.trigger(C,[b,c,a])},_mapExtentChange:function(a){var b=a.levelChange,c=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax],d="";require(["esri/geometry/Point"],function(b){var c=a.extent,e=new b(c.xmin,c.ymax,l.spatialReference),f=new b(c.xmax,c.ymin,l.spatialReference);d+=e.getLongitude()+","+f.getLatitude()+","+f.getLongitude()+","+e.getLatitude()}),this.trigger(D,[b,c,d])},_layerAdd:function(a){var b,c,d=a.layer.id,e=a.layer.url;this.trigger(E,[d,b,c,e])},_load:function(a){h=l.getMaxScale(),i=l.getMaxZoom(),j=l.getMinScale(),k=l.getMinZoom(),this.trigger(F)},_layerRemove:function(a){var b,c,d=a.layer.id,e=a.layer.url;this.trigger(G,[d,b,c,e])},_pan:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(H,[b])},_panEnd:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(I,[b])},_panStart:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(J,[b])},_zoom:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(K,[b])},_zoomEnd:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(L,[b])},_zoomStart:function(a){var b=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];this.trigger(M,[b])},_resize:function(a,b,c){this.trigger(N)},_graphicClick:function(a){},_onAddLayerLoad:function(a){this.trigger(Q,[a])},addLayer:function(a){var b=this;if(a&&a.url&&a.type){var c=new Object;switch(c.url=a.url,c.type=a.type,c.name=a.name,c.text=a.text,c.visible=a.visible?!0:!1,c.index=a.index&&a.index>-1?a.index:g.length,b._updateLayerIndex(c.index,1),g.push(c),a.type){case t:require(["esri/map","esri/layers/ArcGISDynamicMapServiceLayer"],function(c,d){var e=new d(a.url);e.id=a.name,e.visible=a.visible?!0:!1,e.on("load",f(b._onAddLayerLoad,b)),l.addLayer(e,a.index)});break;case u:require(["esri/map","esri/layers/ArcGISImageServiceLayer"],function(c,d){var e=new d(a.url);e.id=a.name,e.visible=a.visible?!0:!1,e.on("load",f(b._onAddLayerLoad,b)),l.addLayer(e,a.index)});break;case v:require(["esri/map","esri/layers/ArcGISTiledMapServiceLayer"],function(c,d){var e=new d(a.url);e.id=a.name,e.visible=a.visible?!0:!1,e.on("load",f(b._onAddLayerLoad,b)),l.addLayer(e,a.index)});break;case w:require(["esri/map","esri/layers/FeatureLayer"],function(c,d){var e=new d(a.url);e.id=a.name,e.visible=a.visible?!0:!1,e.on("load",f(b._onAddLayerLoad,b)),l.addLayer(e,a.index)});break;case x:require(["esri/map","esri/layers/WebTiledLayer"],function(c,d){var e=new d(a.url);e.id=a.name,e.visible=a.visible?!0:!1,e.on("load",f(b._onAddLayerLoad,b)),l.addLayer(e,a.index)});break;case y:require(["esri/layers/ASAWMSLayer","esri/layers/WMSLayerInfo","esri/geometry/Extent","esri/SpatialReference"],function(c,d,e,g){for(var h=new e(a.extent[0],a.extent[1],a.extent[2],a.extent[3],new g(3857)),i=[],j=0;j<a.layers;j++){var k=new d({name:a.layers[j],title:a.layers[j]});i.push(k)}var m={extent:h,layerInfos:i},n=new c(a.url,{resourceInfo:m,visibleLayers:a.layers});n.id=a.name,n.fullExtent=h,n.version="1.1.1",n.user_id=a.userid,n.session_id=a.sessionid,n.time=a.time,n.style=a.style,"undefined"!=typeof a.OM_TRACKLINE&&(n.OM_TRACKLINE=a.OM_TRACKLINE),"undefined"!=typeof a.OM_AIR&&(n.OM_AIR=a.OM_AIR),"undefined"!=typeof a.OM_SPILLETS&&(n.OM_SPILLETS=a.OM_SPILLETS),"undefined"!=typeof a.OM_SWEPT&&(n.OM_SWEPT=a.OM_SWEPT),"undefined"!=typeof a.OM_MASS&&(n.OM_MASS=a.OM_MASS),"undefined"!=typeof a.OM_BOOM&&(n.OM_BOOM=a.OM_BOOM),"undefined"!=typeof a.SUMMARYTABLE&&(n.SUMMARYTABLE=a.SUMMARYTABLE),"undefined"!=typeof a.OM_REMOVALREGION&&(n.OM_REMOVALREGION=a.OM_REMOVALREGION),"undefined"!=typeof a.OM_OVERFLIGHT&&(n.OM_OVERFLIGHT=a.OM_OVERFLIGHT),"undefined"!=typeof a.OM_DISPERSANTREGION&&(n.OM_DISPERSANTREGION=a.OM_DISPERSANTREGION),"undefined"!=typeof a.OM_CONTOUR&&(n.OM_CONTOUR=a.OM_CONTOUR),"undefined"!=typeof a.DAYNIGHTICON&&(n.DAYNIGHTICON=a.DAYNIGHTICON),"undefined"!=typeof a.DEPTH&&(n.DEPTH=a.DEPTH),"undefined"!=typeof a.scenario_id&&(n.scenario_id=a.scenario_id),n.spatialReferences[0]=a.wkid,n.visible=a.visible?!0:!1,n.on("load",f(b._onAddLayerLoad,b)),l.addLayer(n,a.index)});break;case z:require(["esri/layers/WMSLayer","esri/layers/WMSLayerInfo","esri/geometry/Extent","esri/SpatialReference"],function(c,d,e,g){for(var h=new e(a.extent[0],a.extent[1],a.extent[2],a.extent[3],new g(3857)),i=[],j=0;j<a.layers;j++){var k=new d({name:a.layers[j],title:a.layers[j]});i.push(k)}var m={extent:h,layerInfos:i},n=new c(a.url,{resourceInfo:m,visibleLayers:a.layers});n.id=a.name,n.fullExtent=h,n.version="1.1.1",a.wkid&&(n.spatialReferences[0]=a.wkid),n.visible=a.visible?!0:!1,n.on("load",f(b._onAddLayerLoad,b)),l.addLayer(n,a.index)});break;case A:}}},addGraphicsLayer:function(a,b){var c=this,d=new Object;d.name=a.name,d.text=a.text,d.type=a.type,d.url=a.url,d.visible=!0,d.index=a.index&&a.index>-1?a.index:g.length,g.push(d);var e=a.resultObject;require(["esri/map","esri/layers/GraphicsLayer","esri/graphic","esri/symbols/SimpleLineSymbol","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/Color","esri/InfoTemplate","esri/geometry/Polyline","esri/geometry/Polygon","esri/symbols/SimpleFillSymbol","esri/symbols/PictureMarkerSymbol","esri/SpatialReference"],function(b,d,g,h,i,j,k,m,n,o,p,q,r){var s=new d,t=a.wkid,u=null;u=new r(t?{wkid:t}:{wkid:4326});var v=null;if(a.icon){var w=a.icon.url,x=a.icon.width,y=a.icon.height;v=new q(w,x,y),v.yoffset=y/2}for(var z=0;z<e.length;z++)switch(e[z].type){case"point":var A=e[z].geometry,B=new i(A[1],A[0],u),C=null;C=v?v:new j(j.STYLE_CIRCLE,10,new h(h.STYLE_SOLID,new k([255,0,0]),1),new k([0,255,0,.25]));var D=new g(B,C);D.attributes=e[z],s.add(D);break;case"polyline":var E=e[z].geometry,F=new n(E);F.setSpatialReference(u);var C=new h(h.STYLE_SOLID,new k([0,0,255,.5]),4),D=new g(F,C);D.attributes=e[z],s.add(D);break;case"polygon":var E=e[z].geometry,G=new o(E);G.setSpatialReference(u);var C=new p(p.STYLE_SOLID,new h(h.STYLE_DASH,new k([26,0,152,.5]),1),new k([88,90,155,.3]));D=new g(G,C),D.attributes=e[z],s.add(D)}var H=new m;a.title&&H.setTitle(a.title),a.content&&H.setContent(a.content),s.infoTemplate=H,s.id=a.name,s.on("click",f(c._graphicClick,c)),l.addLayer(s)}),c._updateLayerIndex(d.index,1)},centerAndZoom:function(a,b){a&&b&&require(["esri/map","esri/geometry/Point"],function(c,d){l.centerAndZoom(new d(a[0],a[1]),b),l.attr("test","hello")})},centerAt:function(a){a&&require(["esri/map","esri/geometry/Point"],function(b,c){l.centerAt(new c(a[1],a[0]))})},getMapLayersInfo:function(){for(var a={layers:[]},b=0;b<g.length;b++){var c={};c.name=g[b].name,c.text=g[b].text,c.url=g[b].url,c.index=g[b].index;var d=l.getLayer(g[b].name);c.visible=d?d.visible:!0,a.layers.push(c)}return a},maxScale:function(a){return require(["esri/map"],function(b){a&&(h=a)}),h},maxZoom:function(a){return require(["esri/map"],function(b){a&&(i=a)}),i},minScale:function(a){return require(["esri/map"],function(a){}),j},minZoom:function(a){return require(["esri/map"],function(a){}),k},removeAllLayers:function(){require(["esri/map"],function(a){l.removeAllLayers(),g=[]})},removeLayer:function(b){var c=this;require(["esri/map"],function(d){var e=l.getLayer(b);if(e){l.removeLayer(e);var f=[],h=-1;a(g).each(function(){this.name!=b?f.push(this):h=this.index}),g=f,c._updateLayerIndex(h,0)}})},getLayerIndex:function(a){for(var b=0,c=0;c<g.length;c++)if(a===g[c].name){b=g[c].index;break}return b},getExtent:function(){var a="";return require(["esri/geometry/Point"],function(b){var c=l.extent,d=new b(c.xmin,c.ymax,l.spatialReference),e=new b(c.xmax,c.ymin,l.spatialReference);a+=d.getLongitude()+","+e.getLatitude()+","+e.getLongitude()+","+d.getLatitude()}),a},setMapCursor:function(a){require(["esri/map"],function(b){l.setMapCursor(a)})},toMap:function(a){var b;return require(["esri/map","esri/geometry/ScreenPoint"],function(c,d){var e=l.toMap(new d(a[0],a[1]));b=[e.getLongitude(),e.getLatitude()]}),b},toScreen:function(a){var b;return require(["esri/map","esri/geometry/Point"],function(c,d){var e=l.toScreen(new d(a[0],a[1]));b=[e.x,e.y]}),b},setLayerIndex:function(b,c){var d=this,e=l.getLayer(b);l.reorderLayer(e,c);var f=[],h=d.getLayerIndex(b);h>c?(a(g).each(function(){this.index<c?f.push(this):this.index>=c&&this.index<h?(this.index++,f.push(this)):this.index<h?f.push(this):(this.index=c,f.push(this))}),layeres=f):c>h&&(a(g).each(function(){this.index<h?f.push(this):this.index>h&&this.index<=c?(this.index--,f.push(this)):this.index>c?f.push(this):(this.index=c,f.push(this))}),g=f)},setLayerVisible:function(a,b){var c=this;require(["esri/map","esri/layers/layer"],function(c,d){if("string"==typeof a){var e=l.getLayer(a);e&&(b?e.show():e.hide())}else if("object"==typeof a)for(var f=0;f<a.length;f++){var e=l.getLayer(a[f]);e&&(b?e.show():e.hide())}}),c.trigger(P,[c.getMapLayersInfo()])},setLayersVisible:function(a){var b=this;if("undefined"!=typeof a)for(var c=0;c<g.length;c++){var d=l.getLayer(g[c].name);d&&(a.indexOf(g[c].name)>-1?d.show():d.hide())}b.trigger(P,[b.getMapLayersInfo()])},addPoint:function(a,b,c,d,e,f,g){require(["esri/map","esri/layers/GraphicsLayer","esri/graphic","esri/geometry/Point","esri/symbols/PictureMarkerSymbol","esri/symbols/TextSymbol","esri/symbols/Font","esri/Color"],function(h,i,j,k,m,n,o,p){var q=l.graphics,r=new k(a[0],a[1],l.extent.spatialReference),s=new m(b,c,d),t=new j(r,s);if(q.add(t),e&&e.length>0){f&&0!=f.length||(f="16pt"),g&&0!=g.length||(g="#000000");var u=new o(f,o.STYLE_NORMAL,o.VARIANT_NORMAL,o.WEIGHT_BOLD,"Helvetica"),v=new n(e,u,new p(g));v.setOffset(c,d/2*-1);var w=new j(r,v);q.add(w)}})},getMapObject:function(){return l},createDrawTool:function(b){return o?o:b?o=a("#"+b).joyDrawtool({map:l}).getJoyDrawtool():void 0},createMeasureTool:function(b,c){return p?p:b?p=a("#"+b).joyMeasuretool({map:l,geometryServiceUrl:c}).getJoyMeasuretool():void 0},createZoomTool:function(b){return b?q=a("#"+b).joyZoomtool({map:l}).getJoyZoomtool():void 0},createToc:function(b){var c=this;return b?r=a("#"+b).joyToc({mapcontrol:c}).getJoyToc():void 0},setLogo:function(a,b){a||(a=_joyLoader.rootPath+"style/default/image/main_logo.png"),b||(b="http://www.joyone.cn/index.htm"),require(["dojo/dom"],function(b){{var c=dojo.create("div",{id:"logo"},l.root),d=dojo.create("a",{href:d,target:"_blank"},c);dojo.create("img",{id:"image",src:a},d)}})},showExtent:function(a,b){require(["esri/geometry/Polygon","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/Color","esri/graphic"],function(c,d,e,f,g){var h=[b[0],a[1]],i=[a[0],b[1]],j=new c([a,h,b,i,a]),k=new d(d.STYLE_SOLID,new e(e.STYLE_SOLID,new f([255,0,0]),2),new f([26,191,188,.25])),m=new g(j,k);l.graphics.add(m),l.centerAt(j.getExtent().getCenter())})},zoomToLayer:function(a){var b=l.getLayer(a);l.setExtent(b.fullExtent,!0)},changeBaseMap:function(a){var b=l.layerIds[0];b&&(this.removeLayer(b),this.addLayer(a))},mapDivResize:function(){l.resize()},getCenter:function(){var a=l.extent.getCenter().getLongitude(),b=l.extent.getCenter().getLatitude();return[a,b]}});c.ui.plugin(S)}(jQuery),function(a,b){var c=window.joy,d=(c.getPluginLang(),c.ui.Widget),e=a.proxy,f=(c.keys,"point"),g="polyline",h="polygon",i="onDrawEnd",j="onEditEnd",k="onGraphicClick",l="onGraphicOut",m="onGraphicOver",n=!1,o=null,p=null,q=null,r=null,s=null,t=null,u=null,v=null,w=null,x=null,y=null,z=null,A=null,B=!1,C=d.extend({init:function(a,b){var c=this;d.fn.init.call(c,a,b),a=c.wrapper=c.element,b=c.options,this._graphics(),this._createSymbol()},options:{name:"Drawtool",map:null,containerid:null},events:[i,j,k,m,l],_graphics:function(){var b=this,c=b.element,d=b.options;if(d.containerid=c.attr("id"),o=d.map,require(["esri/layers/GraphicsLayer"],function(a){u=new a,u.id="drawGraphicsLayer",u.on("dbl-click",e(b._graphicDblClick,b)),u.on("click",e(b._graphicClick,b)),u.on("mouse-over",e(b._graphicOver,b)),u.on("mouse-out",e(b._graphicOut,b)),o.addLayer(u)}),a("#"+d.containerid).html().indexOf("pointBtn")>0)a("#pointBtn").click(function(){b.startDraw(f)}),a("#polylineBtn").click(function(){b.startDraw(g)}),a("#polygonBtn").click(function(){b.startDraw(h)});else{a("#"+d.containerid).html("<div id='pointBtn'></div><div id='polylineBtn'></div><div id='polygonBtn'></div><div id='editBtn'></div>");var i=a("#pointBtn").joyButton({imageUrl:"image/point.png"}),j=a("#polylineBtn").joyButton({imageUrl:"image/polyline.png"}),k=a("#polygonBtn").joyButton({imageUrl:"image/polygon.png"});i.click(function(){b.startDraw(f)}),j.click(function(){b.startDraw(g)}),k.click(function(){b.startDraw(h)})}b.startEdit()},_createSymbol:function(){require(["esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/Color","esri/symbols/PictureMarkerSymbol"],function(a,b,c,d,e){r=new e(_joyLoader.rootPath+"style/default/image/pointIcon.png",21,31),r.yoffset=15,s=new b(b.STYLE_SOLID,new d([0,0,255,.5]),4),t=new c(c.STYLE_SOLID,new b(b.STYLE_DASH,new d([26,0,152,.5]),1),new d([88,90,155,.3])),lightPicutureSymbol=new e(_joyLoader.rootPath+"style/default/image/pointIconLight.png",32,47),lightPicutureSymbol.yoffset=23,lightDrawLineSymbol=new b(b.STYLE_SOLID,new d([255,0,0,.8]),4),lightDrawFillSymbol=new c(c.STYLE_SOLID,new b(b.STYLE_SOLID,new d([255,0,0,.5]),2),new d([88,90,155,.3]))})},setSymbol:function(a,b){switch(a){case"point":r=b;break;case"polyline":s=b;break;case"polygon":t=b}},startDraw:function(a,b,c){var d=this;return d.tag&&""!=d.tag?!1:(d.stopDraw(),d.stopEdit(),b?(d.tag=b,"undefined"!=typeof c&&c||u.clear()):b="",void(a&&require(["esri/map","esri/toolbars/draw"],function(b,c){p||(p=new c(o),p.on("draw-end",e(d._onDrawEnd,d))),p.activate(a)})))},stopDraw:function(){this.tag="",p&&p.deactivate()},startEdit:function(){that=this,that.stopDraw(),that.stopEdit(),require(["esri/toolbars/edit"],function(a){q=new a(o),q.on("deactivate",e(that._onEditEnd,that))})},stopEdit:function(){q&&(q.deactivate(),n=!1)},getDrawResult:function(){for(var a=u.graphics,b={graphics:[]},c=0;c<a.length;c++){var d=a[c].geometry;b.graphics.push({geometry:d})}return b},removeGraphic:function(b){var c=u.graphics;a(c).each(function(){var a=this.attributes;a.id==b&&u.remove(this)})},highlightGraphic:function(b){if(z)switch(z.geometry.type){case"point":z.symbol=r;break;case"polyline":z.symbol=s;break;case"polygon":z.symbol=t}var c=u.graphics;a(c).each(function(){if(this.attributes&&this.attributes.id&&this.attributes.id==b){switch(this.geometry.type){case"point":this.symbol=lightPicutureSymbol;break;case"polyline":this.symbol=lightDrawLineSymbol;break;case"polygon":this.symbol=lightDrawFillSymbol}return z=this,u.redraw(),!0}})},centerAt:function(b,c){var d=null,e=u.graphics;a(e).each(function(){this.attributes&&this.attributes.id==b&&("point"==this.geometry.type?d=this.geometry:("polygon"==this.geometry.type||"polyline"==this.geometry.type)&&(d=this.geometry.getExtent().getCenter()))}),d&&(c?o.centerAndZoom(d,c):o.centerAt(d))},editGraphic:function(b){require(["esri/toolbars/edit"],function(c){var d=u.graphics;a(d).each(function(){this.attributes.id==b&&"point"!=this.geometry.type&&(n=!0,A=b,q.activate(c.EDIT_VERTICES,this))})})},_graphicDblClick:function(a){require(["esri/toolbars/edit","dojo/_base/event"],function(b,c){c.stop(a),n===!1?(n=!0,q.activate(b.EDIT_VERTICES,a.graphic)):(q.deactivate(),n=!1)})},_graphicClick:function(a){var b=this;v=a.graphic,B&&require(["esri/InfoTemplate"],function(c){var d=a.graphic.geometry,e=new c;switch(e.setTitle("编辑"),d.type){case"point":e.setContent(b._createPointEditContent());break;case"polyline":e.setContent(b._createPolylineEditContent());break;case"polygon":e.setContent(b._createPolylineEditContent())}u.infoTemplate=e}),this.trigger(k,[a.graphic.attributes])},_graphicOver:function(a){this.trigger(m,[a.graphic.attributes])},_graphicOut:function(a){this.trigger(l,[a.graphic.attributes])},_onDrawEnd:function(a){var b=this,c=null,d=null,e=[];require(["esri/graphic"],function(f){p.deactivate();var g;if("point"===a.geometry.type||"multipoint"===a.geometry.type)g=r,e.push([a.geometry.getLatitude(),a.geometry.getLongitude()]);else if("line"===a.geometry.type||"polyline"===a.geometry.type){g=s;for(var h=0;h<a.geometry.paths[0].length;h++){var i=a.geometry.getPoint(0,h);e.push([i.getLatitude(),i.getLongitude()])}}else{g=t;for(var h=0;h<a.geometry.rings[0].length;h++){var i=a.geometry.getPoint(0,h);e.push([i.getLatitude(),i.getLongitude()])}}var j=new f(a.geometry,g),k=new Object;k.id=b.tag+Date.parse(new Date),d=k.id,j.attributes=k,u.add(j),c=a.geometry.toJson()}),console.log(d),this.trigger(i,[c,b.tag,e,d]),b.stopEdit(),b.stopDraw(),b.tag=""},_onEditEnd:function(a){var b=[];if("line"==a.graphic.geometry.type||"polyline"==a.graphic.geometry.type)for(var c=0;c<a.graphic.geometry.paths[0].length;c++){var d=a.graphic.geometry.getPoint(0,c);b.push([d.getLatitude(),d.getLongitude()])}else if("polygon"==a.graphic.geometry.type)for(var c=0;c<a.graphic.geometry.rings[0].length;c++){var d=a.graphic.geometry.getPoint(0,c);b.push([d.getLatitude(),d.getLongitude()])}this.trigger(j,[a.graphic.geometry.toJson(),b,A])},_createPointEditContent:function(){if(w)return w;o.infoWindow.resize(340,180);var a=[["red00.png","red01.png","red02.png","red03.png","red04.png","red05.png"],["red06.png","red07.png","red08.png","red09.png","red10.png","red11.png"],["red12.png","red13.png","red14.png","red15.png","red16.png","red17.png"]],b="<div style='display: block;' id='userSignEdit'><div style='width:100%;background:#fff;'>";b+="<div class='hide' id='selectPhoto'><ul>";for(var c=0;3>c;c++){b+="<li>";for(var d=0;6>d;d++)b+='<a onclick=\'$("#map").getJoyMapcontrol().createDrawTool().changePointIcon("'+_joyLoader.rootPath+"style/default/image/"+a[c][d]+"\", 27,27);return false' href='javascript:void(0);'><img class='sp_s' src='"+_joyLoader.rootPath+"style/default/image/"+a[c][d]+"' ></a>";b+="</li>"}return b+="</ul></div></div></div>"},_createPolylineEditContent:function(){return y?y:void 0},_createPolygonEditContent:function(){return x?x:void 0},changePointIcon:function(a,b,c){require(["esri/symbols/PictureMarkerSymbol"],function(d){var e=new d(a,b,c);e.yoffset=c/2,v.setSymbol(e)})},setPointEditContent:function(a){w=a},setPolylineEditContent:function(a){y=a},setPolygonEditContent:function(a){x=a},enableInfoWin:function(a){B=a},clearGraphics:function(){u.clear()},importGraphics:function(b){var c,d="",e="",f="",g="",h="";require(["esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/InfoTemplate","esri/graphic","esri/symbols/TextSymbol","esri/Color","esri/symbols/Font"],function(i,j,k,l,m,n,p,q){a(b).each(function(){""==d&&(d=this.type),e=this.title,f=this.content,g=this.text,h=this.noClick;var a=null;switch(d){case"point":symbol=r,a=new i(this.points[0],this.points[1]),null!=f&&""!=f&&(o.infoWindow.setContent(f),o.infoWindow.resize(200,80),o.infoWindow.show(a),u.on("click",function(a){v=a.graphic,o.infoWindow.show(v.geometry)}));break;case"polyline":symbol=s,a=new j(this.points);break;case"polygon":symbol=t,a=new k(this.points),c=a.getExtent().getCenter()}var b=new m(a,symbol),l=new Object;if(l.id=this.id,l.name=g,l.type=d,l.noClick=h,graphicId=l.id,b.attributes=l,u.add(b),""!==g&&null!==c){var w=new n(g).setColor(new p([128,0,0])).setAlign(q.ALIGN_START).setFont(new q("12pt").setWeight(q.WEIGHT_BOLD)),x=new m(c,w);u.add(x)}})})}});c.ui.plugin(C)}(jQuery),function(a,b){var c=window.joy,d=c.getPluginLang(),e=c.ui.Widget,f=a.proxy,g=(c.keys,"distance"),h="area",i="LabelPoint",j="onMeasureEnd",k=null,l=null,m=null,n=null,o=null,p=null,q=null,r=null,s=null,t=null,u=!1,v=e.extend({init:function(a,b){var c=this;e.fn.init.call(c,a,b),a=c.wrapper=c.element,b=c.options,this._graphics(),this._createSymbol()},options:{name:"Measuretool",map:null,containerid:null,showOnMap:!0,geometryServiceUrl:null},events:[j],_graphics:function(){var b=this,c=b.element,d=b.options;if(d.containerid=c.attr("id"),k=d.map,k.graphics.on("click",f(b._graphicClick,b)),a("#"+d.containerid).html().indexOf("distanceBtn")>0)a("#distanceBtn").click(function(){b.startMeasure(g)}),a("#areaBtn").click(function(){b.startMeasure(h)}),a("#locationBtn").click(function(){b.startMeasure(i)});else{a("#"+d.containerid).html("<div id='distanceBtn'></div><div id='areaBtn'></div>");var e=a("#distanceBtn").joyButton({imageUrl:"image/length.png"}),j=a("#areaBtn").joyButton({imageUrl:"image/area.png"});e.click(function(){b.startMeasure(g)}),j.click(function(){b.startMeasure(h)})}},_createSymbol:function(){require(["esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/Color","esri/symbols/PictureMarkerSymbol"],function(a,b,c,d,e){m=new e(_joyLoader.rootPath+"style/default/image/close.png",12,12),m.xoffset=6,n=new e(_joyLoader.rootPath+"style/default/image/labelpoint.png",23,23),n.xoffset=9,n.yoffset=11,p=new b(b.STYLE_SOLID,new d([0,0,255,.5]),4),q=new c(c.STYLE_SOLID,new b(b.STYLE_DASH,new d([26,0,152,.5]),3),new d([88,90,155,.5]))})},_graphicClick:function(a){clickGraphic=a.graphic,"undefined"!=typeof clickGraphic.attr.type&&"close"==clickGraphic.attr.type&&u&&(k.graphics.remove(clickGraphic.attr.graphic),k.graphics.remove(clickGraphic),"undefined"!=typeof clickGraphic.attr.graphic.attr&&k.graphics.remove(clickGraphic.attr.graphic.attr.labelGraphic))},_onDrawEnd:function(a){var b,d,e,g=this,h=a.geometry;require(["esri/graphic","esri/tasks/GeometryService","esri/tasks/LengthsParameters","esri/tasks/AreasAndLengthsParameters","esri/geometry/Point","esri/Color","esri/symbols/TextSymbol","esri/symbols/Font"],function(i,v,w,x,y,z,A,B){l.deactivate(),r=new v(g.options.geometryServiceUrl),r.on("lengths-complete",f(g._measureDistanceEnd,g)),r.on("areas-and-lengths-complete",f(g._measureAreaEnd,g));var C;"line"===h.type||"polyline"===h.type?(C=p,b=new w,b.polylines=[h],b.lengthUnit=esri.tasks.GeometryService.UNIT_KILOMETER,b.geodesic=!0,t=h,e=h.getPoint(0,h.paths[0].length-1),u=!1,r.lengths(b)):"polygon"==h.type?(C=q,d=new x,d.lengthUnit=v.UNIT_KILOMETER,d.areaUnit=v.UNIT_SQUARE_KILOMETERS,d.calculationType="geodesic",e=h.getPoint(0,h.rings[0].length-1),u=!1,r.simplify([h],function(a){d.polygons=a,t=a,r.areasAndLengths(d)})):"point"==h.type&&(C=n,e=h);var D=new i(a.geometry,C);if(k.graphics.add(D),s=D,"point"==h.type){m.xoffset=20,m.yoffset=20;var E=c.toString(h.getLatitude(),"n3"),F=c.toString(h.getLongitude(),"n3");o=new A(F+","+E),o.setColor(new z([10,10,10,.9]));var G=new B;G.setSize("12pt"),G.setWeight(B.WEIGHT_BOLDER),o.setFont(G),o.xoffset=80;var H=new i(h,o);k.graphics.add(H);var I=new Object;I.labelGraphic=H,s.attr=I,g.trigger(j,[D,F+","+E])}else m.xoffset=6,m.yoffset=0;var J=new i(e,m),I=new Object;I.graphic=D,I.type="close",J.attr=I,k.graphics.add(J)})},_measureDistanceEnd:function(a){var b=this;require(["esri/graphic","esri/symbols/TextSymbol","esri/Color","esri/symbols/Font"],function(e,f,g,h){var i=t.getPoint(0,0);o=new f(c.toString(a.result.lengths[0],"n")+d.mapcontrol.kilometer),o.setColor(new g([10,10,10,.9]));var l=new h;l.setSize("12pt"),l.setWeight(h.WEIGHT_BOLDER),o.setFont(l);var m=new e(i,o);k.graphics.add(m);var n=new Object;n.labelGraphic=m,s.attr=n,b.trigger(j,[t,a.result.lengths[0]]),u=!0})},_measureAreaEnd:function(a){var b=this;require(["esri/graphic","esri/symbols/TextSymbol","esri/Color","esri/symbols/Font"],function(e,f,g,h){var i=t[0].getExtent().getCenter();o=new f(c.toString(a.result.areas[0],"n")+d.mapcontrol.squareKilometers),o.setColor(new g([10,10,10,.9]));var l=new h;l.setSize("14pt"),l.setWeight(h.WEIGHT_BOLDER),o.setFont(l);var m=new e(i,o);k.graphics.add(m);var n=new Object;n.labelGraphic=m,s.attr=n,b.trigger(j,[t,a.result.areas[0]]),u=!0})},startMeasure:function(a){var b=this;this.stopMeasure(),a&&require(["esri/toolbars/draw"],function(c){l||(l=new c(k),l.on("draw-end",f(b._onDrawEnd,b))),g==a?l.activate("polyline"):h==a?l.activate("polygon"):i==a&&l.activate("point")})},stopMeasure:function(){l&&l.deactivate()},setUnit:function(a){}});c.ui.plugin(v)}(jQuery),function(a,b){var c=window.joy,d=(c.getPluginLang(),c.ui.Widget),e=(a.proxy,c.keys,null),f=d.extend({init:function(a,b){var c=this;d.fn.init.call(c,a,b),a=c.wrapper=c.element,b=c.options,this._graphics()},options:{name:"Zoomtool",map:null,containerid:null},events:[],_graphics:function(){var b=this,c=b.element,d=b.options;d.containerid=c.attr("id"),require(["esri/toolbars/navigation"],function(b){map=d.map,e=new b(map),a("#"+d.containerid).html("<div id='zoominBtn'></div><div id='zoomoutBtn'></div><div id='panBtn'>Pan</div>");var c=a("#zoominBtn").joyButton({imageUrl:"image/zoomIn.png"}),f=a("#zoomoutBtn").joyButton({imageUrl:"image/zoomOut.png"}),g=a("#panBtn").joyButton();c.click(function(){map.setMapCursor("crosshair"),e.activate(b.ZOOM_IN)}),f.click(function(){map.setMapCursor("crosshair"),e.activate(b.ZOOM_OUT)}),g.click(function(){map.setMapCursor("default"),e.deactivate()})})}});c.ui.plugin(f)}(jQuery),function(a,b){var c=window.joy,d=(c.getPluginLang(),c.ui.Widget),e=a.proxy,f=(c.keys,null),g=null,h=null,i=null,j=d.extend({init:function(a,b){var c=this;d.fn.init.call(c,a,b),a=c.wrapper=c.element,b=c.options,this._graphics()},options:{name:"Toc",mapcontrol:null,containerid:null},events:[],_graphics:function(){var b=this,c=b.element,d=b.options;d.containerid=c.attr("id"),f=d.mapcontrol,g=d.containerid,i=a("#"+g).joyCheckbox({dataSource:[]}).getJoyCheckbox(),i.bind("change",e(b._checkboxChange,b)),b._updateTOC(),f.bind("onLayerIndexChange",e(b._updateTOC,b)),f.bind("onLayerVisibleChange",e(b._updateTOC,b))},_updateTOC:function(b){h=f.getMapLayersInfo();var c="",d=[];a(h.layers).each(function(){var a={};a.text=this.text,a.value=this.name,d.push(a),this.visible&&(c+=this.name+",")}),d=d.reverse(),i.setDataSource(d),
c.length>0&&(c.substr(0,c.length-1),i.value(c))},_checkboxChange:function(){var a=this,b=i.value();a.options.mapcontrol.setLayersVisible(b)}});c.ui.plugin(j)}(jQuery);