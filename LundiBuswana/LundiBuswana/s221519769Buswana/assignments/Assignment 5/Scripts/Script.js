// Task 1: When the page loads, display a popup alert to welcome the user to the amusement park website
$(document).ready(function(){
    alert("Welcome to FunLand Lundi");
});


//Task 2: When the user clicks on any ride card, display the background colour of that specific card in an alert. 
$(".ride-card").click(function(){
    let backgroundColor= $(this).css("background-color");
    alert(backgroundColor);
});

// Task 3: Show/Hide the Rides section when the 'Toggle Rides' button is clicked
$("#toggleRides").click(function(){
    $("#rides").toggle();
});


//Task 4: When the user double clicks on any game in the list, add another game to the list, with the same formatting.
$(".game").dblclick(function(){
    let newGame=$(this).text();
    $("ul").append("<li class='game'>" +newGame+ "</li>");
});


// Task 5: When the 'Highlight Attractions' button is clicked, apply or remove the following formatting to all the ride cards
// formatting: 3px solid #ff6f61 border all around. 
//Each click should toggle the formatting on and off 
$("#highlight").click(function(){
    $(".ride-card").toggleClass("addBorder");
});

//Task 6: The 'Fade Out Page' button should make the entire page fade out and then fade back in automatically
$("#fadeOut").click(function(){
    $("body").fadeOut(3000, function(){
        $("body").fadeIn(4000);
    });
});

//Task 7: When a user clicks on any ride card, apply a short animation effect to that specific card. 
$(".ride-card").click(function(){
    $(this).animate({height: 'toggle'},2000,function(){
       $(this).animate({height: 'toggle'},3000);
    });
})


//Task 8: When the user hovers over a ride card, temporarily change its background colour. When the mouse leaves, return it to the original colour
let original;
$(".ride-card").hover(function(){
    original=$(this).css("background-color")
    $(this).css("background-color","#0abada")
},function(){
    $(this).css("background-color",original)
});

//Task 9: Clicking the 'BUY Tickets' heading, should replace the heading text with a new message e.g. "Tickets sold out!"
$("#tickets h2").click(function(){
    $(this).text("Tickets sold out!");
});

//Task 10: When the page loads, change the font type and size of all paragraph elements using jQuery. Do not use an ID or class to select the elements.
$(document).ready(function(){
    $("p").css({"font-size":"20px","font-family":"Verdana"});
});

//Task 11: Create your own new function + add a description of what the function does here
//I have added some css in my styles for toggling to a darkmode when i click on the main heading
$("header h1").click(function(){
    $("body").toggleClass("darkMode");
});

//Task 12: Create your own new function + add a description of what the function does here

//I a tried adding a floating button, to randomly move around when clicked
$("#catchMe").click(function(){
    let x = Math.random() * ($(window).width() - $("#catchMe").outerWidth());
    let y = Math.random() * ($(window).height() - $("#catchMe").outerHeight());
    $(this).animate({top:y+"px", left:x+"px"},2);
});

//Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
// Challenge 1: Efficient shuffle with conditional color highlighting
$("#shuffleGames").click(function(){
    let $ul = $("ul");
    let $games = $ul.children(".game");
    
    // 1. Store the original order of text values to compare later
    let originalOrder = $games.map(function() {
        return $(this).text();
    }).get();

    // 2. Convert elements to an array and shuffle using Fisher-Yates
    let gamesArray = $games.get();
    for (let i = gamesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gamesArray[i], gamesArray[j]] = [gamesArray[j], gamesArray[i]];
    }

    // 3. Re-append shuffled items and check their new positions
    $ul.append(gamesArray);

    //Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
    // I will try to highlight items that actually moved
    $ul.children(".game").each(function(index) {
        let currentText = $(this).text();
        
        // If the text at this index is different from the original text at this index...
        if (currentText !== originalOrder[index]) {
            // Change color to something vibrant (e.g., a light coral)
            $(this).css("background-color", "#ffadad");
        } else {
            // If it did not change its initial Position i will keep it the original color defined in your CSS
            $(this).css("background-color", "#caffbf");
        }
    });
});

//Challenge 2: Write a function that adds logical and appropriate functionality to the 'Calculate Total' button
$("#calculate").click(function(){
    let name=$("#name").val();
    let value=$("#ticketType").val();
    let ticketSelected=$("#ticketType option:selected").text();
    let quantity=$("#quantity").val();
    let total=value*quantity;
    $("#total").text(name+" your total for the ticket is "+total+" and its a "+ticketSelected+ " ticket");
});
