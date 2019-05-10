<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Training portal</title>
	<link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
	<link href="../static/css/demo1.css" rel="stylesheet">
	<link href="../static/css/index.css" rel="stylesheet">
	<script src="../static/scripts/jquery-1.12.4.min.js"></script>
	<script src="../static/scripts/wb.carousel.min.js"></script>
	<script src="../static/scripts/searchindex.js"></script>
	<script src="../static/scripts/wb.sitesearch.min.js"></script>
	<script src="../static/scripts/login.js"></script>
</head>
<body>
<div id="LayerBody" >
	<div id="LayerBody_Container">
		<div id="LayerMain" style="width:1200px; min-height: 800px;">
			<div  style="padding:20px 0 0 20px;width:1200px;height:85px;">
				<div style="width:350px;float:left;">
					<h1 id="Heading" style="float:left;"><a href="#" style="color:#FF9700;font-size:50px;" onclick="window.location.href='index';return false;">Training portal</a></h1>
				</div>
				<div style="width:350px;float:left; padding:17px 0 0 100px;">
					<form name="SiteSearch1_form" id="SiteSearch1_form" role="search" accept-charset="UTF-8" onsubmit="return searchPage(features)">
						<input type="search" class="fa-search" id="SiteSearch1" style="width:138px;height:25px;" name="SiteSearch1" value="" spellcheck="false" placeholder="Поиск по порталу" role="searchbox">
						<input type="button" onclick="searchPage();return false;" name="Search" value="поиск" class="ButtonSearch" style="width:96px;height:25px;">
					</form>
				</div>
				<div style="width:250px;float:right;padding:17px 0 0 49px;">
					<span class="textExo2" style="width:100px;float:left;">Профиль</span>
					<img src="../static/images/noavatar.png" id="Image1" alt="" style="width:33px;height:30px;">
				</div>
			</div>
			<div id="wb_CssMenu1" style="width:1200px;height:60px;">
				<ul role="menubar">
					<li class="firstmain">
						<a role="menuitem" class="withsubmenu" href="#" target="_self">Программы и курсы</a>
						<ul role="menu">
							<li class="firstitem"><a role="menuitem" class="withsubmenu" href="#" target="_self">Курсы</a>
								<ul role="menu">
									<li class="firstitem">
										<a role="menuitem" href="#" target="_self">Гумманитарные науки</a>
									</li>
									<li>
										<a role="menuitem" href="#" target="_self">Бизнес</a>
									</li>
									<li>
										<a role="menuitem" href="#" target="_self">Компьютерные науки</a>
									</li>
									<li class="lastitem">
										<a role="menuitem" href="#" target="_self">Науки о данных</a>
									</li>
								</ul>
							</li>
							<li class="lastitem"><a role="menuitem" href="#" target="_self">&#1058;&#1077;&#1089;&#1090;&#1099;</a>
							</li>
						</ul>
					</li>
					<li>
						<a role="menuitem" class="withsubmenu" href="#" target="_self">Мое обучение</a>
						<ul role="menu">
							<li class="firstitem">
								<a role="menuitem" class="withsubmenu" href="#" target="_self">Индивидуальное</a>
								<ul role="menu">
									<li class="firstitem">
										<a role="menuitem" href="#" target="_self">Мои курсы</a>
									</li>
									<li>
										<a role="menuitem" href="#" target="_self">Мои тесты</a>
									</li>
									<li class="lastitem">
										<a role="menuitem" href="#" target="_self">Домашняя работа</a>
									</li>
								</ul>
							</li>
							<li class="lastitem"><a role="menuitem" class="withsubmenu" href="#" target="_self">Корпоративное</a>
								<ul role="menu">
									<li class="firstitem">
										<a role="menuitem" href="#" target="_self">Назначенные тесты</a>
									</li>
									<li class="lastitem">
										<a role="menuitem" href="#" target="_self">Назначенные курсы</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a role="menuitem" class="withsubmenu" href="#" target="_self">Оценка</a>

						<ul role="menu">
							<li class="firstitem">
								<a role="menuitem" href="#" target="_self">Аттестация</a>
							</li>
							<li class="lastitem">
								<a role="menuitem" href="#" target="_self">Тестировани</a>
							</li>
						</ul>
					</li>
					<li>
						<a role="menuitem" href="#" target="_self">Центр практики</a>
					</li>
					<li>
						<a role="menuitem" href="#" target="_self">База знаний</a>
					</li>
					<li>
						<a role="menuitem" href="#" target="_self">Контакты</a>
					</li>
				</ul>
			</div>
			<div>
				<input class="orangeButton" style="width: 200px; height: 40px; margin:50px auto;" type="button" value="Создать курс" onclick="window.location.href='/constructor/course_create';return false;">
			</div>
		</div>
	</div>
</div>
</body>
</html>