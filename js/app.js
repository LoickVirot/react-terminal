var app = new Vue({
  el: '#app',
  data: {
    message: '',
    allMessages: []
  },
  methods: {
    focus: function () {
     this.$refs.userInput.focus();
   },
    addLine: function (message, command = false) {
      this.allMessages.push({value: message, command: command});
    },
    submit: function (e) {
      this.addLine(this.message, true);
      this.userInputProcess();
    },
    userInputProcess: function () {
      var message = this.message.split(" ");
      switch (message[0]) {
        case "":
          break;
        case "help":
          this.addLine("clear : clear terminal");
          this.addLine("ls : list elements in folder");
          this.addLine("screenfetch : show info about vue-terminal");
          this.addLine("cat [FILE] : print FILE to standard output");
          break;
        case "ls":
          this.addLine("about work contact");
          break;
        case "clear":
          this.allMessages = [];
          break;
        case "screenfetch":
          this.addLine("=============================================");
          this.addLine("VueJS terminal - Loïck Virot");
          this.addLine("=============================================");
          this.addLine("Available on github ! http://github.com/LoickVirot/vue-terminal");
          this.addLine("Type help to list available commands");
          break;
        case "cat":
          if (message[1] !== undefined) {
            switch(message[1]) {
              case "about":
                this.addLine("about info");
                break;
              case "work":
                this.addLine("work info");
                break;
              case "contact":
                this.addLine("contact info");
                break;
              default:
                this.addLine("\"" + message[1] + "\" not found");
            }
            break;
          }
          this.addLine("\"cat\" command require one parameter");
          break;
        default:
          this.addLine("\"" + message[0] + "\" command not found. Type help to list available commands");
      }
      this.message = '';
    }
  },
  mounted: function () {
    this.message = 'screenfetch';
    this.userInputProcess();
  }
});
