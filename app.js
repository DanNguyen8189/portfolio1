var url = require('url');
var fs = require('fs');

function render(path, response) {
	fs.readFile(path, null, function(error, data) {
		if(error){
			response.writeHead(404);
			response.write('File not found');
		}
		else{
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response){
		
		
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/home':
			    response.writeHead(200, {'Content-Type': 'text/html'});
				render('./home.html', response);
				break;
			case '/home.css':
			    response.writeHead(200, {'Content-Type': 'text/css'});
				render('./home.css', response);
				break;
			case '/home.js':
			    response.writeHead(200, {'Content-Type': 'text/html'});
				render('./home.js', response);
				break;
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();
		}
	}
};