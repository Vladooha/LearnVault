//VLAD------------------------------------
function addTeacher(value) {
	$.ajax({
		url: "/ajax/add_teacher",
		data: ({
			teacherName: value
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addStudent(student, group) {
	$.ajax({
		url: "/ajax/add_student",
		data: ({
			studentName: student,
			groupName: group
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeStudent(student, group) {
	$.ajax({
		url: "/ajax/remove_student",
		data: ({
			studentName: student,
			groupName: group
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addCourseCategory(value) {
	$.ajax({
		url: "/ajax/add_course_category",
		data: ({
			categoryName: value
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addAdmin(value) {
	$.ajax({
		url: "/ajax/add_admin",
		data: ({
			adminName: value
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeTeacher(name){
	$.ajax({
		url: "/ajax/remove_teacher",
		data: ({
			teacherName: name
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addTeacherToGroup(groupName, teacherName){
	$.ajax({
		url: "/ajax/add_teacher_to_group",
		data: ({
			groupName: groupName,
			teacherName: teacherName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeTeacherFromGroup(groupName, teacherName){
	$.ajax({
		url: "/ajax/remove_teacher_from_group",
		data: ({
			groupName: groupName,
			teacherName: teacherName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeAdmin(name){
	$.ajax({
		url: "/ajax/remove_admin",
		data: ({
			adminName: name
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeCategory(name){
	$.ajax({
		url: "/ajax/remove_course_category",
		data: ({
			categoryName: name
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeMetaTag(nameMetaTag){
	$.ajax({
		url: "/ajax/remove_metatag",
		data: ({
			metatagName: nameMetaTag
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addMetatag(nameMetaTag){
	$.ajax({
		url: "/ajax/add_metatag",
		data: ({
			metatagName: nameMetaTag
		}),
		success: function f() {
			// Process answer
		}
	});
}

function changeUserName(oldname, newname){
	$.ajax({
		url: "/ajax/change_username",
		data: ({
			oldUsername: oldname,
			newUsername: newname
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addTagToMetaTag(nameMetaTag, nameTag, weight){
	$.ajax({
		url: "/ajax/add_tag_to_metatag",
		data: ({
			metatagName: nameMetaTag,
			tagName: nameTag,
			weight: weight
		}),
		success: function f() {
			// Process answer
		}
	});
}

function createGroup(groupName){
	$.ajax({
		url: "/ajax/create_group",
		data: ({
			groupName: groupName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function deleteGroup(groupName){
	$.ajax({
		url: "/ajax/delete_group",
		data: ({
			groupName: groupName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function createGroupByTeacher(groupName){
	$.ajax({
		url: "/ajax/create_group_by_teacher",
		data: ({
			groupName: groupName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function deleteGroupByTeacher(groupName){
	$.ajax({
		url: "/ajax/delete_group_by_teacher",
		data: ({
			groupName: groupName
		}),
		success: function f() {
			// Process answer
		}
	});
}

function addStudentByTeacher(student, group) {
	$.ajax({
		url: "/ajax/add_student_by_teacher",
		data: ({
			studentName: student,
			groupName: group
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeStudentByTeacher(student, group) {
	$.ajax({
		url: "/ajax/remove_student_by_teacher",
		data: ({
			studentName: student,
			groupName: group
		}),
		success: function f() {
			// Process answer
		}
	});
}

//DIMA--------------------------------------------------------------------------------
function addTag(){
	var nameTag = undefined, weightTag = undefined;
	swal("Введите тег:", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			nameTag = value;
			swal("Введите его вес:", {
			  content: "input",
			})
			.then((value) => {
				if(value != null){
					weightTag = value;
					addTagToMetaTag(selectedTag, nameTag, weightTag);
					swal("Тэг успешно добавлен!", {
					  icon: "success",
					});
				}
			});
		}
	});
}
function addGroup(){
	swal("Введите название группы:", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			createGroup(value);
			swal("Новая группа успешно создана!", {
				  icon: "success",
				}).then((value) => {
					location.reload();
				});
			setTimeout(function() { location.reload(); }, 2000);
		}
	});
}
function delGroup(){
	swal({
	  title: "Вы уверены?",
	  text: "Это действие приведет к безвозвратному удалению группы!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			deleteGroup(selectedGroup);
			document.getElementById("delGroup").hidden = true;
			swal("Группа успешно удалена!", {
				  icon: "success",
				}).then((value) => {
					location.reload();
				});
			setTimeout(function() { location.reload(); }, 2000);
		}
	});
}
function selecting(id, select = undefined){
		var lies =  undefined;
		switch(select){
			case "user":
				var buf = id.split('_');
				alert(buf);
				lies = document.getElementById('container_users_'+buf[0].substring(1)).getElementsByTagName("li");
				activatedBtns(false, "U_"+selectedGroup);
				selectedUser = buf[1];
				break;
			case "teacher":
				var buf = id.substring(1);
				alert(buf);
				lies = document.getElementById('container_teachers').getElementsByTagName("li");
				activatedBtns(false, "T");
				selectedTeacher = buf;
				break;
			case "category":
				var buf = id.substring(1);
				alert(buf);
				lies = document.getElementById('container_categories').getElementsByTagName("li");
				activatedBtns(false, "C");
				selectedCategories = buf;
				break;
			case "tag":
				var buf = id.substring(1);
				alert(buf);
				lies = document.getElementById('container_tags').getElementsByTagName("li");
				activatedBtns(false, "TAG");
				selectedTag = buf;
				break;	
			case "teacherG":
				var buf = id.split('_');
				alert(buf);
				lies = document.getElementById('container_teachers_'+buf[0].substring(1)).getElementsByTagName("li");
				activatedBtns(false, "T_"+selectedGroup);
				selectedTeacherInGroup = buf[1];
				break;
			default:
				var buf = id.substring(1);
				alert(buf);
				lies = document.getElementById('container_admins').getElementsByTagName("li");	
				activatedBtns(false, "A");
				selectedAdmin = buf;
				break;
		}
	
		//удаляем подсветку у всех остальных li
		for (var i = 0; i < lies.length; i++)
			lies[i].classList.remove("selectedLi");
		
		//добавляем подсветку selected li
		var userLI = document.getElementById(id);
		userLI.className = "selectedLi";
}
//включает/выключает кнопки удалить и изменить
function activatedBtns(flag, type){
	switch(type){
		case "TAG":
			document.getElementById("btnAddTag").disabled = flag;
			document.getElementById("deleteBtn"+type).disabled = flag
			break;
		case "U":
			document.getElementById("changeTeacher").disabled = flag;
		default:
			if ($("#changeBtn"+type).length) 
				document.getElementById("changeBtn"+type).disabled = flag;
			document.getElementById("deleteBtn"+type).disabled = flag;
	}
}
//удалить пользователя 
function deleting(select){

	var currentUserLi;

	swal({
	  title: "Вы уверены?",
	  text: "Это действие приведет к безвозвратному удалению всех данных!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			switch(select){
				case "user":
					activatedBtns(true, "U_"+selectedGroup);

					currentUserLi = document.getElementById("U" + selectedGroup+ "_" + selectedUser);
					
					//DELETE USER 
					removeStudent(selectedUser, selectedGroup);
					swal("Пользователь удален!", {
			  		icon: "success",
					});
					break;

				case "teacher":
					activatedBtns(true, "T");
					currentUserLi = document.getElementById("T" + selectedTeacher);
					
					//DELETE TEACHER 
					removeTeacher(selectedTeacher);
					swal("Учитель удален!", {
			  		icon: "success",
					});
					break;

				case "teacherG":
					activatedBtns(true, "T_"+selectedGroup);
					alert(selectedGroup);
					alert(selectedTeacherInGroup);
					currentUserLi = document.getElementById("T" + selectedGroup + "_" + selectedTeacherInGroup);
					
					//DELETE TEACHER 
					removeTeacherFromGroup(selectedGroup, selectedTeacherInGroup);
					swal("Учитель удален!", {
			  		icon: "success",
					});
					break;

				case "tag":
					activatedBtns(true, "TAG");
					currentUserLi = document.getElementById("M" + selectedTag);
					
					//DELETE METATAG

					removeMetaTag(selectedTag);
					swal("Метатег удален!", {
			  		icon: "success",
					});
					break;

				/*case "admin":
					currentUserLi = document.getElementById("A" + selectedAdmin);
					activatedBtns(true, "A");
					
					//DELETE ADMIN 
					removeAdmin(selectedAdmin);
					swal("Админ удален!", {
			  		icon: "success",
					});
					break;
					*/
				case "category":
					currentUserLi = document.getElementById("C" + selectedCategories);
					activatedBtns(true, "C");
					
					//DELETE CATEGORY 
					removeCategory(selectedCategories);
					swal("Категория курсов удалена!", {
			  		icon: "success",
					});
					break;
			}
			alert(currentUserLi.id);
			currentUserLi.remove();
			setTimeout(function() { location.reload(); }, 2000);
		  } 
	});
}

//переопределения функции remove
if (!Element.prototype.remove) {
	Element.prototype.remove = function remove() {
	  if (this.parentNode) {
	    this.parentNode.removeChild(this);
	  }
	};
}

function changeCurrentTabAdmin(){
	var id = $(":radio[name=tabs]").filter(":checked");
	alert(id);
	id = id[0].id;
    localStorage.setItem('currentTabAdmin', JSON.stringify(id));
    console.log(localStorage.getItem("currentTabAdmin"));
}
function alertSuccesWithReload(message){
	changeCurrentTabAdmin();
	swal(message, {
			  icon: "success",
	}).then((value) => {
		location.reload();
	});
	setTimeout(function() { location.reload(); }, 2000);
}
function add(select){
	//создаем строку
	var createdLi = document.createElement('li');

	//создаем параграф с текстом внутри строки
	var createdP = document.createElement('p');
	//добавляем параграм в строку

	//добавляем строку в список
	var parent;

	var nameUser = undefined;
	switch(select){
		case "user":
			nameUser = $('#userSelector option:selected').text();
			
			$('#students').hide();
			$('#mask').hide();
			
			alert(nameUser);
			addStudent(nameUser, selectedGroup);

			createdP.innerHTML = nameUser;
			createdP.id = "PS" + nameUser;
			createdLi.appendChild(createdP);
			createdLi.id = "S" + selectedGroup + "_" + nameUser;
			createdLi.onclick = function(){
				selecting(createdLi.id, "user");
			}

			parent = document.getElementById("container_users_" + selectedGroup);
			parent.appendChild(createdLi);

			//делаем ее выбранной
			selecting(createdLi.id, "user");

			alertSuccesWithReload("Студент добавлен!");
			break;

		case "teacher":
			nameUser = $('#teacherSelector option:selected').text();
			
			$('#teachers').hide();
			$('#mask').hide();

			alert(nameUser);
			addTeacher(nameUser);

			createdP.innerHTML = nameUser;
			createdP.id = "PT" + nameUser;
			createdLi.appendChild(createdP);
			createdLi.id = "T" + nameUser;
			createdLi.onclick = function(){
				selecting(createdLi.id, "teacher");
			}

			parent = document.getElementById("container_teachers");
			parent.appendChild(createdLi);

			//делаем ее выбранной
			selecting(createdLi.id, "teacher");

			alertSuccesWithReload("Учитель добавлен!");
			break;

		case "teacherG":
			nameUser = $('#teacherGSelector option:selected').text();
			
			$('#teachersG').hide();
			$('#mask').hide();

			alert(nameUser);
			addTeacherToGroup(selectedGroup, nameUser);

			createdP.innerHTML = nameUser;
			createdP.id = "PT" + selectedGroup + "_" + nameUser;
			createdLi.appendChild(createdP);
			createdLi.id = "T" + selectedGroup + "_" + nameUser;
			createdLi.onclick = function(){
				selecting(createdLi.id, "teacherG");
			}

			parent = document.getElementById("container_teachers_" + selectedGroup);
			parent.appendChild(createdLi);

			//делаем ее выбранной
			selecting(createdLi.id, "teacherG");

			alertSuccesWithReload("Учитель добавлен в группу!");
			break;

		case "admin":
			nameUser = $('#adminSelector option:selected').text();
			$('#admins').hide();
			$('#mask').hide();

			alert(nameUser);
			addAdmin(nameUser);

			createdP.innerHTML = nameUser;
			createdP.id = "PA" + nameUser;
			createdLi.appendChild(createdP);
			createdLi.id = "A" + nameUser;
			createdLi.onclick = function(){
				selecting(createdLi.id, "admin");
			}

			parent = document.getElementById("container_admins");
			parent.appendChild(createdLi);

			//делаем ее выбранной
			selecting(createdLi.id);

			alertSuccesWithReload("Админ добавлен!");
			break;

		case "tag":
			swal("Введите новый Метатег:", {
			  content: "input",
			})
			.then((value) => {
				if(value != null){
					createdP.innerHTML = value;
					createdP.id = "PM" + value;
					createdLi.appendChild(createdP);
					createdLi.id = "M" + value;
					createdLi.onclick = function(){
						selecting(createdLi.id, "tag");
					}

					parent = document.getElementById("container_tags");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					selecting(createdLi.id, "tag");

					addMetatag(value);
					
					alertSuccesWithReload("Метатег добавлен!");
				}
			});
			break;

		case "category":
			swal("Введите новю категорию курсов:", {
			  content: "input",
			})
			.then((value) => {
				if(value != null){
					createdP.innerHTML = value;
					createdP.id = "PC" + value;
					createdLi.appendChild(createdP);
					createdLi.id = "C" + value;
					createdLi.onclick = function(){
						selecting(createdLi.id, "category");
					}
					parent = document.getElementById("container_categories");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					selecting(createdLi.id, "category");

					addCourseCategory(value);
					
					alertSuccesWithReload("Категория курсов добавлена!");
				}
			});
			break;
	}
}
function changing(select){
	swal("Введите новое имя пользователя (логин):", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			switch(select){
				case "teacher":
					document.getElementById("PT" + selectedTeacher).innerHTML = value;
					document.getElementById("T" + selectedTeacher).id = "T" + value;
					document.getElementById("PT" + selectedTeacher).id = "PT" + value;

					changeUserName(selectedTeacher, value);
					selectedTeacher = value;
					
	 				alertSuccesWithReload("Логин учителя изменен!");
					break;
				case "admin":
					document.getElementById("PA" + selectedAdmin).innerHTML = value;
					document.getElementById("A" + selectedAdmin).id = "A" +  value;
					document.getElementById("PA" + selectedAdmin).id = "PA" + value;
					
					changeUserName(selectedAdmin, value);
					selectedAdmin = value;
					
					//FUNCTION CHANGE ADMIN HERE
					swal("Логин админа изменен!", {
	 				icon: "success",
					});
					break;
			}	
		}
	});
}
	