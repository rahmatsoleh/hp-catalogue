import CONFIG from "./config";

const API_ENDPOINT = {
    PHONE_SPEC : (slug) =>`${CONFIG.BASE_URL}/v2/${slug}`,
    SEARCH: (query) => `${CONFIG.BASE_URL}/v2/search?query=${query}`,
    LATEST: `${CONFIG.BASE_URL}/v2/latest`,
    INTEREST: `${CONFIG.BASE_URL}/v2/top-by-interest`,
    FANS: `${CONFIG.BASE_URL}/v2/top-by-fans`
}

export default API_ENDPOINT;