;(($) => {
    $(document).on('click', '.comment-delete', function (e) {
        e.preventDefault();
        $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
            {
                "method": "DELETE",
                "timeout": 0,
                "beforeSend": function () {
                    $('<div class="comments-loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                        'background-color: white; opacity: 0.8; padding-top: 100px">' +
                        '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertAfter('.comment-save')
                },
                "complete": function () {
                    $('.comments-loader').replaceWith('<div class="comments-loader" style="position: absolute; top: 0; ' +
                        'right: 0; bottom: 0; left: 0; background-color: white; opacity: 0.8; padding-top: 100px">' +
                        '<i class="fa fa-check" aria-hidden="true" style="animation: none; color: #60e3a1"></i></div>');
                }
            }).done(function () {
                setTimeout(() => {
                    window.location.href = 'all-comments.html'
                }, 3000);
        });
    });

    $(document).on('click', '.comment-edit', function (e) {
        e.preventDefault();
        $(e.target).nextAll('.comment-title, .comment-text').attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
        $(e.target).attr('disabled', true);
        $(e.target).next().removeAttr('disabled');
    });

    $(document).on('click', '.comment-save', function (e) {
        e.preventDefault();
        $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
            {
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": "{\n    \"created_at\": " + Date.now() + ",\n    \"title\": " + "\"" +
                         $(e.target).nextAll('.comment-title').text() + "\"" + ",\n    \"body\": " + "\"" +
                         $(e.target).nextAll('.comment-text').text() + "\"" + "\n}",
                "beforeSend": function () {
                    $(e.target).nextAll('.comment-title, .comment-text').removeAttr('contenteditable').css('box-shadow', 'none');
                    $('<div class="comments-loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                                                          'background-color: white; opacity: 0.8; padding-top: 100px">' +
                                                          '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertAfter('.comment-save')
                },
                "complete": function () {
                    $('.comments-loader').remove();
                    $(e.target).attr('disabled', true);
                    $(e.target).prev().removeAttr('disabled');
                    sessionStorage.title = $(e.target).next().text();
                    sessionStorage.comment = $(e.target).nextAll('.comment-text').text();
                }
            })
    });

    $(document).on('click', '.item-link', function (e) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.title = $(e.target).prev().prev().text();
            sessionStorage.comment = $(e.target).prev().text();
            sessionStorage.id = $(e.target).next().val();
        }
        else $('.comment-title').append('Your browser does not support storage')
    });
}) (jQuery);
