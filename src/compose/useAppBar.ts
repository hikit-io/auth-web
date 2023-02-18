import {inject, provide, Ref, ref} from "vue";
import {useToggle} from "@vueuse/core";
import {useCookies} from "@vueuse/integrations/useCookies";
import {useRouter} from "vue-router";


const AppBar = Symbol()

interface AppBarContext {
    showRight: Ref<boolean>

    toggleRight: (value?: (boolean | undefined)) => boolean

    logout: () => void

    onProfile: () => void
}

const useAppBarProvide = (): AppBarContext => {
    const cookies = useCookies()
    const {push} = useRouter()

    const [showRight, toggleRight] = useToggle(false)
    const logout = () => {
        cookies.remove('HIKIT', {path: '/'})
        toggleRight(false)
        push('/').then(r => {

        })
    }
    const onProfile = () => {
        push('/profile').then(r => {
        })
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
