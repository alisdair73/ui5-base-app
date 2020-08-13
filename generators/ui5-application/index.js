const Generator = require("yeoman-generator");
const path = require("path");
const glob = require("glob");

module.exports = class extends Generator {

    createUI5Application() {

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
    }
  
}
