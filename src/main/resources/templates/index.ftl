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
	<link href="../static/css/course_designer.css" rel="stylesheet" type="text/css">
	<script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
	<script src="../static/scripts/libs/wb.carousel.min.js"></script>
	<script src="../static/scripts/searchindex.js"></script>
	<script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
	<script src="../static/scripts/login.js"></script>

	<!-- Carousel -->
    <link href="../static/css/initcarousel-1.css"  rel="stylesheet">
 	<script src="../static/scripts/libs/jquery.js"></script>
    <script src="../static/scripts/libs/carouselAuto.js"></script>
    <script src="../static/scripts/libs/initcarouselAuto.js"></script>
    <script>
  		localStorage.clear();
	</script>
</head>
<body>
<div id="LayerBody" >
	<div id="LayerBody_Container">
		<div id="LayerMain">
			<@m.header_site/>
			<div style="width:100%; margin-top: 40px;">
				<div style="margin-bottom:20px; text-align: center;"><h3 class="h3" style="font-size:35px;">Новинки этой недели</h3></div>
				<!-- Insert to your webpage where you want to display the carousel -->
				<#if lastCourses??>
		        <div id="amazingcarousel-container-1">
		            <div id="amazingcarousel-1" style="display:none;position:relative;width:100%;max-width:960px;margin:0px auto 0px;">
		                <div class="amazingcarousel-list-container">
		                    <ul class="amazingcarousel-list">
		                    	<#list lastCourses as course>
		                        <li class="amazingcarousel-item">
		                            <div class="amazingcarousel-item-container">
		                                <div class="amazingcarousel-image">
		                                	<a href="#dialog${course.id}" name="modal">
		                                		<#if course.pic??>
		                                			<#assign flagPic=course.pic>
			                                		<#if 4 &lt; flagPic?length>
			                                            <img src=${course.pic} style="height:180px;width:240px;" />
			                                        <#else>
			                                            <img src="../static/images/icon_course.png" style="height:180px;width:240px;" />
			                                        </#if>
		                                        </#if>
		                                	</a>
		                                </div>
		                                <div class="amazingcarousel-title">${course.name}</div>
		                            </div>
		                        </li>
		                        </#list>
		                    </ul>
		                    <div class="amazingcarousel-prev"></div>
		                    <div class="amazingcarousel-next"></div>
		                    <div class="amazingcarousel-engine"><a href="http://amazingcarousel.com">jQuery Image Scroller</a></div>
		                </div>
		            </div>
		        </div>
			</div>
			<#list lastCourses as course>
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
							<#if course.feedback?? && course.feedback.voteCount!=0>
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
										<input type="hidden" name="votes" value="${course.feedback.voteCount}">
									</div>
								</div>
								<div style="margin: 10px 0 0 70px;">
									<h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Понятность:</h4>
									<div id="rating_3">
										<input type="hidden" id="complexity" name="val" value="${course.feedback.comprehensibility}"/>
										<input type="hidden" name="votes" value="${course.feedback.voteCount}">
									</div>
								</div>
							</div>
							</#if>
					  		<div style="width:750px;">
								<input id="btn_save_page" class="orangeButton" type="button" value="Пройти курс" style="display: block; width: 200px; height: 40px; margin: 20px auto;" onClick="window.location.href='/course/${course.id}';return false;">
							</div>
						</div>
					</div>
				</div>
				</#list>
				<!-- Макска, которая затемняет весь экран -->
			  	<div id="mask"></div>
				<#else>
		        	<div style="margin: 20px auto; text-align: center;"><h3 class="h3" style="font-size:35px;">К сожалению, новых курсов нет!</h3></div>
		        </#if>
		        <!-- End of body section HTML codes -->

			<div style="width:100%; margin: 20px 0; display:inline-block;">
				<div style="margin: 20px auto; text-align: center;"><h3 class="h3" style="font-size:35px;">Популярные категории курсов</h3></div>
		  		<div style=" display:inline-block;width:90%; margin:20px 5%;height: 400px;">
					<div style="width:30%; float:left; height:100%;">
						<a role="menuitem" href='/category?num=5' style="z-index: 1000;"><img src="../static/images/nauka_dannih.jpg" height="93%" alt=""/></a>
					</div>
					<div style="width:66%; float:left; height:100%;margin-left: 4%;">
						<div style="widows: 100%; height: 50%;">
							<a role="menuitem" href='/category?num=9' style="z-index: 1000;"><img src="../static/images/computer.jpg" height="85%" alt="" style="margin-right: 5%;"/></a>
							<a role="menuitem" href='/category?num=2' style="z-index: 1000;"><img src="../static/images/business.jpg" height="85%" alt=""/></a>
						</div>
					  <div style="widows: 100%; height: 50%;">
							<a role="menuitem" href='/category?num=1' style="z-index: 1000;"><img src="../static/images/IT.jpg" height="85%" alt="" style="margin-right: 5%;"/></a>
							<a role="menuitem" href='/category?num=1' style="z-index: 1000;"><img src="../static/images/personality.jpg" height="85%" alt=""/></a>
					  </div>
					</div>
			  	</div>
			</div>
		</div>
		<@m.footer_site/>
	</div>
</div>
</body>
<script src="../static/scripts/modal.js"></script>
</html>