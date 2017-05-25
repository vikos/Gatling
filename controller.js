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
            // Having the last word before the current cursor position in the textArea
            var searchTerm = request.term.substring(0,document.activeElement.selectionEnd).split(" ").pop();

            console.log("source", searchTerm);

            callback(getTemplates(searchTerm))
        },
        select: function(e, ui) {
            e.preventDefault();

            console.log("Apply template" + ui.item.label);

            applyTemplate(e.target, ui.item.label);
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
    var value = textArea.value;

    if (pos == 0) {
        // Cursor is on the beginning of the text (prepending)
        return renderTemplate(templateName) + textArea.value
    } else if (pos == value.length) {
        // Cursor it on the end on the text (appending)
        return value + renderTemplate(templateName)
    }

    // Cursor is in the middle of the value (inserting)
    var pre = value.substring(0,pos).split(" ");
    var post = value.substring(pos).split(" ");

    var prevChar = textArea.value.substring(pos-1, pos);

    if (pre[pre.length -1] !== " ") { // cursor is standing on a word
	pre.pop(); //replace the last word before the cursor
    } // @fixme: Contniue here!! 
	

    return value = pre.join(" ") + renderTemplate(templateName) + pos.join(" ")
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
