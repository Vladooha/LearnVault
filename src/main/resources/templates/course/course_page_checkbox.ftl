<#import "course_macro.ftl" as m>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Untitled Document</title>
    <!-- Bootstrap -->
    <script src="../../static/scripts/jquery-3.2.1.min.js"></script>
    <script src="../../static/scripts/popper.min.js"></script>
    <script src="../../static/scripts/bootstrap-4.0.0.js"></script>
    <script src="../../static/scripts/course-pass.js"></script>
    <link href="../../static/css/bootstrap-4.0.0.css" rel="stylesheet">
    <link href="../../static/css/demo1.css" rel="stylesheet">
    <link href="../../static/css/index.css" rel="stylesheet">
    <link href="../../static/css/Page_of_courses.css" rel="stylesheet">

</head>
<body>
<!-- body code goes here -->
<div class="main-layer">
    <div class="paige_of_course_name" id="name_of_course">${course_name}</div>
    <@m.pagelist course_id, pages/>
    <div class="theory-panel">
        <div class="page_title" id="name_of_page">${title}</div>
        <textarea name="text_of_paige" cols="100" rows="7" id="textArea">${question}</textarea>
        <!--Список ответов-->
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div id="option_list">
                    <#assign ans_num = 0>
                    <#list answers as answer>
                        <div>
                            <label>
                                <input name="answer" type="checkbox" aria-label="placeholder text" id="caption"+${ans_num} value=${answer}>
                                ${answer}
                            </label>
                        </div>
                        <#assign ans_num += 1>
                    </#list>
                </div>
            </div>
        </div>
        <label id="answer_response"></label><br>
        <form action="" method="post">
            <button type="button" name="send" value="send" onclick="tryAnswer(${course_id}, ${page_num}, getAns(), 'answer_response')">Отправить</button>
        </form>
        <@m.scroll course_id, page_num/>
    </div>
</div>
</body>
<script>
    var count_options = 0;

    function addOption(answer) {
        //<div><label><input type="checkbox" aria-label="placeholder text" id="caption0"> {{Answer0}}</label></div>
        var container = document.getElementById("option_list");
        count_options++;
        var div = document.createElement("div");
        var label = document.createElement("label");
        var checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.checked = false;
        checkbox.id = "check" + count_options; //опционально

        label.appendChild(checkbox);
        label.innerHTML += answer;

        div.appendChild(label);
        container.appendChild(div);
    }

    //test
    //addOption("testAnswer1");

    function getAns() {
        var answer = "";

        $.each($("input[name='answer']:checked"), function(){
            answer += $(this).val() + "|}|{ona|";
        });

        return answer;
    }
</script>
</html>
