import init, {Client} from "@hikit/auth-service";
import {inject, provide} from "vue";
import {useCookies} from "@vueuse/integrations/useCookies";
import {useAccessToken} from "./useAccessToken";

const Service = Symbol()

const useServiceProvide = async (endpoint: string) => {
    await init()
    const token = useAccessToken()
    const cli = new Client(endpoint, token.get() ?? '')
    return cli
}

const useService = (): Client => {
    const cli = inject<Client>(Service)
    return <Client>cli
}

export {
    Service,
    useService,
    useServiceProvide
}