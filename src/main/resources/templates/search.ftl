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
    <script src="../static/scripts/jquery-1.12.4.min.js"></script>
    <script src="../static/scripts/wb.carousel.min.js"></script>
    <script src="../static/scripts/searchindex.js"></script>
    <script src="../static/scripts/wb.sitesearch.min.js"></script>
    <script src="../static/scripts/login.js"></script>
</head>
<body>
<div id="LayerBody">
    <div id="LayerBody_Container">
        <div id="LayerMain" style="width:1200px; min-height: 800px;">
            <@m.header_site/>
            <div style="margin: 20px 40px 20px 40px;">
                <div style="margin:20px 0;"><h3 class="h3">Результаты поиска:</h3></div>
                <hr>
				<#if courses??>
					<#list courses as course>
					    <a href="#dialog${course.id}" name="modal">
						    <div class="result_container">
								<img src="../static/images/business.jpg" style="width:160px;height:160px;float:left;">
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
							  		<img src="../static/images/business.jpg" style="width:250px;height:250px;">
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
									<!-- СДЕЛАТЬ это------------------------------------------------------------------------------------------------
                                    				<#if time??>
                                    					<@m.time_to_search time/>
                                    				</#if>
                                    			-->
							  		<div style="width:750px;">
										<input id="btn_save_page" class="orangeButton" type="button" value="Пройти курс" style="display: block; width: 200px; height: 40px; margin: 100px auto;" onClick="window.location.href='/course/${course.id}';return false;">
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
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
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

    var parent = $("#id_parent_timer"); //id div'а, куда мы добавляем таймер

    if ($("#time").length !== 0) {
        var text_time = $("#time").text();
        var buf_time = "";
        for (var i = 0; i < text_time.length; i++){
            if (text_time.charAt(i) >= '0' && text_time.charAt(i) <= '9'){
                buf_time += text_time.charAt(i);
            }
        }
        var time = parseInt(buf_time,10);
        var time = msToTime(time);

        console.log(time);

        var p = document.createElement("p");
        var span = document.createElement("span");
        span.classList.add("timer");
        span.innerHTML = "Оставшееся время : ";
        p.appendChild(span);

        span.id = "my_timer";
        span.innerHTML = time;

        p.appendChild(span);
        parent.append(p);
    }

    function msToTime(s) {
                var ms = s % 1000;
                s = (s - ms) / 1000;
                var secs = s % 60;
                s = (s - secs) / 60;
                var mins = s % 60;
                var hrs = (s - mins) / 60;

                if (hrs / 10 == 0) hrs = "0" + hrs;
                if (mins / 10 == 0) mins = "0" + mins;
                if (secs / 10 == 0) secs = "0" + secs;

                return hrs + ':' + mins + ':' + secs;
            }
</script>
</html>