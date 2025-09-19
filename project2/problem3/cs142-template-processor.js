'use strict';

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dict) {
    return this.template.replace(/\{\{(\w+)\}\}/g, (match, key) => (
        Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : ''
    ));
};

window.Cs142TemplateProcessor = Cs142TemplateProcessor;