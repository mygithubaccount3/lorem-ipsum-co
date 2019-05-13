;(($) => {
    $(document).on('click', '.item-close', function (e) {
        $(e.target).closest('.grid-item').css('display', 'none')
    });

    $(document).on('click', '.item-edit', function (e) {
        e.preventDefault();
        if($(e.target).next().attr('contenteditable')) {
            $(e.target).next().attr('contenteditable', false).css('border', 'none');
            $(e.target).next().next().attr('contenteditable', false).css('border', 'none');
        }
        else {
            $(e.target).next().attr('contenteditable', true).css('border', '1px solid #60e3a1', 'box-shadow', 'inset 3px 3px 28px 0px rgba(12,242,66,1)');
            $(e.target).next().next().attr('contenteditable', true).css('border', '1px solid #60e3a1', 'box-shadow', 'inset 3px 3px 28px 0px rgba(12,242,66,1)');
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
