<#macro header_site>
    <div  style="padding:20px 0 0 20px;width:1200px;height:85px;">
        <div style="width:350px;float:left;">
            <h1 id="Heading" style="float:left;"><a href="#" style="color:#FF9700;font-size:50px;" onclick="window.location.href='/';return false;">Training portal</a></h1>
        </div>
        <div style="width:350px;float:left; padding:17px 0 0 100px;">
            <form name="SiteSearch1_form" id="SiteSearch1_form" role="search" accept-charset="UTF-8" onsubmit="return searchPage(features)">
                <input type="search" class="fa-search" id="SiteSearch1" style="width:138px;height:25px;" name="SiteSearch1" value="" spellcheck="false" placeholder="Поиск по порталу" role="searchbox">
                <input type="submit" onclick="searchPage();return false;" name="Search" value="поиск" class="ButtonSearch" style="width:96px;height:25px;">
            </form>
        </div>
        <div style="width:250px;float:right;padding:17px 0 0 49px;cursor:pointer;" onclick="window.location.href='/profile'">
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
                            <!-- LIST CATEGORIES -->
                            <#if categories??>
                                <#list categories as category>
                                    <#assign path='/category?num='+category.getNum()>
                                    <li class="firstitem">
                                        <a role="menuitem" href='${path}' target="_self">
                                            ${category.getName()}
                                        </a>
                                    </li>
                                </#list>
                            </#if>
                            <!-- LIST CATEGORIES -->
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