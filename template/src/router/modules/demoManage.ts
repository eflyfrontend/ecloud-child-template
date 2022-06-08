/*
 * @Author: your name
 * @Date: 2021-03-05 15:29:54
 * @LastEditTime: 2021-04-09 15:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud\manage\resource\src\demoManger\modules\demoMange.ts
 */
const demoMange: any = [
    {
        path: '',
        name: 'demoMangeList',
        redirect: 'demoMange/list',
    },
    {
        path: '/demoMange/list',
        name: 'demoMangeList',
        component: () => import('@/views/demoMange/list/list.vue')
    },
]


// @ts-ignore
export default demoMange
