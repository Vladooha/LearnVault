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
<div id="LayerBody" style="position:absolute;text-align:center;left:0%;top:0px;width:100%;height:1367px;z-index:46;">
	<div id="LayerBody_Container" style="width:1293px;position:relative;margin-left:auto;margin-right:auto;text-align:left;">
		<div id="LayerMain" style="position:absolute;text-align:left;left:31px;top:0px;width:1202px;height:1367px;z-index:17;">
			<div  style="position:absolute;left:51px;top:21px;width:389px;">
				<h1 id="Heading"><a href="#" style="color:#FF9700;font-size:50px;" onclick="window.location.href='index.html';return false;">Training portal</a></h1>
			</div>
			
			<form name="SiteSearch1_form" id="SiteSearch1_form" role="search" accept-charset="UTF-8" onsubmit="return searchPage(features)">
				<input type="text" id="SiteSearch1" style="position:absolute;left:554px;top:44px;width:138px;height:16px;z-index:11;" name="SiteSearch1" value="" spellcheck="false" placeholder="&#1055;&#1086;&#1080;&#1089;&#1082; &#1087;&#1086; &#1087;&#1086;&#1088;&#1090;&#1072;&#1083;&#1091;" role="searchbox">
				<input type="button" onclick="searchPage();return false;" name="Search" value="поиск" class="ButtonSearch" style="position:absolute;left:713px;top:45px;width:96px;height:25px;z-index:12;">
			</form>
			
			<div id="LayerProfile" style="position:absolute;text-align:left;left:983px;top:32px;width:163px;height:50px;" onclick="window.location.href='profile';return false;" class="Pointer">
				<div id="wb_Image1" style="position:absolute;left:116px;top:10px;width:33px;height:30px;">
					<img src="../static/images/noavatar.png" id="Image1" alt="">
				</div>
				<div id="wb_Text1" style="position:absolute;left:17px;top:12px;width:89px;height:26px;z-index:1;">
					<span class="textExo2">Профиль</span></div>
			</div>
			
			<div id="wb_CssMenu1" style="position:absolute;left:1px;top:117px;width:1201px;height:60px;z-index:20;">
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
			<input class="orangeButton" type="button" value="Создать курс" style="margin: 210px 0 0 90px; width: 200px; height: 40px;" 
				   onclick="window.location.href='course_create.html';return false;">
			<div id="LayerSections" style="position:absolute;text-align:left;left:1px;top:260px;width:1200px;height:379px;z-index:15;">
				<div class="textExo2" style="position:absolute;left:70px;top:14px;width:1085px;height:35px; text-align:center">
					<span style="font-size:29px;">Обзор тем и курсов</span>
				</div>с
				<div id="wb_Image2" style="position:absolute;left:790px;top:85px;width:290px;height:126px;">
				<a href="#"><img src="../static/images/computer.jpg" id="Image1" alt=""></a>
				</div>
				<div id="wb_Image3" style="position:absolute;left:149px;top:85px;width:290px;height:268px;">
				<a href="#"><img src="../static/images/nauka_dannih.jpg" id="Image2" alt=""></a>
				</div>
				<div id="wb_Image4" style="position:absolute;left:467px;top:85px;width:290px;height:126px;">
				<a href="#"><img src="../static/images/business.jpg" id="Image3" alt=""></a>
				</div>
				<div id="wb_Image5" style="position:absolute;left:467px;top:227px;width:290px;height:126px;">
				<a href="#"><img src="../static/images/IT.jpg" id="Image4" alt=""></a>
				</div>
				<div id="wb_Image6" style="position:absolute;left:790px;top:227px;width:290px;height:126px;">
				<a href="#"><img src="../static/images/personality.jpg" id="Image5" alt=""></a>
				</div>
			</div>
			<div id="LayerDiploms" style="position:absolute;text-align:left;left:0px;top:650px;width:1201px;height:490px;z-index:16;">
				<div id="wb_Text2" style="position:absolute;left:52px;top:10px;width:1098px;height:35px;text-align:center;z-index:9;">
					<span style="color:#0C5AA6;font-family:'Exo 2';font-size:29px;">Получите диплом</span>
				</div>
				<div id="wb_Carousel1" style="position:absolute;left:200px;top:80px;width:800px;height:400px;z-index:8;overflow:hidden;">
					<div id="Carousel1" style="position:absolute;">
						<div class="frame frame-1">
						</div>
						<div class="frame frame-2">
						</div>
						<div class="frame frame-3">
						</div>
					</div>
					<div id="Carousel1_back">
						<a><img alt="Back" src="../static/images/carousel_back.png"></a></div>
					<div id="Carousel1_next">
						<a><img alt="Next" src="../static/images/carousel_next.png"></a></div>
				</div>
				
			</div>
		</div>
	</div>
</div>
</body>
</html>
