var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([{
            type    : 'input',
            name    : 'effectsDir',
            message : 'What folder are your Resolume plugins in? (Typically something like "C:\\Users\\you\\Documents\\Resolume Avenue\\Extra Effects")',
        }]);
    }

    writing() {
        this.config.set('effectsDir', this.answers.effectsDir);
        this.config.save();
    }
};
