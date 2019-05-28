<#macro scroll course_id, page_num>
    <form action="" method="post">
        <div style="width:800px;margin:0 auto;">
            <#if 0 < page_num>
                <button type="button" name="back" value="back" class="next_back_btn">
                    <img style="transform: rotate(180deg);" src="../../../static/images/course_next.png" alt="Вперед" onclick="sendAnswer(${course_id}, ${page_num}, ''); goToPage(${course_id}, ${page_num - 1})"/>
                </button>
            </#if>
            <button type="button" name="forward" value="forward" class="next_back_btn" style="float:right;"><img
                        src="../../../static/images/course_next.png" alt="Назад"
                        onclick="console.log('next'); sendAnswer(${course_id}, ${page_num}, ''); goToPage(${course_id}, ${page_num + 1});"/>
            </button>
        </div>
    </form>
</#macro>

<#macro pagelist course_id, pages>
    <div class="project-explorer-container" id="project_column">
        <div class="project-explorer" style="margin: 30px 10px 0 10px;width: auto">
            <div class="pages-list" style="margin: 20px 0;width: auto">
                <ul class="col-xl-12" id="list-pages" style="padding: 0;">
                    <#assign page_num = 0>
                    <#list pages as page>
                        <li class="pages" id="page" + ${page_num} onclick="goToPage(${course_id}, ${page_num});">
                            <#if page??>
                                ${page}
                            </#if>
                        </li>
                        <#assign page_num += 1>
                    </#list>
                </ul>
            </div>
        </div>
    </div>
</#macro>

<#macro timer time>
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
            span.innerHTML = "Оставшееся время : ";
            p.appendChild(span);
            var span_time = document.createElement("span");
            span_time.classList.add("timer");
            if (time < 600000){
                if (time < 300000){
                    if (time < 100000)
                        span_time.style.color = "#EB0A00"; // красный
                    else
                        span_time.style.color = "#EB4F00"; //оранжевый
                }
                else
                    span_time.style.color = "#EBB100"; //желтый
            }
            span_time.id = "my_timer";
            span_time.innerHTML = time;
            p.appendChild(span_time);
            parent.append(p);
            startTimer();
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
            if (h == 0 && m < 10){
                if (m < 5){
                    if (m < 1)
                        document.getElementById("my_timer").style.color = "#EB0A00"; // красный
                    else
                        document.getElementById("my_timer").style.color = "#EB4F00"; //оранжевый
                }
                else
                    document.getElementById("my_timer").style.color = "#EBB100"; //желтый
            }
            setTimeout(startTimer, 1000);
        }
    </script>
</#macro>