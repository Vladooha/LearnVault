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
        <div id="LayerMain">
            <@m.header_site/>
            <div style="width:90%; margin: 0 auto;z-index: 0;">
                        <ul class="tabs" role="tablist">
                        <li>
                            <input type="radio" name="tabs" id="tab1" checked />
                            <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="1">Students</label>
                            <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false" style="">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-9" style="height:200px;">
                                            <div class="table">
                                                <div class="users" id="container_users">
													<ul id="{UserName1}" onclick="clickOnUser(this.id, 'user')">
														<li><p id="P{UserName1}">{UserName1}</p></li>
														<li><p id="T{UserName1}">{GroupName1}</p></li>
													</ul>
													<ul id="{UserName2}" onclick="clickOnUser(this.id, 'user')">
														<li><p id="P{UserName2}">{UserName2}</p></li>
														<li><p id="T{UserName2}">{GroupName2}</p></li> <!-- p.s. не обращай внимание на то, что группа - это учитель, потом переименую, когда буду более сконцентрированный, чтобы ничего не потерять.  -->
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
                            <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="2">Teachers</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_teachers">
                                                	<#if teachers??> 
														<#list teachers as teacher>
															<li onclick='clickOnUser(this.id, "teacher")' id="${teacher.username}"><p id="P${teacher.username}">${teacher.username}</p></li>
														</#list> 
													</#if>
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
                            <label for="tab3" role="tab" aria-selected="false" aria-controls="panel3" tabindex="3">Admins</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_admins">
                                                	<#if admins??> 
														<#list admins as admin>
															<li onclick="clickOnUser(this.id)" id="${admin}"><p id="P${admin}">${admin}</p></li>
														</#list> 
													</#if>
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
                            <label for="tab4" role="tab" aria-selected="true" aria-controls="panel4" tabindex="4">Сourse categories</label>
                            <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-9" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_categories">
                                                	<#if categories??> 
														<#list categories as category>
															<li onclick='clickOnUser(this.id, "category")' id="${category.name}"><p id="P${category.name}">${category.name}</p></li>
														</#list> 
													</#if>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-3" style="height:200px;">
                                            <div style="margin: 10px 0 0 20px;"><button type="button" onClick='addUser("category")' class="btnUserMenu">Добавить</button></div>
                                            <div  style="margin: 20px 0 0 20px;"><button type="button" disabled id="deleteBtnC" onClick='deleteUser("category")' class="btnUserMenu">Удалить</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
							
						<li>
							<input type="radio" name="tabs" id="tab5" />
							<label for="tab5" role="tab" aria-selected="true" aria-controls="panel5" tabindex="5">meta tags</label>
							<div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false">
							  <div class="tab_container">
									<div class="row">
										<div class="col-md-9" style="height:200px;">
											<div class="containerLi">
												<ul class="users" id="container_tags">
													<li onclick='clickOnUser(this.id, "tag")' id="{metaName1}"><p id="P{metaName1}">{metaName1}</p></li>
													<li onclick='clickOnUser(this.id, "tag")' id="{metaName2}"><p id="P{metaName2}">{metaName2}</p></li>
													<li onclick='clickOnUser(this.id, "tag")' id="{metaName3}"><p id="P{metaName3}">{metaName3}</p></li>
												</ul>
											</div>
										</div>
										<div class="col-md-3" style="height:200px;">
											<div style="margin: 10px 0 0 20px;"><button type="button" onClick='addUser("tag")' class="btnUserMenu">Добавить</button></div>
											<div  style="margin: 20px 0 0 20px;"><button type="button" disabled id="deleteBtnTAG" onClick='deleteUser("tag")' class="btnUserMenu">Удалить</button></div>
											<div style="margin: 20px 0 0 20px;"><button type="button" style="height:30%;" disabled id="btnAddTag" onClick='addTag()' class="btnUserMenu">Привязать тег</button></div>
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
	var selectedTag = undefined;
    
</script>
</body>
</html>