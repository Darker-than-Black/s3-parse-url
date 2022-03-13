export class RouterService {
    constructor(param) {
        this.param = param;
    }

    setQueryParam(data) {
        const url = new URL(location.href);
        url.searchParams.set(this.param, data);
        history.pushState(null, '', url);
    }

    getQueryParam() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const {[this.param]: url = ''} = Object.fromEntries(urlSearchParams.entries());
        return url;
    }
}