;(($) => {
    $(document).on('click', '.item-close', function (e) {
        e.preventDefault();
        $(e.target).closest('.grid-item').css('display', 'none')
    });

    $(document).on('click', '.item-edit', function (e) {
        e.preventDefault();
        $(e.target).nextAll('p').attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
        $(e.target).attr('disabled', true);
        $(e.target).next().removeAttr('disabled');
    });

    $(document).on('click', '.item-save', function (e) {
        e.preventDefault();
        $(e.target).nextAll('p').removeAttr('contenteditable').css('box-shadow', 'none');
        $(e.target).attr('disabled', true);
        $(e.target).prev().removeAttr('disabled');
    });

    $(document).on('click', '.item-link', function (e) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.title = $(e.target).prev().prev().text();
            sessionStorage.comment = $(e.target).prev().text();
        }
        else $('.comment-title').append('Your browser does not support storage')
    });
}) (jQuery);
