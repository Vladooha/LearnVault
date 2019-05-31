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

function addStudent(teacher, student) {
	$.ajax({
		url: "/ajax/add_student",
		data: ({
			teacherName: teacher,
			studentName: student
		}),
		success: function f() {
			// Process answer
		}
	});
}

function removeStudent(teacher, student) {
	$.ajax({
		url: "/ajax/remove_student",
		data: ({
			teacherName: teacher,
			studentName: student
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
//functrion removeTeacher(name){
//
//}

//functrion removeAdmin(name){
//
//}

//functrion removeCategory(name){
//
//}

//functrion removeMetaTag(nameMetaTag){
//
//}

//function addMetatag(nameMetaTag){
//
//}

//function changeUserName(name){
//
//}

//function addTagToMetaTag(nameMetaTag, nameTag){
//
//}



//DIMA--------------------------------------------------------------------------------
function clickOnUser(id, select = undefined){
		var lies =  undefined;
		switch(select){
			case "user":
				lies = document.getElementById('container_users').getElementsByTagName("ul");
				activatedBtns(false, "U");
				selectedUser = id;
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
					activatedBtns(true, "U");
					currentUserLi = document.getElementById(selectedUser);
					var teacher = document.getElementById("T" + selectedUser).innerHTML;
					
					//DELETE USER 
					removeStudent(teacher, selectedUser)
					
					break;

				case "teacher":
					activatedBtns(true, "T");
					currentUserLi = document.getElementById(selectedTeacher);
					
					//FUNCTION DELETE TEACHER HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;

				case "tag":
					activatedBtns(true, "TAG");
					currentUserLi = document.getElementById(selectedTag);
					
					//FUNCTION DELETE METATAG HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;

				case "admin":
					currentUserLi = document.getElementById(selectedAdmin);
					activatedBtns(true, "A");
					
					//FUNCTION DELETE ADMIN HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;
					
				case "category":
					currentUserLi = document.getElementById(selectedCategories);
					activatedBtns(true, "C");
					
					//FUNCTION DELETE CATEGORY HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;
			}
			currentUserLi.remove();
		  } 
	});
}
function addUser(select){
	var createdStudentUl = document.createElement('ul');
	swal("Введите новое имя:", {
	  content: "input",
	})
	.then((value) => {
		if(value != null){
			//создаем строку
			var createdLi = document.createElement('li');

			//создаем параграф с текстом внутри строки
			var createdP = document.createElement('p');
			createdP.id = "P" + value;
			createdP.innerHTML = value;
			//добавляем параграм в строку
			createdLi.appendChild(createdP);

			//добавляем строку в список
			var parent;

			switch(select){
				case "user":
					createdStudentUl.id = value;
					createdStudentUl.onclick = function(){
						clickOnUser(createdStudentUl.id, "user");
					}
					
					createdStudentUl.appendChild(createdLi);
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

					//FUNCTION ADD METATAG
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
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
					addCourseCategory(value)
					break;
			}
			if (select === "user"){
			swal("Введите имя преподавателя:", {
			  content: "input",
			})
			.then((value) => {
				if(value != null){
					var createdLiTeach = document.createElement('li');
					var createdPTeach = document.createElement('p');
					createdPTeach.id = "T" + value;
					createdPTeach.innerHTML = value;
					
					createdLiTeach.appendChild(createdPTeach);
					
					parent = document.getElementById("container_users");
					createdStudentUl.appendChild(createdLiTeach);
					parent.appendChild(createdStudentUl);

					//делаем ее выбранной
					clickOnUser(createdStudentUl.id, "user");

					//ADD USER
					addStudent(value, createdStudentUl.id);
					
					swal("Пользователь добавлен!", {
					  icon: "success",
					});
				}
				
				});
			}
			else{
				swal("Пользователь добавлен!", {
					  icon: "success",
					});
			}
		}
	});
}

//В РАЗРАБОТКЕ
function changeTeacher(){

	var myArrayOfThings = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ];

    var options = {};
    $.map(myArrayOfThings,
        function(o) {
            options[o.id] = o.name;
        });

	swal({
	  title: 'Выберите группу:',
	  input: 'select',
	  inputOptions: options,
	  inputPlaceholder: 'required',
	  showCancelButton: true,
	  inputValidator: function (value) {
	    return new Promise(function (resolve, reject) {
	      if (value !== '') {
	        resolve();
	      } else {
	        reject('You need to select a Tier');
	      }
	    });
	  }
	}).then(function (result) {
	  if (result.value) {
	  	var paragraf = document.getElementById("T" + selectedUser);
	  	paragraf.innerHTML = result.value;
	  	paragraf.id = "T" + result.value;
	    swal("Группа обучения успешно изменена!", {
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
					selectedUser = value;
					
					//FUNCTION CHANGE USER HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;

				case "teacher":
					document.getElementById("P" + selectedTeacher).innerHTML = value;
					document.getElementById(selectedTeacher).id = value;
					document.getElementById("P" + selectedTeacher).id = "P" + value;
					selectedTeacher = value;
					
					//FUNCTION CHANGE TEACHER HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;

				case "admin":
					document.getElementById("P" + selectedAdmin).innerHTML = value;
					document.getElementById(selectedAdmin).id = value;
					document.getElementById("P" + selectedAdmin).id = "P" + value;
					selectedAdmin = value;
					
					//FUNCTION CHANGE ADMIN HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;
					
				case "category":
					document.getElementById("P" + selectedCategories).innerHTML = value;
					document.getElementById(selectedCategories).id = value;
					document.getElementById("P" + selectedCategories).id = "P" + value;
					selectedCategories = value;
					
					//FUNCTION CHANGE ADMIN HERE
					//------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
					//
					
					break;
			}	
		  swal("Имя пользователя изменено!", {
			  icon: "success",
			});
		}
	});
}
	