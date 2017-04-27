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
      switch (this.message) {
        case "help":
          this.addLine("clear : clear terminal", false);
          this.addLine("ls : list elements in folder", false);
          this.addLine("screenfetch : show info about react-terminal", false);
          break;
        case "ls":
          this.addLine("About Work Contact", false);
          break;
        case "clear":
          this.allMessages = [];
          break;
        case "screenfetch": {
          this.addLine("=============================================", false);
          this.addLine("ReactJS terminal - Loïck Virot", false);
          this.addLine("=============================================", false);
          this.addLine("Available on github ! http://github.com/LoickVirot/react-terminal", false);
          this.addLine("Type help to list available commands", false);
          break;
        }
        default:
          this.addLine(this.message + ": not found. Type help to list available commands", false);
      }
      this.message = '';
    }
  },
  mounted: function () {
    this.message = 'screenfetch';
    this.userInputProcess();
  }
});
