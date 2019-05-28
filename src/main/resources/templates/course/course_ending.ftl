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
						<div class="page_title" id="name_of_page" style="margin-top:180px;">${username}, поздравляем с завершением курса!</div>
						<div class="page_title" style="font-size:24px;color: rgba(25,24,112,1.00)">Вы набрали ${score} баллов из ${score_max} возможных!</div>
						<div class="page_title" style="font-size:24px;color: rgba(25,24,112,1.00)">Мы были бы очень рады, если бы вы оценили данный курс =)</div>
						<div>
							<button type="button" class="orangeButton" style="width: 200px; height: 40px; margin:10px auto;" name="forward" value="forward" class="next_back_btn" alt="Закончить" onclick="window.location.href='../profile'"/>Закончить тест</button>
							<#assign path="'/course/" + course_id + "/rate'">
							<button type="button" class="orangeButton" style="width: 200px; height: 40px; margin:10px auto;" name="forward" alt="Оценка" onclick="window.location.href=${path}"/>Оценить курс</button>
						</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</body>

