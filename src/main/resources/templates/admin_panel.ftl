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
    <link href="../static/css/course_designer.css" rel="stylesheet" type="text/css">
</head>
<body>
<#if roles??>
	<#list roles as role>
		<p id="A${role}" hidden="true">${role}</p></li>
	</#list>
</#if>
<div id="LayerBody" >
    <div id="LayerBody_Container">
        <div id="LayerMain">
            <@m.header_site/>
            <div class="adminBlock" hidden="true" id="adminpanel">
                        <ul class="tabs" role="tablist">
                        <li>
                            <input type="radio" name="tabs" id="tab2" checked/>
                            <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="2">Teachers</label>
                            <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                              <div class="tab_container">
                                    <div class="row">
                                        <div class="col-md-8" style="height:200px;">
                                            <div class="containerLi">
                                                <ul class="users" id="container_teachers">
                                                	<#if teachers??>
														<#list teachers as teacher>
															<li onclick='clickOnUser(this.id, "teacher")' id="${teacher.profileInfo.username}"><p id="P${teacher.profileInfo.username}">${teacher.profileInfo.username}</p></li>
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
													<#if metatags??>
					                              	 <#list metatags as metatag>

	 													<li onclick='clickOnUser(this.id, "tag")' id="${metatag.name}"><p id="P${metatag.name}">${metatag.name}</p></li>

					                              	 </#list>
					                              	</#if>
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
                        <div id="${group.name}" class="groupSelect" style="display:none">
                            <ul class="tabs" role="tablist">
                                <li>
                                    <input type="radio" name="tabs${group.id}" id="tab1${group.id}" checked />
                                    <label for="tab1${group.id}" role="tab" aria-selected="true" aria-controls="panel1" tabindex="1${group.id}">Students</label>
                                    <div id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="description" aria-hidden="false" style="">
                                      <div class="tab_container">
                                            <div class="row">
                                                <div class="col-md-9" style="height:200px;">
                                                    <div class="containerLi">
                                                        <div class="users" id="container_users_${group.name}">
                                                            <#if group.students??>
                                                                <#list group.students as student>
                                                                    <li onclick='clickOnUser(this.id, "user")' id="${group.name}_${student.username}"><p id="P_${group.name}_${student.username}">${student.username}</p></li>
                                                                </#list>
                                                            </#if>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3" style="height:200px;">
                                                    <div style="margin: 0 0 0 20px;"><button type="button" onClick='addUser("user")' class="btnUser">Добавить</button></div>
                                                    <div  style="margin: 10px 0 0 20px;"><button type="button" disabled id="deleteBtnU_${group.name}" onClick='deleteUser("user")' class="btnUser">Удалить</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li id="teacherFORteacher" hidden="true">
                                    <input type="radio" name="tabs${group.id}" id="tab6${group.id}" />
                                    <label for="tab6${group.id}" role="tab" aria-selected="false" aria-controls="panel6" tabindex="6${group.id}">Teachers</label>
                                    <div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
                                      <div class="tab_container">
                                            <div class="row">
                                                <div class="col-md-8" style="height:200px;">
                                                    <div class="containerLi">
                                                        <ul class="users" id="container_teachers_${group.name}">
                                                            <#if group.teachers??>
                                                                <#list group.teachers as teach>
                                                                    <li onclick='clickOnUser(this.id, "teacherG")' id="${group.name}_${teach.profileInfo.username}"><p id="P_${group.name}_${teach.profileInfo.username}">${teach.profileInfo.username}</p></li>
                                                                </#list>
                                                            </#if>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-4" style="height:200px;">

                                                    <div style="margin: 20px;"><button type="button" onClick='addUser("teacherG")' class="btnUserMenu">Добавить</button></div>
                                                    <div style="margin: 20px;"><button type="button" disabled id="deleteBtnT_${group.name}" onClick='deleteUser("teacherG")' class="btnUserMenu">Удалить</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
					</#list>
				</#if>
			</div>
        </div>
    </div>
</div>

<script>
	var selectedGroup = undefined;
	if($("#AADMIN").length){
		$(teacherFORteacher).show();
		$("#adminpanel").show();
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
	var selectedTeacherInGroup = undefined;
    
</script>
</body>
</html>