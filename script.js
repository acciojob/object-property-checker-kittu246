const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let isPresent = false;
	
	for(let i in sampleObject){
		if(key == i){
			isPresent = true;
		}
			
	}
	return isPresent;
}

// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
