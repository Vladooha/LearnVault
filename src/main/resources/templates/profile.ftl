<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Light Theme</title>
<link href="../static/css/simpleGridTemplate.css" rel="stylesheet" type="text/css">
</head>
<body>
<!-- Main Container -->
<div class="container"> 
  <!-- Hero Section -->
 
    <div class="profile_image"><img src="../static/images/profile.png" width="200" height="120" alt=""/></div>
    <div class="column">
      <#if profile??>
	    <!--<img src="images/profile.png" width="127" height="121" alt=""/-->
        <h3 id="name_of_user">${profile.name} ${profile.surname}</h3>
        <h3 id="telephone_of_user">Табельный номер: ${profile.tnumber}</h3>
        <#if profile.courseProgresses??>
          <h3 id="courses_of_user">Изучаемые курсы:</h3>
          <#list profile.courseProgresses as courseProgress>
            <h5 id="courses_of_user">Название: ${courseProgress.course.name}</h5>
            <h5 id="courses_of_user">Баллов заработано: ${courseProgress.currScore} из ${courseProgress.course.score}</h5>
          </#list>
        </#if>
      <#else>

      </#if>
  </div>
  <div>
    <form action="/logout">
        <button name="Exit">Выход</button>
    </form>
  </div>
  <div class="sign"> <hr><h5>Напоминания</h5><hr> </div>
	
  <!-- Stats Gallery Section -->
  <div class="gallery">
    <div class="thumbnail"> <a href="#"><img src= "../static/images/IT.jpg" alt="" width="2000" class="cards"/></a>
      <h4>Назначено тестирование на завтра</h4>
      <p class="tag">Информационные технологии,тест</p>
    </div>
    <div class="thumbnail"> <a href="#"><img src= "../static/images/computer.jpg" alt="" width="2000" class="cards"/></a>
      <h4>Назначено тестирование на  неделе</h4>
		<p class="tag">Компьютерные науки, тест</p>
    </div>
    <div class="thumbnail"> <a href="#"><img src=  "../static/images/IT.jpg" alt="" width="2000" class="cards"/></a>
      <h4>В текущем месяце аттестация</h4>
      <p class="tag">Информационные технологии,аттестация</p>
      
    </div>
    <div class="thumbnail"> <a href="#"><img src="../static/images/computer.jpg" alt="" width="2000" class="cards"/></a>
      <h4>В текущем месяце аттестация</h4>
      <p class="tag">Компьютерные науки, аттестация</p>
      
    </div>
  </div>
	
  <div class="sign"> <hr><h5>Ваши курсы</h5><hr> </div>
<!--Need progress bar-->
  <div class="gallery">
    <div class="thumbnail"> <a href="#"><img src="../static/images/IT.jpg" alt="" width="2000" class="cards"/></a>
      <h4>TITLE</h4>
      <progress max="100" value="80"></progress>      
    </div>
    <div class="thumbnail"> <a href="#"><img src="../static/images/nauka_dannih.jpg" alt="" width="2000" class="cards"/></a>
      <h4>TITLE</h4>
     <progress max="100" value="50"></progress>
    </div>
    <div class="thumbnail"> <a href="#"><img src="../static/images/computer.jpg" alt="" width="2000" class="cards"/></a>
      <h4>TITLE</h4>
     <progress max="100" value="70"></progress>
     
    </div>
    <div class="thumbnail"> <a href="#"><img src= "../static/images/personality.jpg" alt="" width="2000" class="cards"/></a>
      <h4>TITLE</h4>
		<progress max="100" value="30"></progress>
    </div>
  </div>
  
  
</div>
<!-- Main Container Ends -->
</body>
</html>
