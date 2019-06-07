<#import "index_macro.ftl" as m>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Training portal</title>
  <link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
  <link href= "../static/css/demo1.css" rel="stylesheet">
  <link href= "../static/css/index.css" rel="stylesheet">
  <link href=   "../static/css/simpleGridTemplate.css" rel="stylesheet" type="text/css">
  <!--<link href= "../static/css/Untitled-1.css" rel="stylesheet" type="text/css">-->
  <script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
  <script src="../static/scripts/wb.carousel.min.js"></script>
  <script src="../static/scripts/searchindex.js"></script>
  <script src="../static/scripts/wb.sitesearch.min.js"></script>
  <script src="../static/scripts/login.js"></script>
  <script src="../static/scripts/Carousel.js"></script>
</head>
<body>
<div id="LayerBody" >
  <div id="LayerBody_Container">
    <div id="LayerMain">
      <@m.header_site/>
        <!-- СЮДА ХРЕНАЧЬ КОД -->
        <div class="container"> 
          <!-- Hero Section -->
         <div class="column">
         <#if profile??>
            <div class="profile_image"><img src="../static/images/profile.png" width="150" height="120" alt=""/></div>
            <div class="information">
            <!--<img src="images/profile.png" width="127" height="121" alt=""/-->
              <div>
            <h3 id="name_of_user" class="h3">${profile.name} ${profile.surname}</h3>
            </div>
              <div style="margin: 10px 0;">
             <h3 id="telephone_of_user">Табельный номер: ${profile.tnumber}</h3>
            </div>
            <div>
            <!--action="/logout" -->
            <form action="/logout" style="margin:20px auto;">
              <button name="Exit" class="orangeButton" value="exit" style="width:150px;float:left;margin:0 20px;">Выход</button> 
            </form>
              <button name="change_foto" value="change_foto" type="button" class="orangeButton" style="width:150px;float:left;margin-right: 20px;">Изменить фото</button>
              <button name="change_data" value="change_data" type="button" class="orangeButton">Изменить данные о себе</button>
              </form>
             </div>
          </div>
         </div>
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
<!--КОНЕЦ МОЕГО КОДА -->      
</div>
  </div>
</div>
</body>
<script>
    $("#SiteSearch1").keyup(function(event){
        if(event.keyCode == 13){
            searchPage()
        }
    });
</script>

</html>