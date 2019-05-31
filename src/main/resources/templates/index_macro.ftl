<#macro header_site>
    <div  style="padding:20px 0;;width:100%;height:65px;">
        <div style="width:30%;float:left;margin-left:2%;height:65px;text-align:top;">
            <h1 id="Heading"><a href="#" style="color:#FF9700;font-size:50px;" onclick="window.location.href='/';return false;">Training portal</a></h1>
        </div>
        <div style="width:46%;float:left;height:85px;">
            <form name="SiteSearch1_form" id="SiteSearch1_form" role="search" accept-charset="UTF-8" onsubmit="return searchPage(features)">
               <div style="margin:20px auto; width:60%;">
                    <input type="search" class="fa-search" id="SiteSearch1" style="width:138px;height:25px;" name="SiteSearch1" value="" spellcheck="false" placeholder="Поиск по порталу" role="searchbox">
                    <input type="submit" onclick="searchPage();return false;" name="Search" value="поиск" class="ButtonSearch" style="width:96px;height:25px;">
                </div>
            </form>
        </div>
        <div style="width:22%;float:left;height:65px;cursor:pointer;margin-top:20px;" onclick="window.location.href='/profile'">
            <span class="textExo2" style="width:100px;float:left;">Профиль</span>
            <img src="../static/images/noavatar.png" id="Image1" alt="" style="width:33px;height:30px;">
        </div>
    </div>
    <div id="wb_CssMenu1" style="width:100%;height:60px;z-index: 999999;">
        <ul role="menubar" style="z-index: 1000;">
            <li class="firstmain">
                <a role="menuitem" class="withsubmenu" href="#" target="_self">Программы и курсы</a>
                <ul role="menu">
                            <!-- LIST CATEGORIES -->
                            <#if categories??>
                                <#list categories as category>
                                    <#assign path='/category?num='+category.getNum()>
                                    <li class="firstitem" style="z-index: 1000;">
                                        <a role="menuitem" href='${path}' target="_self" style="z-index: 1000;">
                                            ${category.getName()}
                                        </a>
                                    </li>
                                </#list>
                            </#if>
                            <!-- LIST CATEGORIES -->
                </ul>
            </li>
            <li>
                <a role="menuitem" class="withsubmenu" href="/constructor/course_create" target="_self">Создать курс</a>
            </li>
            <li>
                <a role="menuitem" class="withsubmenu" href="" target="_self">Мои курсы</a>
            </li>
            <!--IF USER ->
            <li>
    			<a role="menuitem" class="withsubmenu" href="" target="_self">Стать учителем</a>
            </li>
            <-- end -->
            <!-- IF ADMIN -->
            <li>
                <a role="menuitem" class="withsubmenu" href="admin_panel" target="_self">Администрирование</a>
            </li>
            <!-- end -->
            <!--IF TEACHER ->
            <li>
    			<a role="menuitem" class="withsubmenu" href="teacher_panel" target="_self">Администрирование</a>
            </li>
            <-- end -->
            <li>
                <a role="menuitem" class="withsubmenu" href="/constructor/contacts" target="_self">Администрирование</a>
            </li>
        </ul>
    </div>
</#macro>
<#macro logo_site>
<div  style="padding:20px 0;;width:100%;height:65px;">
    <div style="width:30%;float:left;margin-left:2%;height:65px;text-align:top;">
        <h1 id="Heading"><a href="#" style="color:#FF9700;font-size:50px;" onclick="hrefWithAlert('/index')">Training portal</a></h1>
    </div>
    <div style="width:46%;float:left;height:85px;"></div>
    <div style="width:22%;float:left;height:65px;cursor:pointer;margin-top:20px;" onclick="hrefWithAlert('/profile')">
        <span class="textExo2" style="width:100px;float:left;">Профиль</span>
        <img src="../static/images/noavatar.png" id="Image1" alt="" style="width:33px;height:30px;">
    </div>
</div>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
	function hrefWithAlert(href){
	swal({
	  title: "Вы действительно хотите покинуть страницу?",
	  text: "При этом все данные будут утеряны!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {

		if (willDelete) {
			window.location.href=href;
		} 
	});
	}
</script>
</#macro>
<#macro time_to_search time>
    <div id="id_parent_timer" style="text-align:center;"></div>
    <label id="time" hidden="hidden">${time}</label>

    <script>
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
            span.innerHTML = "Время на прохождение : ";
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
</#macro>