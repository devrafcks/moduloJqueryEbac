$(document).ready(function(){
    $("header button").click( () => {
        alert("Button clicked!");
    });
    
    $("form").on("submit", (event) => {
        event.preventDefault();
    });
})