function(instance, context) {
    
    var id = "vdetector_"+ Math.floor((Math.random() * 1000000) + 1);
    var mydiv = "<div id='"+id+"' style='width:100%;height:100%'></div>";
    instance.canvas.append(mydiv);
    
    var idToDetect;
    
    $(document).ready(function () {
        
    if (instance.data.id == "id") {
        idToDetect = id
    } else {
        idToDetect = instance.data.id
    };
        
    const target = document.getElementById(idToDetect);

    const options = {
        rootMargin: instance.data.margintop + "px " + instance.data.marginright + "px " + instance.data.marginbottom + "px " + instance.data.marginleft + "px",
    };
        if (instance.data.threshold > 0) {
            options.threshold = instance.data.threshold
        }

    const onIntersection = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

//                console.log("enter");
                setTimeout(() => {
                instance.publishState('is_visible', true);
                instance.triggerEvent('enters_viewport');
                }, instance.data.timeout)
            }
            else {

//                console.log("out");
                setTimeout(() => {
                instance.publishState('is_visible', false);
                instance.triggerEvent('exits_viewport');
                }, instance.data.timeout)
            }
        });
    };

    let observer = new IntersectionObserver(onIntersection, options);

    observer.observe(target);
});
}