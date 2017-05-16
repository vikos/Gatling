$(document).ready(function(e){

    $(document).keyup(function(e) {
        if (e.ctrlKey && e.keyCode  === 32) { // CTRL + Space
            console.log("adasd", document.activeElement.nodeName)
            isTextarea() && RenderAutoComplete()
        }
    });
});


function isTextarea() {
   return document.activeElement.nodeName === "TEXTAREA"
}

function RenderAutoComplete() {
    var textArea = document.activeElement
    var sStart  = textArea.selectionStart
    var SEnd    = textArea.selectionEnd

    RenderOptionList()
}

function RenderOptionList() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
    ];
    if ($(document.activeElement).data('ui-autocomplete') != undefined) {
        // Add autocomplete
    } else {
        //activate
    }

    $(document.activeElement).autocomplete({
        source: function( request, callback ) {
            console.log("source", request);
            callback(availableTags)
        },
        // Disable on Esc
        close: function( event ) {
            var ev = event.originalEvent;
            if ( ev.type === "keydown" && ev.keyCode === $.ui.keyCode.ESCAPE ) {
                $( this ).autocomplete( "disable" );
            }
        }
    });

}