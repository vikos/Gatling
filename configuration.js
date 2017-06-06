function buildOptions() {
    return {
        _domains: {},
        _buildDomain: function(name, filter, templates) {
            var domain = {
                _name: undefined,
                _filter: undefined,
                _templates: [],
                name: function(name) {
                    if (name === undefined) {
                        return this._name;
                    } else {
                        this._name = name;
                        return this
                    }
                },
                filter: function (filter) {
                    if (filter === undefined) {
                        return this._filter;
                    } else {

                    }
                },
                template: function (key,template) {
                    if (key === undefined) {
                        throw new Error("Template key must be defined!");
                    } else if (template === undefined) {
                        return this._templates[key];
                    } else {
                        this._templates[key] = template
                        return this;
                    }
                },
                templates: function (templates) {
                    if (templates === undefined) {
                        return this._templates;
                    } else if (typeof templates === 'object') {
                       for (i in templates) {
                           this._templates = templates[i];
                       }
                    } else {
                        throw new Error("Invalid parameter. Teamplates must be object[Key>value]. Given'" + typeof templates + "'");
                    }
                }
            };

            return domain.name(name).filter(filter).templates(templates);
        },
        newDomain: function() {
            return
        },
        getDomain(key) {
            return _
        }
    };
}

(function () {
    document._gatlingDomains = {};

})();

