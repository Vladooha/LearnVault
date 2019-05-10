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
    <label id="time" hidden="hidden">${time}</label>
</#macro>