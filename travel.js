(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory({}));
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory({});
    } else {
        factory(root);
	}
}(this, function (exports) {
	var travel = function (basedom, skip_func, do_func) {
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

	var travel_replace = function (node, replace_func) {
		var temp = document.createElement('span');
		temp.innerHTML = replace_func(node.data);
	
		while (temp.firstChild) {
			node.parentNode.insertBefore(temp.firstChild, node);
		}
		node.parentNode.removeChild(node);
	}

	exports.travel = travel;
	exports.travel_replace = travel_replace;
	return exports
}))
