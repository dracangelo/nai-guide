
function getVariables() {
    getstart = document.getElementById("start");
    start = getstart.options[getstart.selectedIndex].value;
    getdestination = document.getElementById("destination");
    destination = getdestination.options[getdestination.selectedIndex].value;
  }
  function outputParagraphs() {
    output = document.getElementById("display");
  }
  function defineRoutes() {
    routesArray = ["Gpo", "Prestige", "Junction", "Lenana", "Karen", "Ngong"];
  }
  
  function getDirections() {
    locations = start + destination;
  }
  $(document).ready(function () {
      $('select').selectize({
          sortField: 'text'
      });
  });
  $("#button").click(function() {
    getVariables();
    defineRoutes();
    getDirections();
    outputParagraphs();
    descriptionObject = {
        aa : ['Already at destination'],
        ab : ['At the GPO bus stop board citi-hoppa 4w, on site of CTM ngong road on right and Uchumi supermarket on your left know that you are five minutes away from destination. On arival you should see Prestige shopping mall on your left.'],
        ac : ['At the GPO bus stop board citi-hoppa 4w, on site of Green House Mall on left know that you are eleven minutes away from destination. On arivAtal you should see Junction mall on your right.'],
        ad : ['the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see Prestige shopping mall on your left.'],
        ae : ['AT the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  twenty four minutes away from destination. On arival you should see shell pertol station on your left'],
        af : ['At the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  thirty minutes away from destination. On arival you should see Milele mall on your left'],
        bb : ['Already at destination'],
        bC : ['At the Prestige bus stop board citi-hoppa 4w, on site of Greenhouse mall on your left know that you are  five minutes away from destination. On arival you should see Junction shopping mall on your right'],
        bd: ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see lenana school on your left'],
        be : ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see shell petro station on your left'],
        bf : ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  twenty minutes away from destination. On arival you should see Milele shopping mall on your left'],
        ca : ['AT the junction bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your right'],
        cb : ['At the Junction bus stop board citi-hoppa 4w, on site of Greenspan mall on your left know that you are  two minutes away from destination. On arival you should see Prestige shopping mall on your left'],
        cc : ['Already at destination'],
        cd : ['At the Junction bus stop board citi-hoppa 4w. On arival you should see Prestige shopping mall on your left'],
        ce : ['At the Junction bus stop board citi-hoppa 4w. On arival you should shell petro station on your left'],
        cf : ['At the Juncion bus stop board citi-hoppa 4w. On arival you should see Prestige shopping mall on your left'],
        da : ['At the Lenana bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your left'],
        db : ['At the Lenana bus stop board citi-hoppa 4w, on site of Green house mall on your right know that you are  three minutes away from destination. On arival you should see Prestige shopping mall on your right'],
        dc : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see Junction shopping mall on your Right'],
        dd : ['Already at destination'],
        de : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see shell petro station on your left'],
        df : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see Milele shopping mall on your left'],
        ea : ['At the Karen bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your right'],
        eb :['At the Karen bus stop board citi-hoppa 4w, on site of Greenhouse mall on your Right know that you are  three minutes away from destination. On arival you should see Prestige shopping mall on your right'],
        ec : ['At the karen bus stop board citi-hoppa 4w. On arival you should see Junction mall  on your left'],
        ed : ['At the Karen bus stop board citi-hoppa 4w. On arival you should lenana on your left'],
        ee : ['Already at destination'],
        ef : ['At the Karen bus stop board citi-hoppa 4w. On arival you should see Milele shopping mall on your left'],
        fa : ['At the Ngong bus stop board citi-hoppa 4w. on site of Citam valley road know you are five miutes away.on arrival you should see Posta building.'],
        fb : ['At the Ngong bus stop board citi-hoppa 4w. on site of Green house mall know you are Three miutes away.on arrival you should see Green house shopping mall.'],
        fc : ['At the Ngong bus stop board citi-hoppa 4w. on site of Green house mall know you are Three miutes away.on arrival you should see Junction shopping mall.'],
        fd : ['At the Ngong bus stop board citi-hoppa 4w. on site of Junction mall know you are Three miutes away.on arrival you should see Green lenana .'],
        fe : ['At the Ngong bus stop board citi-hoppa 4w. on arrivall you should see the shell petro station'],
        ff : ['Already at destination'],
    };
    output.innerHTML = descriptionObject[locations];
  });
  $("#guide").click(function() {
    outputParagraphs();
    getDirections();
    guidesObject = {
      aa: ["Simon - 0713813919  OR Ann - 0720384088"],
      ab: ["Angelo - 070210098 OR Nancy-0740100369"],
      ac: ["Anthony- 0713813919 Pamela- 0713813919"],
      ad: ["Mark - 0713813919  Betty - 0713813914"],
      ae: ["Kimani - 0713813919  Yvonne - 0713812919"],
      bb: ["Kelvin - 0713813919   Alice- 0713813911"],
      ba: ["Brian- 0713813919  Mercy - 0713813919"],
      bc: ["Sam- 0713813914   Judy - 0713813913"],
      bd: ["Samora- 0713813914  Christine- 0713813914"],
      be: [" Zack- 0713813914  Mercy- 0713813999"],
      ca: [ "Hammerton- 0713813914  lillian- 0713813914"],
      cb: ["Brian- 0713813919  Ann - 0720384088"],
      cc: ["Samuel - 0720384088  Hannah -0712345678"],
      cd: ["Brian- 0713813919 Ann - 0720384088"],
      ce: ["John - 0713813919   Milka- 0713813911"],
      da: ["Kelvin - 0713813919   Alice- 0713813911"],
      db: ["Mark- 0713813919  Ann - 0720384088"],
      dc: ["James - 0713813919   Hannah- 0713813911"],
      dd: ["John- 0713813919   Happy- 0713813911"],
      de: ["Kelvin - 0713813919   Alicia 0713813911"],
      ea: ["Brian- 0713813919  Ann - 0720384088"],
      eb: ["Simon- 0713813919   Alicia- 0713813911"],
      ec: ["Samson - 0713813919   Rose- 0713813911"],
      ed: ["Kevoh - 0713813919   Alice- 0713813911"],
      ee: ["Brian- 0713813919  Ann - 0720384088"],
      ef: ["Angelo- 0713813919   Alice- 0713813911"]
    };
   output.innerHTML =
      " The following guides will be of assistance " + guidesObject[locations];
  
  });
  