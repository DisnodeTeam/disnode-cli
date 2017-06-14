#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const ghdownload = require('github-download')
const spawn = require('cross-spawn')

// Spawn NPM asynchronously



program
  .command('create <name>')
  .description('Create a Disnode Project')
  .action(function(name) {
    ghdownload({
        user: 'DisnodeTeam',
        repo: 'Disnode',
        ref: 'master'
      }, __dirname + "\\" + name)
      .on('dir', function(dir) {
        console.log(dir)
      })
      .on('file', function(file) {
        console.log(file)
      })
      .on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded
        console.log(zipUrl)
      })
      .on('error', function(err) {
        console.error(err)
      })
      .on('end', function() {
				console.log("Creating " + name);
		    console.log(__dirname + "\\" + name);
		    console.log("Installing Dependiences");
		    var child = spawn.sync('npm', ['install'], {
		      stdio: 'inherit',
		      cwd: __dirname + "\\" + name
		    });
		    console.log("Done Installing!");
      })
  });
program
  .command('install <plugin>')
  .description('Install a Disnode Plugin')
  .action(function(plugin) {
    console.log("Installing " + plugin);
  });

program
  .command('uninstall <plugin>')
  .description('Uninstall a Disnode Plugin')
  .action(function(plugin) {
    console.log("Uninstalling " + plugin);
  });

program
  .command('launch')
  .description('Launch the bot')
  .action(function() {
    var proc = exec('node Run.js', {
      stdio: "inherit"
    }, function(error, stdout, stderr) {

    });
    proc.on('data', function(data) {
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
