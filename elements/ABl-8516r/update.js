function(instance, properties, context) {
    
    if (properties.element_id == "id") {
        instance.data.id = "id"
    } else {
        instance.data.id = properties.element_id
    };

    
    if (properties.threshold > 0) {
	    instance.data.threshold = properties.threshold;
        }
    else {
        instance.data.threshold = 0;
    	}
    instance.data.threshold = properties.threshold;
    instance.data.timeout = properties.timeout;
	instance.data.margintop = properties.top;
	instance.data.marginright = properties.right;
	instance.data.marginbottom = properties.bottom;
	instance.data.marginleft = properties.left;
    
    console.log("width: " + properties.bubble.width());

}