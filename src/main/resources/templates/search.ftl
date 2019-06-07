<#import "index_macro.ftl" as m>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Training portal</title>
    <link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
    <link href="../static/css/demo1.css" rel="stylesheet">
    <link href="../static/css/index.css" rel="stylesheet">
    <link href="../static/css/search.css" rel="stylesheet">
    <link href="../static/css/jquery.rating.css" rel="stylesheet" type="text/css">
    <script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
    <script src="../static/scripts/libs/wb.carousel.min.js"></script>
    <script src="../static/scripts/searchindex.js"></script>
    <script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
    <script src="../static/scripts/login.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

	<script type="text/javascript">
		window.jQuery || document.write('<script type="text/javascript" src="../static/scripts/libs/jquery-1.6.2.min.js"><\/script>');
	</script>

	<script type="text/javascript" src="../static/scripts/libs/jquery.rating-2.0.min.js"></script>

	<script type="text/javascript">
			$(function(){

			$('#rating_1').rating({
				fx: 'full',
				image: '../static/images/stars.png',
				readOnly: 'true'
			});

			$('#rating_2').rating({
				fx: 'full',
				image: '../static/images/stars.png',
				readOnly: 'true'
			});

			$('#rating_3').rating({
				fx: 'full',
				image: '../static/images/stars.png',
				readOnly: 'true'
			});
			})
	</script>
</head>
<body>
<div id="LayerBody">
    <div id="LayerBody_Container">
        <div id="LayerMain" style="width:1200px; min-height: 800px;">
            <@m.header_site/>
            <div style="margin: 20px 40px 20px 40px;">
				<div style="margin:20px 0;">
					<#if currentCategory??>
						<h3 class="h3">Курсы категории "${currentCategory.getName()}":</h3>
					<#else>
						<h3 class="h3">Результаты поиска:</h3>
					</#if>
				</div>
                <hr>
				<#if courses??>
					<#list courses as course>
					    <a href="#dialog${course.id}" name="modal">
						    <div class="result_container">
								<#if course.pic??>
									<img src=${course.pic} style="width:160px;height:160px;float:left;">
								<#else>
									<img src="../static/images/icon_course.png" style="width:160px;height:160px;float:left;">
								</#if>
								<div style="float:left;min-height:160px;max-width:900px;">
									<div><h5 class="H5" style="margin: 10px 50px; font-size:18px;">${course.name}</h5></div>
									<div>
										<h3 class="result_description" style="-webkit-line-clamp: 3;">
											${course.description}
										</h3>
									</div>
									<div style="margin: 10px 50px;">
										<#list course.tags as tag>
											<span class="tag">${tag.name}</span>
										</#list>
									</div>
								</div>
                            </div>
                        </a>

						<div id="boxes">
						  <div id="dialog${course.id}" class="window">
							  	<div  style="padding:20px 30px;width:250px;height:250px;float:left;">
									<#if course.pic??>
							  			<img src=${course.pic} style="width:250px;height:250px;">
							  		<#else>
										<img src="../static/images/icon_course.png" style="width:250px;height:250px;">
								</#if>
							  	</div>
								<div style="float:left;min-height:160px;max-width:910px;margin-top:20px;">
									<div style="width:750px;">
										<h5 class="H5" style="margin: 20px 50px; font-size:28px;">${course.name}</h5>
										<a href="#"class="close" style="float:right;margin-left: 20px;"/><img src="../static/images/delete.png" width="24" height="24" alt=""/></a>
									</div>
									<div style="width:750px;margin-top: 30px;">
										<h3 class="result_description">
											${course.description}
										</h3>
									</div>
									<div style="width:750px;margin: 40px 40px;">
										<#list course.tags as tag>
											<span class="tag">${tag.name}</span>
										</#list>
									</div>
									<div  style="width:750px;margin: 40px 40px;">
									    <#if 0 < course.time>
                                            <@m.time_to_search course.time/>
                                        <#else>
                                            <label id="no_time" class="timer">Курс не ограничен по времени</label>
                                        </#if>
                                    </div>
									<#if course.feedback??>
									<div style="width:750px;margin: 40px 40px;">
										<div style="margin: 10px 0 0 70px;">
											<h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Сложность: </h4>
											<div id="rating_1">
												<input type="hidden" id="complexity" name="val" value="${course.feedback.complexity}"/>
												<input type="hidden" name="votes" value="${course.feedback.voteCount}">
											</div>
										</div>
										<div style="margin: 10px 0 0 70px;">
											<h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Соответствие ожиданиям: </h4>
											<div id="rating_2">
												<input type="hidden" id="complexity" name="val" value="${course.feedback.expectation}"/>
												<!-- input type="hidden" name="votes" value="${course.feedback.voteCount}" -->
											</div>
										</div>
										<div style="margin: 10px 0 0 70px;">
											<h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Понятность:</h4>
											<div id="rating_3">
												<input type="hidden" id="complexity" name="val" value="${course.feedback.comprehensibility}"/>
												<!-- input type="hidden" name="votes" value="${course.feedback.voteCount}" -->
											</div>
										</div>
									</div>
									</#if>
							  		<div style="width:750px;">
										<input id="btn_save_page" class="orangeButton" type="button" value="Пройти курс" style="display: block; width: 200px; height: 40px; margin: 20px auto;" onClick="window.location.href='/course/${course.id}';return false;">
									</div>
								</div>
							</div>
						<!-- Макска, которая затемняет весь экран -->
						  <div id="mask"></div>
						</div>
					</#list>
				<#else>
					<div style="margin:20px 0; color: red;"><h3 class="h3">Ничего не найдено!</h3></div>
				</#if>
            </div>
        </div>
    </div>
</div>
</body>
<script>
	$(document).ready(function() {

	  //select all the a tag with name equal to modal
	  $('a[name=modal]').click(function(e) {
		//Cancel the link behavior
		e.preventDefault();
		//Get the A tag
		var id = $(this).attr('href');

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(400);
		$('#mask').fadeTo("fast",0.8);

		//Get the window height and width
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(400);

	  });

	  //if close button is clicked
	  $('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		$('#mask, .window').hide();
	  });

	  //if mask is clicked
	  $('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	  });

	});
</script>
</html>
