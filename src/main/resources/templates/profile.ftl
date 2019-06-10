<#import "index_macro.ftl" as m>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Training portal</title>
  <link href="../static/images/icon.png" rel="shortcut icon" type="image/x-icon">
  <link href= "../static/css/demo1.css" rel="stylesheet">
  <link href= "../static/css/index.css" rel="stylesheet">
  <link href="../static/css/course_designer.css" rel="stylesheet" type="text/css">
  <link href="../static/css/search.css" rel="stylesheet">
  <link href=   "../static/css/simpleGridTemplate.css" rel="stylesheet" type="text/css">
  <!--<link href= "../static/css/Untitled-1.css" rel="stylesheet" type="text/css">-->
  <script src="../static/scripts/libs/jquery-1.12.4.min.js"></script>
  <script src="../static/scripts/wb.carousel.min.js"></script>
  <script src="../static/scripts/searchindex.js"></script>
  <script src="../static/scripts/wb.sitesearch.min.js"></script>
  <script src="../static/scripts/login.js"></script>
  <script src="../static/scripts/Carousel.js"></script>

  <!-- Carousel -->
  <link href="../static/css/initcarousel-1.css"  rel="stylesheet">
  <script src="../static/scripts/libs/jquery.js"></script>
  <script src="../static/scripts/libs/carousel.js"></script>
  <script src="../static/scripts/libs/initcarousel.js"></script>
</head>
<body>
<div id="LayerBody" >
  <div id="LayerBody_Container">
    <div id="LayerMain">
      <@m.header_site/>
        <div style="height: 20vh;"> 
         <div style="margin: 30px 0;height: 100%;">
         <#if profile??>
            <div class="profile_image">
              <img src="../static/images/profile.png" width="100%" height="100%" alt=""/>
            </div>
            <div class="information">
            <!--<img src="images/profile.png" width="127" height="121" alt=""/-->
              <div>
                <h3 id="name_of_user" class="h3">${profile.name} ${profile.surname}</h3>
              </div>
              <div style="margin: 10px 0;">
                <h5 id="name_of_user" class="h5" style="font-size: 20px;">Табельный номер: ${profile.tnumber}</h5>
              </div>
              <div style="width: 100%;">
                <div style="width: 30%;float:left;">
                  <button name="change_foto" value="change_foto" type="button" class="orangeButton" style="width:80%;margin-right:10%;">Изменить фото</button>
                </div>
                <div style="width: 50%;float:left;">
                  <button name="change_data" value="change_data" type="button" class="orangeButton" style="width:80%;margin:0 auto;">Изменить данные о себе</button>
                </div>
                <div style="width: 20%;float:left;">
                  <form action="/logout">
                    <button name="Exit" class="blueButton" value="exit" style="width:80%;margin-left:10%;">Выход</button> 
                  </form>
                </div>
                
              </div>
            </div>
         </div>
        </div>

        <#if profile.courseProgresses??>
          <#assign flagCourse=profile.courseProgresses>
          <#if 0 &lt; flagCourse?size>
          <div style="width:100%;">
            <div style="margin:10px; text-align: center;"><h3 class="h3" style="font-size:35px;">Изучаемые курсы</h3></div>
            <!-- Insert to your webpage where you want to display the carousel -->
                <div id="amazingcarousel-container-1">
                    <div id="amazingcarousel-1" style="display:none;position:relative;width:100%;max-width:960px;margin:0px auto 0px;">
                        <div class="amazingcarousel-list-container">
                            <ul class="amazingcarousel-list">
                              <#list profile.courseProgresses as courseProgress>
                                <li class="amazingcarousel-item">
                                    <div class="amazingcarousel-item-container">
                                        <div class="amazingcarousel-image">
                                          <a href="#dialog${courseProgress.course.id}" name="modal">
                                            <#if courseProgress.course.pic??>
                                              <#assign flagPic=courseProgress.course.pic>
                                              <#if 4 &lt; flagPic?length>
                                                  <img src=${courseProgress.course.pic} style="height:180px;width:240px;" />
                                              <#else>
                                                  <img src="../static/images/icon_course.png" style="height:180px;width:240px;" />
                                              </#if>
                                            </#if>
                                          </a>
                                        </div>
                                        <div class="amazingcarousel-title">
                                          <div>
                                            ${courseProgress.course.name}
                                          </div>
                                          <div>
                                            Баллов заработано: ${courseProgress.currScore} из ${courseProgress.course.score}
                                          </div>
                                        </div>
                                    </div>
                                </li>
                                </#list>
                            </ul>
                            <div class="amazingcarousel-prev"></div>
                            <div class="amazingcarousel-next"></div>
                            <div class="amazingcarousel-engine"><a href="http://amazingcarousel.com">jQuery Image Scroller</a></div>
                        </div>
                    </div>
                </div>
          </div>
          <#list profile.courseProgresses as courseProgress>
            <div id="boxes">
              <div id="dialog${courseProgress.course.id}" class="window">
                <div  style="padding:20px 30px;width:250px;height:250px;float:left;">
                  <#if courseProgress.course.pic??>
                      <img src=${courseProgress.course.pic} style="width:250px;height:250px;">
                    <#else>
                    <img src="../static/images/icon_course.png" style="width:250px;height:250px;">
                  </#if>
                  </div>
                <div style="float:left;min-height:160px;max-width:910px;margin-top:20px;">
                  <div style="width:750px;">
                    <h5 class="H5" style="margin: 20px 50px; font-size:28px;">${courseProgress.course.name}</h5>
                    <a href="#"class="close" style="float:right;margin-left: 20px;"/><img src="../static/images/delete.png" width="24" height="24" alt=""/></a>
                  </div>
                  <div style="width:750px;margin-top: 30px;">
                    <h3 class="result_description">
                      ${courseProgress.course.description}
                    </h3>
                  </div>
                  <div style="width:750px;margin: 40px 40px;">
                    <#list courseProgress.course.tags as tag>
                      <span class="tag">${tag.name}</span>
                    </#list>
                  </div>
                  <div  style="width:750px;margin: 40px 40px;">
                      <#if 0 < courseProgress.course.time>
                                        <@m.time_to_search courseProgress.course.time/>
                                    <#else>
                                        <label id="no_time" class="timer">Курс не ограничен по времени</label>
                                    </#if>
                                </div>
                  <#if courseProgress.course.feedback?? && courseProgress.course.feedback.voteCount!=0>
                  <div style="width:750px;margin: 40px 40px;">
                    <div style="margin: 10px 0 0 70px;">
                      <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Сложность: </h4>
                      <div id="rating_1">
                        <input type="hidden" id="complexity" name="val" value="${courseProgress.course.feedback.complexity}"/>
                        <input type="hidden" name="votes" value="${courseProgress.course.feedback.voteCount}">
                      </div>
                    </div>
                    <div style="margin: 10px 0 0 70px;">
                      <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Соответствие ожиданиям: </h4>
                      <div id="rating_2">
                        <input type="hidden" id="complexity" name="val" value="${courseProgress.course.feedback.expectation}"/>
                        <input type="hidden" name="votes" value="${courseProgress.course.feedback.voteCount}">
                      </div>
                    </div>
                    <div style="margin: 10px 0 0 70px;">
                      <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Понятность:</h4>
                      <div id="rating_3">
                        <input type="hidden" id="complexity" name="val" value="${courseProgress.course.feedback.comprehensibility}"/>
                        <input type="hidden" name="votes" value="${courseProgress.course.feedback.voteCount}">
                      </div>
                    </div>
                  </div>
                  </#if>
                    <div style="width:750px;">
                    <input id="btn_save_page" class="orangeButton" type="button" value="Продолжить прохождение курса" style="display: block; width: 500px; height: 40px; margin: 20px auto;" onClick="window.location.href='/course/${courseProgress.course.id}';return false;">
                  </div>
                </div>
              </div>
            </div>
            </#list>
            <!-- Макска, которая затемняет весь экран -->
              <div id="mask"></div>
          </#if>
        </#if>
      </#if>
<!--КОНЕЦ МОЕГО КОДА -->      
    </div>
    <@m.footer_site/>
  </div>
</div>
</body>
<script src="../static/scripts/modal.js"></script>
</html>