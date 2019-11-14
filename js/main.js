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
  routesArray = ["gpo", "cbd", "cic", "prestige", "adams"];
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
    ee: [],
    fa: []
  };
  output.innerHTML = descriptionObject[locations];
});
$("#guide").click(function() {
  outputParagraphs();
  getDirections();
  guidesObject = {
    aa: ["Simon - 0713813919  Ann - 0720384088"],
    ab: ["Angelo - 070210098  Nancy-0740100369"],
    ac: ["Anthony- 0713813919 Pamela- 0713813919"],
    ad: ["Mark - 0713813919  Betty - 0713813914"],
    ae: ["Kimani - 0713813919  Yvonne - 0713812919"],
    bb: ["Kelvin - 0713813919   Alice- 0713813911"],
    ba: ["Brian- 0713813919  Mercy - 0713813919"],
    bc: [],
    bd: [],
    be: [],
    ca: [],
    cb: ["Brian- 0713813919  Ann - 0720384088"],
    cc: [],
    cd: ["Brian- 0713813919 Ann - 0720384088"],
    ce: [],
    da: [],
    db: ["Brian- 0713813919  Ann - 0720384088"],
    dc: [],
    dd: [],
    de: [],
    ea: ["Brian- 0713813919  Ann - 0720384088"],
    eb: [],
    ec: [],
    ed: [],
    ee: ["Brian- 0713813919  Ann - 0720384088"],
    ef: []
  };
 output.innerHTML =
    " The following guides will be of assistance " + guidesObject[locations];

});
