<template>
    <div id="app">
        <div class="cover"></div>
        <div class="content">
            <div class="main">
                <div class="button-group">
                    <button class="sh-button" @click="generateSearchFields">SearchFields</button>
                    <button class="sh-button" @click="generateTableColumns">TableColumns</button>
                    <button class="sh-button" @click="generateExportParas">Exports</button>
                    <button class="sh-button samples" @click="showSamples">Samples</button>
                    <button class="sh-button copy" @click="copyOutput">Copy</button>
                    <button class="sh-button clear" @click="clearInput">Clear</button>
                </div>
                <div class="input-and-output">
                    <!--需求文档中的字段输入-->
                    <div class="top"><textarea id="inputField" v-model="inputFieldVal" placeholder="输入需求文档中的字段"></textarea></div>
                    <!--接口文档中的字段及注释输入-->
                    <div class="top"><textarea id="inputInterface" v-model="inputInterfaceVal" placeholder="输入接口文档中的字段及注释"></textarea></div>
                    <!--输出对应格式的代码-->
                    <div class="bottom"><textarea id="output" v-model="outputVal" placeholder="输出对应格式的代码"></textarea></div>
                </div>
            </div>
            <div class="main log">
                <div class="log-head">匹配日志</div>
                <table class="log-table" v-if="logList.length">
                    <thead>
                        <th>字段名</th>
                        <th>匹配接口文档注释</th>
                        <th>匹配结果</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in logList" :key="item.field+item.note">
                            <td>{{item.field}}</td>
                            <td>{{item.note}}</td>
                            <td>{{item.result}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="footer" :style="footerStyle">powered by promise.li</div>
    </div>
</template>

<script>
    import Clipboard from "../js/clipboard.js"
    import commonReg from "../js/commonReg.js"
    import samples from "../sample/sample.js"

    export default {
        data() {
            return {
                type: 'tableColumns',
                inputFieldVal: '',
                inputInterfaceVal: '',
                outputVal: '',
                logList: [],
                footerStyle: {
                    position: "absolute"
                },
                // 样例索引
                sampleIndex: 0,
                // 近义词库
                homoionymList: [
                    ['日期', '时间'],
                    ['编号', '编码']
                ]
            }
        },
        mounted() {
            this.getStorage()
        },
        methods: {
            // 处理输入数据
            handleInputVal(callback, type) {
                let headers = ""
                let sorts = ""
                this.type = type
                this.logList = []
                this.footerStyle = {
                    position: "relative"
                }
                let fields = Array.from(new Set(this.inputFieldVal.split(/[\s,，、|]+/g)))
                let inputInterfaceValArr = []
                let separator = /((^|\n)\s*(\d+\.)+\d+)|([\n\r]\s*[\n\r]+)/ig // 特殊分割符
                let withSeparator = separator.test(this.inputInterfaceVal) // 带有特殊分割符的接口文档
                let withJson = commonReg["jsonReg"].test(this.inputInterfaceVal) // Json格式的接口文档
                if (withSeparator && this.inputInterfaceVal.split(separator).length >= fields.length) {
                    inputInterfaceValArr = this.inputInterfaceVal.split(separator).filter(item => item && !separator.test(item))
                } else if (withJson && this.inputInterfaceVal.match(commonReg["jsonReg"]).length >= fields.length){
                    inputInterfaceValArr = this.inputInterfaceVal.match(commonReg["jsonReg"]).filter(item => item)
                } else {
                    inputInterfaceValArr = this.inputInterfaceVal.split(/\n/g).filter(item => item)
                }
                inputInterfaceValArr = Array.from(new Set(inputInterfaceValArr))
                let inputValArr = fields
                .filter(item => {
                    return item.length > 0
                })
                .map(field => {
                    let props = []
                    this.getHomoionym(field).map(item => {
                        let regItem = item.replace("*","\\*").replace("+","\\+").replace("?","\\?")
                        let matchReg = new RegExp(regItem, "i")
                        let accurateMatchReg = new RegExp('(^|[^\u4e00-\u9fa5a-z])' + regItem + '($|[^\u4e00-\u9fa5a-z]|id|名称)', "i")
                        let accurateMatch = accurateMatchReg.test(this.inputInterfaceVal)
                        inputInterfaceValArr.map(lineStr => {
                            let prop = "" // 字段提取
                            let specailReg = /[,，;\s\"\'\(\)]/ig // 特俗字符正则
                            let accurateReg = /((\b(private|public)\b\s+)?\b(string|int|integer|boolean)\b\s+\b\w+\b)/ig // 精准匹配正则
                            let lineStrFilter = lineStr.replace(/[/*]/ig,"").replace(new RegExp("=.*$", "ig"), "").replace(/(VARCHAR)|(TINYINT)|(DECIMAL)|(DEFAULT)|(UNSIGNED)|(COMMENT)/g, "") // 文档注释过滤

                            if((accurateMatch && accurateMatchReg.test(lineStrFilter))||(!accurateMatch && matchReg.test(lineStrFilter))) {
                                let matches = lineStrFilter.match(/\b\w+\b/ig)
                                if (matches) {
                                    prop = this.matchesSort(matches, item, lineStrFilter)[0].replace(specailReg,"")
                                    if (type === 'tableColumns' || type === 'export') {
                                        prop = new RegExp('\b' + prop + "str\b", "ig").test(this.inputInterfaceVal) ? prop + "Str" : prop
                                    }
                                }
                                
                                this.logList.push({
                                    field: field,
                                    note: lineStr,
                                    result: JSON.stringify(callback(field, prop))
                                })
                                console.table({
                                    "字段名": field,
                                    "匹配接口文档注释": lineStr,
                                    "匹配结果": JSON.stringify(callback(field, prop))
                                })
                                props.push(this.underlineToHumpType(prop))
                            }
                        }).filter(value => {
                            return value !== undefined && value !== ''
                        })
                    })
                    if (!props.length) {
                        this.logList.push({
                            field: field,
                            note: "未找到相匹配的接口文档注释",
                            result: JSON.stringify(callback(field))
                        })
                        console.table({
                            "字段名": field,
                            "匹配接口文档注释": "未找到相匹配的接口文档注释",
                            "匹配结果": JSON.stringify(callback(field))
                        })
                    }
                    if (type && type === 'export') {
                        headers += field + ','
                        sorts += (props.length ? this.matchesSort(props)[0] : '**') + ','
                    } else {
                        return callback(field, props.length ? this.matchesSort(props)[0] : '' )
                    }
                })

                if (type && type === 'export') {
                    this.outputVal = 'headers: "' + headers.replace(/,$/,"") + '",\nsorts: "' + sorts.replace(/,$/,"") + '"'
                } else {
                    this.outputVal = (type || 'tableColumns') + ": " + this.formmatJsonArr(inputValArr)
                }
                this.$notify({
                    title: '成功',
                    message: '转换成功',
                    type: 'success'
                })
                this.setStorage()
            },
            // 获取近义词
            getHomoionym(field) {
                let homoionym = ''
                let homoionymArr = []
                this.homoionymList.map(homoionymItem => {
                    homoionymItem.map(word => {
                        if (field.match(word)) {
                            homoionym = word
                            homoionymArr = homoionymItem.filter(item => item !== word)
                        }
                    })
                })
                let fields = new Array(field)
                homoionymArr.map(item => {
                    fields.push(field.replace(homoionym, item))
                })
                return fields
            },
            // 匹配结果排序
            matchesSort(matches,field,lineStr) {
                if (!matches) {
                    return []
                }
                let weight = new Object() // 权重
                
                // 初始化权重
                matches.map(item => {
                    weight[item] = item.length
                })
                // 权重优化
                matches.map(item => {
                    if (/(\b(private|public|string|int|integer|boolean|body|\d+)\b)/ig.test(item) || new RegExp('\\.' + item).test(lineStr)) {
                        weight[item] -= 10
                    } else if ((this.type === 'searchFields' && /((string|str|name)\b)/ig.test(item))) {
                        weight[item] -= 7
                    } else if (((this.type === 'tableColumns'||this.type === 'export') && /((string|str|name)\b)/ig.test(item))) {
                        weight[item] += 7
                    } else if (/\d+\b/ig.test(item)) {
                        weight[item] -= 2 * item.match(/\d/g).length
                    } else if (item === item.toUpperCase() || item === field) {
                        weight[item] -= 1
                    }
                    if (new RegExp('[\'\"]?(name|prop)[\'\"]?\\s*:\\s*[\'\"]?' + item + '[\'\"]?').test(lineStr)) {
                        weight[item] += 10
                    }
                })

                // 提取权重值集
                let weightValueArr = []
                for (var p in weight) {
                    weightValueArr.push(weight[p])
                }
                // 权重值集排序
                weightValueArr = weightValueArr.sort((a, b) => {
                    return b - a
                })
                // 字段重新排序
                let newMatches = []
                weightValueArr.map(item => {
                    for (var p in weight) {
                        if (item === weight[p]) {
                            newMatches.push(p)
                        }
                    }
                })

                return newMatches
            },
            // 格式化JSON数组为JSON对象
            formmatJsonArr (inputValArr) {
                let jsonStringArr = []
                for (var p in inputValArr) {
                    if (Object.keys(inputValArr[p]).length > 3) {
                        jsonStringArr.push(JSON.stringify(inputValArr[p]).replace(/,/g, ',\n\t\t').replace(/{/g, "\t{\n\t\t").replace(/}/g, "\n\t},\n"))
                    } else {
                        jsonStringArr.push(JSON.stringify(inputValArr[p]).replace(/{/g, "\t{").replace(/}/g, "},\n"))
                    }
                }
                return '[\n' + jsonStringArr.join('') + ']'
            },
            // 下划线转驼峰
            underlineToHumpType(str) {
                let matches = str.match(/_[a-z]/g)
                matches && matches.forEach(item => {
                    str = str.replace(item, item.replace('_','').toUpperCase())
                })
                return str
            },
            // 生成SearchFields
            generateSearchFields() {
                return this.handleInputVal((item, prop) => {
                    if (/(日期|时间)$/.test(item)) {
                        return {
                            type: 'datetime',
                            label: item || '', 
                            name: prop || '',
                            pickertype: 'datetimerange',
                            startField: prop + '_gte',
                            endField: prop + '_lte',
                        }
                    } else {
                        return {
                            type: 'input', 
                            label: item || '', 
                            name: prop || ''
                        }
                    }
                    
                }, 'searchFields')
            },
            // 生成TableColumns
            generateTableColumns() {
                return this.handleInputVal((item, prop) => {
                    if (/(日期|时间)$/.test(item)) {
                        return {
                            prop: prop || '',
                            label: item || '',
                            formatter: 'dateParser',
                        }
                    } else {
                        return {
                            prop: prop || '',
                            label: item || '', 
                        }
                    }
                    
                }, 'tableColumns')
            },
            // 导出
            generateExportParas() {
                return this.handleInputVal((item, prop) => {
                    return {
                        prop: prop || '',
                        label: item || '', 
                    }
                }, 'export')
            },
            // 显示样例
            showSamples() {
                let index = this.sampleIndex
                this.inputFieldVal = samples[index].inputFieldVal
                this.inputInterfaceVal = samples[index].inputInterfaceVal
                this.generateTableColumns()
                if (this.sampleIndex < samples.length - 1) {
                    this.sampleIndex++
                } else {
                    this.sampleIndex = 0
                }
            },
            // 复制输出结果
            copyOutput() {
                if (!this.outputVal) {
                    return this.$notify({
                        title: '警告',
                        message: '没有可复制的内容...',
                        type: 'warning'
                    })
                }
                Clipboard.writeText(this.outputVal)
                this.$notify({
                    title: '成功',
                    message: '复制成功',
                    type: 'success'
                })
            },
            // 清空输入框
            clearInput() {
                this.inputFieldVal = ''
                this.inputInterfaceVal = ''
                this.outputVal = ''
                this.logList = []
                this.footerStyle = {
                    position: "absolute"
                }
                this.$notify({
                    title: '成功',
                    message: '清除成功',
                    type: 'success'
                })
            },
            filterScript (str) {
                str = str || '';
                str = decodeURIComponent(str);
                str = str.replace(/<.*>/g, ''); // 过滤标签注入
                str = str.replace(/(java|vb|action)script/gi, ''); // 过滤脚本注入
                str = str.replace(/[\"\'][\s ]*([^=\"\'\s ]+[\s ]*=[\s ]*[\"\']?[^\"\']+[\"\']?)+/gi, ''); // 过滤HTML属性注入
                str = str.replace(/[\s ]/g, '&nbsp;'); // 替换空格
                return str;
            },
            // getPara
            getPara (name, url) {
                var paraStr = (typeof url == 'undefined') ? window.location.href : url;
                var paraArr = paraStr.split(/[?#]/g);
                for(var index = 1;index < paraArr.length;index++){
                    var para = paraArr[index];
                    para = para.split('&');
                    for (var i = para.length - 1; para[i]; i--) {
                        para[i] = para[i].split('=');
                        if (para[i][0] == name) {
                            try { // 防止FF等decodeURIComponent异常
                                return this.filterScript(para[i][1]);
                            } catch (e) {
                                return para[i][1];
                            }
                        }
                    }
                }
            },
            // setStorage
            setStorage() {
                if (window.localStorage) {
                    window.localStorage.setItem('inputFieldVal', this.inputFieldVal)
                    window.localStorage.setItem('inputInterfaceVal', this.inputInterfaceVal)
                }
                window.history.pushState({}, "", "?inputFieldVal=" + encodeURIComponent(this.inputFieldVal))
            },
            // getStorage
            getStorage() {
                if (window.localStorage) {
                    this.inputFieldVal = window.localStorage.getItem('inputFieldVal') || ''
                    this.inputInterfaceVal = window.localStorage.getItem('inputInterfaceVal') || ''
                }
                if (this.getPara('inputFieldVal')) {
                    this.inputFieldVal = this.getPara('inputFieldVal').replace(/&nbsp;/g, " ")
                }
            },
        }
    }
</script>

<style>
    #app {
        height: 100%;
        overflow: auto;
    }
    .cover{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: #999;
        opacity: 0.2;
        z-index: -1;
    }
    .main {
        margin: 20px auto;
        width: 80%;
        min-width: 850px;
        max-width: 1220px;
        box-shadow: 0 0 5px #666;
        opacity: 0.9;
    }
    .button-group {
        display: flex;
        width: 100%;
        height: 48px;
        background-color: #1e3046;
    }
    .sh-button {
        margin: 8px 8px 8px 12px;
        min-width: 106px;
        height:32px;
        font-size: 18px;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
    }
    .sh-button.copy {
        background-color: #06cd3e;
        color:#fff;
    }
    .sh-button.clear {
        background-color: #f63832;
        color: #fff;
    }
    .sh-button:hover {
        opacity: 0.9;
    }
    .input-and-output {
        width: 100%;
        height: 520px;
    }
    #inputField, #inputInterface, #output{
        float: left;
        width: 50%;
        height: 260px;
        font-size: 16px;
        line-height: 1.25;
    }
    #output {
        width: 100%;
    }
    #inputField, #inputInterface {
        border: 1px solid #dedede;
        background-color: #fff;
        border-radius: 0px;
    }
    #inputField {
        border-right: none;
    }
    #output {
        border: 1px solid #eeeeee;
        background-color: #f0f0f0;
        border-radius: 0px 0px 6px 6px;
    }
    .main.log {
        border-radius: 6px;
        overflow: hidden;
    }
    .log-head {
        width: 100%;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 18px;
        background-color: #fff;
    }
    .log-table tr td:first-child {
        width:12%;
    }
    .log-table tr td:nth-child(2) {
        width:44%;
    }
    .log-table tr td:last-child {
        width:44%;
    }
    #footer {
        bottom: 0;
        width: 100%;
        padding: 30px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        z-index: -1;
        box-sizing: border-box;
    }
</style>
