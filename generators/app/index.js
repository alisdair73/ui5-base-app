const Generator = require('yeoman-generator');
const glob = require("glob");
const path = require("path");

module.exports = class extends Generator {

    getProjectInfo() {
      return this.prompt([{
        type: "input",
        name: "projectname",
        message: "Project Name",
        default: "ui5-base-application"
      },
      {
        type: "input",
        name: "projectdescription",
        message: "Description",
        default: "SAP Fiori Application"
      },
      {
        type: "input",
        name: "projectnamespace",
        message: "Project Namespace",
        default: "your.ns"
      }]).then( answers => {
        this.config.set(answers);
        });
    }
    
    createApp() {

      let answers = this.config.getAll();

      this.sourceRoot(path.join(__dirname, "templates"));
      glob.sync("**", {
        cwd: this.sourceRoot(),
        nodir: true
      }).forEach((file) => {
        const origin = this.templatePath(file);
        const target = this.destinationPath(file);
        this.fs.copyTpl(origin, target, answers);
      });
  
      this.composeWith(require.resolve("../ui5-application"), answers);
    }

    install() {
      this.installDependencies({
        bower: false,
        npm: true
      })
    }
};

