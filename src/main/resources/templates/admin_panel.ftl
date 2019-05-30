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
	<script src="../static/scripts/adminPanel.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

        <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <link href="../static/css/adminPanel.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="LayerBody" >
    <div id="LayerBody_Container">
        <div id="LayerMain" style="width:70%;">
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
            <div style="width:90%; margin: 0 auto;">
                        <ul class="tabs" role="tablist">
                        <li>
                            <input type="radio" name="tabs" id="tab1" checked />
                            <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Students</label>
                            <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false" style="">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-9" style="height:200px;">
                                            <div class="table">
                                                <div class="users" id="container_users">
													<ul id="{UserName1}" onclick="clickOnUser(this.id, 'user')">
														<li><p id="P{UserName1}">{UserName1}</p></li>
														<li><p id="T{UserName1}">{TeacherName1}</p></li>
													</ul>
													<ul id="{UserName2}" onclick="clickOnUser(this.id, 'user')">
														<li><p id="P{UserName2}">{UserName2}</p></li>
														<li><p id="T{UserName2}">{TeacherName2}</p></li>
													</ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3" style="height:200px;">
                                            <div style="margin: 0 0 0 20px;"><button type="button" onClick='addUser("user")' class="btnUser">Добавить</button></div>
                                            <div  style="margin: 10px 0 0 20px;"><button type="button" disabled id="deleteBtnU" onClick='deleteUser("user")' class="btnUser">Удалить</button></div>
                                            <div style="margin: 10px 0 0 20px;"><button type="button" disabled id="changeBtnU" onClick='changeUser("user")' class="btnUser">Изменить студента</button></div>
											<div style="margin: 10px 0 0 20px;"><button type="button" disabled id="changeTeacher" onClick='changeTeacher()' class="btnUser">Изменить преподавателя</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab2" />
                            <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Teachers</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_teachers">
                                                    <li onclick='clickOnUser(this.id, "teacher")' id="{TeacherName1}"><p id="P{TeacherName1}">{TeacherName1}</p></li>
                                                    <li onclick='clickOnUser(this.id, "teacher")' id="{TeacherName2}"><p id="P{TeacherName2}">{TeacherName2}</p></li>
                                                    <li onclick='clickOnUser(this.id, "teacher")' id="{TeacherName3}"><p id="P{TeacherName3}">{TeacherName3}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">

                                            <div style="margin: 20px;"><button type="button" onClick='addUser("teacher")' class="btnUserMenu">Добавить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnT" onClick='deleteUser("teacher")' class="btnUserMenu">Удалить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="changeBtnT" onClick='changeUser("teacher")' class="btnUserMenu">Изменить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="tabs" id="tab3" />
                            <label for="tab3" role="tab" aria-selected="false" aria-controls="panel3" tabindex="0">Admins</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_admins">
                                                    <li onclick="clickOnUser(this.id)" id="{AdminName1}"><p id="P{AdminName1}">{AdminName1}</p></li>
                                                    <li onclick="clickOnUser(this.id)" id="{AdminName2}"><p id="P{AdminName2}">{AdminName2}</p></li>
                                                    <li onclick="clickOnUser(this.id)" id="{AdminName3}"><p id="P{AdminName3}">{AdminName3}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="height:200px;">
                                            <div style="margin: 20px;"><button type="button" onClick='addUser("admin")' class="btnUserMenu">Добавить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="deleteBtnA" onClick='deleteUser("admin")' class="btnUserMenu">Удалить</button></div>
                                            <div style="margin: 20px;"><button type="button" disabled id="changeBtnA" onClick='changeUser("admin")' class="btnUserMenu">Изменить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
							
						<li>
                            <input type="radio" name="tabs" id="tab4" />
                            <label for="tab4" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Сourse categories</label>
                            <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-9" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_categories">
                                                    <li onclick='clickOnUser(this.id, "category")' id="{categoriesName1}"><p id="P{categoriesName1}">{categoriesName1}</p></li>
                                                    <li onclick='clickOnUser(this.id, "category")' id="{categoriesName2}"><p id="P{categoriesName2}">{categoriesName2}</p></li>
                                                    <li onclick='clickOnUser(this.id, "category")' id="{categoriesName3}"><p id="P{categoriesName3}">{categoriesName3}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-3" style="height:200px;">
                                            <div style="margin: 10px 0 0 20px;"><button type="button" onClick='addUser("category")' class="btnUserMenu">Добавить</button></div>
                                            <div  style="margin: 20px 0 0 20px;"><button type="button" disabled id="deleteBtnC" onClick='deleteUser("category")' class="btnUserMenu">Удалить</button></div>
                                            <div style="margin: 20px 0 0 20px;"><button type="button" disabled id="changeBtnC" onClick='changeUser("category")' class="btnUserMenu">Изменить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</div>

<script>
	//переопределения функции remove
	if (!Element.prototype.remove) {
		Element.prototype.remove = function remove() {
		  if (this.parentNode) {
			this.parentNode.removeChild(this);
		  }
		};
	  }
	//выбранные строки
	var selectedUser = undefined;
	var selectedTeacher = undefined;
	var selectedAdmin = undefined;
	var selectedCategories = undefined;
    
</script>
</body>
</html>