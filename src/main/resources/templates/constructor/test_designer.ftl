<!doctype html>
<html>
<head>
	<title>constructor</title>
	<link href="../../images/icon.png" rel="shortcut icon" type="image/x-icon">
	<link href="../../static/css/course_designer.css" rel="stylesheet">
	<link href="../../static/css/demo1.css" rel="stylesheet">
	<link href="../../static/css/index.css" rel="stylesheet">
	<script src="../../static/scripts/course-constr.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</head>
<body>
<div class="main-layer">
	<div class="my-header">Конструктор курсов</div>
	<div class="project-explorer-container">
		<div class="project-explorer" style="margin: 30px 10px 0 10px">
			<div><h3 class="h3" id="course_name">Название курса</h3></div>
			<div><h5 class="h5" id="type_course">Название курса</h5></div>
			<div class="pages-list">
				<ul id="list-pages" style="padding: 0;">
				</ul>
			</div>
			<div id="wb_CssMenu1">
				<ul role="menubar">
					<li class="firstmain"  style="width: 136px;">
						<a role="menuitem" class="withsubmenu" href="#" target="_self">Создать</a>
						<ul role="menu">
							<li class="firstitem">
								<a role="menuitem" href="#" target="_self" onclick="addTextPage()">Страницу теории</a>
							</li>
							<li>
								<a role="menuitem" href="#" target="_self" onclick="addTestPage()">Страницу тестов</a>
							</li>
						</ul>
					</li>
					<li  style="width: 136px;">
						<a role="menuitem" class="withsubmenu" href="#" target="_self" onClick="sorry()">Удалить</a>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<input class="orangeButton" type="button" value="Сохранить курс" style="display: block; margin: 220px auto 0 auto;width: 220px; height: 40px;"
				   onClick="saveCourse()">
		</div>
	</div>

	<div class="constructor-panel">
		<form style="width: 860px;height: 850px; float:left; margin: 30px 0 0 40px">
			<div style="margin-bottom: 15px;"><h3 class="h3">Заголовок теста:</h3></div>
			<div><input type="text" size="70" autofocus autocomplete="on" style="height: 25px;" value="Тест" id="header-page" oninput="change()"></div>
			<div style="margin: 30px 0 15px 0;">
				<div style="width: 400px; float:left;">
					<div><h3 class="h3">Выберите тип тестовой страницы:</h3></div>
					<div style="margin: 15px 0 15px 0;">
						<select autofocus style="width: 400px; height: 30px;" onchange="OnSelectionChange (this)" oninput="change()" id="select_some_type">
							<option value="1">Тест с текстовым ответом</option>
							<option>Тест с одним вариантом выбора</option>
							<option>Тест с несколькими вариантами выбора</option>
						</select>
					</div>
				</div>
				<div style="width: 380px; float:left; margin-left: 80px;">
					<div><h3 class="h3">Количество баллов за тест:</h3></div>
					<div style="margin: 15px 0 15px 0; margin-left:200px;">
						<input type="number" height="30" id="points" required style="height: 24px; width:70px;" value="1" min="1" max="100">
					</div>
				</div>
			</div>

			<div id="container">
				<div style="margin: 30px 0 15px 0;"><h3 class="h3">Введите вопрос:</h3></div>
				<textarea name="comment" cols="100" rows="5" style="resize:none;" id="textAnswer"></textarea>
				<div id="question" oninput="change()">
					<h3 class="h3">Введите варианты ответа:</h3>
					<div id="options">
						<div id="option1"><input id="input1" type="text" size="80" style="margin-top: 20px;"></div>
					</div>
					<button type="button" id="add">Добавить</button>
				</div>

			</div>
			<div>
				<input id="btn_save_page" class="orangeButton" type="button" value="Сохранить страницу" style="display: block; margin: 100px auto 0 auto; width: 300px; height: 40px;" onClick="savePage()">
			</div>
		</form>

	</div>
</div>
</body>
<script>
	var count_options = 1;
	var max_options = 10;



	var flag_open = start_init();
	// получаем текущий pageId
	var current_page = getLocalKey('current_page');
	//получаем количество тестовых страниц
	var count_test_pages = getLocalKey('count_test_pages');
	//получаем листы данных страниц
	var list_pageId = getLocalList('list_pageId');
	var list_types = getLocalList('list_types');
	var list_title = getLocalList('list_title');
	var list_text = getLocalList('list_text');

	var list_answer = getLocalList('list_answer');
	var list_types_test = getLocalList('list_types_test');
	var list_right_answer = getLocalList('list_right_answer');
	var list_points = getLocalList('list_points');
	if (list_pageId !== []){
		//добавляем в обозреватель листов страницы, уже созданные ранее
		for (var i = 0; i < list_pageId.length; i++){
			getListTitles(list_pageId[i], list_pageId, list_title);
		}
	}
	addTestPage();
	function addTestPage(){
		//setLocalLists(list_pageId, list_types, list_title, list_text);
		flag_open = getLocalBool('flag_open');
		current_page = getCurrentPage();
		console.log("flag_open:"+flag_open);
		count_test_pages++;
		//удаляем у всех подсветку текущей страницы
		popCurrentClass(list_pageId);

		//если мы открываем ранее созданную страницу
		if (flag_open){
			var index = indexOf(list_pageId, current_page);
			var index_test = indexOfTest(list_pageId, current_page);
			var type_of_test = list_types_test[index_test];
			//alert(type_of_test);
			document.getElementById(current_page).classList.add("currentPage");
			document.getElementById("header-page").value = list_title[index];
			document.getElementById('textAnswer').value = list_text[index];
			document.getElementById("points").value = list_points[index_test];

			var container = document.getElementById('container');
			var question_div = document.createElement('div');
			question_div.id = 'question';
			deleteDiv('question');
			count_options = 0;
			switch(type_of_test){
				case "radio":
					//alert('switch to radio');
					setTest(question_div, container, false, "successEditbox", "errorEditbox");
					var buf_list_answer = list_answer[index_test].split("|}|{ona|");
					//alert(buf_list_answer);
					for(var i = 0; i < buf_list_answer.length; i++){
						if(i > 1){
							var input_div = document.getElementById("options");
							addInputBlock(input_div, "errorEditbox", false);
						}

						var option;
						if(i == 0)
							option = document.getElementById("succes-input");
						else
							option = document.getElementById("input"+(i+1));
						option.value = buf_list_answer[i];
					}
					break;

				case "checkbox":
					//alert('switch to checkbox');
					setTest(question_div, container, true);
					var buf_list_answer = list_answer[index_test].split("|}|{ona|");
					//alert(buf_list_answer);
					for(var i = 0; i < buf_list_answer.length; i++){
						if(i > 1){
							var input_div = document.getElementById("options");
							addInputBlock(input_div, undefined, true);
						}
						for(var j = 0; j < list_right_answer[index_test].length; j++){
							//alert(list_right_answer[index_test][j]);
							if (list_right_answer[index_test][j] == i+1){
								document.getElementById("check"+(i+1)).checked = true;
								break;
							}
							else
								document.getElementById("check"+(i+1)).checked = false;
						}
						var option = document.getElementById("input"+(i+1));
						option.value = buf_list_answer[i];
					}
					break;
				case "text":
					setTest(question_div, container, false);
					var buf_list_answer = list_answer[index_test].split("|}|{ona|");
					//alert(buf_list_answer);
					for(var i = 0; i < buf_list_answer.length; i++){
						if(i > 0){
							var input_div = document.getElementById("options");
							addInputBlock(input_div, undefined, false);
						}
						var option = document.getElementById("input"+(i+1));
						option.value = buf_list_answer[i];
					}
					break;

			}
			localStorage.setItem('flag_open', JSON.stringify(false));
		}
		else{
			if(count_test_pages > 1 && !(/text.+/.test(current_page))){
				savePage();
				document.getElementById("btn_save_page").disabled = false;
			}
			$("#select_some_type").val(1);
			//контейнер, в котором все страницы
			var list_pages = document.getElementById('list-pages');
			//создаем новую страницу
			var new_page = document.createElement('li');
			new_page.innerHTML = "Тест";
			new_page.classList.add("pages");
			new_page.classList.add("currentPage");
			new_page.id = "test"+count_test_pages;
			new_page.onclick = function(){
				savePage();
				clickCurrentPage(new_page.id);
			}

			list_pageId.push(new_page.id);
			list_types.push("test");
			list_title.push(new_page.innerHTML);
			list_text.push("");

			list_answer.push("");
			list_types_test.push("text");
			list_right_answer.push("");
			list_points.push(1);
			current_page = new_page.id;
			if (count_test_pages > 1){
				new_page.innerHTML +=" " + (count_test_pages-1);
				document.getElementById("header-page").value = "Тест "+(count_test_pages-1);
			}

			document.getElementById('textAnswer').value = "";

			list_pages.appendChild(new_page);
			$('#list-pages').sortable({
				change: function( event, ui ) {
					//здесь надо повесить запоминание порядка при перетягивании
				}
			});
			localStorage.setItem('current_page', JSON.stringify(current_page));
			localStorage.setItem('count_test_pages', JSON.stringify(count_test_pages));

			var textArea = document.getElementById('textAnswer');
			textArea.value = "";
			var container = document.getElementById('container');
			var question_div = document.createElement('div');
			question_div.id = 'question';
			deleteDiv('question');
			count_options = 0;
			setTest(question_div, container, false);
		}
	}
	function addTextPage(){
		savePage();
		localStorage.setItem('count_test_pages', JSON.stringify(count_test_pages));
		window.location.href='/constructor/text_designer';
	}
	function savePage(){
		//alert("save page test!");
		var type_test = "";
		current_page = getCurrentPage();
		console.log("current_page(save):"+current_page); //debug

		//buffers
		var index = indexOf(list_pageId,current_page);
		console.log("index(save):"+index); //debug
		var title = document.getElementById('header-page').value;
		var text =  document.getElementById('textAnswer').value;
		//внесение изменений
		list_title[index] = title;
		console.log("title(save):"+title); //debug

		var title_expl = document.getElementById(current_page);
		title_expl.innerHTML = title;

		list_text[index] = text;
		console.log("text(save):"+text); //debug
		var page = document.getElementById(current_page);
		/*page.onclick = function(){
				savePage();
				clickCurrentPage(page.id);
			}*/
		document.getElementById("btn_save_page").disabled = true;
		//--------------------------получение ответов--------------------------------
		var answer = "";
		var succ_ans = "";
		if ($("#succes-input").length){
			type_test = "radio";
			succ_ans += 1;
			answer += document.getElementById("succes-input").value
			for (var i = 1; i < 10; i++){
				if($("#input"+i).length){
					var input = document.getElementById("input"+i).value;
					if(input !== ""){
						answer += "|}|{ona|";
						answer += input;
					}
				}
			}
		}
		else{
			for (var i = 1; i < 10; i++){
				var check = true;
				if($("#input"+i).length){
					if ($("#check1").length){
						type_test = "checkbox";
						if (document.getElementById("check"+i).checked)
							check = true;
						else
							check = false;
					}
					else{
						type_test = "text";
					}
					var input = document.getElementById("input"+i).value;
					if(input !== ""){
						if (check === true){
							succ_ans += i;
						}
						if (i !== 1)
							answer += "|}|{ona|";
						answer += input;
					}
				}
			}
		}
		//----------------------------------------------------------
		console.log("answer", answer); //debug
		console.log("succ_ans", succ_ans); //debug
		var index_test = indexOfTest(list_pageId,current_page);
		list_answer[index_test] = answer;
		list_right_answer[index_test] = succ_ans;
		list_types_test[index_test] = type_test;

		var points = document.getElementById("points").value;
		console.log("points", points); //debug
		list_points[index_test] = points;

		setLocalLists(list_pageId,list_types, list_title, list_text); // сохранение изменений
		setLocalListsTest(list_answer,list_right_answer, list_points, list_types_test);
	}
	function saveCourse() {
		savePage();
		sendCourseStruct();
		swal({
			title: "Хорошая работа!",
			text: "Курс сохраняется...",
			icon: "success"
		}).then((value) => {
                window.location.href='/index';
			}
		);
	}
	//-----------------------------------------------------------------------------------------
	/*var btn_add = document.getElementById('add');
	btn_add.type = 'button';
	btn_add.onclick = function(){
		if(count_options < max_options){
			var input_div = document.getElementById('options');
			addInputBlock(input_div, undefined, false);
		}
	}*/
	function setTest(container, parent, check, style_success = undefined, style_error = undefined){
		var question_div = document.createElement('div');
		question_div.style.margin ='30px 0 15px 0';
		//добавление заголовка  "Выберите варианты ответа:"
		var text_options = document.createElement('h3');
		text_options.innerHTML = "Введите варианты ответа:";
		text_options.classList.add("h3");
		question_div.appendChild(text_options);
		var input_div = document.createElement('div');
		input_div.id = 'options';
		if ((style_success !== undefined && style_error !== undefined) || check)
			addInputBlock(input_div, style_success, check ? true : false);
		addInputBlock(input_div, style_error, check ? true : false);
		question_div.appendChild(input_div);
		var add_div = document.createElement('div');
		var add_input = document.createElement('button');
		add_input.type = "button";
		add_input.innerHTML = "Добавить";
		add_input.onclick = function() {
			addInputBlock(input_div, style_error, check ? true : false);
		};
		add_div.appendChild(add_input);

		container.appendChild(question_div);
		container.appendChild(add_div);

		parent.appendChild(container);
	}
	//функция добавляет строку чекбокс, инпут текст и кнопку удалить вариант
	function addInputBlock(parent, style_class = undefined, check=false){
		//создаем контейнер для всего этого
		var input_div = document.createElement('div');
		count_options++;
		input_div.id = 'option' + count_options;
		//создаем чекбокс
		if (check){
			style_class = "successEditbox";
			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.checked = true;
			checkbox.id = "check" + count_options;
			input_div.appendChild(checkbox);
		}
		//создаем инпут текст
		var input = document.createElement('input');
		if (style_class == "successEditbox" && !check)
			input.id = "succes-input";
		else
			input.id = "input" + count_options;
		input.type = "text";
		input.size = "80";
		input.style.marginTop = "20px";
		if (style_class !== undefined && !check)
			input.classList.add(style_class);
		input_div.appendChild(input);
		//создаем кнопку удалить
		var flag_count_delete = 2;
		if (style_class === undefined)
			flag_count_delete = 1;
		if (count_options > flag_count_delete){
			var delete_input = document.createElement('button');
			delete_input.innerHTML = "Удалить";
			delete_input.onclick = function(){
				$('#'+input_div.id).remove();
				count_options--;
			};
			input_div.appendChild(delete_input);
		}
		//добавляем нашу линию ответа в родителя
		parent.appendChild(input_div);
	}
	function addOnClick(input_div, check){
		var input = document.getElementById(input_div);
		addInputBlock(input, undefined, check ? true : false);
	}
	function OnSelectionChange (select = undefined) {
		var textArea = document.getElementById('textAnswer');
		var selectedOption = select.options[select.selectedIndex];
		var container = document.getElementById('container');
		var question_div = document.createElement('div');
		question_div.id = 'question';
		deleteDiv('question');
		count_options = 0;
		switch(selectedOption.index){
			case 0:
				setTest(question_div, container, false);
				break;
			case 1:
				setTest(question_div, container, false, "successEditbox", "errorEditbox");
				break;
			case 2:
				setTest(question_div, container, true);
				break;
		}
	}
	function deleteDiv(id){
		$('#'+id).remove();
		count_options = 1;
	}
</script>

</html>
