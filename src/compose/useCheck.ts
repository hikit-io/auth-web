import {useCookies} from "@vueuse/integrations/useCookies";

const useCheck = () => {
    const checkToken = () => {
        const cookies = useCookies()
        const cookie = cookies.get('HIKIT')
        return cookie
    }
    return {
        checkToken
    }
}


export {useCheck}