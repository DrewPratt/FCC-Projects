/* JS needs
0. load quote on page load
1. API call to retrieve quote
2. onclick function to replace current quote
3. API to tweet out current quote.
*/$(document).ready(function() {
   function colorChange() {
      var tests = document.querySelectorAll(".colors");
      var colors = ['#f44336'/*brightred*/, '#c62828'/*darkred*/, '#4CAF50'/*brightgreen*/,'#2E7D32'/*darkgreen*/, '#2196F3'/*brightblue*/,'#1565C0'/*darkblue*/, '#9C27B0'/*brightpurple*/,'#6A1B9A'/*darkpurple*/, '#FF9800'/*brightorange*/, '#EF6C00'/*darkorange*/, '#607D8B'/*bluegrey*/, '#37474F'/*darkbluegrey*/];
      var cols = colors[Math.floor(Math.random() * colors.length)];
      tests[0].style.backgroundColor = cols;
      tests[1].style.color = cols;
      tests[2].style.color = cols;
   };
   
   colorChange();
   
   $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
         
         console.log(json);
        $('.quote').html(JSON.stringify(json.quote).replace(/[;]/g,','));
        $('.author').html(JSON.stringify("- " + json.author).replace(/["]/g,''));
      });

    $("#newQuote").on("click",function(){
      // Only change code below this line.
      $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
         
         console.log(json);
        $('.quote').html(JSON.stringify(json.quote).replace(/[;]/g,','));
        $('.author').html(JSON.stringify("-" + json.author).replace(/["]/g,''));
         colorChange();
      });
         
      });
      $("#twitter").on("click",function(){
         var tweetQuote = document.getElementById("quoteText").innerHTML + "  " +                 document.getElementById("quoteAuthor").innerHTML ;
    console.log(tweetQuote);
         var a = document.getElementById("twitter");
      a.href = "https://twitter.com/intent/tweet?text=" + tweetQuote;
      });
   
      });
/* 
var tweetQuote = document.getElementById("quoteText").innerHTML + document.getElementById("quoteAuthor").innerHTML ;
        console.log(tweetQuote);
        */