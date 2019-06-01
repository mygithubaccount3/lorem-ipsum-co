let app = new Vue({
    el: '#comment-form',
    data: {
        errors: [],
        comment: '',
        header: 'Write comment',
        title: '',
        sent: false
    },
    methods: {
        sendForm: function () {
            if (this.title && this.comment) {
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

                $.ajax(settings).done(function () {
                    app.sent = true;
                });
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
