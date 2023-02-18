import {inject, provide, Ref, ref} from "vue";
import {useToggle} from "@vueuse/core";
import {useCookies} from "@vueuse/integrations/useCookies";
import {useRouter} from "vue-router";


const AppBar = Symbol()

interface AppBarContext {
    showRight: Ref<boolean>

    toggleRight(value?: (boolean | undefined)): boolean

    logout(): void

    onProfile(): void
}

const useAppBarProvide = (): AppBarContext => {
    const [showRight, toggleRight] = useToggle(false)
    const logout = () => {
        const cookies = useCookies()
        const {push} = useRouter()

        push('/').then(r => {
            cookies.remove('HIKIT')
            toggleRight(false)
        })
    }
    const onProfile = () => {
        const {push} = useRouter()
        push('/profile')
    }
    return {
        showRight,
        toggleRight,
        logout,
        onProfile
    }
}

const useAppBar = (): AppBarContext => {
    const ctx = inject<AppBarContext>(AppBar)
    return <AppBarContext>ctx
}

export {useAppBarProvide, useAppBar, AppBar};
export type {AppBarContext};
