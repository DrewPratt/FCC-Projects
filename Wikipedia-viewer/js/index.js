function wikiSearch(){
  var searches = document.getElementById("wikiSearch1").value;
  var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searches + "&callback=?";
  //console.log(apiCall);
  $.getJSON(apiCall, function(json){
    console.log(json);
    var wikiBase = "https://en.wikipedia.org/wiki/"
    //console.log(wikiBase0, wikiBase1);
    $(".res0").hide().html("<a href=" + wikiBase + json.query.search[0].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[0].title + "<br>" + json.query.search[0].snippet + "</a>").fadeIn(200);
    $(".res1").hide().html("<a href=" + wikiBase + json.query.search[1].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[1].title + "<br>" + json.query.search[1].snippet + "</a>").delay(200).fadeIn(200);
    $(".res2").hide().html("<a href=" + wikiBase + json.query.search[2].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[2].title + "<br>" + json.query.search[2].snippet + "</a>").delay(400).fadeIn(200);
    $(".res3").hide().html("<a href=" + wikiBase + json.query.search[3].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[3].title + "<br>" + json.query.search[3].snippet + "</a>").delay(600).fadeIn(200);
    $(".res4").hide().html("<a href=" + wikiBase + json.query.search[4].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[4].title + "<br>" + json.query.search[4].snippet + "</a>").delay(800).fadeIn(200);
    $(".res5").hide().html("<a href=" + wikiBase + json.query.search[5].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[5].title + "<br>" + json.query.search[5].snippet + "</a>").delay(1000).fadeIn(200);
    $(".res6").hide().html("<a href=" + wikiBase + json.query.search[6].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[6].title + "<br>" + json.query.search[6].snippet + "</a>").delay(1200).fadeIn(200);
    $(".res7").hide().html("<a href=" + wikiBase + json.query.search[7].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[7].title + "<br>" + json.query.search[7].snippet + "</a>").delay(1400).fadeIn(200);
    $(".res8").hide().html("<a href=" + wikiBase + json.query.search[8].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[8].title + "<br>" + json.query.search[8].snippet + "</a>").delay(1600).fadeIn(200);
    $(".res9").hide().html("<a href=" + wikiBase + json.query.search[9].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[9].title + "<br>" + json.query.search[9].snippet + "</a>").delay(1800).fadeIn(200);
    //$(".container").fadeIn(1000);
  })
}
