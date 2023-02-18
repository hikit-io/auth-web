import {useCookies} from "@vueuse/integrations/useCookies";

const useDebug = () => {
    const cookies = useCookies()
    cookies.set('HIKIT', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzcyMzY3OTgsIm9wZW5faWQiOiIxYWNiOGM3NzZiZDc0MDExOGI2ZmIyMGZiNDkxYTk5ZCJ9.0CjxpdQ8n0OokF1ANd6YtzuD2KKeC01LLszcKRQfxz4')
}

export {useDebug}