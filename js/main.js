function getVariables() {
    getstart = document.getElementById("start");
    start = getstart.options[getstart.selectedIndex].value;
    getdestination = document.getElementById("destination");
    destination = getdestination.options[getdestination.selectedIndex].value;
  }
  function defineRoutes() {
    routesArray = ["gpo", "cbd", "cic", "prestige", "adams",];
  }

  $(document).ready(function() {
    getVariables();
    defineRoutes();
    $("#button").click(function() {
        descriptionObject = {
            aa : [],
            ab : [],
            ac : [],
            ad : [],
            ae : [], 
            bb : [],
            ba : [],
            bc : [],
            bd : [],
            be : [],
            ca : [],
            cb : [],
            cc : [],
            cd : [],
            ce : [],
            da : [],
            db : [],
            dc : [],
            dd:  [],
            de : [],
            ea : [],
            eb : [],
            ec : [],
            ed : [],
            ee : [],


        }
        locations = (start+destination);
        guide=descriptionObject[locations][3];
        guidesObject = {
        aa : ["simon - 0713813919  ann - 0720384088"]
        }
        alert(descriptionObject[locations][0]);
        alert(descriptionObject[locations][1]);
        alert(descriptionObject[locations][2]);
        alert(guidesObject[locations]);

    });
  });
