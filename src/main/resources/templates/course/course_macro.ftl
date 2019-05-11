<#macro scroll course_id, page_num>
    <form action="" method="post">
        <button type="button" name="back" value="back" class="next_back_btn"><img style="transform: rotate(180deg);"
                                                                                  src="../../static/images/course_next.png"
                                                                                  alt="Вперед"
                                                                                  <#if 0 < page_num>onclick="sendAnswer(${course_id}, ${page_num}, ''); goToPage(${course_id}, ${page_num - 1})"</#if>/>
        </button>
        <button type="button" name="forward" value="forward" class="next_back_btn" style="float:right;"><img
                    src="../../static/images/course_next.png" alt="Вперед"
                    onclick="console.log('next'); sendAnswer(${course_id}, ${page_num}, ''); goToPage(${course_id}, ${page_num + 1});"/>
        </button>
    </form>
</#macro>

<#macro pagelist course_id, pages>
    <div class="project-explorer-container" id="project_column">
        <div class="project-explorer" style="margin: 30px 10px 0 10px">
            <div class="pages-list">
                <ul class="col-xl-12" id="list-pages" style="padding: 0;">
                    <#assign page_num = 0>
                    <#list pages as page>
                        <li class="pages" id="page" + ${page_num}
                            onclick="goToPage(${course_id}, ${page_num});">${page}</li>
                        <#assign page_num += 1>
                    </#list>
                </ul>
            </div>
        </div>
    </div>
</#macro>

<#macro timer time>
    <div id="id_parent_timer"></div>
    <label id="time" hidden="hidden">${time}</label>

    <script>
        var parent = $("#id_parent_timer"); //id div'а, куда мы добавляем таймер

        if ($("#time").length !== 0) {
            console.log($("#time").text().split(' ').join('_'));

            var time = msToTime($("#time").text());

            console.log(time);

            var p = document.createElement("p");
            var span = document.createElement("span");
            span.id = "my_timer";
            span.classList.add("timer");
            span.innerHTML = time;

            p.appendChild(span);
            parent.append(p);
            startTimer()
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

        function startTimer() {
            var my_timer = document.getElementById("my_timer");
            var time = my_timer.innerHTML;
            var arr = time.split(":");
            var h = arr[0];
            var m = arr[1];
            var s = arr[2];
            if (s == 0) {
                if (m == 0) {
                    if (h == 0) {
                        alert("Время вышло");
                        //window.location.reload();
                        return;
                    }
                    h--;
                    m = 60;
                    if (h < 10) h = "0" + h;
                }
                m--;
                if (m < 10) m = "0" + m;
                s = 59;
            } else s--;
            if (s < 10) s = "0" + s;
            document.getElementById("my_timer").innerHTML = h + ":" + m + ":" + s;
            setTimeout(startTimer, 1000);
        }
    </script>
</#macro>