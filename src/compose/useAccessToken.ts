import {useCookies} from "@vueuse/integrations/useCookies";

export interface AccessTokenContext {
    set: (accessToken: string) => void
    get: () => string
}

const useAccessToken = (): AccessTokenContext => {
    const cookies = useCookies(['HIKIT'])
    const set = (accessToken: string) => {
        cookies.set('HIKIT', accessToken, {
            domain: '.hikit.io'
        })
    }
    const get = () => {
        return cookies.get<string>('HIKIT')
    }
    return {
        set,
        get
    }
}

export {useAccessToken}