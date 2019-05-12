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
<style>
	.onoffswitch {
    		position: relative; width: 173px;
    		-webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
    	}
    	.onoffswitch-checkbox {
    		display: none;
    	}
    	.onoffswitch-label {
    		display: block; overflow: hidden; cursor: pointer;
    		border: 2px solid #999999; border-radius: 20px;
    	}
    	.onoffswitch-inner {
    		display: block; width: 200%; margin-left: -100%;
    		transition: margin 0.3s ease-in 0s;
    	}
    	.onoffswitch-inner:before, .onoffswitch-inner:after {
    		display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;
    		font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    		box-sizing: border-box;
    	}
    	.onoffswitch-inner:before {
    		content: "ОГРАНИЧЕНО";
    		padding-left: 10px;
    		background-color: rgb(12,90,166); color: #FFFFFF;
    	}
    	.onoffswitch-inner:after {
    		content: "НЕОГРАНИЧЕНО";
    		padding-right: 10px;
    		background-color: #EEEEEE; color: #999999;
    		text-align: right;
    	}
    	.onoffswitch-switch {
    		display: block; width: 21px; margin: 4.5px;
    		background: #FFFFFF;
    		position: absolute; top: 0; bottom: 0;
    		right: 139px;
    		border: 2px solid #999999; border-radius: 20px;
    		transition: all 0.3s ease-in 0s;
    	}
    	.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    		margin-left: 0;
    	}
    	.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    		right: 0px;
    	}
</style>
<body>
<div class="main-layer">
	<div class="my-header">Конструктор курсов</div>
	<div class="project-explorer-container">

	</div>

	<div class="constructor-panel">
		<form style="width: 860px;height: 770px; float:left; margin: 30px 0 0 40px">
			<div>
				<div>
					<div><h3 class="h3">Категорию страницы курса:</h3></div>
					<div>
						<select autofocus style="margin: 20px 0 20px 40px;width: 300px; height: 30px;" id = "category" required>
							<#list categories as category>
							<option value=${category.getNum()}>${category.getName()}</option>
							</#list>[
						</select>
					</div>
				</div>
				<div>
					<div><h3 class="h3">Название курса:</h3></div>
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
				<div style="margin-top:10px;">
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
								<input type="radio" id="isPrivate" name="type-course" <#if !isTeacher>disabled="true"</#if>>
								<h5 class="h5"
								<#if isTeacher>
									style="color:rgba(0,21,41,1.00); margin-left: 5px;"
								<#else>
									style="color:rgba(0,21,41,0.50); margin-left: 5px;"
								</#if>>
									Курс только для учебной группы (доступно учителям)
								</h5>
							</label>
						</div>
					</div>
				</div>
				<div>
					<div><h5 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Ограничение по времени:</h5></div>
					<div class="onoffswitch" style="margin-top:20px;float:left; width:175px;">
						<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" onChange="switchTime()">
						<label class="onoffswitch-label" for="myonoffswitch">
							<span class="onoffswitch-inner"></span>
							<span class="onoffswitch-switch"></span>
						</label>
					</div>
					<div style="margin:25px 0 0 40px;float:left; width:600px;"><input type="time" name="selected_time" list="time-list" value="00:30" id="timebox" style="visibility:hidden;"></p>
						<datalist id="time-list">
							<option value="00:05" label="5 минут">
							<option value="00:10" label="10 минут">
							<option value="00:15" label="15 минут">
							<option value="00:20" label="20 минут">
							<option value="00:25" label="25 минут">
							<option value="00:30" label="30 минут">
							<option value="00:40" label="40 минут">
							<option value="01:00" label="1 час">
							<option value="01:30" label="полтора часа">
							<option value="02:00" label="2 часа">
						</datalist>
					</div>
				</div>
				<div >
					<input class="orangeButton" type="button" value="Далее" style="display: block; margin: 100px auto; width: 200px; height: 40px;"
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

		//отправляем время, ограничивающее курс (если не огр - 0)
		if ($('#myonoffswitch').is(':checked')){
			var buf_time = $('#timebox').val().split(':',2);
			for(var i = 0; i < 2; i++){
				if (buf_time[i].substring(0, 1) == '0')
					buf_time[i] = buf_time[i].substring(1, 2);
			}
			var time = buf_time[0]*36*Math.pow(10,5) + buf_time[1]*6*Math.pow(10,4);
			localStorage.setItem('time', JSON.stringify(time));
		}
		else{
			localStorage.setItem('time', JSON.stringify("0"));
		}

		//отправляем тип курса
		if (document.getElementById("isPrivate").checked == true)
			localStorage.setItem('type_course', JSON.stringify(true));
		else
			localStorage.setItem('type_course', JSON.stringify(false));
	}
</script>
<script>
	function switchTime(){
		if ($('#myonoffswitch').is(':checked')){
			document.getElementById("timebox").style.visibility = "visible";
		} else {
			document.getElementById("timebox").style.visibility = "hidden";
		}
		//var time = document.getElementById("timebox").value;
		//alert(time);
	}
</script>
</html>