/*
 * @Author: your name
 * @Date: 2021-04-01 10:18:22
 * @LastEditTime: 2021-04-30 08:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exclusive-cloud-admin\user\src\shared\index.ts
 */
class Shared {
    getStore(name: string) {

    }

    setStore(name: string, value: any) {

    }
}

class SharedModule {
    static shared = new Shared();

    /**
     * 重载 shared
     */
    static overloadShared(shared: any) {
        SharedModule.shared = shared;
    }

    /**
     * 获取 shared 实例
     */
    static getShared() {
        return SharedModule.shared;
    }

    static $mainRouter: any;
}

export default SharedModule;
