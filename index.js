#!/usr/bin/env node
const unzip = require('unzip');
var program = require('commander');
const fs = require('fs');

var http = require('http');
var spawn = require('cross-spawn');

// Spawn NPM asynchronously



program
	.command('create <name>')
	.description( 'Create a Disnode Project')
	.action(function (name) {
		console.log("Creating " + name);


		var request = http.get("http://localhost:8000/template", function(response) {
  		response.pipe(unzip.Extract({ path: name+'/' }));
			response.on("end", function(){
				console.log(__dirname +"\\" + name);
				console.log("Installing Dependiences");
				var child = spawn.sync('npm', ['install'], { stdio: 'inherit' , cwd:__dirname +"\\" + name });
				console.log("Done Installing!");
			})

		});

	});
program
	.command('install <plugin>')
	.description('Install a Disnode Plugin')
	.action(function (plugin) {
		console.log("Installing " + plugin);
	});

program
	.command('uninstall <plugin>')
	.description('Uninstall a Disnode Plugin')
	.action(function (plugin) {
		console.log("Uninstalling " + plugin);
	});

program
	.command('launch')
	.description('Launch the bot')
	.action(function () {
		var proc = exec('node Run.js',{stdio: "inherit"}, function(error, stdout, stderr) {

		});
		proc.on('data', function (data) {
  	console.log('stdout: ' + data.toString());
});
		console.log("RUNNING! ");
	});
program.parse(process.argv);


function InstallPlugin(name) {
	if (!name) {
		console.log("Please Enter a name for a plugin!");
	}
}
