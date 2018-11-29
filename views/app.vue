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
    import Samples from "../sample/sample.js"

    export default {
        data() {
            return {
                inputFieldVal: '',
                inputInterfaceVal: '',
                outputVal: '',
                logList: [],
                footerStyle: {
                    position: "absolute"
                },
                sampleIndex: 0
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
                this.logList = []
                this.footerStyle = {
                    position: "relative"
                }
                let inputValArr = this.inputFieldVal
                .split(/[\s,，|]+/g)
                .filter(item => {
                    return item.length > 0
                })
                .map(item => {
                    let inputInterfaceValArr = []
                    let separator = /((\d+\.){2,}\d+)|([\n\r]\s*[\n\r]+)/ig
                    let withSeparator = separator.test(this.inputInterfaceVal) // 带有特殊分割符的接口文档
                    if (withSeparator) {
                        inputInterfaceValArr = this.inputInterfaceVal.split(separator).filter(item => item && !separator.test(item))
                    } else {
                        inputInterfaceValArr = this.inputInterfaceVal.split(/\n/g).filter(item => item)
                    }

                    let props = inputInterfaceValArr.map(lineStr => {
                        if(new RegExp('(^|[^\u4e00-\u9fa5])' + item + '($|[^\u4e00-\u9fa5])', "ig").test(lineStr)) {
                            let prop = "" // 字段提取
                            let specailReg = /[,，;\s\"\'\(\)]/ig // 特俗字符正则
                            let accurateReg = /(\"\b\w+\b\")|((\b(private|public)\b\s+)?\b(string|int|integer|boolean)\b\s+\b\w+\b)/ig // 精准匹配正则
                            let lineStrFormat = lineStr.replace(/[/*]/ig,"") // 文档注释格式化
                            if (accurateReg.test(lineStrFormat)) {
                                lineStrFormat = lineStrFormat.match(accurateReg)[0]
                            }

                            prop = this.matchesSort(lineStrFormat.match(/\b\w+\b/ig))[0].replace(specailReg,"")
                            if (type === 'tableColumns' || type === 'export') {
                                prop = new RegExp(prop + "str", "ig").test(this.inputInterfaceVal) ? prop + "Str" : prop
                            }
                            this.logList.push({
                                field: item,
                                note: lineStr,
                                result: JSON.stringify(callback(item, prop))
                            })
                            console.table({
                                "字段名": item,
                                "匹配接口文档注释": lineStr,
                                "匹配结果": JSON.stringify(callback(item, prop))
                            })
                            return prop
                        }
                    }).filter(value => {
                        return value !== undefined && value !== ''
                    })
                    if (!props.length) {
                        this.logList.push({
                            field: item,
                            note: "未找到相匹配的接口文档注释",
                            result: JSON.stringify(callback(item))
                        })
                        console.table({
                            "字段名": item,
                            "匹配接口文档注释": "未找到相匹配的接口文档注释",
                            "匹配结果": JSON.stringify(callback(item))
                        })
                    }
                    if (type && type === 'export') {
                        headers += item + ','
                        sorts += (props.length ? props[0] : '**') + ','
                    } else {
                        return callback(item, props.length ? props[0] : '' )
                    }
                })
                if (type && type === 'export') {
                    this.outputVal = 'headers: "' + headers.replace(/,$/,"") + '",\nsorts: "' + sorts.replace(/,$/,"") + '"'
                } else {
                    this.outputVal = (type || 'tableColumns') + ": " + JSON.stringify(inputValArr).replace(/\[/g, "[\n").replace(/\]/g, "\n]").replace(/{/g, "\t{").replace(/},/g, "},\n")
                }
                this.$notify({
                    title: '成功',
                    message: '转换成功',
                    type: 'success'
                })
                this.setStorage()
            },
            // 匹配结果排序
            matchesSort(matches) {
                let newMatches = []
                matches.map(item => {
                    if (/(\b(private|public|string|int|integer|boolean|body|\d+)\b)/ig.test(item)) {
                        newMatches.push(item)
                    } else {
                        newMatches.unshift(item)
                    }
                })
                return newMatches
            },
            // 生成SearchFields
            generateSearchFields() {
                return this.handleInputVal((item, prop) => {
                    return {
                        type: 'input', 
                        label: item || '', 
                        name: prop || ''
                    }
                }, 'searchFields')
            },
            // 生成TableColumns
            generateTableColumns() {
                return this.handleInputVal((item, prop) => {
                    return {
                        prop: prop || '',
                        label: item || '', 
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
                this.inputFieldVal = Samples[index].inputFieldVal
                this.inputInterfaceVal = Samples[index].inputInterfaceVal
                this.generateTableColumns()
                if (this.sampleIndex < Samples.length - 1) {
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
            // setStorage
            setStorage() {
                if (window.localStorage) {
                    window.localStorage.setItem('inputFieldVal', this.inputFieldVal)
                    window.localStorage.setItem('inputInterfaceVal', this.inputInterfaceVal)
                }
            },
            // getStorage
            getStorage() {
                if (window.localStorage) {
                    this.inputFieldVal = window.localStorage.getItem('inputFieldVal') || ''
                    this.inputInterfaceVal = window.localStorage.getItem('inputInterfaceVal') || ''
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
