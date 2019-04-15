var tog = false;

var slide = () => {
    alert('Hello')
    $("#mainWindow").animate({ left: '-500px' });
}

var animate = () => {
    alert('Animated')

    if (tog) {
        $("p").animate({ left: "+=100px" });
    } else {
        $("p").animate({ left: "+=100px" });
    }

    tog = !tog;
}