#!/usr/bin/env node
var program = require('commander');
program
  .command('create <name>')
  .description('Create a Disnode Project')
  .action(function(name){
    console.log("Creating " + name);
  });
program
  .command('install <plugin>')
  .description('Install a Disnode Plugin')
  .action(function(plugin){
    console.log("Installing " + plugin);
  });

  program
    .command('uninstall <plugin>')
    .description('Uninstall a Disnode Plugin')
    .action(function(plugin){
      console.log("Uninstalling " + plugin);
    });

    program
      .command('launch')
      .description('Launch the bot')
      .action(function(){
        console.log("RUNNING! " );
      });
program.parse(process.argv);
