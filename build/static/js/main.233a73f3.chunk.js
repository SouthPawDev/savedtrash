(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(59)},44:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(17),r=n.n(i),l=(n(44),n(18)),o=n(30),c=n(22),h=n.n(c),u=n(31),p=n(5),m=n(6),d=n(8),f=n(7),E=n(9),S=n(60),B=n(10),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).handler=n.handler.bind(Object(B.a)(n)),n.state={isChecked:null},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handler",value:function(){this.props.onCheck(this.props.name)}},{key:"render",value:function(){return s.a.createElement("div",{id:this.props.id,className:"shift"},s.a.createElement("label",{className:this.props.lClassName},s.a.createElement("input",{type:"checkbox",name:this.props.name,checked:this.props.checked,onChange:this.handler}),this.props.inputText),s.a.createElement("p",{className:this.props.pClassName},this.props.pText))}}]),t}(a.Component),v=n(12),C=n(3),I=n.n(C),O=n(13);function y(){var e=Object(v.a)([""]);return y=function(){return e},e}function N(){var e=Object(v.a)(["\n  display: ",";\n  flex-direction: column;\n  margin: 10px;\n"]);return N=function(){return e},e}function k(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100&;\n"]);return k=function(){return e},e}function b(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 0px 20px 0px 20px;\n"]);return b=function(){return e},e}function D(e){return s.a.createElement("p",{className:e.className},e.text)}function w(e){return s.a.createElement("p",{className:e.className},e.time)}function g(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{type:"checkbox",onChange:function(){return function(e){e.onCheckException(e.exception)}(e)},checked:e.checked}),s.a.createElement("p",{style:e.style,className:e.className},e.exception))}var x=O.a.div(b()),L=O.a.div(k()),R=O.a.div(N(),function(e){return e.isHidden?"none":"flex"}),W=Object(O.a)(I.a)(y());function A(e){return s.a.createElement("div",null,s.a.createElement(R,{isHidden:e.help},s.a.createElement("h5",null,s.a.createElement("u",null,s.a.createElement("strong",null,"Column Headers")),": ",s.a.createElement("strong",null,"Left Click:")," Sort, ",s.a.createElement("strong",null,"Middle Click:")," ","Delete, ",s.a.createElement("strong",null,"Right Click:")," Select,"," ",s.a.createElement("strong",null,"Selected Column:")," Left/Right Arrows Keys Rearrange"),s.a.createElement("h5",null,s.a.createElement("u",null,s.a.createElement("strong",null,"Rows")),": ",s.a.createElement("strong",null,"Middle Click:")," Delete, ",s.a.createElement("strong",null,"Right Click:")," ","Underline/Select")),s.a.createElement(x,null,s.a.createElement(L,null,e.misc.filter(function(e){return""!==e.trim()&&"^^^^^"!==e}).map(function(e,t){return s.a.createElement("p",{style:{padding:"0 2px 0 2px"},key:"misc"+t,className:e.split(";")[e.split(";").length-1]},e.split(";")[e.split(";").length-2])})),s.a.createElement("div",null,s.a.createElement(W,{onClick:function(){e.displayHelp()},variant:"outline-warning",size:"sm"},e.help?"Help":"Hide"))))}var _=n(34),j=n.n(_);n(55);function H(){var e=Object(v.a)(["\n  border-bottom: "," !important;\n"]);return H=function(){return e},e}function G(){var e=Object(v.a)(["\n  border: "," !important;\n  color: "," !important;\n  background-color: "," !important;\n"]);return G=function(){return e},e}var M=O.a.th(G(),function(e){return e.isSelected?"2px solid blue":""},function(e){return e.isSorted?"blue":""},function(e){return e.isSecondarySorted?"lightblue":""}),F=O.a.tr(H(),function(e){return e.isSelectedRow?"1px solid black":""}),V=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).sortHandler=n.sortHandler.bind(Object(B.a)(n)),n.onMouseDownHandler=n.onMouseDownHandler.bind(Object(B.a)(n)),n.onContextMenuHandler=n.onContextMenuHandler.bind(Object(B.a)(n)),n.onContextMenuHandlerTh=n.onContextMenuHandlerTh.bind(Object(B.a)(n)),n.onMouseDownHandlerTh=n.onMouseDownHandlerTh.bind(Object(B.a)(n)),n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"sortHandler",value:function(e,t){this.props.onSort(e,t)}},{key:"onContextMenuHandler",value:function(e,t){this.props.handleRightClickRow(e,t)}},{key:"onMouseDownHandler",value:function(e,t){this.props.handleClick(e,t)}},{key:"onContextMenuHandlerTh",value:function(e,t){this.props.handleRightClickTh(e,t)}},{key:"onMouseDownHandlerTh",value:function(e,t){this.props.handleOnMouseDownTh(e,t)}},{key:"render",value:function(){var e=this,t=this.props.selectedRows.map(function(e){return e["FLIGHT;BBW"]+e["GATE;BBW"]});return s.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,size:"sm",id:"override"},s.a.createElement("thead",null,s.a.createElement("tr",null,Object.keys(this.props.content[0]||{}).filter(function(e){return"undefined"!==e}).map(function(t,n){return s.a.createElement(M,{isSelected:e.props.selected===t,isSorted:e.props.sorted===t,isSecondarySorted:e.props.secondarySorted===t,key:n,className:t.includes(";")?t.split(";")[1].trim():"",onClick:function(){return e.sortHandler(t,e.props.content)},onContextMenu:function(n){return e.onContextMenuHandlerTh(n,t)},onMouseDown:function(n){return e.onMouseDownHandlerTh(n,t)},title:e.props.selected?"Left/Right Arrow Keys":"Left/Middle/Right Click"},t.includes(";")?t.split(";")[0].trim():"")}))),s.a.createElement("tbody",null,this.props.content?this.props.content.map(function(n,a){return s.a.createElement(F,{isSelectedRow:t.includes(n["FLIGHT;BBW"]+n["GATE;BBW"]),key:"tr"+a,id:a,children:Object.keys(n).filter(function(e){return"undefined"!==e}).map(function(t,i){return s.a.createElement("td",{id:"".concat(a,"/").concat(i),onContextMenu:function(t){return e.onContextMenuHandler(t,n)},onMouseDown:function(t){return e.onMouseDownHandler(t,n)},key:i,className:n[t]?n[t].split(";")[n[t].split(";").length-1]:""},n[t]?n[t].split(";")[n[t].split(";").length-2]:"")})})}):[]))}}]),t}(a.Component);n(56);var U=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={direction:!0,columnOrder:[],deletedColumns:[],deletedRows:[],shiftBools:{},selectedRows:[],resizable:!1,refresh:!1,selected:!1,help:!0,showSelectedOnly:!1,hideSelectedOnly:!1},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getFile()}},{key:"componentWillUnmount",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"getFile",value:function(){var e=Object(u.a)(h.a.mark(function e(){var t,n,a=this;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.location.pathname,n="INLET"===t.slice(-5)||"DEICE"===t.slice(-5)?t.slice(1,-6):t.slice(1),fetch("http://wtc-275124-w23.corp.ds.fedex.com:9091/file/serve?file=".concat(n,".csv")).then(function(e){return e.json()}).then(function(e){a.setState({flightType:e[1].split(",")[0],shiftOne:e[0].split(",").filter(function(e,t){return t>1&&t<4&&""!==e.trim()}),shiftTwo:e[1].split(",").filter(function(e,t){return t>1&&t<4&&""!==e.trim()}),shiftThree:e[2].split(",").filter(function(e,t){return t>1&&t<4&&""!==e.trim()}),rmas:[e[0].split(",")[0],e[1].split(",")[0],e[2].split(",")[0]],misc:e[3].split(","),maints:"INLET"===t.slice(-5)||"DEICE"===t.slice(-5)?"":e[2].split(",").filter(function(e){return e.includes("Maint")})[0],spares:"INLET"===t.slice(-5)||"DEICE"===t.slice(-5)?"":e[2].split(",").filter(function(e){return e.includes("Spare")})[0],opens:"INLET"===t.slice(-5)||"DEICE"===t.slice(-5)?"":e[2].split(",").filter(function(e){return e.includes("Open")})[0],maintBool:!0,spareBool:!0,openBool:!0,otherBool:!0,shiftBools:{shiftOne:"X"===e[0].split(",")[1].slice(0,1),shiftTwo:"X"===e[1].split(",")[1].slice(0,1),shiftThree:"X"===e[2].split(",")[1].slice(0,1)},fileLines:e,fileLinesContent:e.filter(function(e,t){return t>3&&e.match(/^\w/)&&"NULL"!==e&&""!==e.trim()}).map(function(t,n){for(var a={},s=0;s<e[4].length;s++)a[e[4].split(",")[s]]=t.split(",")[s];return a}),currentDate:e[0].split(",")[4],currentTime:e[0].split(",")[6],direction:!0})}).then(function(){return a.filter()}).then(function(){return a.setState({initialState:a.state})}).then(function(){var e=a.props.location.pathname.split("/"),t=a.state.currentContent,n=a.state.currentContent?Object.keys(a.state.currentContent[0]):"";if(n)if(4===e.length)if("DEICE"===e[3]){var s=n.indexOf("DILOC;BBW");a.onSort(n[s],t)}else{var i=n.indexOf("IREQ;BBW");a.onSort(n[i],t)}else{var r=a.state.misc.indexOf("^^^^^");a.onSort(n[r],t)}}).catch(function(){return a.setState({noFile:!0})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"filter",value:function(){var e=this,t=this.state.shiftOne?this.state.shiftOne[0]:"",n=this.state.shiftTwo?this.state.shiftTwo[0]:"",a=this.state.shiftThree?this.state.shiftThree[0]:"",s=this.state.maintBool?this.state.maintBool:"",i=this.state.spareBool?this.state.spareBool:"",r=this.state.openBool?this.state.openBool:"",l=this.state.otherBool?this.state.otherBool:"",o=this.state.deletedColumns?this.state.deletedColumns:[],c=this.state.deletedRows?this.state.deletedRows.map(function(e){return e["FLIGHT;BBW"]+" "+e["GATE;BBW"]}):[],h=this.state.columnOrder?this.state.columnOrder:[],u=this.state.selectedRows?this.state.selectedRows.map(function(e){return e["FLIGHT;BBW"]+e["GATE;BBW"]}):[],p=this.state.showSelectedOnly?this.state.showSelectedOnly:"",m=this.state.hideSelectedOnly?this.state.hideSelectedOnly:"",d=this.state.fileLinesContent?this.state.fileLinesContent.reduce(function(s,i){var r=i["SHIFT;BBW"]?i["SHIFT;BBW"].split(";")[0].replace("_","-"):"";if(!c.includes(i["FLIGHT;BBW"]+" "+i["GATE;BBW"])){var l=Object.keys(i).reduce(function(e,t){return o.includes(t)||(e[t]=i[t]),e},{});e.state.shiftBools.shiftOne&&t.includes(r)&&s.push(l),e.state.shiftBools.shiftTwo&&n.includes(r)&&s.push(l),e.state.shiftBools.shiftThree&&a.includes(r)&&s.push(l)}return s},[]).filter(function(e){var t=e["FLIGHT;BBW"]?e["FLIGHT;BBW"].split(";")[0].trim():"";return!(!s&&"MAINT"===t)&&(!(!i&&"SPARE"===t)&&(!(!r&&"OPEN"===t)&&!(!l&&"MAINT"!==t&&"SPARE"!==t&&"OPEN"!==t)))}).reduce(function(e,t){if(h.length>0){var n={};return h.forEach(function(e){return n[e]=t[e]}),e.push(n),e}return e.push(t),e},[]).filter(function(e){return m?!u.includes(e["FLIGHT;BBW"]+e["GATE;BBW"]):!p||!!u.includes(e["FLIGHT;BBW"]+e["GATE;BBW"])}):"";this.setState({currentContent:d})}},{key:"refresh",value:function(){var e=this;this.setState({refresh:!this.state.refresh},function(){if(e.state.refresh){var t=e.props.location.pathname,n="INLET"===t.slice(-5)||"DEICE"===t.slice(-5)?t.slice(1,-6):t.slice(1);e.setState({timer:setInterval(function(){fetch("http://wtc-275124-w23.corp.ds.fedex.com:9091/file/serve?file=".concat(n,".csv")).then(function(t){return t.json().then(function(t){JSON.stringify(t)===JSON.stringify(e.state.fileLines)?console.log("Data unchanged."):(e.getFile(),console.log("Different Data Detected"))})})},15e3)})}else clearInterval(e.state.timer)})}},{key:"resetColumns",value:function(){var e=this;this.setState({deletedColumns:[],selectedColumn:[],columnOrder:[]},function(){return e.filter()})}},{key:"resetFlights",value:function(){var e=this;this.setState({deletedRows:[],shiftOne:this.state.initialState.shiftOne,shiftTwo:this.state.initialState.shiftTwo,shiftThree:this.state.initialState.shiftThree,maints:this.state.initialState.maints,spares:this.state.initialState.spares,opens:this.state.initialState.opens,maintBool:!0,spareBool:!0,openBool:!0,otherBool:!0,showSelectedOnly:!1,hideSelectedOnly:!1,selectedRows:[]},function(){return e.filter()})}},{key:"showSelected",value:function(){var e=this;this.state.showSelectedOnly?this.setState({showSelectedOnly:!1},function(){return e.filter()}):this.setState({showSelectedOnly:!0,hideSelectedOnly:!1},function(){return e.filter()})}},{key:"hideSelected",value:function(){var e=this;this.state.hideSelectedOnly?this.setState({hideSelectedOnly:!1},function(){return e.filter()}):this.setState({showSelectedOnly:!1,hideSelectedOnly:!0},function(){return e.filter()})}},{key:"handleColumnExceptionSort",value:function(e,t){var n=this.state.direction,a=t.sort(function(t,n){var a=t[e].split(";")[0].toUpperCase().trim(),s=n[e].split(";")[0].toUpperCase().trim();if(""===a)return 1;if(a<s)return-1;if(a>s)return 1;if(a===s&&t["FLIGHT;BBW"]){if(a=t["FLIGHT;BBW"].split(";")[0].toUpperCase().trim(),s=n["FLIGHT;BBW"].split(";")[0].toUpperCase().trim(),""===a)return 1;if(a<s)return-1;if(a>s)return 1}return 0});n||a.reverse(),this.setState({direction:!this.state.direction})}},{key:"handleFlightSort",value:function(e,t){var n=this.state.direction,a=t.sort(function(e,t){var n=e["FLIGHT;BBW"].split(";")[0].toUpperCase().trim(),a=t["FLIGHT;BBW"].split(";")[0].toUpperCase().trim();if(""===n)return 1;if(n<a)return-1;if(n>a)return 1;if(n===a&&e["GATE;BBW"]){if(n=e["GATE;BBW"].split(";")[0].toUpperCase().trim(),a=t["GATE;BBW"].split(";")[0].toUpperCase().trim(),""===n)return 1;if(n<a)return-1;if(n>a)return 1}return 0});n||a.reverse(),this.setState({direction:!this.state.direction})}},{key:"onSort",value:function(e,t){if(this.setState({isSorted:e}),"FLIGHT;BBW"===e)this.setState({isSecondarySorted:"GATE;BBW"}),this.handleFlightSort(e,t);else if("AC;BBW"===e||"GATE;BBW"===e||"STA;BBW"===e||"STD;BBW"===e)this.setState({isSecondarySorted:"FLIGHT;BBW"}),this.handleColumnExceptionSort(e,t);else{var n=this.state.rmas[1].split(";")[0];"INBOUND"===n?this.setState({isSecondarySorted:"STA;BBW"}):this.setState({isSecondarySorted:"STD;BBW"});var a=this.state.direction,s=t.sort(function(t,a){var s=t[e].split(";")[0].toUpperCase().trim(),i=a[e].split(";")[0].toUpperCase().trim();if(""===s)return 1;if(s<i)return-1;if(s>i)return 1;if(s===i)if("INBOUND"===n){if(t["STA;BBW"]){if(s=t["STA;BBW"].split(";")[0].toUpperCase().trim(),i=a["STA;BBW"].split(";")[0].toUpperCase().trim(),""===s)return 1;if(s<i)return-1;if(s>i)return 1}}else if(t["STD;BBW"]){if(s=t["STD;BBW"].split(";")[0].toUpperCase().trim(),i=a["STD;BBW"].split(";")[0].toUpperCase().trim(),""===s)return 1;if(s<i)return-1;if(s>i)return 1}return 0});a||s.sort(function(t,a){var s=t[e].split(";")[0].toUpperCase().trim(),i=a[e].split(";")[0].toUpperCase().trim();if(""===s)return 1;if(s<i)return 1;if(s>i)return-1;if(s===i)if("INBOUND"===n){if(t["STA;BBW"]){if(s=t["STA;BBW"].split(";")[0].toUpperCase().trim(),i=a["STA;BBW"].split(";")[0].toUpperCase().trim(),""===s)return 1;if(s<i)return-1;if(s>i)return 1}}else if(t["STD;BBW"]){if(s=t["STD;BBW"].split(";")[0].toUpperCase().trim(),i=a["STD;BBW"].split(";")[0].toUpperCase().trim(),""===s)return 1;if(s<i)return-1;if(s>i)return 1}return 0}),this.setState({direction:!this.state.direction})}}},{key:"onCheck",value:function(e){var t=this;this.setState({shiftBools:Object(o.a)({},this.state.shiftBools,Object(l.a)({},e,!this.state.shiftBools[e]))},function(){return t.filter()})}},{key:"onCheckException",value:function(e){var t=this;e.trim().startsWith("Maint")?this.setState({maintBool:!this.state.maintBool},function(){return t.filter()}):e.trim().startsWith("Spare")?this.setState({spareBool:!this.state.spareBool},function(){return t.filter()}):e.trim().startsWith("Open")?this.setState({openBool:!this.state.openBool},function(){return t.filter()}):e.startsWith("Flights ")&&this.setState({otherBool:!this.state.otherBool},function(){return t.filter()})}},{key:"handleOnMouseDownTh",value:function(e,t){if(e.preventDefault(),1===e.button){var n=this.state.deletedColumns;t.startsWith("FLIGHT")||t.startsWith("GATE")||n.push(t);var a=this.state.currentContent.map(function(e){return Object.keys(e).reduce(function(n,a){return a!==t?n[a]=e[a]:(t.startsWith("FLIGHT")||t.startsWith("GATE"))&&(n[a]=e[a]),n},{})});this.setState({currentContent:a,deletedColumns:n,columnOrder:Object.keys(a[0])})}}},{key:"handleRightClickTh",value:function(e,t){e.preventDefault(),document.getElementsByClassName("App")[0].focus(),this.setState({selectedColumn:this.state.selectedColumn===t?"":t})}},{key:"handleKeyPress",value:function(e){if(this.state.selectedColumn&&(37===e.keyCode||39===e.keyCode)){e.preventDefault();var t=this.state.selectedColumn,n=this.state.currentContent,a=Object.keys(n[0]),s=a.length,i=a.indexOf(t);if(37===e.keyCode){if(i>0){var r=a[i];a[i]=a[i-1],a[i-1]=r;var l=n.map(function(e){var t=Object.keys(e),n=t[i];return t[i]=t[i-1],t[i-1]=n,t.reduce(function(t,n){return t[n]=e[n],t},{})});this.setState({currentContent:l,columnOrder:Object.keys(l[0])})}}else if(i<s-1){var o=a[i];a[i]=a[i+1],a[i+1]=o;var c=n.map(function(e){var t=Object.keys(e),n=t[i];return t[i]=t[i+1],t[i+1]=n,t.reduce(function(t,n){return t[n]=e[n],t},{})});this.setState({currentContent:c,columnOrder:Object.keys(c[0])})}}}},{key:"handleRightClickRow",value:function(e,t){e.preventDefault();var n=this.state.selectedRows;n.map(function(e){return e["FLIGHT;BBW"]+e["GATE;BBW"]}).includes(t["FLIGHT;BBW"]+t["GATE;BBW"])?this.setState({selectedRows:n.filter(function(e){return e["FLIGHT;BBW"]+e["GATE;BBW"]!==t["FLIGHT;BBW"]+t["GATE;BBW"]})}):(n.push(t),this.setState({selectedRows:n}))}},{key:"handleClick",value:function(e,t){if(e.preventDefault(),e.button,1===e.button){var n=Object.values(t).join(""),a=t["SHIFT;BBW"]?t["SHIFT;BBW"].split(";")[0].trim():"",s=t["FLIGHT;BBW"]?t["FLIGHT;BBW"].split(";")[0].trim():"",i=this.state.shiftOne,r=this.state.shiftTwo,l=this.state.shiftThree,o=this.state.maints,c=this.state.spares,h=this.state.opens,u=this.state.deletedRows;if(i[0].split(" ")[0]===a)if(parseInt(i[1].replace(/\D/g,"")-1<0)||"OPEN"===s||"MAINT"===s||"SPARE"===s){if("OPEN"===s){var p=parseInt(h.replace(/\D/g,""))-1;h="Open "+p+h.slice(-4),this.setState({opens:h})}else if("MAINT"===s){var m=parseInt(o.replace(/\D/g,""))-1;o="Maint "+m+o.slice(-4),this.setState({maints:o})}else if("SPARE"===s){var d=parseInt(c.replace(/\D/g,""))-1;c="Spare "+d+c.slice(-4),this.setState({spares:c})}}else{var f=parseInt(i[1].replace(/\D/g,""))-1;i=[i[0],"Flights  "+f+";"+i[1].split(";")[1]],this.setState({shiftOne:i})}else if(r[0].split(" ")[0]===a)if(parseInt(r[1].replace(/\D/g,"")-1<0)||"OPEN"===s||"MAINT"===s||"SPARE"===s){if("OPEN"===s){var E=parseInt(h.replace(/\D/g,""))-1;h="Open "+E+h.slice(-4),this.setState({opens:h})}else if("MAINT"===s){var S=parseInt(o.replace(/\D/g,""))-1;o="Maint "+S+o.slice(-4),this.setState({maints:o})}else if("SPARE"===s){var B=parseInt(c.replace(/\D/g,""))-1;c="Spare "+B+c.slice(-4),this.setState({spares:c})}}else{var T=parseInt(r[1].replace(/\D/g,""))-1;r=[r[0],"Flights  "+T+";"+r[1].split(";")[1]],this.setState({shiftTwo:r})}else if(l[0].split(" ")[0]===a)if(parseInt(l[1].replace(/\D/g,"")-1<0)||"OPEN"===s||"MAINT"===s||"SPARE"===s){if("OPEN"===s){var v=parseInt(h.replace(/\D/g,""))-1;h="Open "+v+h.slice(-4),this.setState({opens:h})}else if("MAINT"===s){var C=parseInt(o.replace(/\D/g,""))-1;o="Maint "+C+o.slice(-4),this.setState({maints:o})}else if("SPARE"===s){var I=parseInt(c.replace(/\D/g,""))-1;c="Spare "+I+c.slice(-4),this.setState({spares:c})}}else{var O=parseInt(l[1].replace(/\D/g,""))-1;l=[l[0],"Flights  "+O+";"+l[1].split(";")[1]],this.setState({shiftThree:l})}this.setState({currentContent:this.state.currentContent.reduce(function(e,t){return Object.values(t).join("")!==n?e.push(t):u.push(t),e},[])})}}},{key:"displayHelp",value:function(){this.setState({help:!this.state.help})}},{key:"handlePrint",value:function(){document.getElementsByTagName("table")[0].style.height="100%",window.print(),document.getElementsByTagName("table")[0].style.height="800px"}},{key:"render",value:function(){var e=this,t=this.state.maintBool?this.state.maintBool:"",n=this.state.spareBool?this.state.spareBool:"",a=this.state.openBool?this.state.openBool:"",i=this.state.otherBool?this.state.otherBool:"",r=this.state.currentContent?this.state.currentContent:"",l=this.state.misc?this.state.misc:"",o=this.state.maints?this.state.maints:"",c=this.state.spares?this.state.spares:"",h=this.state.opens?this.state.opens:"",u=this.state.currentTime?this.state.currentTime:"",p=this.state.currentDate?this.state.currentDate:"",m=this.state.shiftBools?this.state.shiftBools:"",d=this.state.rmas?this.state.rmas:"",f=this.state.shiftOne?this.state.shiftOne:"",E=this.state.shiftTwo?this.state.shiftTwo:"",B=this.state.shiftThree?this.state.shiftThree:"",v=this.props.location.pathname,C=this.state.noFile?this.state.noFile:"",O=this.state.help?this.state.help:"",y=this.state.selectedRows?this.state.selectedRows:"";return C?s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh"}},s.a.createElement("h1",null,"No File Found"),s.a.createElement(S.a,{to:"/home"},s.a.createElement(I.a,{variant:"outline-secondary",className:"home"},"Home"))):s.a.createElement("div",{className:"App",tabIndex:"0",onKeyDown:this.handleKeyPress.bind(this)},s.a.createElement("div",{className:"App-header"},s.a.createElement("div",{className:"header-content"},s.a.createElement("div",{className:"header-content-left"},s.a.createElement(D,{className:d?d[0].slice(-3):"",text:d?d[0].slice(0,-4):""}),s.a.createElement(D,{className:d?d[1].slice(-3):"",text:d?d[1].slice(0,-4):""}),s.a.createElement(D,{className:d?d[2].slice(-3):"",text:d?d[2].slice(0,-4):""})),s.a.createElement("div",{className:"header-content-middle"},s.a.createElement("div",{className:"shifts"},s.a.createElement(T,{id:"shiftOne",lClassName:f?f[0].slice(-3):"",name:"shiftOne",checked:m.shiftOne,onCheck:this.onCheck.bind(this),inputText:f?f[0].slice(0,-4):"",pClassName:f?f[1].slice(-3):"",pText:f?f[1].slice(0,-4):""}),s.a.createElement(T,{id:"shiftTwo",lClassName:E?E[0].slice(-3):"",name:"shiftTwo",checked:m.shiftTwo,onCheck:this.onCheck.bind(this),inputText:E?E[0].slice(0,-4):"",pClassName:E?E[1].slice(-3):"",pText:E?E[1].slice(0,-4):""}),s.a.createElement(T,{id:"shiftThree",lClassName:B?B[0].slice(-3):"",name:"shiftThree",checked:m.shiftThree,onCheck:this.onCheck.bind(this),inputText:B?B[0].slice(0,-4):"",pClassName:B?B[1].slice(-3):"",pText:B?B[1].slice(0,-4):""}))),s.a.createElement("div",{className:"header-content-buttons"},s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{variant:this.state.showSelectedOnly?"primary":"outline-primary",onClick:function(){return e.showSelected()},className:""},"Show Selected")),s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{variant:this.state.hideSelectedOnly?"primary":"outline-primary",onClick:function(){return e.hideSelected()},className:""},"Hide Selected"))),s.a.createElement("div",{className:"header-content-buttons-reset"},s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{variant:"outline-danger",onClick:function(){return e.resetColumns()},className:""},"Reset Columns")),s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{variant:"outline-danger",onClick:function(){return e.resetFlights()},className:""},"Reset Flights"))),s.a.createElement("div",{className:"header-content-buttons-two"},s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{style:{width:"100%"},variant:this.state.resizable?"success":"outline-success",onClick:function(){return e.setState({resizable:!e.state.resizable},function(){return t=e.state.resizable,new Promise(function(e,n){if(t){document.getElementsByClassName("App")[0].style.width="100%";for(var a=document.getElementsByTagName("*"),s=0;s<a.length;s++)a.item(s).classList.add("resizable");e()}else{document.getElementsByClassName("App")[0].style.width="1680px";for(var i=document.getElementsByTagName("*"),r=0;r<i.length;r++)i.item(r).classList.remove("resizable")}e()});var t})}},this.state.resizable?"Auto Sizing On":"Auto Sizing Off")),s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(I.a,{style:{width:"100%"},variant:this.state.refresh?"success":"outline-success",onClick:function(){return e.refresh()}},this.state.refresh?"Auto Refresh On":"Auto Refresh Off"))),s.a.createElement("div",{className:"header-content-buttons-three"},s.a.createElement("div",{className:"header-content-buttons-row"},s.a.createElement(S.a,{to:"/home"},s.a.createElement(I.a,{variant:"outline-secondary",className:"home"},"Home"))),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"12px"}},s.a.createElement(g,{checked:i,onCheckException:this.onCheckException.bind(this),className:"BBW",exception:"Flights "+Object.keys(m).filter(function(e){return m[e]}).reduce(function(e,t){return"shiftOne"===t?e+=parseInt(f[1].slice(0,-4).replace(/\D/g,"")):"shiftTwo"===t?e+=parseInt(E[1].slice(0,-4).replace(/\D/g,"")):"shiftThree"===t&&(e+=parseInt(B[1].slice(0,-4).replace(/\D/g,""))),e},0)}))),s.a.createElement("div",{className:"header-content-right"},s.a.createElement("div",{className:"header-content-right-row-1"},s.a.createElement(I.a,{style:{marginRight:"20px"},variant:"outline-success",onClick:function(){return e.handlePrint()},className:"print-span"},"Print"),s.a.createElement(w,{className:d?d[0].slice(-3):"",time:u?p.split(";")[0]+" at "+u.split(";")[0]:""})),s.a.createElement("div",{className:"header-content-right-row-2"},"INLET"===v.slice(-5)||"DEICE"===v.slice(-5)?"":s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{checked:t,onCheckException:this.onCheckException.bind(this),style:{margin:"0 10px 0 0"},className:o?o.split(";")[1]:"",exception:o?o.split(";")[0]:""}),s.a.createElement(g,{checked:n,onCheckException:this.onCheckException.bind(this),style:{margin:"0 10px 0 0"},className:c?c.split(";")[1]:"",exception:c?c.split(";")[0]:""}),s.a.createElement(g,{checked:a,onCheckException:this.onCheckException.bind(this),className:h?h.split(";")[1]:"",exception:h?h.split(";")[0]:""}))))),l?s.a.createElement(A,{help:O,misc:l,displayHelp:this.displayHelp.bind(this)}):""),s.a.createElement("div",{className:"App-content"},s.a.createElement(V,{sorted:this.state.isSorted,secondarySorted:this.state.isSecondarySorted,selected:this.state.selectedColumn,handleRightClickTh:this.handleRightClickTh.bind(this),handleOnMouseDownTh:this.handleOnMouseDownTh.bind(this),handleClick:this.handleClick.bind(this),handleRightClickRow:this.handleRightClickRow.bind(this),onSort:this.onSort.bind(this),content:r,selectedRows:y})))}}]),t}(a.Component),P=n(25),K=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"station",id:this.props.station},s.a.createElement("h2",null,this.props.station),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(P.a,{to:this.props.station+"/"+this.props.station+"_SVR_IBLIST"},"Inbound")),s.a.createElement("li",null,s.a.createElement(P.a,{to:this.props.station+"/"+this.props.station+"_SVR_OBLIST"},"Outbound")),s.a.createElement("li",null,s.a.createElement(P.a,{to:this.props.station+"/"+this.props.station+"_SVR_SDLIST/INLET"},"Snow Desk(Inlet)")),s.a.createElement("li",null,s.a.createElement(P.a,{to:this.props.station+"/"+this.props.station+"_SVR_SDLIST/DEICE"},"Snow Desk(Deice)"))))}}]),t}(a.Component),z=(n(58),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={file:""},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handleUpload",value:function(e){var t=this,n=new FileReader,a=e.target.files[0],s=document.getElementById("load"),i=document.getElementById("notAllowed");a&&("csv"===a.name.slice(-3)?(i.classList.contains("hidden")||i.classList.add("hidden"),n.onloadend=function(){t.setState({file:n.result.split("\n")})},n.readAsText(a),s.classList.remove("hidden")):(s.classList.contains("hidden")||s.classList.add("hidden"),i.classList.remove("hidden"))),a||(s.classList.add("hidden"),i.classList.add("hidden"))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",null,"RMAS ",s.a.createElement("i",null,"Lite"))),s.a.createElement("div",{className:"row"},s.a.createElement(K,{station:"MEM"}),s.a.createElement(K,{station:"OAK"}),s.a.createElement(K,{station:"AFW"}),s.a.createElement(K,{station:"IND"})),s.a.createElement("div",{className:"row"},s.a.createElement(K,{station:"EWR"}),s.a.createElement(K,{station:"CDG"}),s.a.createElement(K,{station:"CAN"}),s.a.createElement(K,{station:"GSO"})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(61),X=n(36);r.a.render(s.a.createElement(J.a,null,s.a.createElement("div",null,s.a.createElement(X.a,{exact:!0,path:"/home",component:z}),s.a.createElement(X.a,{exact:!0,path:"/",component:z}),s.a.createElement(X.a,{exact:!0,path:"/upload",component:U}),s.a.createElement(X.a,{exact:!0,path:"/MEM/MEM_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/MEM/MEM_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/MEM/MEM_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/MEM/MEM_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CDG/CDG_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CDG/CDG_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CDG/CDG_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CDG/CDG_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CAN/CAN_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CAN/CAN_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CAN/CAN_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/CAN/CAN_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/AFW/AFW_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/AFW/AFW_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/AFW/AFW_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/AFW/AFW_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/IND/IND_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/IND/IND_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/IND/IND_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/IND/IND_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/EWR/EWR_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/EWR/EWR_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/EWR/EWR_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/EWR/EWR_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/GSO/GSO_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/GSO/GSO_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/GSO/GSO_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/GSO/GSO_SVR_SDLIST/DEICE",component:U}),s.a.createElement(X.a,{exact:!0,path:"/OAK/OAK_SVR_IBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/OAK/OAK_SVR_OBLIST",component:U}),s.a.createElement(X.a,{exact:!0,path:"/OAK/OAK_SVR_SDLIST/INLET",component:U}),s.a.createElement(X.a,{exact:!0,path:"/OAK/OAK_SVR_SDLIST/DEICE",component:U}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.233a73f3.chunk.js.map