<!doctype html>
<html>
<head>
<title>constructor</title>
<link href="../icon.png" rel="shortcut icon" type="image/x-icon">
<link href="../../static/css/course_designer.css" rel="stylesheet">
<link href="../../static/css/demo1.css" rel="stylesheet">
<link href="../../static/css/index.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="../../static/scripts/course-constr.js"></script>
<script src="../../static/scripts/constructor.js"></script>
</head>

<body>
<div class="main-layer">
	  <div class="my-header">Конструктор курсов</div>
			<div class="project-explorer-container">
				
	  		</div>
		
		 	<div class="constructor-panel">
					<form style="width: 860px;height: 770px; float:left; margin: 30px 0 0 40px">
						<div>
							<div>
							<div><h3 class="h3">Выберите категорию страницы курса:</h3></div>
							<div>	
								<select autofocus style="margin: 20px 0 20px 40px;width: 300px; height: 30px;" id = "category" required>
									<#list categories as category>
										<option value=${category.getNum()}>${category.getName()}</option>
									</#list>[

									<!--option>Наука о данных</option>
									<option>Бизнес</option>
									<option>Компьютерные науки</option>
									<option>Информационнае технологии</option>
									<option>Личное развитие</option>
									<option>Менеджмент</option-->
								</select>
							</div>
						</div>
						<div>
							<div><h3 class="h3">Выберите название для курса:</h3></div>
							<div><input type="text" size="70" id="course_name" autofocus autocomplete="on" style="height: 23px; margin: 20px 0 20px 40px;" required></div>
						</div>
						<div style="margin-top:40px;">
							<div><h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Введите теги для курса:</h4></div>
							<div style="margin-top:20px;">
								<div id="tags">
								  <input type="text" value="" placeholder="Добавьте тэг" autocomplete="on" id ='tag'/>
								</div>
							</div>
							<br>
						</div>
						<div style="margin-top:60px;">
							<div><h5 class="H5">Описание курса:</h5></div>
							<div><textarea id="description" required cols="100" rows="5" style="resize:none; margin: 20px 0 20px 40px;" id="textAnswer"></textarea></div>
						</div>
						<div style="margin-top:60px;">
							<div><h5 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Выберите тип курса:</h5></div>
							<div>
								<div style="margin:20px 0 20px 40px;">
									<label>
										<input type="radio" name="type-course" checked>
										<h5 class="h5" style="color:rgba(0,21,41,1.00); margin-left: 5px"; >Общедоступный курс</h5>
									</label>
								</div>
							</div>
							<div>
								<div style="margin:20px 0 20px 40px;">
									<label>									
										<input type="radio" id="isPrivate" name="type-course">
										<h5 class="h5" style="color:rgba(0,21,41,1.00); margin-left: 5px"; >Назначенный курс</h5>
									</label>
								</div>
							</div>
						</div>
						<div >
							<input class="orangeButton" type="button" value="Сохранить" style="display: block; margin: 80px auto; width: 200px; height: 40px;"
								   onclick="setCourse();sendCourse();">
						</div>
					</div>
					</form>
					
				</div>
			 <img src="../../static/images/miet.jpg" width="100" height="100"  style="float: right; margin: 0;"alt=""/>
	</div>
</body>
<script>
	localStorage.clear();

	var count_tags = 0;
	var max_tags = 11;

	$(function(){ // DOM ready

		// ::: TAGS BOX

		$("#tags input").on({
			focusout : function() {
				var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
				if(txt && max_tags > count_tags) $("<span/>", {text:txt.toLowerCase(), insertBefore:this});
				this.value = "";
				count_tags++;
			},
			keyup : function(ev) {
				// if: comma|enter (delimit more keyCodes with | pipe)
				if(/(188|13)/.test(ev.which)) $(this).focusout();
			}
		});
		var availableTags = ["php Script", "Супер Script JS", "asp Script", "Java" ]; //
		$("#tag").autocomplete({ //на какой input:text назначить результаты списка
			source: availableTags
		});
		$('#tags').on('click', 'span', function() {
			if(confirm("Remove "+ $(this).text() +"?")) $(this).remove();
			count_tags--;
		});

	});
</script>
<script>
	function setCourse() {
		//отправляем категорию курса
		localStorage.setItem('category', JSON.stringify($("#category option:selected").text()));

		//отправляем название курса
		localStorage.setItem('course_name', JSON.stringify(document.getElementById('course_name').value));

		//отправляем теги курса
		var div_tags = document.getElementById("tags");
		var list_spans = div_tags.getElementsByTagName('span');
		var list_tags = [];
		for (var i = 0; i < list_spans.length; i++) {
			list_tags.push(list_spans[i].innerHTML);
		}
		localStorage.setItem('list_tags', JSON.stringify(tags));

		//отправляем описание курса
		localStorage.setItem('description', JSON.stringify($('#description').val()));

		//отправляем тип курса
		if (document.getElementById("isPrivate").checked == true)
			localStorage.setItem('type_course', JSON.stringify(true));
		else
			localStorage.setItem('type_course', JSON.stringify(false));
	}
</script>
</html>

