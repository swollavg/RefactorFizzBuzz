
window.onload = function() {

	
	var pickNum = parseInt(prompt("Enter Number"), 10);

	numberFizz(pickNum);





	function numberFizz(num){
		var node = document.createElement("P");
		
		for(i = 1; i < num + 1; i++){

			if((i % 3 == 0) && (i % 5 == 0)){
				var textnode = document.createTextNode('\"fIzZbuZz!!\"' + ' ');
				node.appendChild(textnode);
				document.getElementById("wrapper").appendChild(node);
		
	        }

	        else if(i % 5 == 0) {
				var textnode = document.createTextNode('\"Buzz\"' + ' ');
				node.appendChild(textnode);
				document.getElementById("wrapper").appendChild(node);
			}

			else if(i % 3 == 0){
				
				var textnode = document.createTextNode('\"Fizz\"' + ' ');
				node.appendChild(textnode);
				document.getElementById("wrapper").appendChild(node);
			}

			else {
				
				var textnode2 = document.createTextNode(i + ' ');
				node.appendChild(textnode2);
				document.getElementById("wrapper").appendChild(node);
			}


		};// end for loop

		alert('You entered the number ' + num + ' and got fizz Buzzed!');
		
	}; // numFizz end



};





