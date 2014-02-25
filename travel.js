function travel(basedom, skip_func, do_func) {
	var i, list;
	list = basedom.childNodes;
	for(i = 0 ; i < list.length ; i++) {
		node = list[i];
		if (skip_func && skip_func(node.nodeName)) {
			continue;
		}

		if (node.nodeType == Node.TEXT_NODE) {
			do_func(node);
		} else {
			travel(node, skip_func, do_func);
		}
	}
}

function travel_replace(node, replace_func) {
	var temp = document.createElement('span');
    temp.innerHTML = replace_func(node.data);
 
    while (temp.firstChild) {
        node.parentNode.insertBefore(temp.firstChild, node);
    }
    node.parentNode.removeChild(node);
}
