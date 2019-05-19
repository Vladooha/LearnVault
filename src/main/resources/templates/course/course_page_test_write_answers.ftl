<#import "macro/course_macro.ftl" as m>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Untitled Document</title>
    <script src="../../static/scripts/libs/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../../static/scripts/libs/jquery-3.2.1.min.js"></script>
    <script src="../../static/scripts/libs/popper.min.js"></script>
    <script src="../../static/scripts/libs/bootstrap-4.0.0.js"></script>
    <script src="../../static/scripts/course-pass.js"></script>
    <link href="../../static/css/bootstrap-4.0.0.css" rel="stylesheet">
    <link href="../../static/css/demo1.css" rel="stylesheet">
    <link href="../../static/css/index.css" rel="stylesheet">
    <link href="../../static/css/Page_of_courses.css" rel="stylesheet">
</head>
<body>
	<div id="LayerBody" >
		<div id="LayerBody_Container">
			<div id="LayerMain">
				<!-- body code goes here -->
					<div class="main-layer">
					<div class="paige_of_course_name" id="name_of_course">${course_name}</div>
					<@m.pagelist course_id, pages/>
					<div class="theory-panel" id="th_panel">
						<div class="page_title" id="name_of_page">${title}</div>
						<#if time??>
							<@m.timer time/>
						</#if>
						<div><textarea name="text_of_paige" cols="100" rows="7" id="textArea" readonly
									   style="resize:none;overflow-y: auto; border-style:none; margin: 20px 50px; width:800px;" class="style_input">${question}</textarea></div>
						<div>
                            <form action="" method="post">
                                <input type="text" placeholder="введите ответ" id="answer_area" style="margin: 20px 50px; width:800px;" default class="style_input">
                                <div style="text-align:center;">
                                    <label id="answer_response" style="font-size:16px; font-family: "Exo 2";"></label>
                                </div>
                                <div>
                                    <button type="button" class="orangeButton" style="width: 200px; height: 40px; margin:10px auto;" name="send" value="send" onclick="tryAnswer(${course_id}, ${page_num}, getAns(), 'answer_response');">Ответить</button>
                                </div>
                            </form>
                        <@m.scroll course_id, page_num/>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script>
    var height = $( '#th_panel' ).height(); //получаем высоту одного элемента
    $( '#project_column' ).height(height); //записываем высоту другому элементу

    function getAns() {
        return document.getElementById("answer_area").value;
    }
</script>
</html>
