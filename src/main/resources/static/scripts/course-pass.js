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

function tryAnswer(course_id, page_num, ans, response_element) {
    var response = sendAnswer(course_id, page_num, ans);

    var messageBox = document.getElementById(response_element);

    if (response == "BAD") {
        messageBox.textContent = "Вы ответили неправильно! Попытайтесь ещё раз.";
        messageBox.style.color = "red";
    } else if (response == "OK") {
        messageBox.textContent = "Правильно!";
        messageBox.style.color = "green";
    }
}