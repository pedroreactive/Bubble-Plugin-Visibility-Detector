function(instance, properties) {
    
	var id = "vdetector_"+ Math.floor((Math.random() * 1000000) + 1);
//     var mydiv = "<div id='"+id+"' style='width:100%;height:100%'><img style='width:100%;height:100%' src='https://dd7tel2830j4w.cloudfront.net/f1656078727303x151963451994594270/eye.svg'></img></div>";
//     var mydiv = "<div id='"+ id +"' style='background-image: url(https://dd7tel2830j4w.cloudfront.net/f1656078727303x151963451994594270/eye.svg);width:100%;height:100%'></div>";
       var mydiv = "<div id='" + id + "'><img src='//dd7tel2830j4w.cloudfront.net/f1656081805029x913531435020611200/eye2.svg'/></div>";
    instance.canvas.append(mydiv);

}