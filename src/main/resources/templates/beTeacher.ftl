<#import "index_macro.ftl" as m>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Training portal</title>
	<link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
	<link href="../static/css/demo1.css" rel="stylesheet">
	<link href="../static/css/index.css" rel="stylesheet">
	<link href="../static/css/course_designer.css" rel="stylesheet" type="text/css">
	<script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
	<script src="../static/scripts/libs/wb.carousel.min.js"></script>
	<script src="../static/scripts/searchindex.js"></script>
	<script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
	<script src="../static/scripts/login.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
<div id="LayerBody" >
	<div id="LayerBody_Container">
		<div id="LayerMain">
			<@m.header_site/>
			<form action="" enctype="text/plain" method="post">
				<div style="margin:5% 10%; border:1px #A3A3A3 solid; display: inline-block;width: 80%;">
					<div style="margin:2% 5%;">
						<div><h3 class="h3" style="font-size:35px;">Форма обратной связи</h3></div>
						<div style="margin:5% 0;">
							<div style="margin-bottom: 3%;"><h5 class="h5" style="font-size:20px;">Обращение</h4></div>
							<div><textarea rows="10" cols="50" class="style_input" style="resize:none;" required></textarea></div>
						</div>
						<div style="margin:5% 0;">
							<div><h5 class="h5" style="font-size:20px;">Ваше имя *</h4></div>
							<div><input type="text" required class="style_input" size="51"></div>
						</div>
						<div style="margin:5% 0;">
							<div><h5 class="h5" style="font-size:20px;">Адрес электронной почты *</h4></div>
							<div><input type="text" id="email" required class="style_input" size="51"></div>
						</div>
						<div style="margin:5% 0;">
							<div><h5 class="h5" style="font-size:20px;">Телефон *</h4></div>
							<div><input type="text" required class="style_input" size="51"></div>
						</div>
						<div style="margin:5% 0;">
							<div><h5 class="h5" style="font-size:20px;">Организация *</h4></div>
							<div><input type="text" required class="style_input" size="51"></div>
						</div>
						<div style="margin:5% 0;">
							<div><h5 class="h5" style="font-size:20px;">Должность *</h4></div>
							<div><input type="text" required class="style_input" size="51"></div>
						</div>
						<div style="margin:5% 0;">
							<button type="button" class="orangeButton" style="width: 150px; height:35px; margin: 0 auto;" onclick="send()">Отправить</button>
						</div>
					</div>
				</div>
			</form>
		</div>
		<@m.footer_site/>
	</div>
</div>
</body>
<script>
	function send(){
		swal("Ваше обращение принято!", "Мы ответим вам в сроки, установленные законом", "success")
			.then((value) => {
		  		window.location.href='index';
		});
		
	}
</script>
</html>
