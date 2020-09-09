var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const prompts = [{
            type    : 'input',
            name    : 'title',
            message : 'Your project title',
        }];
        if (!this.config.get('effectsDir')) {
            prompts.push({
                type    : 'input',
                name    : 'effectsDir',
                message : 'What folder are your Resolume plugins in? (Typically something like "C:\\Users\\you\\Documents\\Resolume Avenue\\Extra Effects")',
            })
        }
        this.answers = await this.prompt();
    }

    writing() {
        const config = {...this.config.getAll(), ...this.answers};
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj'),
            config
        );
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj.filters'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj.filters'),
            config
        );
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj.user'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj.user'),
            config
        );
        this.fs.copyTpl(
            this.templatePath('source/plugins/New/New.cpp'),
            this.destinationPath('source/plugins/' + this.answers.title + '/' + this.answers.title + '.cpp'),
            config
        );
        this.fs.copyTpl(
            this.templatePath('source/plugins/New/New.h'),
            this.destinationPath('source/plugins/' + this.answers.title + '/' + this.answers.title + '.h'),
            config
        );
    }
};
