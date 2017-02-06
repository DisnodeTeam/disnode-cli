#!/usr/bin/env node
const unzip = require('unzip');
var program = require('commander');
const fs = require('fs');
var exec = require('child_process').spawn;
program
	.command('create <name>')
	.description( 'Create a Disnode Project')
	.action(function (name) {
		console.log("Creating " + name);
		fs.createReadStream('./disnode_template.zip')
		.pipe(unzip.Extract({ path: name+'/' }))
		.on("finish",function(){
			console.log("- Created Template!");
			var process = exec('npm install',{cwd: './' + name}, function(error, stdout, stderr) {

			});

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
