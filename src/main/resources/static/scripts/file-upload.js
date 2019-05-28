function uploadFile(fileId) {
    var isAjaxDone = false;
    var result = undefined;

    var formData = new FormData();
    var file = $("#"+fileId)[0].files[0];

    formData.append("file", file);

    $.ajaxSetup({async: false});

    $.ajax({
        url: '/ajax/upload',
        data: formData,
        enctype: 'multipart/form-data',
        cache: false,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            isAjaxDone = true;
            result = data;
        },
        error: function (a, b) {
            isAjaxDone = true;
            result = null;
        }
    });

    $.ajaxSetup({async: true});

    console.log(result);

    return result;
}