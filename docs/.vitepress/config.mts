import {defineConfig} from 'vitepress'
import ElementPlus from "element-plus"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LowForm文档",
    description: "低代码表单设计器",
    lang: 'zh-CN',
    base: "/lowform",
    head: [['link', { rel: 'icon', href: '/lowform/favicon.ico' }]],
    themeConfig: {
        logo: "/logo.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "文档", link: "/guide/introduction"},
            {text: '更新日志', link: '/update-log', activeMatch: "/update-log"},
            {text: '在线预览', link: 'https://tsai996.github.io/lowform-pages'},
            {text: '关于', link: '/about', activeMatch: "/about"},
        ],
        footer: {
            copyright: `本文档内容版权属于 LowForm 作者，保留所有权利 。<a target="_blank" href="https://beian.miit.gov.cn/">赣ICP备2022011445号-2</a>`,
        },
        sidebar: {
            "/guide/": [
                {
                    text: '介绍',
                    items: [
                        {text: "简介", link: "/guide/introduction"},
                        {text: "扩展组件", link: "/guide/add-component"},
                        {text: "表单解析器", link: "/guide/form-parser"},
                    ]
                },
                {
                    text: '案例',
                    items: [
                        {text: "http请求", link: "/guide/case/http"},
                        {text: "组件联动", link: "/guide/case/linkage"},
                        {text: "规则校验", link: "/guide/case/rules"},
                        {text: "动态计算", link: "/guide/case/calculation"},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://gitee.com/cai_xiao_feng/lowform'}
        ],
        search: {
            provider: 'local'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: { api: 'modern-compiler' }
            }
        }
    }
})
