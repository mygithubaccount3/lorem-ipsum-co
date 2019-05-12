;(($) => {
    $('.btn').click((e) => {
        e.preventDefault();
        e.stopPropagation();
        const title = $('input').val();
        const comment = $('textarea').val();
        const time = Date.now();
        const settings = {
            "url": "https://5cbef81d06a6810014c66193.mockapi.io/api/comments",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": "{\n    \"created_at\": " + time + ",\n    \"title\": " + "\"" + title + "\"" + ",\n    \"body\": " + "\"" + comment + "\"" + "\n}",
        };

        $.ajax(settings);
    });

    $(document).on('click', '.item-close', function (e) {
        $(e.target).closest('.grid-item').css('display', 'none')
    });

    $(document).on('click', '.item-edit', function (e) {
        e.preventDefault();
        if($(e.target).next().attr('contenteditable')) {
            $(e.target).next().attr('contenteditable', false).css('border', '1px solid #60e3a1');
            $(e.target).next().next().attr('contenteditable', false).css('border', '1px solid #60e3a1');
        }
        else {
            $(e.target).next().attr('contenteditable', true).css('border', 'none');
            $(e.target).next().next().attr('contenteditable', true).css('border', 'none');
        }

    });

    $(document).on('click', '.item-link', function (e) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.title = $(e.target).prev().prev().val();
            sessionStorage.comment = $(e.target).prev().val();
        }
    });

    let app = new Vue({
        el: '#comment',
        data: {
            errors: [],
            comment: "",
            header: 'Write comment',
            title: ""
        },
        methods: {
            checkForm: function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (this.title && this.comment) {
                    return true;
                }

                this.errors = [];

                if (!this.title) {
                    this.errors.push('Enter title');
                }
                if (!this.comment) {
                    this.errors.push('Enter comment');
                }
            }
        }
    });
}) (jQuery);