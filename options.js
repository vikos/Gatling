$(document).ready(function (e) {
   initTemplateStorage()
   registerListeners();
});

function initTemplateStorage() {
    var domainPrototype = {
        key: "",
        filter: "",
        templates: []
    };

    var temp

    document._gatlingOptions = {};
    document.getDomain = function(key) {
        if document._gatlingOptions
    };
}

function registerListeners() {
    $("#new-domain").on("click", addNewDomain);
}

function addNewDomain() {
    newDomain({name: "New Domain"})
}

function renderDomain(domain) {
    // Add Selector
    var selector = $("<option>");
    selector.text(domain.name);
    $("#domains").append(selector);

    // Name input
    var name = $("<input type='text' style='display: block;' name='name' />");
    name.val(domain.name);

    name.on("keyup", function (e) {
       tabHead.text(name.val());
    });
    var nameLabel = $("<label>").text("Name");

    // Filter (domain regexp input)
    var filter = $("<input type='text' style='display: block;' name='filter' />");
    filter.val(domain.filter);
    filter.attr("title", "JS Regular expression which matching to the domain");

    var filterLabel = $("<label>").text("Filter");

    // Assemble
    var options = $("<div>");
    options.append(nameLabel);
    options.append(name);
    options.append(filterLabel);
    options.append(filter);

    $("#domain-options").append(options);

    renderTemplates(domain.templates);
}

function renderTemplateOptions() {

}

function renderTemplate(template) {
    var container = document.createElement('div');

    var idInput = document.createElement("input");
    idInput.vale = id;
    idInput.required = true;

    var templateInput = document.createElement("textarea");
    templateInput.value = template;
    templateInput.required = true;

    container.appendChild(idInput);
    container.appendChild(templateInput);

    console.log(container);

    return container
}

