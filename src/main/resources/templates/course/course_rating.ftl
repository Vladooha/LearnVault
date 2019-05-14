<#import "/spring.ftl" as spring />

<!DOCTYPE html>
<html lang="ru" xmlns:form="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Оценка курса</title>
    <!--link href="/css/main.css" rel="stylesheet"-->
</head>
<body>
<h2><b>Оцените курс:</b></h2>

<#assign path = "/course/" + course_id + "/rate">

<@spring.bind "feedbackForm"/>
<!-- Input id is like field name. For example this input id='complexity' -->
<!-- Custom input is required for all 3 inputs and then value of each custom input
should be pasted in spring input forms by JS-->
<!--form-- action=${path} method="post">
    Оцените сложность курса:<br>
    <@spring.formHiddenInput "feedbackForm.complexity"/>
    <@spring.showErrors "<br>"/>
    <br><br>
    Насколько курс оправдал ваши ожидания:<br>
    <@spring.formHiddenInput "feedbackForm.expectation"/>
    <@spring.showErrors "<br>"/>
    <br><br>
    Насколько сложным вам показался курс:<br>
    <@spring.formHiddenInput "feedbackForm.comprehensibility"/>
    <@spring.showErrors "<br>"/>
    <br><br>

    <input type="hidden" name="_csrf" value="${_csrf.token}"/>

    <input type="submit" value="Submit">
</form-->

<!--springForm:form modelAttribute="feedbackForm" method="POST" action=${path}>
    <input type="hidden" name="_csrf" value="${_csrf.token}"/>

    <table>
        <tr>
            <td><springForm:label path="complexity">Оцените сложность курса:</springForm:label></td>
            <td><springForm:input path="complexity"/></td>
        </tr>
        <tr>
            <td><springForm:label path="expectation">Насколько сложным вам показался курс:</springForm:label></td>
            <td><springForm:input path="expectation"/></td>
        </tr>
        <tr>
            <td><springForm:label path="comprehensibility">Насколько сложным вам показался курс:</springForm:label></td>
            <td><springForm:input path="comprehensibility"/></td>
        </tr>
        <tr>
            <td><input type="submit" value="Submit"/></td>
        </tr>
    </table>
</springForm:form-->

<form action=${path} method="post">
    Оцените сложность курса:<br>
    <@spring.bind "feedbackForm.complexity"/>
    <input id="complexity"
           name="${spring.status.expression}"
           value="${spring.status.value?default("")}"/>
    <#list spring.status.errorMessages as error> <b>${error}</b></#list>
    <br><br>

    Насколько курс оправдал ваши ожидания:<br>
    <@spring.bind "feedbackForm.expectation"/>
    <input id="expectation"
           name="${spring.status.expression}"
           value="${spring.status.value?default("")}"/>
    <#list spring.status.errorMessages as error> <b>${error}</b></#list>
    <br><br>

    Насколько сложным вам показался курс:<br>
    <@spring.bind "feedbackForm.comprehensibility"/>
    <input id="comprehensibility"
           name="${spring.status.expression}"
           value="${spring.status.value?default("")}"/>
    <#list spring.status.errorMessages as error> <b>${error}</b></#list>
    <br><br>

    <input type="hidden" name="_csrf" value="${_csrf.token}"/>

    <input type="submit" value="Submit">
</form>

<!--script src="/js/main.js"></script-->
</body>
</html>