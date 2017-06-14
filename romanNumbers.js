var romanNumbers = {

	convertToRoman : function (argument) {

	var A = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var R = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
	var Alength = A.length;
	var str = "";

		for (i = 0; i < Alength; i++){

			while( argument >= A[i]){
				argument -= A[i];
				str += R[i];
			}
		}
		return str;
	}
};