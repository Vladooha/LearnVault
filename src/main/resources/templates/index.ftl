<#import "index_macro.ftl" as m>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Training portal</title>
	<link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
	<link href="../static/css/demo1.css" rel="stylesheet">
	<link href="../static/css/index.css" rel="stylesheet">
	<script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
	<script src="../static/scripts/libs/wb.carousel.min.js"></script>
	<script src="../static/scripts/searchindex.js"></script>
	<script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
	<script src="../static/scripts/login.js"></script>
</head>
<body>
<div id="LayerBody" >
	<div id="LayerBody_Container">
		<div id="LayerMain">
			<@m.header_site/>
		</div>
		<div>
			<#if lastCourses??>
				<#list lastCourses as course>
					${course.id} '${course.name}'
				</#list>
			</#if>
		</div>
	</div>
</div>
</body>
<script>
    $("#SiteSearch1").keyup(function(event){
        if(event.keyCode == 13){
            searchPage()
        }
    });
</script>
</html>