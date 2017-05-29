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
    $(document.activeElement).textcomplete([{
        match: /(^|\b)(\w{2,})$/,
        search: function (term, callback) {
            var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo'];
            callback($.map(words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        replace: function (word) {
            return word + ' ';
        }
    }]);
}
