import CodeGenerator from '../../views/tool/code-generator.vue'

const routes = [
	{
		path: '/',
		redirect: '/code-generator'
	},
    {
        path: '/code-generator',
        component: CodeGenerator
    }
]

export default routes