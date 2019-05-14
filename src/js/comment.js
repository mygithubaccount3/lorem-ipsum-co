;(($) => {
    $(document).on('click', '.item-close', function (e) {
        $(e.target).closest('.grid-item').css('display', 'none')
    });

    $(document).on('click', '.item-edit', function (e) {
        e.preventDefault();
        if($(e.target).next().attr('contenteditable')) {
            $(e.target).next().removeAttr('contenteditable').css('box-shadow', 'none');
            $(e.target).next().next().removeAttr('contenteditable').css('box-shadow', 'none');
        }
        else {
            $(e.target).next().attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
            $(e.target).next().next().attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
        }

    });

    $(document).on('click', '.item-link', function (e) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.title = $(e.target).prev().prev().text();
            sessionStorage.comment = $(e.target).prev().text();
        }
        else $('.comment-title').append('Your browser does not support storage')
    });
}) (jQuery);
