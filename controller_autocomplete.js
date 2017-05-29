$(document).ready(function(e){

    $(document).keyup(function(e) {
        if (e.ctrlKey && e.keyCode  === 32) { // CTRL + Space
            console.log("KeyS", document.activeElement.nodeName)
            isTextarea() && RenderAutoComplete()
        }
    });
});


function isTextarea() {
   return document.activeElement.nodeName === "TEXTAREA"
}

function RenderAutoComplete() {
    $(document.activeElement).autocomplete({
        source: function( request, callback ) {
            var textArea = this.element[0]

            // Having the last word before the current cursor position in the textArea
            var pos = textArea.selectionStart;
            var value = textArea.value;

            var searchTerm = value.substring(0,pos).split(/\W+/).pop() + value.substring(pos).split(/\W+/).shift();

            console.log("source", searchTerm);

            callback(getTemplates(searchTerm))
        },
        select: function(e, ui) {
            e.preventDefault();

            console.log("Apply template" + ui.item.label);

            applyTemplate(e.target, ui.item.label);

            $( this ).autocomplete( "destroy" );
        },
        focus: function (event, ui) {

            console.log("Focus", this.value);
            // Prevent the default focus behavior.
            event.preventDefault();
            // or return false;
        },
        // Disable on Esc
        close: function( event ) {
            console.log("disable");
            $( this ).autocomplete( "destroy" );
        }
    });
}

function applyTemplate(textArea, templateName) {
    var pos = textArea.selectionStart;

    var prefixEndsPos = pos - textArea.value.substring(0,pos).split(/\W+/).pop().length;
    var postfixStartsPos = pos + textArea.value.substring(pos).split(/\W+/).shift().length;

    var insertMe = renderTemplate(templateName);

    textArea.value = textArea.value.substring(0,prefixEndsPos) + insertMe + textArea.value.substring( postfixStartsPos);


    pos = prefixEndsPos + insertMe.length;
    textArea.focus();
    textArea.setSelectionRange(pos,pos);
}

function renderTemplate(templateName) {
    return "<<RENDERED TEMPLATE>>";
}

function getTemplates(filter) {
    var templates = [
        {label: "aaaa", template: "<aaaaa>"},
        {label: "bbbb", template: "<bbbbb>"}
    ];

    if (filter == undefined || filter === "") {
        return templates
    }

    var filteredTemplates = [];

    for (i in templates) {
        if (templates[i].label.indexOf(filter) == 0) {
           filteredTemplates.push(templates[i]);
        }
    }

    return filteredTemplates;
}
