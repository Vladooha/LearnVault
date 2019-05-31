<#macro upload fileId>
    <form enctype="multipart/form-data">
        <div>
            <div><h4 class="h5" style="font-size: 18px;color: rgba(0,70,134,1.00);">Прикрепить фото</h4></div>
            <div><h5 class="h5">(.jpg, .jpeg, .png)</h5></div>
            <div>
                <input type=${fileId} name="file" id="file" accept=".jpg, .jpeg, .png" style="margin:20px;">
            </div>
        </div>
        <!--input type="button" onclick="uploadFile('file')"-->
    </form>
</#macro>