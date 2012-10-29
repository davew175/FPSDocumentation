window.onload = function(){
    //Initialize Tree
    var $tree = $('#Menu');
    $tree.tree({
        data : data,
        selectable: true
    });

    //Load Parameterized content values for open node and content
    //Allows for back&forward and direct linking support

    var node1;
    var node;

    //Event handlers for back & forward buttons
    window.addEventListener("popstate", function(e){
        //Load contet
        var path1 = getURLParam("content");
        $('#Content').load(path1);
        
        //Open last node
        node1 = getURLParam("lastnode");
        node = $tree.tree('getNodeById', node1);
        $("p").html(node.name);
        $tree.tree('selectNode', node, true);
    });	

    //Load content
    var path = getURLParam("content");
    $('#Content').load(path);

    //Open last node`
    node1 = getURLParam("lastnode");
    node = $tree.tree('getNodeById', node1);
    $("p").html(node.name);
    $tree.tree('selectNode', node, true);
 

               
}