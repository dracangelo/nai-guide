function getVariables() {
  getstart = document.getElementById("start");
  start = getstart.options[getstart.selectedIndex].value;
  getdestination = document.getElementById("destination");
  destination = getdestination.options[getdestination.selectedIndex].value;
}
function defineRoutes() {
  routesArray = ["gpo", "cbd", "cic", "prestige", "adams"];
}

function getDirections() {
  locations = (start + destination);
};
  $("#button").click(function() {
    getVariables();
    defineRoutes();
      getDirections();
    descriptionObject = {
      aa: [10],
      ab: [20],
      ac: [30],
      ad: [],
      ae: [],
      bb: [],
      ba: [],
      bc: [],
      bd: [],
      be: [],
      ca: [],
      cb: [],
      cc: [],
      cd: [],
      ce: [],
      da: [],
      db: [],
      dc: [],
      dd: [],
      de: [],
      ea: [],
      eb: [],
      ec: [],
      ed: [],
      ee: []
    };
    alert(descriptionObject[locations]);
    
  });
  $("#guide").click(function() {
    getDirections();
    guidesObject = {
      aa: ["Simon - 0713813919  Ann - 0720384088"],
      ab: ["Angelo - 070210098  Paddington-0740100369"],
      ac: ["hamm-69 pam-70"],
      ad: [],
      ae: [],
      bb: [],
      ba: [],
      bc: [],
      bd: [],
      be: [],
      ca: [],
      cb: [],
      cc: [],
      cd: [],
      ce: [],
      da: [],
      db: [],
      dc: [],
      dd: [],
      de: [],
      ea: [],
      eb: [],
      ec: [],
      ed: [],
      ee: []
    };
    alert(guidesObject[locations]);
  });

