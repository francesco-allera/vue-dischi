new Vue({
    el: '#app',
    data: {
        api: 'https://flynn.boolean.careers/exercises/api/array/music',
        disks: [],
        genres: [],
        selected: 'all'
    },
    mounted() {
        const self = this;

        axios.get(this.api).then(function(resp) {
            self.disks = resp.data.response;

            self.disks.forEach(el => {
                if (!self.genres.includes(el.genre))
                    self.genres.push(el.genre);
            });
        });
    },
    methods: {
        check(el) {
            if (this.selected === 'all' || this.selected === el.genre)
                return true;
            else
                return false;
        }
    }
});
Vue.config.devtools = true;