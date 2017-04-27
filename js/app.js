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
    addLine: function (message, command) {
      this.allMessages.push({value: message, command: command});
    },
    submit: function (e) {
      this.addLine(this.message, true);
      this.userInputProcess();
    },
    userInputProcess: function () {
      var message = this.message.split(" ");
      switch (message[0]) {
        case "help":
          this.addLine("clear : clear terminal", false);
          this.addLine("ls : list elements in folder", false);
          this.addLine("screenfetch : show info about vue-terminal", false);
          break;
        case "ls":
          this.addLine("about work contact", false);
          break;
        case "clear":
          this.allMessages = [];
          break;
        case "screenfetch":
          this.addLine("=============================================", false);
          this.addLine("VueJS terminal - Loïck Virot", false);
          this.addLine("=============================================", false);
          this.addLine("Available on github ! http://github.com/LoickVirot/vue-terminal", false);
          this.addLine("Type help to list available commands", false);
          break;
        case "cat":
          if (message[1] !== undefined) {
            switch(message[1]) {
              case "about":
                this.addLine("about info", false);
                break;
              case "work":
                this.addLine("work info", false);
                break;
              case "contact":
                this.addLine("contact info", false);
                break;
              default:
                this.addLine("\"" + message[1] + "\" not found", false);
            }
            break;
          }
          this.addLine("\"cat\" command require one parameter", false);
          break;
        default:
          this.addLine("\"" + message[0] + "\" command not found. Type help to list available commands", false);
      }
      this.message = '';
    }
  },
  mounted: function () {
    this.message = 'screenfetch';
    this.userInputProcess();
  }
});
