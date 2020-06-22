function audioPlayer(){
    var currentSong = 0;
        $("#audioPlayer")[0].src = $("#playlist li a")[0];
        $("#audioPlayer")[0].play();
        $("#playlist li a").click(function(e){
            e.preventDefault(); 
            $("#audioPlayer")[0].src = this;
            $("#audioPlayer")[0].play();
            $("#playlist li").removeClass("current-song");
            currentSong = $(this).parent().index();
            $(this).parent().addClass("current-song");
        });
            
        $("#audioPlayer")[0].addEventListener("ended", function(){
            currentSong++;
            if(currentSong == $("#playlist li a").length)
                currentSong = 0;
            $("#playlist li").removeClass("current-song");
            $("#playlist li:eq("+currentSong+")").addClass("current-song");
            $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
            $("#audioPlayer")[0].play();
        });
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("playlist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
