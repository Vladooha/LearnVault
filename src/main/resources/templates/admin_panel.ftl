<#import "index_macro.ftl" as m/>
<#import "spring.ftl" as spring/>
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
    <script src="../static/scripts/search-index.js"></script>
    <script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
    <script src="../static/scripts/login.js"></script>
    <script src="../static/scripts/adminPanel.js"></script>
    <script src="../static/scripts/libs/wb.sitesearch.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

        <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <link href="../static/css/adminPanel.css" rel="stylesheet" type="text/css">
    <link href="../static/css/course_designer.css" rel="stylesheet" type="text/css">

    <style type="text/css">
        #boxes .window {
           position:fixed;
          left:0;
          top:45%;
          width:440px;
          height:200px;
          display:none;
          z-index:9999;
          padding:20px;
          border-radius: 5px;
        }

        #boxes .window{
            padding:10px;
            background-color:#d2e8fc;
            border: 0,5px double rgb(0, 45, 86); /* Параметры границы */
            width: 478px;
            background-color: #fff;
            text-align: center;
        }
        #mask {
          position:absolute;
          left:0;
          top:0;
          z-index:9000;
          background-color:#CBCBCB;
          display:none;
        }
        .swal-text:first-child {
            margin-top: 45px;
        }
        .swal-text {
            font-size: 16px;
            position: relative;
            float: none;
            line-height: normal;
            vertical-align: top;
            text-align: left;
            display: inline-block;
            margin: 0;
            padding: 0 10px;
            font-weight: 400;
            color: rgba(0,0,0,.64);
            max-width: calc(100% - 20px);
            overflow-wrap: break-word;
            box-sizing: border-box;
        }
        .swal-content__input, .swal-content__textarea {
            background-color: #fff;
            font-size: 14px;
            display: block;
            box-sizing: border-box;
            width: 100%;
            border: 1px solid rgba(0,0,0,.14);
            padding: 10px 13px;
            border-radius: 2px;
            transition: border-color .2s;
            margin: 0 auto;
        }
        .swalBtn {
            background-color: #7cd1f9;
            color: #fff;
            border: none;
            box-shadow: none;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
            padding: 10px 24px;
            margin: 0;
            cursor: pointer;
        }
    </style>
</head>
<body>
<div id="LayerBody" >
    <div id="LayerBody_Container">
        <div id="LayerMain">
            <@m.header_site/>
            <div id="mask"></div>
            <div id="boxes">
                  <div id="teachers" class="window">
                    <div class="swal-text" style="">Выберите пользователя для добавления в учителя</div>
                    <div style="padding: 0 20px;margin-top: 20px;font-size: medium;">
                        <select id="teacherSelector" class="swal-content__input" style="width:200px;">
                           <option disabled selected>Выберите пользователя...</option>
                            <#if users??>
                                <#list users as user>
                                    <option value="u${user}">${user}</option>
                                </#list>
                            </#if>
                        </select>
                    </div>
                    <div style="text-align: right;">
                        <button class="swalBtn" onclick='add("teacher")'>OK</button>
                  </div>
                </div>
            </div>
            <div id="boxes">
                  <div id="teachersG" class="window">
                    <div class="swal-text" style="">Выберите учителя для добавления в группу</div>
                    <div style="padding: 0 20px;margin-top: 20px;font-size: medium;">
                        <select id="teacherGSelector" class="swal-content__input" style="width:200px;">
                           <option disabled selected>Выберите пользователя...</option>
                            <#if teachers??>
                                <#list teachers as teacher>
                                    <option value="tg${teacher.profileInfo.username}">${teacher.profileInfo.username}</option>
                                </#list>
                            </#if>
                        </select>
                    </div>
                    <div style="text-align: right;">
                        <button class="swalBtn" onclick='add("teacherG")'>OK</button>
                  </div>
                </div>
            </div>
            <div id="boxes">
                  <div id="admins" class="window">
                    <div class="swal-text" style="">Выберите пользователя для добавления в админы</div>
                    <div style="padding: 0 20px;margin-top: 20px;font-size: medium;">
                        <select id="adminSelector" class="swal-content__input" style="width:200px;">
                           <option disabled selected>Выберите пользователя...</option>
                            <#if users??>
                                <#list users as user>
                                    <option value="t${user}">${user}</option>
                                </#list>
                            </#if>
                            <#if teachers??>
                                <#list teachers as teacher>
                                    <option value="t${teacher.profileInfo.username}">${teacher.profileInfo.username}</option>
                                </#list>
                            </#if>
                        </select>
                    </div>
                    <div style="text-align: right;">
                        <button class="swalBtn" onclick='add("admin")'>OK</button>
                  </div>
                </div>
            </div>
            <div id="boxes">
                  <div id="students" class="window">
                    <div class="swal-text" style="">Выберите студента для добавления в группу:</div>
                    <div style="padding: 0 20px;margin-top: 20px;font-size: medium;">
                        <select id="userSelector" class="swal-content__input" style="width:200px;">
                           <option disabled selected>Выберите пользователя...</option>
                            <#if users??>
                                <#list users as user>
                                    <option value="u${user}">${user}</option>
                                </#list>
                            </#if>
                        </select>
                    </div>
                    <div style="text-align: right;">
                        <button class="swalBtn" onclick='add("user")'>OK</button>
                  </div>
                </div>
            </div>
            <div class="adminBlock" id="adminpanel">
                <form name="form1" id="form1">
                        <ul class="tabs" role="tablist">
                        <li>
                            <input type="radio" name="tabs" id="tab2" checked />
                            <label for="tab2" role="tab" aria-selected="true" aria-controls="panel2" tabindex="0">учителя</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="teachers" aria-hidden="false">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_teachers">
                                                    <#if teachers??>
                                                        <#list teachers as teacher>
                                                            <li onclick='selecting(this.id, "teacher")' id="T${teacher.profileInfo.username}"><p id="PT${teacher.profileInfo.username}">${teacher.profileInfo.username}</p></li>
                                                        </#list>
                                                    </#if>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">

                                            <div style="margin: 20px;"><a href="#teachers" name="modal"><button type="button" class="btnUserMenu">Добавить</button></div></a> <!-- addUser("teacher") -->
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnT" onClick='deleting("teacher")' class="btnUserMenu">Удалить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="changeBtnT" onClick='changing("teacher")' class="btnUserMenu">Изменить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab3"/>
                            <label for="tab3" role="tab" aria-selected="false" aria-controls="panel3" tabindex="0">админы</label>
                            <div id="tab-content3" class="tab-content" role="tabpanel" aria-labelledby="admins" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_admins">
                                                    <#if admins??>
                                                        <#list admins as admin>
                                                            <li onclick="selecting(this.id)" id="A${admin}"><p id="PA${admin}">${admin}</p></li>
                                                        </#list>
                                                    </#if>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">
                                             <div style="margin: 20px;"><a href="#admins" name="modal"><button type="button" class="btnUserMenu">Добавить</button></div></a> <!-- addUser("teacher") -->
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnA" onClick='deleting("admin")' class="btnUserMenu">Удалить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab4"/>
                            <label for="tab4" role="tab" aria-selected="false" aria-controls="panel4" tabindex="0">категории курсов</label>
                            <div id="tab-content4" class="tab-content" role="tabpanel" aria-labelledby="categories" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_categories">
                                                    <#if categories??>
                                                        <#list categories as category>
                                                            <li onclick='selecting(this.id, "category")' id="C${category.name}"><p id="PC${category.name}">${category.name}</p></li>
                                                        </#list>
                                                    </#if>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">
                                            <div style="margin: 20px;"><button type="button" onClick='add("category")' class="btnUserMenu">Добавить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnC" onClick='deleting("category")' class="btnUserMenu">Удалить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab5"/>
                            <label for="tab5" role="tab" aria-selected="false" aria-controls="panel5" tabindex="0">метатеги</label>
                            <div id="tab-content5" class="tab-content" role="tabpanel" aria-labelledby="metatags" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_tags">
                                                    <#if metatags??>
                                                     <#list metatags as metatag>

                                                        <li onclick='selecting(this.id, "tag")' id="M${metatag.name}"><p id="PM${metatag.name}">${metatag.name}</p></li>

                                                     </#list>
                                                    </#if>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">
                                            <div style="margin: 20px;"><button type="button" onClick='add("tag")' class="btnUserMenu">Добавить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnTAG" onClick='deleting("tag")' class="btnUserMenu">Удалить</button></div>
                                            <div style="margin: 20px;"><button type="button" style="height:30%;" disabled id="btnAddTag" onClick='addTag()' class="btnUserMenu">Привязать тег</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div style="width:100%;">
                    <div style="margin: 20px 50px;">
                        <h3 class="h3" style="font-size:35px;">Администрирование групп:</h3>
                    </div>
                    <div style="margin: 20px 50px; width:100%;">
                        <select id="groupSelector" class="style_input" style="width:200px;">
                           <option disabled selected>Выберите группу...</option>

                            <#if groups??>
                               <#list groups as group>

                                <option value="${group.name}">${group.name}</option>

                               </#list>
                            </#if>
                        </select>
                    </div>
                    <div style="margin: 20px 50px; width:100%;">
                        <button type="button" onClick="addGroup()" id="crtGroup" class="orangeButton" style="width:25%;float:left; margin-right:3%;background-color:green;border-color:green;">Добавить группу</button>
                        <button type="button" onClick="delGroup()" id="delGroup" hidden class="orangeButton" style="width:25%;float:left; margin-right:4%;background-color:red;">Удалить текущую группу</button>
                    </div>
                    <#if groups??>
                    <#list groups as group>
                        <div id="${group.name}" class="groupSelect" style="display: none;">
                            <ul class="tabs" role="tablist">
                                <li>
                                    <input type="radio" name="tabs${group.id}" id="tab1${group.id}" checked/>
                                    <label for="tab1${group.id}" role="tab" aria-selected="true" aria-controls="panel1${group.id}" tabindex="1${group.id}">студенты</label>
                                    <div id="tab-content1${group.id}" class="tab-content" role="tabpanel" aria-labelledby="students" aria-hidden="false" style="">
                                      <div class="tab_container">
                                            <div class="row">
                                                <div class="col-md-8" style="height:200px;">
                                                    <div class="containerLi">
                                                        <div class="users" id="container_users_${group.name}">
                                                            <#if group.students??>
                                                                <#list group.students as student>
                                                                    <li onclick='selecting(this.id, "user")' id="S${group.name}_${student.username}"><p id="PS_${group.name}_${student.username}">${student.username}</p></li>
                                                                </#list>
                                                            </#if>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4" style="height:200px;">
                                                     <div style="margin: 20px;"><a href="#students" name="modal"><button type="button" class="btnUserMenu">Добавить</button></div></a> <!-- addUser("teacher") -->
                                                    <div style="margin: 20px;"><button type="button" disabled id="deleteBtnU_${group.name}" onClick='deleting("user")' class="btnUserMenu">Удалить</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li id="teachersInGroup">
                                    <input type="radio" name="tabs${group.id}" id="tab6${group.id}" />
                                    <label for="tab6${group.id}" role="tab" aria-selected="false" aria-controls="panel6${group.id}" tabindex="6${group.id}">учителя</label>
                                    <div id="tab-content6${group.id}" class="tab-content" role="tabpanel" aria-labelledby="teachersG" aria-hidden="true">
                                      <div class="tab_container">
                                            <div class="row">
                                                <div class="col-md-8" style="height:200px;">
                                                    <div class="containerLi">
                                                        <ul class="users" id="container_teachers_${group.name}">
                                                            <#if group.teachers??>
                                                                <#list group.teachers as teach>
                                                                    <li onclick='selecting(this.id, "teacherG")' id="T${group.name}_${teach.profileInfo.username}"><p id="PT_${group.name}_${teach.profileInfo.username}">${teach.profileInfo.username}</p></li>
                                                                </#list>
                                                            </#if>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4" style="height:200px;">

                                                     <div style="margin: 20px;"><a href="#teachersG" name="modal"><button type="button" class="btnUserMenu">Добавить</button></div></a> <!-- addUser("teacher") -->
                                                    <div style="margin: 20px;"><button type="button" disabled id="deleteBtnT_${group.name}" onClick='deleting("teacherG")' class="btnUserMenu">Удалить</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </#list>
                </#if>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    /*var currentTabAdmin = JSON.parse(localStorage.getItem("currentTabAdmin"));
    alert(currentTabAdmin);
    if (currentTabAdmin != null)
        $('#' + currentTabAdmin).prop('checked', true);
    else{*/
        //$('#tab4').prop('checked', true);
        //alert("else tab");
    //}
    //debug
    form1.onchange = function(e){
          alert("id=" + e.target.id + " status=" + e.target.value);
    }
    window.onunload = function() {
        changeCurrentTabAdmin();
    };
    
    var selectedGroup = undefined;
    if(!($("#ADMIN").length)){
        $('#teachersInGroup').css({ "visibility": "hidden"});
        $("#adminpanel").css({ "visibility": "hidden"});
    }

     $(function() {
        $('#groupSelector').change(function(){
            $('.groupSelect').hide();
            $('#' + $(this).val()).show();
            selectedGroup = $(this).val();
            $('#delGroup').show();
            $('#chngGroup').show();
        });
    });

    //выбранные строки
    var selectedUser = undefined;
    var selectedTeacher = undefined;
    var selectedAdmin = undefined;
    var selectedCategories = undefined;
    var selectedTag = undefined;
    var selectedTeacherInGroup = undefined;
    
</script>

<script src="../static/scripts/modal.js"></script>
</body>
</html>