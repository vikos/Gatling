function buildOptions(domains) {

    var options = {_domains: {}};
    options.domains = function(domains) {
            if (domains === undefined) {
                return this._templates;
            } else if (typeof domains === 'object') {

                this._domains = [];

                for (i in domains) {
                    this.domain(i, domains[i]);
                }
            } else {
                throw new Error("Invalid parameter. Teamplates must be object[Key>value]. Given'" + typeof templates + "'");
            }
        };

    options.domain = function(index, domain) {
            if (domain === undefined) {
                this._domains[index];
                return this;
            } else {
                return this._domains[index];
            }
        };

    if (typeof domains !== undefined) {
        options.domains(domains)
    }

    return options
}

function buildDomain(name, filter, templates) {
    var domain = {
        _name: undefined,
        _filter: undefined,
        _templates: []
    };

    domain.name = function(name) {
        if (name === undefined) {
            return this._name;
        } else {
            this._name = name;
            return this
        }
    };

    domain.filter = function (filter) {
        if (filter === undefined) {
            return this._filter;
        } else {
            this._filter = filter;
            return this
        }
    };

    domain.template = function (key,template) {
        if (key === undefined) {
            throw new Error("Template key must be defined!");
        } else if (template === undefined) {
            return this._templates[key];
        } else {
            this._templates[key] = template
            return this;
        }
    };

    domain.templates = function (templates) {
        if (templates === undefined) {
            return this._templates;
        } else if (typeof templates === 'object') {

            this._templates = {};

            for (key in templates) {
                this.templates(key, templates.key);
            }
        } else {
            throw new Error("Invalid parameter. Teamplates must be object[Key>value]. Given'" + typeof templates + "'");
        }
    };

    domain.name(name);
    domain.filter(filter);
    domain.templates(templates);

    return domain
}

