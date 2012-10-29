$(function(){
    $('#Menu').bind('tree.click', function(event) {
        // The clicked node is 'event.node'
        var node = event.node;
        //We're looking for an html page named based on organization
        if(node.folder == true)
            return;
        var fileLocation = node.name.split(' ').join('_')+".html";
        var id = node.id;
            
        //Iterate up through tree
        //as long as the parent node is not defined with 'top' value
        while(node.parent.name){
            //concatenate onto location
            node = node.parent;
            fileLocation = node.name.split(' ').join('_')+"/"+fileLocation;
        }

        fileLocation = "data/"+fileLocation;
        
        //Load content of page
        var url = "http://"+location.host + location.pathname + "?content="+fileLocation + "&lastnode="+id;

        if(url == location.href)
            return;
                        
        history.pushState(null, null, url);
        $('#Content').load(fileLocation, function () {
            //wrap figures
            $('.figure img').wrap(function() {

                var val = '<a href="' + $(this).attr("src") + '" />';
                console.debug("Wrapping val = " + val);
                return val;
 //                return '<a href ="' + $(this).attr("src") + '/>"';
            });
        });
    });
})