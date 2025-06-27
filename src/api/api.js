import axios from 'axios';

export default {
    siteinfo: async () => {
        const res = await axios.get('/db/siteinfo.json');
        return res;
    },

    page: async (id) => {
        const res = await axios.get('/db/pages.json');
        return {
            ...res,
            data: res.data.find((page) => page.id === id),
        };
    },
};
