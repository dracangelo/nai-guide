function getVariables() {
    getstart = document.getElementById("start");
    start = getstart.options[getstart.selectedIndex].value;
    getdestination = document.getElementById("destination");
    destination = getdestination.options[getdestination.selectedIndex].value;
  }

  function defineRoutes() {
    routesArray = ["gpo", "cbd", "cic", "prestige", "adams", "karen"];
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
            af : [],
            bb : [],
            ba : [],
            bc : [],
            bd : [],
            be : [],
            bf : [],
            ca : [],
            cb : [],
            cc : [],
            cd : [],
            ce : [],
            cf : [],
            da : [],
            da : [],
        }
        locations = (start+destination);
        alert(descriptionObject[locations][0]);
    });
  });