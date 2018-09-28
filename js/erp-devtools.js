/**
 * @function 根据模板字符串快速生成tableColumns
 * @param templateStr 模板字符串
 */
function generateTableColumns(templateStr) {
    let tableColumns = templateStr
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
    console.log(JSON.stringify(tableColumns))
}

/**
 * @function 根据字符串数组快速生成opts
 * @param strArr 字符串数组
 */
function buildOptsByArray(strArr, opt = {}) {
    let Opts = []
    let i = opt.startVal || 1
    arr.map(item => {
        Opts.push({ text: item, value: i++ })
    })
    console.log(JSON.stringify(Opts))
}