<template>
    <div id="app">
        <div class="cover"></div>
        <div class="main">
            <div class="button-group">
                <button class="el-button" @click="generateTableColumns">transform</button>
            </div>
            <div class="input-and-output">
                <div class="left"><textarea id="input" v-model="inputVal"></textarea></div>
                <div class="right"><textarea id="output" v-model="outputVal"></textarea></div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import MainFooter from "../views/footer.jsx"

    export default {
        components: {
            MainFooter,
        },
        data() {
            return {
                inputVal: '',
                outputVal: '',
            }
        },
        methods: {
            generateTableColumns() {
                let tableColumns = this.inputVal
                .split(/\s/g)
                .filter(item => {
                    return item.length > 0
                })
                .map(item => {
                    return {
                        prop: '',
                        label: item,
                    }
                })
                this.outputVal = JSON.stringify(tableColumns)
            }
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
    }
    .button-group {
        display: flex;
        width: 100%;
        height: 48px;
        background-color: #1e3046;
    }
    .el-button {
        margin: 8px 12px;
        width: 106px;
        height:32px;
        font-size: 18px;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
    }
    .el-button:hover {
        opacity: 0.9;
    }
    .input-and-output {
        display: grid;
        width: 100%;
        height: 520px;
        grid-template-columns: 50% 50%;
    }
    #input, #output {
        width: 100%;
        height: 100%;
        font-size: 16px;
        line-height: 1.25;
    }
    #input {
        border: 1px solid #dedede;
        background-color: #fff;
    }
    #output {
        border: 1px solid #eeeeee;
        background-color: #f0f0f0;
    }
</style>
