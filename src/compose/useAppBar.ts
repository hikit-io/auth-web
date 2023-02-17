import {inject, provide, Ref, ref} from "vue";
import {useToggle} from "@vueuse/core";


const AppBar = Symbol()

export interface AppBarContext {
    showRight: Ref<boolean>

    toggleRight(value?: (boolean | undefined)): boolean
}

const useAppBarProvide = (): AppBarContext => {
    const [showRight, toggleRight] = useToggle(false)
    return {
        showRight,
        toggleRight
    }
}

const useAppBar = (): AppBarContext => {
    const ctx = inject<AppBarContext>(AppBar)
    return <AppBarContext>ctx
}

export {useAppBarProvide, useAppBar, AppBar}