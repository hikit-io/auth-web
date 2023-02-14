import init, {Client} from "@hikit/auth-service";
import {inject, provide} from "vue";

const Service = Symbol()

const useServiceProvide = async (endpoint: string) => {
    await init()
    const cli = new Client(endpoint, "")
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