var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    async prompting() {
        this.answers = await this.prompt([{
            type    : 'input',
            name    : 'title',
            message : 'Your project title',
        }]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj.filters'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj.filters'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('build/windows/New.vcxproj.user'),
            this.destinationPath('build/windows/' + this.answers.title + '.vcxproj.user'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('source/plugins/New/New.cpp'),
            this.destinationPath('source/plugins/' + this.answers.title + '/' + this.answers.title + '.cpp'),
            this.answers
        );
        this.fs.copyTpl(
            this.templatePath('source/plugins/New/New.h'),
            this.destinationPath('source/plugins/' + this.answers.title + '/' + this.answers.title + '.h'),
            this.answers
        );
    }
};
