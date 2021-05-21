import mutations from '@/store/mutations'

const {SET_PAGE} = mutations

const cntViews = {
    state: {
        links: {},
    },
    getters: {
        // prettier-ignore
        linkCnt: ({links}) => href => {
            if (links[href]) return links[href]
            else return 1
        },
    },
    mutations: {
        [SET_PAGE]({links}, href) {
            if (links[href]) links[href] += 1
            else this._vm.$set(links, href, 1)
        },
    },
}

export default cntViews
