function goToPage(course_id, page_num) {
    window.location.href = course_id +"?page_num=" + page_num;
}

function sendAnswer(course_id, page_num, ans) {
    var result = "";

    $.ajax({
        url: "../ajax/course_check_result/",
        async: false,
        data: ({
            course_id: course_id,
            page_num: page_num,
            ans: ans
        }),
        success: function (data) {
            result = data;
        }
    })

    return result;
}