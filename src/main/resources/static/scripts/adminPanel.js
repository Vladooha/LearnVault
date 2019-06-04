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
			metetagName: nameMetaTag
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
			metetagName: nameMetaTag
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
			mameMetaTag: nameMetaTag,
			nameTag: nameTag,
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


//DIMA--------------------------------------------------------------------------------
function addTag(){
	var nameTag = undefined, weightTag = undefined;
	swal("Введите тег:", {
	  content: "input",
	})
	.then((value) => {
		nameTag = value;
		swal("Введите его вес:", {
		  content: "input",
		})
		.then((value) => {
			weightTag = value;
			addTagToMetaTag(selectedTag, nameTag, weightTag);
			swal("Тэг успешно добавлен!", {
			  icon: "success",
			});
		});
	});
}
function addGroup(){
	swal("Введите название группы:", {
	  content: "input",
	})
	.then((value) => {
		createGroup(value);
		swal("Новая группа успешно создана!", {
			  icon: "success",
			}).then((value) => {
				location.reload();
			});
		setTimeout(function() { location.reload(); }, 2000);
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
		deleteGroup(selectedGroup);
		document.getElementById("delGroup").hidden = true;
		swal("Группа успешно удалена!", {
			  icon: "success",
			}).then((value) => {
				location.reload();
			});
		setTimeout(function() { location.reload(); }, 2000);
	});
}
function clickOnUser(id, select = undefined){
		var lies =  undefined;
		switch(select){
			case "user":
				var buf = id.split('_');
				lies = document.getElementById('container_users_'+buf[0]).getElementsByTagName("li");
				activatedBtns(false, "U_"+selectedGroup);
				selectedUser = buf[1];
				break;
			case "teacher":
				lies = document.getElementById('container_teachers').getElementsByTagName("li");
				activatedBtns(false, "T");
				selectedTeacher = id;
				break;
			case "category":
				lies = document.getElementById('container_categories').getElementsByTagName("li");
				activatedBtns(false, "C");
				selectedCategories = id;
				break;
			case "tag":
				lies = document.getElementById('container_tags').getElementsByTagName("li");
				activatedBtns(false, "TAG");
				selectedTag = id;
				break;	
			case "teacherG":
				var buf = id.split('_');
				lies = document.getElementById('container_teachers_'+buf[0]).getElementsByTagName("li");
				activatedBtns(false, "T_"+selectedGroup);
				selectedTeacherInGroup = buf[1];
				break;
			default:
				lies = document.getElementById('container_admins').getElementsByTagName("li");	
				activatedBtns(false, "A");
				selectedAdmin = id;
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
			if ($("changeBtn"+type).length) 
				document.getElementById("changeBtn"+type).disabled = flag;
			document.getElementById("deleteBtn"+type).disabled = flag;
	}
}
//удалить пользователя 
function deleteUser(select){

	var currentUserLi;

	swal({
	  title: "Вы уверены?",
	  text: "Это действие приведет к безвозвратному удалению всех данных о пользователе!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((willDelete) => {

		if (willDelete) {
			swal("Пользователь удален!", {
			  icon: "success",
			});
			switch(select){
				case "user":
					activatedBtns(true, "U_"+selectedGroup);

					currentUserLi = document.getElementById(selectedGroup+ "_" + selectedUser);
					
					//DELETE USER 
					removeStudent(selectedUser, selectedGroup);
					
					break;

				case "teacher":
					activatedBtns(true, "T");
					currentUserLi = document.getElementById(selectedTeacher);
					
					//DELETE TEACHER 
					removeTeacher(selectedTeacher);
					
					break;

				case "teacherG":
					activatedBtns(true, "T_"+selectedGroup);
					currentUserLi = document.getElementById(selectedGroup+ "_" + selectedTeacherInGroup);
					
					//DELETE TEACHER 
					removeTeacherFromGroup(selectedGroup, selectedTeacherInGroup);
					
					break;

				case "tag":
					activatedBtns(true, "TAG");
					currentUserLi = document.getElementById(selectedTag);
					
					//DELETE METATAG
					removeMetaTag(selectedTag);
					
					break;

				case "admin":
					currentUserLi = document.getElementById(selectedAdmin);
					activatedBtns(true, "A");
					
					//DELETE ADMIN 
					removeAdmin(selectedAdmin);
					
					break;
					
				case "category":
					currentUserLi = document.getElementById(selectedCategories);
					activatedBtns(true, "C");
					
					//DELETE CATEGORY 
					removeCategory(selectedCategories);
					
					break;
			}
			currentUserLi.remove();
		  } 
	});
}
function addUser(select){
	swal("Введите новое имя:", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			//создаем строку
			var createdLi = document.createElement('li');

			//создаем параграф с текстом внутри строки
			var createdP = document.createElement('p');
			if (select != "teacherG")
				createdP.id = "P" + value;
			else
				createdP.id = "P" + selectedGroup + "_" + value;
			createdP.innerHTML = value;
			//добавляем параграм в строку
			createdLi.appendChild(createdP);

			//добавляем строку в список
			var parent;

			switch(select){
				case "user":
					createdLi.id = selectedGroup + "_" + value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "user");
					}

					parent = document.getElementById("container_users_" + selectedGroup);
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id, "user");

					addStudent(value, selectedGroup);

					break;

				case "teacher":
					createdLi.id = value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "teacher");
					}

					parent = document.getElementById("container_teachers");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id, "teacher");

					//ADD TEACHER
					addTeacher(value);
					break;

				case "teacherG":
					createdLi.id = selectedGroup + "_" + value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "teacherG");
					}

					parent = document.getElementById("container_teachers_" + selectedGroup);
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id, "teacherG");

					//ADD TEACHER
					addTeacherToGroup(selectedGroup, value)
					break;

				case "admin":
					createdLi.id = value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "admin");
					}

					parent = document.getElementById("container_admins");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id);

					//ADD ADMIN
					addAdmin(value)
					break;

				case "tag":
					createdLi.id = value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "tag");
					}

					parent = document.getElementById("container_tags");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id, "tag");

					//ADD METATAG
					addMetatag(value);
					
					break;
					
				case "category":
					createdLi.id = value;
					createdLi.onclick = function(){
						clickOnUser(createdLi.id, "category");
					}
					parent = document.getElementById("container_categories");
					parent.appendChild(createdLi);

					//делаем ее выбранной
					clickOnUser(createdLi.id, "category");

					//ADD CATEGORY
					addCourseCategory(value);
					break;
			}
				swal("Пользователь добавлен!", {
					  icon: "success",
					});
		}
	});
}


function changeUser(select){
	swal("Введите новое имя пользователя (логин):", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			switch(select){
				case "user":
					document.getElementById("P" + selectedUser).innerHTML = value;
					document.getElementById(selectedUser).id = value;
					document.getElementById("P" + selectedUser).id = "P" + value;

					changeUserName(selectedUser, value);
					selectedUser = value;
					
					//FUNCTION CHANGE USER HERE
					
					break;

				case "teacher":
					document.getElementById("P" + selectedTeacher).innerHTML = value;
					document.getElementById(selectedTeacher).id = value;
					document.getElementById("P" + selectedTeacher).id = "P" + value;

					changeUserName(selectedTeacher, value);
					selectedTeacher = value;
					
					//FUNCTION CHANGE TEACHER HERE
					
					break;

				case "admin":
					document.getElementById("P" + selectedAdmin).innerHTML = value;
					document.getElementById(selectedAdmin).id = value;
					document.getElementById("P" + selectedAdmin).id = "P" + value;
					
					changeUserName(selectedAdmin, value);
					selectedAdmin = value;
					
					//FUNCTION CHANGE ADMIN HERE
					
					break;

				case "teacherG":{
					document.getElementById("PG" + selectedTeacherInGroup).innerHTML = value;
					document.getElementById("G"+selectedTeacherInGroup).id = "G" + value;
					document.getElementById("PG" + selectedTeacherInGroup).id = "PG" + value;
					
					changeUserName(selectedTeacherInGroup, value);
					selectedCategories = value;
					
					//FUNCTION CHANGE ADMIN HERE
				}
			}	
		  swal("Имя пользователя изменено!", {
			  icon: "success",
			});
		}
	});
}
	