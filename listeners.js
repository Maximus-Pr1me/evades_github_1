let Delay = 1;
let isActive = true;

window.onresize = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  game_canvas.style.transform = "scale(" + scale + ")";
  game_canvas.style.left = (winw - width) / 2 + "px";
  game_canvas.style.top = (winh - height) / 2 + "px";
};
window.onload = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  game_canvas.style.transform = "scale(" + scale + ")";
  game_canvas.style.left = (winw - width) / 2 + "px";
  game_canvas.style.top = (winh - height) / 2 + "px";
  const sandbox = document.getElementById('sandbox')
  sandbox.checked = settings.sandbox;
  if(localStorage.sandbox == 'true'){
    sandbox.checked = true;
    settings.sandbox = true;
  } else if(localStorage.sandbox == 'false'){
    sandbox.checked = false;
    settings.sandbox = false;
  } else {
    sandbox.checked = true;
  }
  const delay_box = document.getElementById("delay_checkbox")
  delay_box.checked = settings.delay_box;
  if(localStorage.delay_box == 'true'){
    delay_box.checked = true;
    settings.delay_box = true;
    Delay = 1;
  } else if(localStorage.delay_box == 'false'){
    delay_box.checked = false;
    settings.delay_box = false;
    Delay = 1;
  } else {
    delay_box.checked = false;
    Delay = 1;
  }
  const number_of_heroes_inputField = document.getElementById("number_of_heroes");
  if(typeof(localStorage.number_of_heroes) !== undefined){
    number_of_heroes_inputField.value = localStorage.number_of_heroes;
    settings.number_of_heroes = localStorage.number_of_heroes;
  } else {
    console.log("nope")
    number_of_heroes_inputField.value = 1;
    localStorage.number_of_heroes = 1;
  }
  const timer = document.getElementById("timer")
  if(localStorage.timer == 'true'){timer.checked = true;}
  else {timer.checked = false;}
  const tiles = document.getElementById("tiles")
  if(localStorage.tiles == 'false'){tiles.checked = false;}
  else {tiles.checked = true;}
  const dev = document.getElementById("dev")
  if(localStorage.dev == 'false' || typeof localStorage.dev != "string"){dev.checked = false;}
  else {dev.checked = true;}
  const no_points = document.getElementById("no_points")
  if(localStorage.no_points == 'false' || typeof localStorage.no_points != "string"){no_points.checked = false;}
  else {no_points.checked = true;}
  const mouse_toggle = document.getElementById("mouse_toggle")
  if(localStorage.mouse_toggle == 'true' || typeof localStorage.mouse_toggle != "string"){mouse_toggle.checked = true;}
  else {mouse_toggle.checked = false;}
}
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

function keydown(e) {
  const player = game.players[0];
  setTimeout(()=>{
  keys[e.keyCode] = true;
  if (e.keyCode == 84) {
    player.hasCheated = true;
    player.area++
    if (player.area>=game.worlds[player.world].areas.length-1) {
      player.area=game.worlds[player.world].areas.length-1
    }
    game.worlds[player.world].areas[player.area].load();
    canv_01 = null;
  }
  if (e.keyCode == 82) { //keyR
    player.hasCheated = true;
    player.area = Number(player.area) + 10;
    if (player.area>=game.worlds[player.world].areas.length-1) {
      player.area=game.worlds[player.world].areas.length-1
    }
    game.worlds[player.world].areas[player.area].load();
    canv_01 = null;
  }
  if (e.keyCode == 69) {
    player.hasCheated = true;
    player.area = Number(player.area) - 1;
    if (player.area<0) {
      player.area=0;
    }
    game.worlds[player.world].areas[player.area].load();
    canv_01 = null;
  }
  if (e.keyCode == 86) {
    player.hasCheated = true;
    player.god = !player.god;
  }
  if (e.keyCode == 78) {
    player.hasCheated = true;
    player.wallGod = !player.wallGod;
  }
  if (e.keyCode == 219 && settings.dev) {
    player.safePoint = {world:player.world,area:player.area,pos:{x:player.pos.x,y:player.pos.y}};
    player.safeAmount++;
  }
  if (e.keyCode == 221 && settings.dev) {
    player.safePoint = undefined;
  }
  if (e.keyCode == 220 && settings.dev && player.safePoint) {
    returnToSafePoint(player);
    player.lives = 3;
    player.victoryTimer = 0;
    canv_01 = null;
  }
  if (e.keyCode == 79 && settings.dev) {
    player.timer = 0;
    player.victoryTimer = 0;
  }
  if (e.keyCode == 80 && settings.dev) {
    settings.timerClear = !settings.timerClear;
  }
  if (e.keyCode == 66) {
    player.hasCheated = true;
    settings.cooldown = !settings.cooldown;
  }},Delay)
  
}

function keyup(e) {
  setTimeout(()=>{
  delete keys[e.keyCode];
  },Delay);
}
window.onblur = function() {
  keys = [];
};

document.getElementById("hero").value = (typeof window.localStorage.hero === 'string') ? window.localStorage.hero : 'Normal';
var enterGame = document.getElementById("connect");
enterGame.onclick = function() {
  window.localStorage.hero = document.getElementById("hero").value;
  window.localStorage.hat = document.getElementById("wreath").value;
  switch(document.getElementById("wreath").value){
    case"Gold":hat.src="texture/gold-wreath.png";
    break;
    case"Spring":hat.src = "texture/spring-wreath.png";
    break;
    case"Autumn":hat.src = "texture/autumn-wreath.png";
    break;
    case"Winter":hat.src = "texture/winter-wreath.png";
    break;
    case"Summer":hat.src = "texture/summer-wreath.png";
    break;
    case"Halo":hat.src = "texture/halo.png";
    break;
    case"Santa Hat":hat.src = "texture/santa-hat.png";
    break;
    case"Blue Santa Hat":hat.src = "texture/blue-santa-hat.png";
    break;
    case"Gold Crown":hat.src = "texture/gold-crown.png";
    break;
    case"Silver Crown":hat.src = "texture/silver-crown.png";
    break;
    case"Bronze Crown":hat.src = "texture/bronze-crown.png";
    break;
    case"Stars":hat.src = "texture/stars.png";
    break;
    case"Flames":hat.src = "texture/flames.png";
    break;
    case"Blue Flames":hat.src = "texture/blue-flames.png";
    break;
    case"Orbit Ring":hat.src = "texture/orbit-ring.png";
    break;
    case"Sticky Coat":hat.src = "texture/sticky-coat.png";
    break;
    case"Toxic Coat":hat.src = "texture/toxic-coat.png";
    break;
    case"Legacy Hat":hat.src = "texture/legacy-hat.png";
    break;
  }

  const timer = document.getElementById('timer');
  settings.timer = timer.checked;
  localStorage.timer = timer.checked;
  const tiles = document.getElementById('tiles');
  settings.tiles = tiles.checked;
  localStorage.tiles = tiles.checked;
  const dev = document.getElementById('dev');
  settings.dev = dev.checked;
  localStorage.dev = dev.checked;
  const no_points = document.getElementById('no_points');
  settings.no_points = no_points.checked;
  localStorage.no_points = no_points.checked;
  const mouse_toggle = document.getElementById('mouse_toggle');
  settings.mouse_toggle = mouse_toggle.checked;
  localStorage.mouse_toggle = mouse_toggle.checked;
  menu.style.display = "none";
  gamed.style.display = "inline-block";
  inMenu = false;
  var world = document.getElementById("world");
  var hero = document.getElementById("hero");
  if (world.selectedIndex == 0) {
    loadMain();
  }
  if (world.selectedIndex == 1) {
    loadHard()
  }
  if (world.selectedIndex == 2) {
    loadSecondary()
  }
  if (world.selectedIndex == 3) {
    //loadThird();
  }
  if (hero.selectedIndex == 0) {
    var player = new Basic(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  if (hero.selectedIndex == 1) {
    for (let i=0; i<settings.number_of_heroes; i++) {
      var player = new Magmax(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),17);
      game.players.push(player)
    }
  }

  if (hero.selectedIndex == 2) {
    var player = new Rime(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 3) {
    //var player = new Morfe(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    //game.players.push(player)
  }

  if (hero.selectedIndex == 3) {
    var player = new Aurora(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 4) {
    var player = new Brute(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 5) {
    var player = new Shade(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 5) {
    //var player = new Chrono(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    //game.players.push(player)
  }

  if (hero.selectedIndex == 6) {
    var player = new Reaper(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 7) {
    var player = new Rameses(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 8) {
    var player = new Cent(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 9) {
    var player = new Jotunn(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 10) {
    var player = new Candy(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 11) {
    var player = new Burst(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 12) {
    var player = new Lantern(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 13) {
    var player = new Pole(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 14) {
    var player = new Polygon(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  
  if (hero.selectedIndex == 15) {
    var player = new Clown(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }

  if (hero.selectedIndex == 16) {
    var player = new Poop(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  
  loadImages(game.players[0].className);
  game.worlds[0].areas[0].load();
  startAnimation()
}
document.addEventListener("mousemove", Pos, false);

function Pos(p) {
  setTimeout(()=>{var t = game_canvas.getBoundingClientRect();
  mousePos = new Vector((p.pageX - t.left) / scale, (p.pageY - t.top) / scale);},Delay)
}
document.onmousedown = function(e) { //edited 
  setTimeout(()=>{
    if (e.buttons == 1) {
      if (!inMenu) {
        mouse = !mouse;
      }
    }
  }, Delay)
}

document.onmouseup = function(e) {
    if (!settings.mouse_toggle&&!inMenu)mouse = !mouse;
};
var inputElement = document.getElementById("load");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  loaded = true;
  var fileList = this.files[0]; /* Vous pouvez maintenant manipuler la liste de fichiers */
  var reader = new FileReader();
  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      game = new Game()
      var world = new World(new Vector(0, 0), 0, jsyaml.load(evt.target.result));
      game.worlds[0] = world
      document.getElementById("world").selectedIndex = 3
    }
  };
  reader.readAsBinaryString(fileList);
}
document.getElementById("checkbox").addEventListener("click",function(e){
  settings.outline=!settings.outline;
})

document.getElementById("sandbox").addEventListener("click",function(e){
  settings.sandbox=!settings.sandbox;
  localStorage.sandbox = settings.sandbox;
})

document.getElementById("delay_checkbox").addEventListener("click",function(e){
  settings.delay_box=!settings.delay_box;
  localStorage.delay_box = settings.delay_box;
})

document.getElementById('number_of_heroes').oninput = function () {
  var max_982bb = parseInt(this.max);
  var min_8hjf793 = parseInt(this.min);

  if (parseInt(this.value) > max_982bb) {
    this.value = max_982bb;
  } else if (parseInt(this.value) < min_8hjf793) {
    this.value = min_8hjf793;
  }
  settings.number_of_heroes = this.value;
  localStorage.number_of_heroes = settings.number_of_heroes;
}


window.onblur = function () {
  isActive = false;
}
window.onfocus = function () {
  isActive = true;
}