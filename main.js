var game_canvas = document.getElementById("game");
var ctx = game_canvas.getContext("2d"),
  width = game_canvas.width,
  height = game_canvas.height;
var inMenu = true;
var field_of_view = 32;
var keys = [];
var settings = {
  outline:true,
  cooldown:true,
  sandbox:true,
  delay_box:false,
  number_of_heroes: 1,
  timerClear:true,
  mouse_toggle:true
}
var mousePos = new Vector(0, 0);
var mouse = false;
var scale = 1;
var loaded = false;
var game = new Game();

function loadMain() {
  game.worlds[0] = new World(new Vector(0, 0), 0, centralCore)
  game.worlds[1] = new World(new Vector(0, 80), 1, hauntedHalls)
  game.worlds[2] = new World(new Vector(0, 160), 2, peculiarPyramid)
  game.worlds[3] = new World(new Vector(0, 525), 3, wackyWonderland)
  game.worlds[4] = new World(new Vector(0, 570), 4, glacialGorge)
  game.worlds[5] = new World(new Vector(0, 615), 5, viciousValley)
  game.worlds[6] = new World(new Vector(0, 660), 6, humongousHollow)
  game.worlds[7] = new World(new Vector(0, 705), 7, eliteExpanse);
  game.worlds[8] = new World(new Vector(0, 750), 8, centralCoreHard);
  game.worlds[9] = new World(new Vector(0, 795), 9, dangerousDistrict);
  game.worlds[10] = new World(new Vector(0, 840), 10, quietQuarry);
  game.worlds[11] = new World(new Vector(0, 885), 11, monumentalMigration);
  game.worlds[12] = new World(new Vector(0, 930), 12, ominousOccult);
  game.worlds[13] = new World(new Vector(0, 970), 13, viciousValleyHard);
  game.worlds[14] = new World(new Vector(0, 1015), 14, frozenFjord);
  game.worlds[15] = new World(new Vector(-61, 1465), 15, restlessRidge);
  game.worlds[16] = new World(new Vector(-61, 1365), 16, toxicTerritory);
  game.worlds[17] = new World(new Vector(-61, 1400), 17, magnetic_monopole);
  game.worlds[18] = new World(new Vector(-61, 1440), 18, assorted_alcove);
  game.worlds[19] = new World(new Vector(-61, -15), 19, stellarSquare);
  //game.worlds[18] = new World(new Vector(-61, 1265), 18, assorted_alcove);
}

function loadHard(){
  game.worlds[0] = new World(new Vector(0, 0), 0, centralCoreFast)
  game.worlds[1] = new World(new Vector(0, 80), 1, hauntedHalls)
  game.worlds[2] = new World(new Vector(0, 160), 2, peculiarPyramid)
  game.worlds[3] = new World(new Vector(0, 525), 3, wackyWonderland)
  game.worlds[4] = new World(new Vector(0, 570), 4, glacialGorge)
  game.worlds[5] = new World(new Vector(0, 615), 5, viciousValley)
  game.worlds[6] = new World(new Vector(0, 660), 6, humongousHollow)
  game.worlds[7] = new World(new Vector(0, 705), 7, eliteExpanse);
  game.worlds[8] = new World(new Vector(0, 750), 8, centralCoreHard);
  game.worlds[9] = new World(new Vector(0, 795), 9, dangerousDistrict);
  game.worlds[10] = new World(new Vector(0, 840), 10, quietQuarry);
  game.worlds[11] = new World(new Vector(0, 885), 11, monumentalMigration);
  game.worlds[12] = new World(new Vector(0, 930), 12, ominousOccult);
  game.worlds[13] = new World(new Vector(0, 970), 13, viciousValleyHard);
  game.worlds[14] = new World(new Vector(0, 1015), 14, frozenFjord);
  game.worlds[15] = new World(new Vector(-61, 1465), 15, restlessRidge);
  game.worlds[16] = new World(new Vector(-61, 1365), 16, toxicTerritory);
  game.worlds[17] = new World(new Vector(-61, 1400), 17, magnetic_monopole);
  game.worlds[18] = new World(new Vector(-61, 1440), 18, assorted_alcoveHard);
  game.worlds[19] = new World(new Vector(-61, -15), 19, stellarSquareHard);
}

function loadSecondary() {
  game.worlds[0] = new World(new Vector(0, 0), 0, transformingTurbidity)
  game.worlds[1] = new World(new Vector(0, 45), 1, unexploredUtopia)
  game.worlds[2] = new World(new Vector(0, 90), 2, littleLandscape)
  game.worlds[3] = new World(new Vector(0, 132), 3, darknessDimension)
  game.worlds[4] = new World(new Vector(0, 177), 4, crowdedCavern)
  game.worlds[5] = new World(new Vector(0, 222), 5, centralCoreImpossible)
  game.worlds[6] = new World(new Vector(0, 267), 6, transformingTurbidityImpossible)
  game.worlds[7] = new World(new Vector(0, 312), 7, elongatingEscalator)
  game.worlds[8] = new World(new Vector(0, 357), 8, ballisticBattlefield)
  game.worlds[9] = new World(new Vector(0, 402), 9, insanityIsle)
  game.worlds[10] = new World(new Vector(0, 447), 10, naturalNightmare)
}
const tiles = new Image();
const hat = new Image();
const gem = new Image();
const magnetDown = new Image();
const magnetUp = new Image();
const pumpkinOn = new Image();
const pumpkinOff = new Image();
const torch = new Image();
const torchUp = new Image();
const flashlight_item = new Image();
const flashlight = new Image();
const warp = new Image();
const paralysis = new Image();
const atonement = new Image();
const depart = new Image();
const flow = new Image();
const harden = new Image();
const bandages = new Image();
const latch = new Image();
const fusion = new Image();
const mortar = new Image();
const night = new Image();
const vengeance = new Image();
const decay = new Image();
const shatter = new Image();
const sweet_tooth = new Image();
const sugar_rush = new Image();
const sweet_tooth_item = new Image();
const vengeance_projectile = new Image();
const gate = new Image();
const distort = new Image();
const energize = new Image();
const heavy_ballon = new Image();
const rejoicing = new Image();
const backtrack = new Image();
const rewind = new Image();
const vigor = new Image();
const stomp = new Image();
const reverse = new Image();
const minimize = new Image();
var fps=[],fpsS,averageFPS;
var thing = 0.983; //game speed
var world = new World(new Vector(0, 0), 0, missingMap);
game.worlds[0] = world;
var tset = 0;
var FPSCUT = 10;
var updD = 0;
var tim = 0;
function server_side_animate(time) {//important function
  if (settings.delay_box) {
    Delay = 120 - Math.floor(Math.random()*60)
  }
  if(!settings.sandbox){
    tim+=1000/30;
    time = tim;
  }
  var progress = time - lastRender;
  if(isActive){
    fps.push(performance.now()-fpsS)
    if(fps.length>10){fps.shift()}
    fpsS = performance.now();
    if(fps.length>=10)averageFPS = (fps.map(i=>x+=i, x=0).reverse()[0])/fps.length;
  } else{fps = [];}
  //if(progress<33||progress>34)
  //if(tset%FPSCUT!=0){
  ctx.clearRect(0, 0, width, height); //deletes area canvas every frame

  ctx.beginPath(); //gives colour to the area
  ctx.fillStyle = "#333";
  ctx.rect(0, 0, width, height);
  ctx.fill();
  ctx.closePath();

  //}
  if (!inMenu) {
    var input = {}
    input.keys = keys;
    input.mouse = mousePos;
    input.isMouse = mouse;
    game.inputPlayer(0, input)
    if (progress > 1000) {
      progress = 1000;
    }
    var old = {area:game.players[0].area,world:game.players[0].world};
    game.update(progress * thing);
    //if(tset%FPSCUT!=0){
    var players = game.players;
    var states = game.getStates(0);
    var focu_s_0901 = new Vector(players[0].pos.x, players[0].pos.y);
    var area = (game.worlds[game.players[0].world].areas[game.players[0].area]);
    var wasVictory = area.getActiveBoundary().t; //was this with.t at the end
    var strokeColor = "#425a6d";
    if(area.title_stroke_color){strokeColor=area.title_stroke_color}
    area = (wasVictory) ? "Victory!" : (game.worlds[game.players[0].world].areas[game.players[0].area].name)
    renderArea(states, players, focu_s_0901, old)// important function

    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.lineWidth = 6;
    ctx.fillStyle = "#f4faff";
    ctx.strokeStyle = strokeColor;//"#425a6d";
    ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
    ctx.textAlign = "center";
    ctx.strokeText(game.worlds[game.players[0].world].name + ": " + area, width / 2, 40);
    ctx.fillText(game.worlds[game.players[0].world].name + ": " + area, width / 2, 40);
    ctx.closePath();

    if(settings.timer){
      const timerTime = secondsFormat(Math.floor(game.players[0].timer/1000))
      ctx.beginPath();
      ctx.textAlign = "center";
      ctx.lineWidth = 6;
      ctx.fillStyle = "#f4faff";
      ctx.strokeStyle = strokeColor;//"#425a6d";
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      if(game.players[0].victoryTimer>0){
        ctx.fillStyle = "yellow";
      }
      ctx.strokeText(timerTime, width / 2, 80);
      ctx.fillText(timerTime, width / 2, 80);
      ctx.closePath();
    }
    //
    var world = document.getElementById("world");
    
    if (world.selectedIndex == 2 && game.players[0].area == 0) {
      var author = "???"
      if (states.name == "Transforming Turbidity") {
        author = "DD1";
      }
      if (states.name == "Unexplored Utopia") {
        author = "Marko";
      }
      if (states.name == "Little Landscape") {
        author = "Rc";
      }
      if (states.name == "Darkness Dimension") {
        author = "XScienceMasterX";
      }
      if (states.name == "Crowded Cavern") {
        author = "fAtKiD";
      }
      if (states.name == "Central Core Impossible") {
        author = "Pentagonis, REALLY IMPOSSIBLE";
      }
      if (states.name == "Transforming Turbidity Impossible") {
        author = "haha0201. For your sanity click R four times.";
      }
      if (states.name == "Elongating Escalators") {
        author = "Darklight";
      }
      if (states.name == "Ballistic Battlefield") {
        author = "Strat";
      }
      if (states.name == "Insanity Isle") {
        author = "Manticore";
      }
      if (states.name == "Natural Nightmare") {
        author = "HIJ";
      }
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
      ctx.strokeStyle = "#006b2c",
      ctx.fillStyle = "#00ff6b",
      ctx.strokeText("made by " + author, width / 2, height - 120);
      ctx.fillText("made by " + author, width / 2, height - 120);
      ctx.closePath();
    }

    if(game.worlds[game.players[0].world].areas[game.players[0].area].text){
      const text = game.worlds[game.players[0].world].areas[game.players[0].area].text;
      ctx.beginPath();
      ctx.font = "bold " + 25 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
      ctx.strokeStyle = "#006b2c",
      ctx.fillStyle = "#00ff6b",
      ctx.strokeText(text, width / 2, height - 120);
      ctx.fillText(text, width / 2, height - 120);
      ctx.closePath();
    }
    if (world.selectedIndex == 1 && game.players[0].area == 1 && game.players[0].world == 3) {
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
        ctx.strokeStyle = "#006b2c",
        ctx.fillStyle = "#00ff6b",
        ctx.strokeText("this map has 120 areas... make sure you have time :D", width / 2, height - 120);
      ctx.fillText("this map has 120 areas... make sure you have time :D", width / 2, height - 120);
      ctx.closePath();
    }
    if (world.selectedIndex == 3 && !loaded) {
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
        ctx.strokeStyle = "#006b2c",
        ctx.fillStyle = "#00ff6b",
        ctx.strokeText("this is to import a map, top left in the menu", width / 2, height - 120);
      ctx.fillText("this is to import a map, top left in the menu", width / 2, height - 120);
      ctx.closePath();
     
    }
    if (game.players[0].area == 479 && game.players[0].world == 11) {
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
        ctx.strokeStyle = "#006b2c",
        ctx.fillStyle = "#00ff6b",
        ctx.strokeText("Death fills the air.", width / 2, height - 120);
      ctx.fillText("Death fills the air.", width / 2, height - 120);
      ctx.closePath();
    }
    if (game.players[0].area == 480 && game.players[0].world == 11) {
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
        ctx.strokeStyle = "#006b2c",
        ctx.fillStyle = "#00ff6b",
        ctx.strokeText("Take care. The people will require your help one day.", width / 2, height - 140);
      ctx.fillText("Take care. The people will require your help one day.", width / 2, height - 140);
      ctx.closePath();
      ctx.beginPath();
      ctx.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.lineWidth = 5,
        ctx.strokeStyle = "#006b2c",
        ctx.fillStyle = "#00ff6b",
        ctx.strokeText("20VP", width / 2, height - 100);
      ctx.fillText("20VP", width / 2, height - 100);
      ctx.closePath();
    }
  }
  
  lastRender = time
  if(settings.sandbox) {
    window.requestAnimationFrame(server_side_animate);
  }
}

var lastRender = 0;
//setInterval(animate,1000/30)
//console.log(settings.sandbox)
//window.requestAnimationFrame(animate);

// function startAnimation(){
//   window.requestAnimationFrame(server_side_animate);
// }

function startAnimation(){
  if(settings.sandbox){
    window.requestAnimationFrame(server_side_animate);
  } 
  else {setInterval(server_side_animate,1000/30)}
  //the implementation of low fps is wrong edited was 1000/30
}

if(!window.localStorage.hat){window.localStorage.hat = "Gold"};document.getElementById("wreath").value = window.localStorage.hat;
if(window.localStorage.nick){document.getElementById("nick").value = window.localStorage.nick}