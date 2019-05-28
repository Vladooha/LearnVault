<#import "index_macro.ftl" as m/>
<#import "/spring.ftl" as spring/>
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
        <div id="LayerMain" style="width:1200px; min-height: 800px;">
            <@m.header_site/>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <form action="/ajax/add_metatag" method="post">
                        Метатэг:<br>
                        <@spring.bind "metatagCreateForm.metatagName"/>
                        <input id="metatagName"
                               name="${spring.status.expression}"
                               value="${spring.status.value?default("")}"/>
                        <#list spring.status.errorMessages as error> <b>${error}</b></#list>
                        <br><br>

                        <input type="hidden" name="_csrf" value="${_csrf.token}"/>

                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <form action="/ajax/add_tag_to_metatag" method="post">
                        Метатэг:<br>
                        <@spring.bind "metatagForm.metatagName"/>
                        <input id="metatagName"
                               name="${spring.status.expression}"
                               value="${spring.status.value?default("")}"/>
                        <#list spring.status.errorMessages as error> <b>${error}</b></#list>
                        <br><br>

                        Имя тэга:<br>
                        <@spring.bind "metatagForm.tagName"/>
                        <input id="tagName"
                               name="${spring.status.expression}"
                               value="${spring.status.value?default("")}"/>
                        <#list spring.status.errorMessages as error> <b>${error}</b></#list>
                        <br><br>

                        Вес:<br>
                        <@spring.bind "metatagForm.weight"/>
                        <input id="weight"
                               name="${spring.status.expression}"
                               value="${spring.status.value?default("")}"/>
                        <#list spring.status.errorMessages as error> <b>${error}</b></#list>
                        <br><br>

                        <input type="hidden" name="_csrf" value="${_csrf.token}"/>

                        <input type="submit" value="Submit">
                    </form>
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <label><b>Добавить админа: </b></label><br>
                    <input type="text" class="Editbox1" name="adminNameAddAdmin" value="" spellcheck="false" placeholder="Никнейм">
                    <input type="submit" name="submit" value="Отправить" onclick="addAdmin()">
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <label><b>Добавить категорию курсов: </b></label><br>
                    <input type="text" class="Editbox1" name="categoryNameAddCategory" value="" spellcheck="false" placeholder="Никнейм">
                    <input type="submit" name="submit" value="Отправить" onclick="addCourseCategory()">
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <label><b>Добавить учителя: </b></label><br>
                    <input type="text" class="Editbox1" name="teacherNameAddTeacher" value="" spellcheck="false" placeholder="Никнейм">
                    <input type="submit" name="submit" value="Отправить" onclick="addTeacher()">
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <label><b>Добавить студента в учебную группу: </b></label><br>
                    <input type="text" class="Editbox1" name="teacherNameAddStudent" value="" spellcheck="false" placeholder="Никнейм учителя">
                    <input type="text" class="Editbox1" name="studentNameAddStudent" value="" spellcheck="false" placeholder="Никнейм студента">
                    <input type="submit" name="submit" value="Отправить" onclick="addStudent()">
                </div>
            </div>
            <div>
                <div style="margin: 60px auto 40px auto;width:660px;">
                    <label><b>Удалить студента из учебной группы: </b></label><br>
                    <input type="text" class="Editbox1" name="teacherNameRemoveStudent" value="" spellcheck="false" placeholder="Никнейм учителя">
                    <input type="text" class="Editbox1" name="studentNameRemoveStudent" value="" spellcheck="false" placeholder="Никнейм студента">
                    <input type="submit" name="submit" value="Отправить" onclick="removeStudent()">
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    function addTeacher() {
        $.ajax({
            url: "/ajax/add_teacher",
            data: ({
                teacherName: $('input[name="teacherNameAddTeacher"]').val()
            }),
            success: function f() {
                // Process answer
            }
        });
    }

    function addStudent() {
        $.ajax({
            url: "/ajax/add_student",
            data: ({
                teacherName: $('input[name="teacherNameAddStudent"]').val(),
                studentName: $('input[name="studentNameAddStudent"]').val()
            }),
            success: function f() {
                // Process answer
            }
        });
    }

    function removeStudent() {
        $.ajax({
            url: "/ajax/remove_student",
            data: ({
                teacherName: $('input[name="teacherNameRemoveStudent"]').val(),
                studentName: $('input[name="studentNameRemoveStudent"]').val()
            }),
            success: function f() {
                // Process answer
            }
        });
    }

    function addCourseCategory() {
        $.ajax({
            url: "/ajax/add_course_category",
            data: ({
                categoryName: $('input[name="categoryNameAddCategory"]').val()
            }),
            success: function f() {
                // Process answer
            }
        });
    }

    function addAdmin() {
        $.ajax({
            url: "/ajax/add_admin",
            data: ({
                adminName: $('input[name="adminNameAddAdmin"]').val()
            }),
            success: function f() {
                // Process answer
            }
        });
    }
</script>
</body>
</html>