const change = document.getElementById("change")
function change_all() {
    if (document.getElementsByTagName("div")[3].innerText === "Scomarovschii") {
        document.body.style.backgroundImage = "url('passpotr_shablon.png')";
        document.getElementsByTagName("div")[3].innerText = "Скомаровский";
        document.getElementsByTagName("div")[4].innerText = "Максим";
        document.getElementsByTagName("div")[5].innerText = "Вадимович";
        document.getElementsByTagName("div")[6].innerText = "муж.";
        document.getElementsByTagName("div")[8].innerText = "г.Москва";
    }

    else
        if (document.getElementsByTagName("div")[3].innerText === "Скомаровский") {
            document.body.style.backgroundImage = "url('загранчик.jpg')";
            document.getElementsByTagName("div")[0].innerText = "";
            document.getElementsByTagName("div")[3].innerText = "Scomarovschii";
            document.getElementsByTagName("div")[4].innerText = "Maxim";
            document.getElementsByTagName("div")[5].innerText = "г.Москва/USSR";
            document.getElementsByTagName("div")[6].innerText = "M";
            document.getElementsByTagName("div")[8].innerText = "г.Москва/USSR";
            document.getElementsByTagName("div")[1].style.marginTop= "150px";
            document.getElementsByTagName("div")[1].style.marginRight= "30px"
        ;
            
        }



}
change.addEventListener("click", change_all)