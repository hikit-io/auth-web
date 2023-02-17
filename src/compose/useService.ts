import init, {Client} from "@hikit/auth-service";
import {inject, provide} from "vue";
import {useCookies} from "@vueuse/integrations/useCookies";

const Service = Symbol()

const useServiceProvide = async (endpoint: string) => {
    await init()
    const cookies = useCookies()
    const cookie = cookies.get('HIKIT')
    const cli = new Client(endpoint, cookie ?? '')
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