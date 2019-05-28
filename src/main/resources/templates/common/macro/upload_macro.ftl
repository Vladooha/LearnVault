<#macro upload fileId>
    <form enctype="multipart/form-data">
        <div class="investment">
            <div><h4>Прикрепить фото</h4></div>
            <div><h5 class="h5">(.jpg, .jpeg, .png)</h5></div>
            <div class="upload">
                <input type=${fileId} name="file" id="file" accept=".jpg, .jpeg, .png" style="margin:20px;">
            </div>
        </div>
        <!--input type="button" onclick="uploadFile('file')"-->
    </form>
</#macro>