export default {
    namespaced: true,
    state: {
        breads: [
            {
                path: '',
                meta: {
                    title: ''
                }
            }
        ]
    },
    actions: {},
    mutations: {
        SET_BREADS(state, that) {
            const breads = that.$route.matched.filter((item) => {
                return item.meta.title;
            });
            console.log(breads);
            state.breads = breads
        },
        ADD_BREAD(state, value) {
            if (state.breads.length <= 2)
                state.breads.push(value)
            else {
                console.log(state.breads, value);
                state.breads[2] = value;
            }
        }
    }
}