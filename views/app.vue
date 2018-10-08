<template>
    <div id="app">
        <div class="cover"></div>
        <div class="main">
            <div class="button-group">
                <button class="sh-button" @click="generateSearchFields">SearchFields</button>
                <button class="sh-button" @click="generateTableColumns">TableColumns</button>
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
        <main-footer></main-footer>
    </div>
</template>

<script>
    import MainFooter from "../views/footer.jsx"
    import Clipboard from "../js/clipboard.js"

    export default {
        components: {
            MainFooter,
        },
        data() {
            return {
                inputFieldVal: '',
                inputInterfaceVal: '',
                outputVal: '',
            }
        },
        mounted() {
            this.getStorage()
        },
        methods: {
            // 生成SearchFields
            generateSearchFields() {
                let searchFields = this.inputFieldVal
                .split(/\s/g)
                .filter(item => {
                    return item.length > 0
                })
                .map(item => {
                    let names = this.inputInterfaceVal.split(/\n/g).map(lineStr => {
                        if(new RegExp(item, "ig").test(lineStr)) {
                            console.table({
                                "字段名": item,
                                "匹配接口文档注释": lineStr,
                                "匹配结果": JSON.stringify({
                                    type: 'input', 
                                    label: item, 
                                    name: lineStr.split(/:/)[0].replace(/[\s\"\']/g, '')
                                })
                            })
                            return lineStr.split(/:/)[0].replace(/[\s\"\']/g, '')
                        }
                    }).filter(value => {
                        return value !== undefined
                    })
                    if (!names.length) {
                        console.table({
                                "字段名": item,
                                "匹配接口文档注释": "未找到相匹配的接口文档注释",
                                "匹配结果": JSON.stringify({ 
                                    type: 'input', 
                                    label: item, 
                                    name: ''
                                })
                            })
                    }
                    return {
                        type: 'input', 
                        label: item, 
                        name: names.length ? names[0] : '' 
                    }
                })
                this.outputVal = "searchFields: " + JSON.stringify(searchFields).replace(/\[/g, "[\n").replace(/\]/g, "\n]").replace(/{/g, "\t{").replace(/},/g, "},\n")
                this.$notify({
                    title: '成功',
                    message: '转换成功',
                    type: 'success'
                })
                this.setStorage()
            },
            // 生成TableColumns
            generateTableColumns() {
                let tableColumns = this.inputFieldVal
                .split(/\s/g)
                .filter(item => {
                    return item.length > 0
                })
                .map(item => {
                    let props = this.inputInterfaceVal.split(/\n/g).map(lineStr => {
                        if(new RegExp(item, "ig").test(lineStr)) {
                            console.table({
                                "字段名": item,
                                "匹配接口文档注释": lineStr,
                                "匹配结果": JSON.stringify({
                                    prop: lineStr.split(/:/)[0].replace(/[\s\"\']/g, ''),
                                    label: item, 
                                })
                            })
                            return lineStr.split(/:/)[0].replace(/[\s\"\']/g, '')
                        }
                    }).filter(value => {
                        return value !== undefined
                    })
                    if (!props.length) {
                        console.table({
                                "字段名": item,
                                "匹配接口文档注释": "未找到相匹配的接口文档注释",
                                "匹配结果": JSON.stringify({
                                    prop: "",
                                    label: item, 
                                })
                            })
                    }
                    return {
                        prop: props.length ? props[0] : '',
                        label: item,
                    }
                })
                this.outputVal = "tableColumns: " + JSON.stringify(tableColumns).replace(/\[/g, "[\n").replace(/\]/g, "\n]").replace(/{/g, "\t{").replace(/},/g, "},\n")
                this.$notify({
                    title: '成功',
                    message: '转换成功',
                    type: 'success'
                })
                this.setStorage()
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
        overflow: hidden;
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
</style>
