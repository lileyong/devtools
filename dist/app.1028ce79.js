!function(n){function t(t){for(var s,i,o=t[0],l=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(a.splice(t--,1),n=i(i.s=e[0]))}return n}var s={},r={0:0},a=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=s,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)i.d(e,s,function(t){return n[t]}.bind(null,s));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([141,1]),e()}({136:function(n,t,e){"use strict";var s=e(23);e.n(s).a},137:function(n,t,e){(n.exports=e(65)(!1)).push([n.i,"\n#app {\n    height: 100%;\n    overflow: auto;\n}\n.cover{\n    position: absolute;\n    left:0;\n    top:0;\n    width:100%;\n    height:100%;\n    background-color: #999;\n    opacity: 0.2;\n    z-index: -1;\n}\n.main {\n    margin: 20px auto;\n    width: 80%;\n    min-width: 850px;\n    max-width: 1220px;\n    box-shadow: 0 0 5px #666;\n    opacity: 0.9;\n}\n.button-group {\n    display: flex;\n    width: 100%;\n    height: 48px;\n    background-color: #1e3046;\n}\n.sh-button {\n    margin: 8px 8px 8px 12px;\n    min-width: 106px;\n    height:32px;\n    font-size: 18px;\n    border-radius: 3px;\n    background-color: #fff;\n    cursor: pointer;\n}\n.sh-button.copy {\n    background-color: #06cd3e;\n    color:#fff;\n}\n.sh-button.clear {\n    background-color: #f63832;\n    color: #fff;\n}\n.sh-button:hover {\n    opacity: 0.9;\n}\n.input-and-output {\n    width: 100%;\n    height: 520px;\n}\n#inputField, #inputInterface, #output{\n    float: left;\n    width: 50%;\n    height: 260px;\n    font-size: 16px;\n    line-height: 1.25;\n}\n#output {\n    width: 100%;\n}\n#inputField, #inputInterface {\n    border: 1px solid #dedede;\n    background-color: #fff;\n    border-radius: 0px;\n}\n#inputField {\n    border-right: none;\n}\n#output {\n    border: 1px solid #eeeeee;\n    background-color: #f0f0f0;\n    border-radius: 0px 0px 6px 6px;\n}\n.main.log {\n    border-radius: 6px;\n    overflow: hidden;\n}\n.log-head {\n    width: 100%;\n    height: 48px;\n    text-align: center;\n    line-height: 48px;\n    font-size: 18px;\n    background-color: #fff;\n}\n.log-table tr td:first-child {\n    width:12%;\n}\n.log-table tr td:nth-child(2) {\n    width:44%;\n}\n.log-table tr td:last-child {\n    width:44%;\n}\n#footer {\n    bottom: 0;\n    width: 100%;\n    padding: 30px;\n    text-align: center;\n    font-size: 18px;\n    color: #fff;\n    z-index: -1;\n    box-sizing: border-box;\n}\n",""])},138:function(n,t,e){},141:function(n,t,e){"use strict";e.r(t);var s=e(0),r=e(45),a=e.n(r),i=(e(130),e(67)),o=e.n(i);var l={jsonReg:/\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\])|(\s*{\s*(((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,\s*)*((("[a-z0-9_$]+")|('[a-z0-9_$]+')|([a-z0-9_$]+))\s*:\s*((".*")|('.*')|((\d*\.)?\d+)|null|(\[(\w+\s*,\s*)*\w*\]))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*))\s*,?\s*))?\s*}\s*/gi};var u=[{name:"示例1",tapd:"应收单单据查询",inputFieldVal:"序号\n        单据编号\n        单据类型\n        事业部\n        部门\n        结算组织\n        收款组织\n        销售组织\n        客户\n        币别\n        销售员\n        销售部门\n        业务日期\n        按含税单价录入\n        创建日期\n        创建人\n        审核人\n        审核日期\n        费用项目编码\n        费用承担部门\n        计价数量\n        价税合计\n        税率\n        会计日期\n        与K3集成状态\n        集成信息\n        模板编码\n        ",inputInterfaceVal:'"createBy": "admin",\n        "createName": "admin",  //创建人\n        "createTime": 0,  //创建日期\n        "createTimeStr": "1970-01-01 08:00:00",  //创建日期\n        "createUser": 0,\n        "fapproveDate": 0,            \n        "fapproveDateStr": "",     //审核日期\n        "fapproverId": "",          //审核人\n        "fbillNo": "FD201811111",    //单据编号\n        "fbillTypeId": "YSD02_SYS",  //单据类型\n        "fcurrencyId": "PRE001",      //币别\n        "fcustomerId": "6881",        //客户\n        "fdate": 0,                   //业务日期\n        "fdateStr": "1970-01-01 08:00:00",   //业务日期\n        "fdepartment": "",             //IT4.0部门\n        "fdivision": "",            //IT4.0事业部\n        "fentryTaxRate": 0.06,       //税率\n        "fexpenseDepartment": "",     //费用承担部门\n        "fexpenseId": "轮单费收入",    //费用项目编码\n        "fintegrationInfoK3": "",       //集成信息\n        "fintegrationStatusK3": 0,     //与k3集成状态|0:待处理,1:已处理,2:失败\n        "fistax": 0,                  //按含税单价录入|0:true,1:false\n        "fpayOrgId": "深圳市彬讯科技有限公司",   //收款组织\n        "fpriceQty": 1,                       //计价数量\n        "fsaleOrgId": "深圳市彬讯科技有限公司",        //销售组织\n        "fsalerId": "",                 //销售员\n        "fsettleOrgId": "深圳市彬讯科技有限公司",      //结算组织\n        "ftemplateCode": "CC00001",                 //模板编码\n        "ftaxPrice":1000,                        //价税合计\n        "faccountTime":0,\n        "faccountTimeStr":"1970-01-01 08:00:00"   //会计日期\n        "fbusingessType": "装企平台",     //业务类型\n        "ftemplateCode":"CCSSSS1",          //模板编码\n        "fsaleDepartment": "深圳分公司",   //销售部门\n        "id": 1,                         //序号\n        "remark": "",                   //备注\n        "updateBy": "admin",\n        "updateName": "admin",\n        "updateTime": 0,\n        "updateTimeStr": "1970-01-01 08:00:00",\n        "updateUser": 0'},{name:"示例2",tapd:"员工往来记账单",inputFieldVal:"序号\t\n        单据行ID\t\n        单据类型\t\n        单据编号\t\n        业务日期\t\n        到期日\t\n        往来单位名称\t\n        财务组织\t\n        备注\t\n        费用项目名称\t\n        费用承担部门名称\t\n        金额\t\n        会计日期\t\n        集成时间\t\n        源系统\t\n        单据生成状态 \n        ",inputInterfaceVal:"1.2.1.1\n        sourceTypeCode\n        body\n        String\n        非必填\n        源记录类型\n        1.2.1.2\n        purpose\n        body\n        String\n        非必填\n        明细用途\n        1.2.1.3\n        createBy\n        body\n        String\n        非必填\n        创建人登录名称\n        1.2.1.4\n        orderCode\n        body\n        String\n        非必填\n        单据编号\n        1.2.1.5\n        createUser\n        body\n        int\n        非必填\n        创建人ID\n        1.2.1.6\n        createName\n        body\n        String\n        非必填\n        创建人名称\n        1.2.1.7\n        createTime\n        body\n        int\n        非必填\n        创建时间\n        1.2.1.8\n        costProjectName\n        body\n        String\n        非必填\n        费用项目名称\n        1.2.1.9\n        voucherStatus\n        body\n        int\n        非必填\n        单据处理状态，0待处理，1已处理\n        1.2.1.10\n        sourceOrderType\n        body\n        String\n        非必填\n        单据类型，辅助资料11605\n        1.2.1.11\n        currentUnitName\n        body\n        String\n        非必填\n        往来单位名称\n        1.2.1.12\n        time\n        body\n        int\n        非必填\n        明细发生时间\n        1.2.1.13\n        remark\n        body\n        String\n        非必填\n        备注\n        1.2.1.14\n        bizTime\n        body\n        int\n        非必填\n        业务日期\n        1.2.1.15\n        expireTime\n        body\n        int\n        非必填\n        到期日\n        1.2.1.16\n        accountingTime\n        body\n        int\n        非必填\n        会计日期\n        1.2.1.17\n        orderNo\n        body\n        String\n        非必填\n        OA记录编号\n        1.2.1.18\n        updateTime\n        body\n        int\n        非必填\n        修改时间\n        1.2.1.19\n        updateName\n        body\n        String\n        非必填\n        修改人名称\n        1.2.1.20\n        updateUser\n        body\n        int\n        非必填\n        修改人ID\n        1.2.1.21\n        source\n        body\n        String\n        非必填\n        源系统\n        1.2.1.22\n        updateBy\n        body\n        String\n        非必填\n        修改人登录名称\n        1.2.1.23\n        id\n        body\n        int\n        非必填\n        主键ID\n        1.2.1.24\n        sourceDetailId\n        body\n        int\n        非必填\n        源明细ID\n        1.2.1.25\n        integrationTime\n        body\n        int\n        非必填\n        集成时间\n        1.2.1.26\n        financialOrgCode\n        body\n        String\n        非必填\n        财务组织，辅助资料61023\n        1.2.1.27\n        costDepartment\n        body\n        String\n        非必填\n        费用承担部门名称\n        1.2.1.28\n        amount\n        body\n        int\n        非必填\n        金额"},{name:"示例3",tapd:"交易会员系统",inputFieldVal:"数据状态\n        作废人ID\n        作废人\n        作废时间\n        付款方分类\n        付款方Id\n        付款方\n        结算方式\n        退款流水号\n        银行id\n        银行账号\n        开户名\n        APPID\n        支付流水号\n        来源\n        备注\n        款项名称全码\n        城市ID",inputInterfaceVal:'/**\n        * 数据状态:0正常,&gt;0:作废\n        */\n       @Desc("dataStatus")\n       private Integer dataStatus;\n   \n       /**\n        * 作废人ID\n        */\n       @Desc("cancelId")\n       private Integer cancelId;\n   \n       /**\n        * 作废人\n        */\n       @Desc("cancelUser")\n       private String cancelUser;\n   \n       /**\n        * 作废时间\n        */\n       @Desc("cancelTime")\n       private Integer cancelTime;\n   \n       @Desc("付款方分类")\n       private String receiptTypeId;\n   \n       @Desc("付款方Id")\n       private Integer receiptId;\n   \n       @Desc("付款方")\n       private String receiptName;\n   \n       @Desc("结算方式1.原路退款 2.虚拟账户 3.付款银行卡")\n       private String settleMode;\n   \n       @Desc("退款流水号")\n       private String refundNumber;\n   \n       @Desc("银行id")\n       private Integer bankId;\n   \n       @Desc("银行账号")\n       private String bankAccount;\n   \n       @Desc("开户名")\n       private String openingAccountName;\n   \n       @Desc("APPID")\n       private String appId;\n   \n       @Desc("支付流水号")\n       private String payNumber;\n   \n       @Desc("来源")\n       private Integer refundTypeId;\n   \n       @Desc("备注")\n       private String remark;\n   \n       @Desc("款项名称全码")\n       private String fundWholeCode;\n   \n       @Desc("城市ID")\n       private Integer cityId;'},{name:"示例4",tapd:"还款单",inputFieldVal:"还款凭证\n        到账时间\n        还款方式\n        收款方式\n        交易流水号\n        还款方\n        还款银行卡号后4位",inputInterfaceVal:'/**\n        * 还款凭证，同t8t_ps_smg.smg_remit_record的receipt_img_url\n        */\n       @NotBlank\n       private String receiptImgUrl;\n   \n       /**\n        * 到账时间，同t8t_ps_smg.smg_remit_record的receive_time\n        */\n       @NotNull\n       @Min(1)\n       private Integer receiveTime;\n   \n       /**\n        * 还款方式|枚举：1、银行渠道汇款；2：第三方汇款，同t8t_ps_smg.smg_remit_record的remit_way\n        */\n       @NotNull\n       @Min(1)\n       @Max(2)\n       private Integer remitWay;\n   \n       /**\n        * 收款方式|辅助资料：收款方式（61001），同t8t_ps_smg.smg_remit_record的receipt_way_code\n        */\n       @NotBlank\n       private String receiptWayCode;\n   \n       /**\n        * 交易流水号\n        */\n       @NotBlank\n       private String tradeSerialNo;\n   \n       /**\n        * 还款方\n        */\n       @NotBlank\n       private String payerName;\n   \n       /**\n        * 还款银行卡号后4位\n        */\n       @NotBlank\n       @Pattern(\n               regexp = "^\\d{4}$",\n               message = "银行卡号需取后四位数字"\n       )\n       private String bankcard;'}],c={data:()=>({type:"tableColumns",inputFieldVal:"",inputInterfaceVal:"",outputVal:"",logList:[],footerStyle:{position:"absolute"},sampleIndex:0}),mounted(){this.getStorage()},methods:{handleInputVal(n,t){let e="",s="";this.type=t,this.logList=[],this.footerStyle={position:"relative"};let r=Array.from(new Set(this.inputFieldVal.split(/[\s,，、|]+/g))),a=r.filter(n=>n.length>0).map(a=>{let i=[],o=/((^|\n)\s*(\d+\.)+\d+)|([\n\r]\s*[\n\r]+)/gi,u=o.test(this.inputInterfaceVal),c=l.jsonReg.test(this.inputInterfaceVal);i=u&&this.inputInterfaceVal.split(o).length>=r.length?this.inputInterfaceVal.split(o).filter(n=>n&&!o.test(n)):c&&this.inputInterfaceVal.match(l.jsonReg).length>=r.length?this.inputInterfaceVal.match(l.jsonReg).filter(n=>n):this.inputInterfaceVal.split(/\n/g).filter(n=>n);let d=a.replace("*","\\*").replace("+","\\+").replace("?","\\?"),p=new RegExp(d,"i"),f=new RegExp("(^|[^一-龥])"+d+"($|[^一-龥])","i"),h=f.test(this.inputInterfaceVal),_=i.map(e=>{if(h&&f.test(e)||!h&&p.test(e)){let s="",r=/[,，;\s\"\'\(\)]/gi,i=/((\b(private|public)\b\s+)?\b(string|int|integer|boolean)\b\s+\b\w+\b)/gi,o=e.replace(/[/*]/gi,"");i.test(o)&&(o=o.match(i).join("\n"));let l=o.match(/\b\w+\b/gi);return l&&(s=this.matchesSort(l,a,o)[0].replace(r,""),"tableColumns"!==t&&"export"!==t||(s=new RegExp("\b"+s+"str\b","ig").test(this.inputInterfaceVal)?s+"Str":s)),this.logList.push({field:a,note:e,result:JSON.stringify(n(a,s))}),console.table({"字段名":a,"匹配接口文档注释":e,"匹配结果":JSON.stringify(n(a,s))}),s}}).filter(n=>void 0!==n&&""!==n);if(_.length||(this.logList.push({field:a,note:"未找到相匹配的接口文档注释",result:JSON.stringify(n(a))}),console.table({"字段名":a,"匹配接口文档注释":"未找到相匹配的接口文档注释","匹配结果":JSON.stringify(n(a))})),!t||"export"!==t)return n(a,_.length?this.matchesSort(_)[0]:"");e+=a+",",s+=(_.length?this.matchesSort(_)[0]:"**")+","});this.outputVal=t&&"export"===t?'headers: "'+e.replace(/,$/,"")+'",\nsorts: "'+s.replace(/,$/,"")+'"':(t||"tableColumns")+": "+this.formmatJsonArr(a),this.$notify({title:"成功",message:"转换成功",type:"success"}),this.setStorage()},matchesSort(n,t,e){if(!n)return[];let s=new Object;n.map(n=>{s[n]=n.length}),n.map(n=>{/(\b(private|public|string|int|integer|boolean|body|\d+)\b)/gi.test(n)||new RegExp("\\."+n).test(e)?s[n]-=10:"searchFields"===this.type&&/((string|str|name)\b)/gi.test(n)?s[n]-=7:"tableColumns"!==this.type&&"export"!==this.type||!/((string|str|name)\b)/gi.test(n)?/\d+\b/gi.test(n)?s[n]-=2*n.match(/\d/g).length:n!==n.toUpperCase()&&n!==t||(s[n]-=1):s[n]+=7,new RegExp("['\"]?(name|prop)['\"]?\\s*:\\s*['\"]?"+n+"['\"]?").test(e)&&(s[n]+=10)});let r=[];for(var a in s)r.push(s[a]);let i=[];return(r=r.sort((n,t)=>t-n)).map(n=>{for(var t in s)n===s[t]&&i.push(t)}),i},formmatJsonArr(n){let t=[];for(var e in n)Object.keys(n[e]).length>3?t.push(JSON.stringify(n[e]).replace(/,/g,",\n\t\t").replace(/{/g,"\t{\n\t\t").replace(/}/g,"\n\t},\n")):t.push(JSON.stringify(n[e]).replace(/{/g,"\t{").replace(/}/g,"},\n"));return"[\n"+t.join("")+"]"},generateSearchFields(){return this.handleInputVal((n,t)=>/(日期|时间)$/.test(n)?{type:"datetime",label:n||"",name:t||"",pickertype:"datetimerange",startField:t+"_gte",endField:t+"_lte"}:{type:"input",label:n||"",name:t||""},"searchFields")},generateTableColumns(){return this.handleInputVal((n,t)=>/(日期|时间)$/.test(n)?{prop:t||"",label:n||"",formatter:"dateParser"}:{prop:t||"",label:n||""},"tableColumns")},generateExportParas(){return this.handleInputVal((n,t)=>({prop:t||"",label:n||""}),"export")},showSamples(){let n=this.sampleIndex;this.inputFieldVal=u[n].inputFieldVal,this.inputInterfaceVal=u[n].inputInterfaceVal,this.generateTableColumns(),this.sampleIndex<u.length-1?this.sampleIndex++:this.sampleIndex=0},copyOutput(){if(!this.outputVal)return this.$notify({title:"警告",message:"没有可复制的内容...",type:"warning"});o.a.writeText(this.outputVal),this.$notify({title:"成功",message:"复制成功",type:"success"})},clearInput(){this.inputFieldVal="",this.inputInterfaceVal="",this.outputVal="",this.logList=[],this.footerStyle={position:"absolute"},this.$notify({title:"成功",message:"清除成功",type:"success"})},setStorage(){window.localStorage&&(window.localStorage.setItem("inputFieldVal",this.inputFieldVal),window.localStorage.setItem("inputInterfaceVal",this.inputInterfaceVal))},getStorage(){window.localStorage&&(this.inputFieldVal=window.localStorage.getItem("inputFieldVal")||"",this.inputInterfaceVal=window.localStorage.getItem("inputInterfaceVal")||"")}}},d=(e(136),e(68)),p=Object(d.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"cover"}),n._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"main"},[e("div",{staticClass:"button-group"},[e("button",{staticClass:"sh-button",on:{click:n.generateSearchFields}},[n._v("SearchFields")]),n._v(" "),e("button",{staticClass:"sh-button",on:{click:n.generateTableColumns}},[n._v("TableColumns")]),n._v(" "),e("button",{staticClass:"sh-button",on:{click:n.generateExportParas}},[n._v("Exports")]),n._v(" "),e("button",{staticClass:"sh-button samples",on:{click:n.showSamples}},[n._v("Samples")]),n._v(" "),e("button",{staticClass:"sh-button copy",on:{click:n.copyOutput}},[n._v("Copy")]),n._v(" "),e("button",{staticClass:"sh-button clear",on:{click:n.clearInput}},[n._v("Clear")])]),n._v(" "),e("div",{staticClass:"input-and-output"},[e("div",{staticClass:"top"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.inputFieldVal,expression:"inputFieldVal"}],attrs:{id:"inputField",placeholder:"输入需求文档中的字段"},domProps:{value:n.inputFieldVal},on:{input:function(t){t.target.composing||(n.inputFieldVal=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"top"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.inputInterfaceVal,expression:"inputInterfaceVal"}],attrs:{id:"inputInterface",placeholder:"输入接口文档中的字段及注释"},domProps:{value:n.inputInterfaceVal},on:{input:function(t){t.target.composing||(n.inputInterfaceVal=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"bottom"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.outputVal,expression:"outputVal"}],attrs:{id:"output",placeholder:"输出对应格式的代码"},domProps:{value:n.outputVal},on:{input:function(t){t.target.composing||(n.outputVal=t.target.value)}}})])])]),n._v(" "),e("div",{staticClass:"main log"},[e("div",{staticClass:"log-head"},[n._v("匹配日志")]),n._v(" "),n.logList.length?e("table",{staticClass:"log-table"},[n._m(0),n._v(" "),e("tbody",n._l(n.logList,function(t){return e("tr",{key:t.field+t.note},[e("td",[n._v(n._s(t.field))]),n._v(" "),e("td",[n._v(n._s(t.note))]),n._v(" "),e("td",[n._v(n._s(t.result))])])}))]):n._e()])]),n._v(" "),e("div",{style:n.footerStyle,attrs:{id:"footer"}},[n._v("powered by promise.li")])])},[function(){var n=this.$createElement,t=this._self._c||n;return t("thead",[t("th",[this._v("字段名")]),this._v(" "),t("th",[this._v("匹配接口文档注释")]),this._v(" "),t("th",[this._v("匹配结果")])])}],!1,null,null,null);p.options.__file="app.vue";var f=p.exports;e(138);s.default.use(a.a);let h=document.createElement("div");document.body.append(h);new s.default({render:n=>n(f)}).$mount(h)},23:function(n,t,e){var s=e(137);"string"==typeof s&&(s=[[n.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(66)(s,r);s.locals&&(n.exports=s.locals)},67:function(n,t,e){n.exports=function(n){function t(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return n[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,s){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:s})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function s(n){var t=new w,e=function(n,t,e){p("listener called"),n.success=!0,t.forEach(function(t,s){e.clipboardData.setData(s,t),s===_&&e.clipboardData.getData(s)!=t&&(p("setting text/plain failed"),n.success=!1)}),e.preventDefault()}.bind(this,t,n);document.addEventListener("copy",e);try{document.execCommand("copy")}finally{document.removeEventListener("copy",e)}return t.success}function r(n,t){a(n);var e=s(t);return i(),e}function a(n){var t=document.getSelection(),e=document.createRange();e.selectNodeContents(n),t.removeAllRanges(),t.addRange(e)}function i(){document.getSelection().removeAllRanges()}function o(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function l(){return new d(function(n,t){var e=window.clipboardData.getData("Text");""===e?t(new Error("Empty clipboard or could not read plain text from clipboard")):n(e)})}Object.defineProperty(t,"__esModule",{value:!0});var u=e(1),c=e(5),d="undefined"==typeof Promise?u.Promise:Promise,p=function(n){},f=!0,h=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),_="text/plain",g=function(){function n(){}return n.setDebugLog=function(n){p=n},n.suppressWarnings=function(){f=!1,c.suppressDTWarnings()},n.write=function(n){return f&&!n.getData(_)&&h("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),new d(function(t,e){if(o())!function(n){var t=n.getData(_);if(void 0!==t)return window.clipboardData.setData("Text",t);throw"No `text/plain` value was specified."}(n)?e(new Error("Copying failed, possibly because the user rejected it.")):t();else{if(s(n))return p("regular execCopy worked"),void t();if(navigator.userAgent.indexOf("Edge")>-1)return p('UA "Edge" => assuming success'),void t();if(r(document.body,n))return p("copyUsingTempSelection worked"),void t();if(function(n){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var e=r(t,n);return document.body.removeChild(t),e}(n))return p("copyUsingTempElem worked"),void t();var l=n.getData(_);if(void 0!==l&&function(n){p("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var e=t;t.attachShadow&&(p("Using shadow DOM."),e=t.attachShadow({mode:"open"}));var s=document.createElement("span");s.innerText=n,e.appendChild(s),document.body.appendChild(t),a(s);var r=document.execCommand("copy");return i(),document.body.removeChild(t),r}(l))return p("copyTextUsingDOM worked"),void t();e(new Error("Copy command failed."))}})},n.writeText=function(n){if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(n);var t=new c.DT;return t.setData(_,n),this.write(t)},n.read=function(){return new d(function(n,t){o()?l().then(function(t){return n(function(n){var t=new c.DT;return t.setData(_,n),t}(t))},t):t("Read is not supported in your browser.")})},n.readText=function(){return navigator.clipboard&&navigator.clipboard.readText?navigator.clipboard.readText():o()?l():new d(function(n,t){t("Read is not supported in your browser.")})},n.DT=c.DT,n}();t.default=g;var w=function(){this.success=!1};n.exports=g},function(n,t,e){(function(t,s){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
!function(t,e){n.exports=e()}(0,function(){"use strict";function n(n){return"function"==typeof n}function r(){var n=setTimeout;return function(){return n(a,1)}}function a(){for(var n=0;n<z;n+=2)(0,k[n])(k[n+1]),k[n]=void 0,k[n+1]=void 0;z=0}function i(n,t){var e=arguments,s=this,r=new this.constructor(l);void 0===r[A]&&v(r);var a=s._state;return a?function(){var n=e[a-1];I(function(){return m(a,r,n,s._result)})}():_(s,r,n,t),r}function o(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(l);return d(t,n),t}function l(){}function u(n){try{return n.then}catch(n){return F.error=n,F}}function c(t,e,s){e.constructor===t.constructor&&s===i&&e.constructor.resolve===o?function(n,t){t._state===j?f(n,t._result):t._state===P?h(n,t._result):_(t,void 0,function(t){return d(n,t)},function(t){return h(n,t)})}(t,e):s===F?(h(t,F.error),F.error=null):void 0===s?f(t,e):n(s)?function(n,t,e){I(function(n){var s=!1,r=function(n,t,e,s){try{n.call(t,e,s)}catch(n){return n}}(e,t,function(e){s||(s=!0,t!==e?d(n,e):f(n,e))},function(t){s||(s=!0,h(n,t))},n._label);!s&&r&&(s=!0,h(n,r))},n)}(t,e,s):f(t,e)}function d(n,t){n===t?h(n,new TypeError("You cannot resolve a promise with itself")):function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}(t)?c(n,t,u(t)):f(n,t)}function p(n){n._onerror&&n._onerror(n._result),g(n)}function f(n,t){n._state===N&&(n._result=t,n._state=j,0!==n._subscribers.length&&I(g,n))}function h(n,t){n._state===N&&(n._state=P,n._result=t,I(p,n))}function _(n,t,e,s){var r=n._subscribers,a=r.length;n._onerror=null,r[a]=t,r[a+j]=e,r[a+P]=s,0===a&&n._state&&I(g,n)}function g(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var s=void 0,r=void 0,a=n._result,i=0;i<t.length;i+=3)s=t[i],r=t[i+e],s?m(e,s,r,a):r(a);n._subscribers.length=0}}function w(){this.error=null}function m(t,e,s,r){var a=n(s),i=void 0,o=void 0,l=void 0,u=void 0;if(a){if((i=function(n,t){try{return n(t)}catch(n){return M.error=n,M}}(s,r))===M?(u=!0,o=i.error,i.error=null):l=!0,e===i)return void h(e,new TypeError("A promises callback cannot return that same promise."))}else i=r,l=!0;e._state!==N||(a&&l?d(e,i):u?h(e,o):t===j?f(e,i):t===P&&h(e,i))}function v(n){n[A]=R++,n._state=void 0,n._result=void 0,n._subscribers=[]}function b(n,t){this._instanceConstructor=n,this.promise=new n(l),this.promise[A]||v(this.promise),$(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?f(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&f(this.promise,this._result))):h(this.promise,new Error("Array Methods must be provided an Array"))}function y(n){this[A]=R++,this._result=this._state=void 0,this._subscribers=[],l!==n&&("function"!=typeof n&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof y?function(n,t){try{t(function(t){d(n,t)},function(t){h(n,t)})}catch(t){h(n,t)}}(this,n):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var $=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},z=0,x=void 0,S=void 0,I=function(n,t){k[z]=n,k[z+1]=t,2===(z+=2)&&(S?S(a):E())},T="undefined"!=typeof window?window:void 0,D=T||{},C=D.MutationObserver||D.WebKitMutationObserver,V="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),O="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,k=new Array(1e3),E=void 0;E=V?function(){return t.nextTick(a)}:C?function(){var n=0,t=new C(a),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}():O?function(){var n=new MessageChannel;return n.port1.onmessage=a,function(){return n.port2.postMessage(0)}}():void 0===T?function(){try{var n=e(4);return void 0!==(x=n.runOnLoop||n.runOnContext)?function(){x(a)}:r()}catch(n){return r()}}():r();var A=Math.random().toString(36).substring(16),N=void 0,j=1,P=2,F=new w,M=new w,R=0;return b.prototype._enumerate=function(n){for(var t=0;this._state===N&&t<n.length;t++)this._eachEntry(n[t],t)},b.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,s=e.resolve;if(s===o){var r=u(n);if(r===i&&n._state!==N)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===y){var a=new e(l);c(a,n,r),this._willSettleAt(a,t)}else this._willSettleAt(new e(function(t){return t(n)}),t)}else this._willSettleAt(s(n),t)},b.prototype._settledAt=function(n,t,e){var s=this.promise;s._state===N&&(this._remaining--,n===P?h(s,e):this._result[t]=e),0===this._remaining&&f(s,this._result)},b.prototype._willSettleAt=function(n,t){var e=this;_(n,void 0,function(n){return e._settledAt(j,t,n)},function(n){return e._settledAt(P,t,n)})},y.all=function(n){return new b(this,n).promise},y.race=function(n){var t=this;return new t($(n)?function(e,s){for(var r=n.length,a=0;a<r;a++)t.resolve(n[a]).then(e,s)}:function(n,t){return t(new TypeError("You must pass an array to race."))})},y.resolve=o,y.reject=function(n){var t=new this(l);return h(t,n),t},y._setScheduler=function(n){S=n},y._setAsap=function(n){I=n},y._asap=I,y.prototype={constructor:y,then:i,catch:function(n){return this.then(null,n)}},y.polyfill=function(){var n=void 0;if(void 0!==s)n=s;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=y},y.Promise=y,y})}).call(t,e(2),e(3))},function(n,t){function e(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function r(n){if(u===setTimeout)return setTimeout(n,0);if((u===e||!u)&&setTimeout)return u=setTimeout,setTimeout(n,0);try{return u(n,0)}catch(t){try{return u.call(null,n,0)}catch(t){return u.call(this,n,0)}}}function a(){h&&p&&(h=!1,p.length?f=p.concat(f):_=-1,f.length&&i())}function i(){if(!h){var n=r(a);h=!0;for(var t=f.length;t;){for(p=f,f=[];++_<t;)p&&p[_].run();_=-1,t=f.length}p=null,h=!1,function(n){if(c===clearTimeout)return clearTimeout(n);if((c===s||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(n);try{c(n)}catch(t){try{return c.call(null,n)}catch(t){return c.call(this,n)}}}(n)}}function o(n,t){this.fun=n,this.array=t}function l(){}var u,c,d=n.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:e}catch(n){u=e}try{c="function"==typeof clearTimeout?clearTimeout:s}catch(n){c=s}}();var p,f=[],h=!1,_=-1;d.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new o(n,t)),1!==f.length||h||r(i)},o.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t){},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=["text/plain","text/html"],r=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),a=!0;t.suppressDTWarnings=function(){a=!1};var i=function(){function n(){this.m={}}return n.prototype.setData=function(n,t){a&&-1===s.indexOf(n)&&r("Unknown data type: "+n,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[n]=t},n.prototype.getData=function(n){return this.m[n]},n.prototype.forEach=function(n){for(var t in this.m)n(this.m[t],t)},n}();t.DT=i}])}});