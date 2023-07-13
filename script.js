function decimalToBinary(num) {
  //Write you code here
	let val="";
	while(num>0){
		let rem=num%2;
		val=rem+val;
		num=Math.floor(num/2);
	}
  return val;
}

window.decimalToBinary = decimalToBinary;
