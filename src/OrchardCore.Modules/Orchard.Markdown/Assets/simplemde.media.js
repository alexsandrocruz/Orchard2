(function ($) {
    'use strict';

    $(document).on('simplemde:initialize', function (event, simplemde) {
        // Replace the image button action.
        simplemde.toolbar[9].action = function (editor) {
            console.log('custom drawImage');
            var modal = $('#mediaModalMarkdown').modal();
            $('#mediaSelectButton').on('click', function (v) {
                var cm = editor.codemirror;
                cm.replaceSelection('{{ "' + mediaApp.selectedMedia.mediaPath + '" | media_url | img_tag }}')
                $('#mediaModalMarkdown').modal('hide');
            });
        };
    });
})(jQuery);