﻿<!doctype html>
<html>
<head>
<title>constructor</title>
<link href="../icon.png" rel="shortcut icon" type="image/x-icon">
<link href="../../static/css/course_designer.css" rel="stylesheet">
<link href="../../static/css/demo1.css" rel="stylesheet">
<link href="../../static/css/index.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="../../static/scripts/course-constr.js"></script>
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
												<a role="menuitem" href="#" target="_self" onclick='addTextPage()'>Страницу теории</a>
											</li>
											<li>
												<a role="menuitem" href="#" target="_self" onclick="addTestPage()">Страницу тестов</a>
											</li>
										</ul>
							</li>
							<li  style="width: 136px;">
								<a role="menuitem" class="withsubmenu" href="#" target="_self" onclick="sorry()">Удалить</a>
							</li>
						</ul>
					</div>
				</div>
				<div>
						<input class="orangeButton" type="button" value="Сохранить курс" style="display: block; margin: 220px auto 0 auto;width: 220px; height: 40px;" onClick="saveCourse()">
					</div>
			</div>
		
	  <div class="constructor-panel">
				<form style="width: 860px;height: 850px; float:left; margin: 30px 0 0 40px">
					<div style="margin-bottom: 15px;"><h3 class="h3">Заголовок страницы:</h3></div>
					<div><input type="text" size="70" autofocus autocomplete="on" style="height: 25px;" value="Новая страница" id ="header-page" oninput="change()"></div>	
					<div style="margin: 30px 0 15px 0;"><h3 class="h3">Текст страницы курса:</h3></div>
					<textarea name="comment" cols="100" rows="25" id="textArea" oninput="change()"></textarea>
					<div>
						<div class="investment">
							<div><h4>Прикрепить фото</h4></div>
							<div><h5 class="h5">(.jpg, .jpeg, .png)</h5></div>
							<div class="developing" data-title="В разработке...">
								<input type="file" accept=".jpg, .jpeg, .png" style="margin:20px;" disabled>
							</div>
						</div>
						<div class="investment">
							<div><h4>Прикрепить вложение</h4></div>
							<div><h5 class="h5">(.doc,.docx,.txt,.pptx, .ppt, .pptm)</h5></div>
							<div>
								<input class="developing" type="file" accept=".doc,.docx,.txt,.pptx, .ppt, .pptm" style="margin:20px;" disabled data-title="В разработке...">
							</div>
						</div>
						<div class="investment">
							<div><h4>Вставить ссылку на youtube</h4></div>
							<div  class="developing" data-title="В разработке...">
								<input type="text"style="margin:20px;" disabled>
							</div>
						</div>
					</div>
					<div >
						<input id="btn_save_page" class="orangeButton" type="button" value="Сохранить страницу" style="display: block; margin: 200px auto 0 auto; width: 300px; height: 40px;" onClick="savePage()">
					</div>
				</form>
				
			</div>
	</div>
</body>
<script>
	var flag_open = start_init();
	// получаем текущий pageId
	var current_page = getLocalKey('current_page');
	//получаем количество тестовых страниц
	var count_text_pages = getLocalKey('count_text_pages');

	//получаем листы данных страниц
	var list_pageId = getLocalList('list_pageId');
	var list_types = getLocalList('list_types');
	var list_title = getLocalList('list_title');
	var list_text = getLocalList('list_text');

	if (list_pageId !== []){	
		//добавляем в обозреватель листов страницы, уже созданные ранее
		for (var i = 0; i < list_pageId.length; i++){
			getListTitles(list_pageId[i], list_pageId, list_title);
		}
	}
	
	addTextPage();

	function addTextPage(){
		//setLocalLists(list_pageId, list_types, list_title, list_text);

		flag_open = getLocalBool('flag_open');
		current_page = getCurrentPage();
		console.log("flag_open:"+flag_open);

		count_text_pages++;

		//удаляем у всех подсветку текущей страницы
		popCurrentClass(list_pageId);
		
		//если мы открываем ранее созданную страницу
		if (flag_open){
			var index = indexOf(list_pageId, current_page);
			document.getElementById(current_page).classList.add("currentPage");
			document.getElementById("header-page").value = list_title[index];
			document.getElementById('textArea').value = list_text[index];
			localStorage.setItem('flag_open', JSON.stringify(false));
		}
		else{
			if(count_text_pages > 1 && !(/test.+/.test(current_page))){
				savePage();
				document.getElementById("btn_save_page").disabled = false;
			}
			//контейнер, в котором все страницы
			var list_pages = document.getElementById('list-pages');
			//создаем новую страницу
			var new_page = document.createElement('li');
			new_page.innerHTML = "Новая страница";
			new_page.classList.add("pages");
			new_page.classList.add("currentPage");
			new_page.id = "text"+count_text_pages;
			new_page.onclick = function(){
				savePage();
				clickCurrentPage(new_page.id);
			}

			list_pageId.push(new_page.id);
			list_types.push("text");
			list_title.push(new_page.innerHTML);
			list_text.push("");

			current_page = new_page.id;

			if (count_text_pages > 1){
				new_page.innerHTML +=" " + (count_text_pages-1);
				document.getElementById("header-page").value = "Новая страница "+(count_text_pages-1);
			}
			
			list_pages.appendChild(new_page);

			document.getElementById('textArea').value = "";


			$('#list-pages').sortable({
				 change: function( event, ui ) {
					 //здесь надо повесить запоминание порядка при перетягивании
				 }
			});

			localStorage.setItem('current_page', JSON.stringify(current_page));
			localStorage.setItem('count_text_pages', JSON.stringify(count_text_pages));
		}
	}
	function addTestPage(){
		savePage();
		localStorage.setItem('count_text_pages', JSON.stringify(count_text_pages));
		window.location.href='/constructor/test_designer';
	}

	function savePage(){
		//alert("save page text!");

		current_page = getCurrentPage();
		console.log("current_page(save):"+current_page); //debug
		//buffers
		var index = indexOf(list_pageId,current_page);
		console.log("index(save):"+index); //debug

		var title = document.getElementById('header-page').value;
		var text =  document.getElementById('textArea').value;

		//внесение изменений
		list_title[index] = title;
		console.log("title(save):"+title); //debug
		
		var title_expl = document.getElementById(current_page);
		title_expl.innerHTML = title;
		

		list_text[index] = text;
		console.log("text(save):"+text); //debug

		/*var page = document.getElementById(current_page);
		page.onclick = function(){
				savePage();
				clickCurrentPage(page.id);
			}*/

		document.getElementById("btn_save_page").disabled = true;

		setLocalLists(list_pageId,list_types, list_title, list_text); // сохранение изменений
	}
	function change(){
		document.getElementById("btn_save_page").disabled = false;
	}
	function sorry(){
		swal("Простите ☹", "Это пока что в разработке", "info");
	}
	function saveCourse(){
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

</script>
</html>

