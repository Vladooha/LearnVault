<#import "/spring.ftl" as spring />

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Оценка курса</title>
    <!--link href="/css/main.css" rel="stylesheet"-->
</head>
<body>
<h2><b>Оцените курс:</b></h2>

<#assign path = "/course/" + course_id + "/rate">

<@spring.bind "feedbackForm"/>
<#if feedbackForm.complexity??>
    <div>${feedbackForm.complexity}</div>
</#if>
<form action=${path} method="post">
    Оцените сложность курса:<br>
    <@spring.formInput "feedbackForm.complexity"/>
    <#if feedbackForm??>
        <@spring.bind "feedbackForm.complexity"/>
        <@spring.showErrors "<br>"/>
    </#if>
    <br><br>
    Насколько курс оправдал ваши ожидания:<br>
    <@spring.formInput "feedbackForm.expectation"/>
    <#if feedbackForm??>
        <@spring.bind "feedbackForm.expectation"/>
        <@spring.showErrors "<br>"/>
    </#if>
    <br><br>
    Насколько сложным вам показался курс:<br>
    <@spring.formInput "feedbackForm.comprehensibility"/>
    <#if feedbackForm??>
        <@spring.bind "feedbackForm.comprehensibility"/>
        <@spring.showErrors "<br>"/>
    </#if>
    <br><br>

    <input type="hidden" name="_csrf" value="${_csrf.token}"/>

    <input type="submit" value="Submit">
</form>

<!--script src="/js/main.js"></script-->
</body>
</html>