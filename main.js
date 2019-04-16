var tog = true;

var moveDiv = () => {

    if (tog) {
        $("#mainWindow").animate({ left: '-=50%' }, 500);
        $("#floater").animate({ left: '-=50%' }, 500);
        $("body").css("overflow-y", "hidden");
    } else {
        $("#mainWindow").animate({ left: '+=50%' }, 500);
        $("#floater").animate({ left: '+=50%' }, 500);
        $("body").css("overflow-y", "auto");
    }

    tog = !tog;
}