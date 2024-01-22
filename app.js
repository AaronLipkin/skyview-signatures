
const app = angular.module('signaturegen', [])



app.controller('mainController', ['$http', function ($http) {

	new ClipboardJS('.btn');

	this.submit = () => {
		console.log($('#signature-preview').html())

		$(".btn").text('Copied!')

	}
	
	

}]);

