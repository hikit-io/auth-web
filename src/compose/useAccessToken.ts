import {useCookies} from "@vueuse/integrations/useCookies";

export interface AccessTokenContext {
    set: (accessToken: string) => void
    get: () => string
}

const useAccessToken = (): AccessTokenContext => {
    const cookies = useCookies()
    const set = (accessToken: string) => {
        cookies.set('HIKIT', accessToken, {
            domain: '.hikit.io'
        })
    }
    const get = () => {
        return cookies.get<string>('HIKIT')
    }
    const del = () => {
        cookies.remove('HIKIT', {
            path: '/',
            domain: '.hikit.io'
        })
    }
    return {
        set,
        get
    }
}

export {useAccessToken}