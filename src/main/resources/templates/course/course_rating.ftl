<#import "/spring.ftl" as spring />

<!DOCTYPE html>
<html lang="ru" xmlns:form="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Оценка курса</title>
    <link href="../../static/css/demo1.css" rel="stylesheet">
    <link href="../../static/css/index.css" rel="stylesheet">
    <link href="../../static/css/Page_of_courses.css" rel="stylesheet">
    <link href="../../static/css/jquery.rating.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

    <!--script type="text/javascript">
        window.jQuery || document.write('<script type="text/javascript" src="../../static/scripts/libs/jquery-1.6.2.min.js"><\/script>');
    </script-->

    <script type="text/javascript" src="../../static/scripts/libs/jquery.rating-2.0.min.js"></script>

    <script type="text/javascript">
            $('#complexityStar').on('click', function(event) {
                event.preventDefault();
                console.log("Complexity marked");
                $('#complexity').val($(this).val());
            });

            $('#comprehensibilityStar').change(function() {
                alert("Comprehensibility marked");
                $('#comprehensibility').val($(this).val());
            });

            $('#expectationStar').on('input change', function(event) {
                event.preventDefault();
                console.log("Expression marked");
                $('#expression').val($(this).val());
            });

            $(function(){

            $('#rating_1').rating({
                fx: 'full',
                image: '../../static/images/stars.png',
            });

            $('#rating_2').rating({
                fx: 'full',
                image: '../../static/images/stars.png',
            });

            $('#rating_3').rating({
                fx: 'full',
                image: '../../static/images/stars.png',
            });
            })
    </script>
</head>
<body>
<div id="LayerBody">
    <div id="LayerBody_Container">
        <div id="LayerMain">
            <div class="page_title" id="name_of_page">Оцените курс:</div>

            <#assign path = "/course/" + course_id + "/rate">

            <@spring.bind "feedbackForm"/>

            <form action=${path} method="post">
                <div style="margin: 30px 0 0 70px;">
                    <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Оцените сложность курса:</h4>
                    <div id="rating_1">
                        <input type="hidden" id="complexityStar" name="vote-id" value="1"/>
                    </div>
                </div>
                <@spring.bind "feedbackForm.complexity"/>

                <div style="margin: 30px 0 0 70px;">
                    <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Насколько курс оправдал ваши ожидания:</h4>
                    <div id="rating_2">
                        <input type="hidden" id="expectationStar" name="vote-id" value="1"/>
                    </div>
                </div>
                <@spring.bind "feedbackForm.expectation"/>

                <div style="margin: 30px 0 0 70px;">
                    <h4 class="h5" style="font-size:18px; color:rgba(0,70,134,1.00); ">Насколько понятным вам показался курс:</h4>
                    <div id="rating_3">
                        <input type="hidden" id="comprehensibilityStar" name="vote-id" value="1"/>
                    </div>
                </div>
                <@spring.bind "feedbackForm.comprehensibility"/>

                <input type="hidden" name="_csrf" value="${_csrf.token}"/>

                <!--input type="submit" value="Проголосовать" class="orangeButton" style="width: 200px; height: 40px; margin:70px auto;"-->
            </form>

            <form action=${path} method="post">
                <@spring.bind "feedbackForm.complexity"/>
                <input id="complexity"
                       type="hidden"
                       name="${spring.status.expression}"
                       value="${spring.status.value?default("")}"/>
                <#list spring.status.errorMessages as error> <b>${error}</b></#list>

                <@spring.bind "feedbackForm.expectation"/>
                <input id="expectation"
                       type="hidden"
                       name="${spring.status.expression}"
                       value="${spring.status.value?default("")}"/>
                <#list spring.status.errorMessages as error> <b>${error}</b></#list>

                <@spring.bind "feedbackForm.comprehensibility"/>
                <input type="hidden"
                       id="comprehensibility"
                       name="${spring.status.expression}"
                       value="${spring.status.value?default("")}"/>
                <#list spring.status.errorMessages as error> <b>${error}</b></#list>

                <input type="hidden" name="_csrf" value="${_csrf.token}"/>

                <input type="submit" value="Проголосовать" class="orangeButton" style="width: 200px; height: 40px; margin:70px auto;" onclick="getRating()">
            </form>
        </div>
    </div>
</div>
</body>
<script type="text/javascript">
    function getRating(){
         var boxes = document.getElementsByClassName("vote-success");
         var res_rating = []
         for (var i = 0; i < 3; i++) {
            var str = boxes[i].textContent;
            res_rating.push(Number(str.match(/\d/)));
         }
        $('#complexity').val(res_rating[0]);
        $('#comprehensibility').val(res_rating[1]);
        $('#expectation').val(res_rating[2]);
        console.log(res_rating);
        return res_rating;
    }
</script>
</html>