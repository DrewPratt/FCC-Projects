function wikiSearch(){
  var searches = document.getElementById("wikiSearch1").value;
  var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searches + "&callback=?";
  //console.log(apiCall);
  $.getJSON(apiCall, function(json){
    console.log(json);
    var wikiBase = "https://en.wikipedia.org/wiki/"
    //console.log(wikiBase0, wikiBase1);
    $(".res0").html("<a href=" + wikiBase + json.query.search[0].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[0].title + "<br>" + json.query.search[0].snippet + "</a>");
    $(".res1").html("<a href=" + wikiBase + json.query.search[1].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[1].title + "<br>" + json.query.search[1].snippet + "</a>");
    $(".res2").html("<a href=" + wikiBase + json.query.search[2].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[2].title + "<br>" + json.query.search[2].snippet + "</a>");
    $(".res3").html("<a href=" + wikiBase + json.query.search[3].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[3].title + "<br>" + json.query.search[3].snippet + "</a>");
    $(".res4").html("<a href=" + wikiBase + json.query.search[4].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[4].title + "<br>" + json.query.search[4].snippet + "</a>");
    $(".res5").html("<a href=" + wikiBase + json.query.search[5].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[5].title + "<br>" + json.query.search[5].snippet + "</a>");
    $(".res6").html("<a href=" + wikiBase + json.query.search[6].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[6].title + "<br>" + json.query.search[6].snippet + "</a>");
    $(".res7").html("<a href=" + wikiBase + json.query.search[7].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[7].title + "<br>" + json.query.search[7].snippet + "</a>");
    $(".res8").html("<a href=" + wikiBase + json.query.search[8].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[8].title + "<br>" + json.query.search[8].snippet + "</a>");
    $(".res9").html("<a href=" + wikiBase + json.query.search[9].title.replace(/[ ]/g,'_') + " target='blank'>" + json.query.search[9].title + "<br>" + json.query.search[9].snippet + "</a>");

  })
}
