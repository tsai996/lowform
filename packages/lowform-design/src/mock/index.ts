import News from './news'
import type { MockMethod } from 'vite-plugin-mock'

const mockModules: MockMethod[] = [...News]
export default mockModules
