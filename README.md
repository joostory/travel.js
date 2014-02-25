# travel
Dom을 탐색하여 textnode의 값을 변경한다.

# 사용법
	// 예) do_func을 수행하지 않을 노드는 true를 리턴
	var skip_func = function(node_name) {
		return node_name == "a";
	}

	// 예) 찾은 text node에 대해서 무언가를 한다.
	var do_func = function(node) {
		node.innerHTML = "Hello";
	}

	// 예) 시작점으로 document.body를 지정했다.
	travel(document.body, skip_func, do_func);
