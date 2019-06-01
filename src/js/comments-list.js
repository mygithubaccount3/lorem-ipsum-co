Vue.component('comment', {
    props: ['title', 'body', 'id'],
    template: "<div class='grid-item hvr-bounce-in'>" +
        "<p class='item-title'>{{ title }}</p>" +
        "<p class='item-comment'>{{ body }}</p>" +
        "<a href='comment.html' class='item-link hvr-glow' @click='get'>" + "Read more" + "</a>" +
        "<span style='display:none'>{{ id }}</span>" +
        "</div>",
    methods: {
        get(e) {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.title = $(e.target).prev().prev().text();
                sessionStorage.comment = $(e.target).prev().text();
                sessionStorage.id = $(e.target).next().text();
            }
            else $('.comment__title').append('Your browser does not support storage')
        }
    }
});

const vm = new Vue({
    el: '.comments-list__list'
});

const store = new Vuex.Store({
    state: [],
    mutations: {
        add (state, payload) {
            state.push(payload)
        }
    }
});

let settings = {
    "url": "https://5cbef81d06a6810014c66193.mockapi.io/api/comments",
    "method": "GET",
    "timeout": 0,
    "beforeSend": function () {
        $('<div class="comments-list__loader"><i class="fa fa-cog" aria-hidden="true"></i></div>').insertAfter('.grid')
    },
    "complete": function () {
        $('.comments-list__loader').remove()
    }
};

$.ajax(settings).done(function (response) {
    $(document).ready(() => {
        if (!$.trim(response)){
            $("<p class='comments-list__conclusion' style='text-align: center'>Nothing to show</p>").insertAfter(".grid");
        }
        else{
            store.commit('add', response);
            let componentsToRender = '<div class="comments-list__list grid">';
            store.state[0].forEach((e, i, a) => {
                componentsToRender += `<comment title='${e.title}' body='${e.body}' id='${e.id}'></comment>`;
            });

            componentsToRender += '</div>';

            const res = Vue.compile(componentsToRender);
            new Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
            }).$mount('.grid')
        }

        $('.grid').masonry({
            itemSelector: '.grid-item',
            gutter: 45
        });
    });
});
