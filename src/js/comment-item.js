;(($) => {
    Vue.component('comment', {
        data: function () {
            return {
                title: store.state[0].title,
                text: store.state[0].comment
            }
        },
        template: "<div><a href='comments-list.html' class='comment__link hvr-icon-back'>" +
                    "<i class='fa fa-arrow-left hvr-icon' aria-hidden='true'></i>" +
                        "Back to Comments" +
                  "</a>" +
                  "<div class='comment__btn-wrapper'>" +
                    "<button class='comment__delete' @click.preventDefault='remove'></button>" +
                    "<button class='comment__edit' @click.preventDefault='edit'></button>" +
                    "<button class='comment__save' disabled @click.preventDefault='save'></button>" +
                  "</div>" +
                  "<h1 class='comment__title'>{{ title }}</h1>" +
                  "<p class='comment__text'>{{ text }}</p>" +
                  "<p class='comment__conclusion'>Lorem Ipsum is text of the typesetting industry</p>" +
                  "<a href='index.html' class='comment__link hvr-icon-back'>" +
                    "<i class='fa fa-arrow-left hvr-icon' aria-hidden='true'></i>" +
                        "Back to Homepage" +
                  "</a></div>",
        methods: {
            edit(e) {
                $(e.target).parent().nextAll('.comment__title, .comment__text').attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
                $(e.target).attr('disabled', true);
                $(e.target).next().removeAttr('disabled');
            },
            save(e) {
                $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
                    {
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        "data": "{\n    \"created_at\": " + Date.now() + ",\n    \"title\": " + "\"" +
                            $(e.target).parent().nextAll('.comment__title').text() + "\"" + ",\n    \"body\": " + "\"" +
                            $(e.target).parent().nextAll('.comment__text').text() + "\"" + "\n}",
                        "beforeSend": function () {
                            $(e.target).parent().nextAll('.comment__title, .comment__text').removeAttr('contenteditable').css('box-shadow', 'none');
                            $('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                                'background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore('.comment__link')
                        },
                        "complete": function () {
                            $('.comments-list__loader').remove();
                            $(e.target).attr('disabled', true);
                            $(e.target).prev().removeAttr('disabled');
                            sessionStorage.title = $(e.target).parent().next().text();
                            sessionStorage.comment = $(e.target).parent().nextAll('.comment__text').text();
                            store.commit('update', {title: sessionStorage.title, comment: sessionStorage.comment});
                        }
                    })
            },
            remove() {
                $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
                    {
                        "method": "DELETE",
                        "timeout": 0,
                        "beforeSend": function () {
                            $('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                                'background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore('.comment__link')
                        },
                        "complete": function () {
                            $('.comments-list__loader').replaceWith('<div class="comments-list__loader" style="position: absolute; top: 0; ' +
                                'right: 0; bottom: 0; left: 0; background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-check" aria-hidden="true" style="animation: none; color: #60e3a1"></i></div>');
                        }
                    }).done(function () {
                    setTimeout(() => {
                        window.location.href = 'comments-list.html'
                    }, 3000);
                });
            }
        }
    });

    const store = new Vuex.Store({
        state: [],
        mutations: {
            add (state, payload) {
                state.push(payload)
            },
            update (state, payload) {
                state[0] = {title: payload.title, comment: payload.comment}
            }
        }
    });

    store.commit('add', {title: sessionStorage.title, comment: sessionStorage.comment});

    const vm = new Vue({
        el: '.comment'
    });
}) (jQuery);
