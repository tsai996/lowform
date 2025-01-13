import Theme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue'
export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(ElementPlus, {
            locale: zhCn,
        });
        for (const [key, component] of Object.entries(Icons)) {
            app.component(key, component)
        }
    },

}