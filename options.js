var DOMAIN_PROPERTY = "_domain";

$(document).ready(function (e) {
    var options = buildOptions();

    $("#new-domain").on("click", function() {
        addDomain(buildDomain("New Domain"));
    });

    $("#save").on("click", function() {
        // @todo: collect domains
        saveOptions(options)
    });

    $("#domains").on("change", function() {
        var selector = $(this).find(":selected");

        renderDomain(selector.prop(DOMAIN_PROPERTY), function (name) {
            selector.text(name);
        });
    });
});

function addDomain(domain) {
    var selector = $("<option>");
    selector.text(domain.name());
    selector.prop(DOMAIN_PROPERTY, domain);
    $("#domains").append(selector);

    renderDomain(domain, function (name) {
        selector.text(name);
    });
}


function renderDomain(domain, onChangeOfName) {
    console.log("render Domain");

    // Name input
    var name = $("<input type='text' style='display: block;' name='name' />");
    name.val(domain.name());

    name.on("keyup", function (e) {
        onChangeOfName(name.val());
        domain.name(name.val());
    });
    var nameLabel = $("<label>").text("Name");

    // Filter (domain regexp input)
    var filter = $("<input type='text' style='display: block;' name='filter' />");
    filter.val(domain.filter());
    filter.attr("title", "JS Regular expression which matching to the domain");
    filter.on("change", function (e) {
        domain.filter(filter.val());
    });

    var filterLabel = $("<label>").text("Filter");

    // Assemble
    var options = $("<div>");
    options.append(nameLabel);
    options.append(name);
    options.append(filterLabel);
    options.append(filter);

    $("#domain-options").empty();
    $("#domain-options").append(options);
    $("#domain-options").flash();

    for (key in domain.templates()) {
        renderTemplate(key, domain.template(key), domain);
    }
}

function renderTemplate(key, template) {
    var container = document.createElement('div');

    var idInput = document.createElement("input");
    idInput.vale = key;
    idInput.required = true;
    idInput.addEventListener("change", function() {
    });

    var templateInput = document.createElement("textarea");
    templateInput.value = template;
    templateInput.required = true;

    // @todo: Add oncahnge event listener
    templateInput.addEventListener("change", function() {
    });

    container.appendChild(idInput);
    container.appendChild(templateInput);

    console.log(container);

    return container
}

function saveOptions(options) {
    console.log("Saving options", options);
}
