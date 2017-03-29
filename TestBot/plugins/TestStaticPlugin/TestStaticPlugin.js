class TestPlugin {
  constructor() {

  }
  default (command) {
  
      this.commandLaunched(command);
  }
  commandLaunched(command){
    console.log("Running");
    var final = "Instances:";
    for (var i = 0; i < this.disnode.plugin.launched.length; i++) {
      var plugin = this.disnode.plugin.launched[i];
      final += "\n - " + plugin.class.name + " - " + plugin.server;
    }
    command.msg.reply(final);
  }
}

module.exports = TestPlugin;
