
window.onload = function() {



	
    starter(); // begins process


    function starter() {
    	var pickNum =parseInt(prompt("Enter a Number"), 10);

    	if(!isNaN(pickNum)){
  			numberFizz(pickNum);
  		}

  		else {

  			starter();
  		}

    };
    

  

  	function numberFizz(num){
		var node = document.createElement("P"); //create a P tag.

		for(i = 1; i < num + 1; i++){

			if((i % 3 == 0) && (i % 5 == 0)){
				var textnode = document.createTextNode('\"fIzZbuZz!!\"' + ' '); //creates  a text element.
				node.appendChild(textnode); // adds the text inside the paragraph.
				document.getElementById("wrapper").appendChild(node); // adds the paragraph with text into the div wrapper.
		
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
	}; // numFizz end
}; //onload function end





