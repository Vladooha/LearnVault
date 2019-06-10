<#macro header_site>
<#if roles??>
    <#list roles as role>
        <p id="${role}" hidden="true">${role}</p></li>
    </#list>
</#if>
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
                <a role="menuitem" class="withsubmenu" href="#" target="_self" id="tab1">Программы и курсы</a>
                <ul role="menu" style="z-index:9999;">
                            <!-- LIST CATEGORIES -->
                            <#if categories??>
                                <#list categories as category>
                                    <#assign path='/category?num='+category.getNum()>
                                    <li class="firstitem" style="z-index: 1000;">
                                        <a role="menuitem" href='${path}' target="_self" style="z-index: 1000;" onclick="changeCurrentLI('tab1')">
                                            ${category.getName()}
                                        </a>
                                    </li>
                                </#list>
                            </#if>
                            <!-- LIST CATEGORIES -->
                </ul>
            </li>
            <li>
                <a role="menuitem" class="withsubmenu" href="/constructor/course_create" target="_self" id="tab2" onclick="changeCurrentLI(this.id)">Создать курс</a>
            </li>
            <li>
                <a role="menuitem" class="withsubmenu" href="" target="_self" id="tab3" onclick="changeCurrentLI(this.id)">Мои курсы</a>
            </li>
            <!--IF USER -->
            <li id="userRef" hidden="true">
    			<a role="menuitem" class="withsubmenu" href="beTeacher" target="_self" id="tab41" onclick="changeCurrentLI(this.id)">Стать учителем</a>
            </li>
            <!-- IF ADMIN -->
            <li id="adminRef" hidden="true">
    			<a role="menuitem" class="withsubmenu" href="admin_panel" target="_self" id="tab42" onclick="changeCurrentLI(this.id)">Администрирование</a>
            </li>
            <!-- IF TEACHER -->
            <li id="teacherRef" hidden="true">
                <a role="menuitem" class="withsubmenu" href="teacher_panel" target="_self" id="tab43" onclick="changeCurrentLI(this.id)">Администрирование</a>
            </li>
            
            <li>
                <a role="menuitem" class="withsubmenu" href="contacts" target="_self" id="tab5" onclick="changeCurrentLI(this.id)">Контакты</a>
            </li>
        </ul>
    </div>
<script>
    var currentLi = JSON.parse(localStorage.getItem("currentLiHeader"));
    //alert(currentLi);
    if (currentLi !== null){
        if($("#"+currentLi).length)
            $("#"+currentLi).css({ "background-color": "#002956",
                    "color": "white" });
        if($("#"+currentLi+"1").length)
            $("#"+currentLi+"1").css({ "background-color": "#002956",
                    "color": "white" });
        if($("#"+currentLi+"2").length)
            $("#"+currentLi+"2").css({ "background-color": "#002956",
                    "color": "white" });
        if($("#"+currentLi+"3").length)
            $("#"+currentLi+"3").css({ "background-color": "#002956",
                    "color": "white" });
    }
    if($("#ADMIN").length || $("#TEACHER").length)
        if ($("#ADMIN").length){
           // alert("admin!");
            $("#adminRef").show();
        }
        else{
            $("#teacherRef").show();
           // alert("teacher!");
        }
    else{
       // alert("user!");
        $("#userRef").show();
    }
    function changeCurrentLI(id){
        localStorage.setItem('currentLiHeader', JSON.stringify(id));
        console.log(localStorage.getItem("currentLiHeader"));
    }
</script>
</#macro>
<#macro footer_site>
    <div id="Footer">
        <div style="width:50%;float: left;margin-top:20px;">
            <h5 class="h5" style="margin: 70px;">© Training portal</h3>
        </div>
        <div style="width:50%;float:left; text-align:right; margin-top:20px;">
            <h5 class="h5" style="margin: 70px;">МП-35А</h3>
        </div>
        <div style="width:100%;float:right; text-align:right;">
            <h5 class="h5" style="margin: 70px;">Межуев</h3>
        </div>
        <div style="width:100%;float:right; text-align:right;">
            <h5 class="h5" style="margin: 70px;">Смирнов</h3>
        </div>
        <div style="width:100%;float:right; text-align:right;">
            <h5 class="h5" style="margin: 70px;">Соловьев</h3>
        </div>
    </div>
</#macro>
<#macro logo_site>
<div  style="padding:20px 0;;width:100%;height:100px;">
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