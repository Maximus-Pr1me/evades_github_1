const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

let canv_01;

function renderArea(area, players, focu_s_83948, old) {
  var ligth = document.createElement('canvas');
  var ctx_1 = ligth.getContext("2d");
  ligth.width = width; //window itself
  ligth.height = height; //window itself
  var world = game.worlds[players[0].world];
  if(old.area!=players[0].area||old.world!=players[0].world||!canv_01&&tiles.complete){
    canv_01 = renderTiles(area, players, focu_s_83948);
  }
  if(canv_01){
    ctx.drawImage(canv_01.can_html_offscreen,(-focu_s_83948.x)*field_of_view+width/2+area.pos.x*field_of_view,(-focu_s_83948.y)*field_of_view+height/2+area.pos.y*field_of_view)
  }
  renderFirstEntities(area, players, focu_s_83948)
  renderAssets(area, players, focu_s_83948)
  ctx.globalAlpha = 1;
  renderPlayers(area, players, focu_s_83948);
  renderSecondEntities(area, players, focu_s_83948)
  for (var i in players) {
    try{
    var player = players[i];
    var grad = ctx_1.createRadialGradient(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, 0, width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, (player.radius + 30 / 32) * field_of_view);
    grad.addColorStop(0, "rgba(0, 0, 0, 1)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx_1.beginPath();
    ctx_1.fillStyle = grad;
    ctx_1.arc(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, (player.radius + 30 / 32) * field_of_view, 0, 2 * Math.PI, !1);
    ctx_1.fill();
    ctx_1.closePath();
    }catch(e){}
    if(player.flashlight_active){
      player.energy -= 1 / 30;
      if(player.energy<=0){player.flashlight_active = false}
      try{var player = players[i];
      var grad = ctx_1.createRadialGradient(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, 0, width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, (460 / 32) * field_of_view);
      grad.addColorStop(0, "rgba(0, 0, 0, 1)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx_1.beginPath();
      ctx_1.fillStyle = grad;
      var rotationSpeed = 15;
      var flashlight_angle = 15;
      var flashlight_distance = 500;
      if(!mouse&&player.moving){
        var angle = player.lastAng;
        if(player.dirX>0){angle = 0;}
        else if(player.dirX<0){angle = 180;}
        if(player.dirY>0){angle = 90;}
        else if(player.dirY<0){angle = 270;}
        if(player.dirX>0&&player.dirY>0){angle = 45}
        else if(player.dirX>0&&player.dirY<0){angle = 315}
        else if(player.dirX<0&&player.dirY>0){angle = 135}
        else if(player.dirX<0&&player.dirY<0){angle = 225}
        player.inputAng = angle;
      }
      else if(mouse){
        var angle = Math.atan2(mousePos.y-(height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view), mousePos.x-(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view));
        angle = (angle * 180) / Math.PI;
        player.inputAng = angle;
      }
      if(player.inputAng<0){player.inputAng+=360}
      if(player.inputAng>=360){player.inputAng-=360}
      var distanceOne = player.inputAng - Math.abs(player.lastAng);
      if(player.lastAng<=player.inputAng+rotationSpeed&&player.lastAng>=player.inputAng-rotationSpeed){}
      else if(distanceOne<-180){player.lastAng+=rotationSpeed;}
      else if(distanceOne>180){player.lastAng-=rotationSpeed;}
      else if(distanceOne<0){player.lastAng-=rotationSpeed;}
      else if(distanceOne>0){player.lastAng+=rotationSpeed;}
      if(player.lastAng>=360)player.lastAng-=360;
      if(player.lastAng<0)player.lastAng+=360;
      if(player.lastAng<=player.inputAng+rotationSpeed&&player.lastAng>=player.inputAng-rotationSpeed){player.lastAng = player.inputAng}

      ctx_1.moveTo(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view);
      ctx_1.arc(width / 2 + (player.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (player.pos.y - focu_s_83948.y) * field_of_view, (flashlight_distance / 32) * field_of_view,(Math.PI/180)*(-flashlight_angle+player.lastAng), (Math.PI/180)*(flashlight_angle+player.lastAng));
      ctx_1.fill();
      ctx_1.closePath();
      }catch(e){}}
  }
  for(let i in area.entities){
    for(let j in area.entities[i]){
      var ent = area.entities[i][j]
      if(ent.isLight){
        try{var grad1 = ctx_1.createRadialGradient(width / 2 + (area.pos.x + ent.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + ent.pos.y - focu_s_83948.y) * field_of_view, 0, width / 2 + (area.pos.x + ent.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + ent.pos.y - focu_s_83948.y) * field_of_view, (ent.radius + ent.lightCount / 32) * field_of_view);
        grad1.addColorStop(0, "rgba(0, 0, 0, 1)");
        grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx_1.beginPath();
        ctx_1.fillStyle = grad1;
        ctx_1.arc(width / 2 + (area.pos.x + ent.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + ent.pos.y - focu_s_83948.y) * field_of_view, (ent.radius + ent.lightCount / 32) * field_of_view, 0, 2 * Math.PI, !1);
        ctx_1.fill();
        ctx_1.closePath();
        }catch(e){}
      }
    }
  }
  for (var i in area.assets) {
    var zone = area.assets[i];
    if(zone.type==6||zone.type==8||zone.type==4){
      try{
        let lightPower = 110;
        if(zone.type==4){
          lightPower = 250;
          zone.pos.x += zone.size.x/2
          zone.pos.y += zone.size.y/2
        }
        var grad1 = ctx_1.createRadialGradient(width / 2 + (area.pos.x + zone.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + zone.pos.y - focu_s_83948.y) * field_of_view, 0, width / 2 + (area.pos.x + zone.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + zone.pos.y - focu_s_83948.y) * field_of_view, (lightPower / 32) * field_of_view);
        grad1.addColorStop(0, "rgba(0, 0, 0, 1)");
        grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx_1.beginPath();
        ctx_1.fillStyle = grad1;
        ctx_1.arc(width / 2 + (area.pos.x + zone.pos.x - focu_s_83948.x) * field_of_view, height / 2 + (area.pos.y + zone.pos.y - focu_s_83948.y) * field_of_view, (lightPower / 32) * field_of_view, 0, 2 * Math.PI, !1);
        ctx_1.fill();
        ctx_1.closePath();
        if(zone.type==4){
          zone.pos.x -= zone.size.x/2
          zone.pos.y -= zone.size.y/2
        }
        }catch(e){}
    }
  }
  ctx_1.beginPath();
  ctx_1.fillStyle = "rgba(0, 0, 0, " + area.lighting + ")"
  ctx_1.fillRect(0, 0, width, height);
  ctx_1.fill();
  ctx_1.closePath();
  ctx.globalCompositeOperation = "destination-in"
  ctx.drawImage(ligth, 0, 0)
  ctx.globalCompositeOperation = "source-over"
  renderUI(area, players, focu_s_83948)
  renderMinimap(area, players, focu_s_83948)
  ctx.beginPath();
  ctx.font = "22px cursive";
  ctx.fillStyle = "gray";
  ctx.strokeStyle = "gray";
  ctx.textAlign = "start";
  ctx.lineWidth = 0.5;
  const diff = document.getElementById("diff").value;
  const devStat = "Comb Spd: "+ combineSpeed(player) + ", Amount: " + player.safeAmount;
  let offset = 0;
  if(diff == "Easy"){
    const deathCounter = (settings.dev) ? "Death Count: " + players[0].deathCounter + ", " + devStat : "Death Count: " + players[0].deathCounter; 
    ctx.fillText(deathCounter, 0, 20);
    ctx.strokeText(deathCounter, 0, 20);
  } else if (diff == "Medium"){
    const lives = (settings.dev) ? "Lives: " + players[0].lives + ", " + devStat : "Lives: " + players[0].lives;
    let liveColor;
    switch(players[0].lives){
      case 3: liveColor = "green"
      break;
      case 2: liveColor = "yellow"
      break;
      case 1: liveColor = "orange"
      break;
      case 0: liveColor = "red"
      break;
    }
    ctx.fillStyle = liveColor;
    ctx.strokeStyle = liveColor;//'black';  
    ctx.fillText(lives, 0, 20);
    ctx.strokeText(lives, 0, 20);
  } else if (settings.dev) {
    const text = devStat;
    ctx.fillText(text, 0, 20);
    ctx.strokeText(text, 0, 20);
  }
  if(settings.dev){
    ctx.fillStyle = "gray";
    ctx.strokeStyle = 'gray';
    const safePoint = (player.safePoint) ? "Safe Point: {X:" + Math.round(player.safePoint.pos.x*field_of_view) + ", Y: " + Math.round(player.safePoint.pos.y*field_of_view) + "} ([), to clear (])" : "None ([)"; 
    ctx.fillText(safePoint, 0, 45+offset);
    ctx.strokeText(safePoint, 0, 45+offset);
    const playerPos = "Player: {X:" + Math.round(player.pos.x*field_of_view) + ", Y: " + Math.round(player.pos.y*field_of_view) + ", Speed: "+greaterMax(player)+"}"; 
    ctx.fillText(playerPos, 0, 70+offset);
    ctx.strokeText(playerPos, 0, 70+offset);
    const timerClear = "Timer-clear: "+settings.timerClear+" (P), (O)";
    ctx.fillText(timerClear, 0, 95+offset);
    ctx.strokeText(timerClear, 0, 95+offset);
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  if (players[0].hasCheated) {
    ctx.beginPath();
    ctx.fillStyle = "purple"
    ctx.fillRect(370, height - (width / 2 - 258 - 370), width / 2 - 258 - 370, width / 2 - 258 - 370);
    ctx.closePath();
  }
  if (settings.sandbox) { //draws a black box next to hero card
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.fillRect(370, height - ((width / 2 - 258 - 370) * 2), width / 2 - 258 - 370, width / 2 - 258 - 370);
    ctx.closePath();
  }
  ctx.beginPath();
  ctx.fillStyle = "black"
  ctx.closePath();
}

function renderTiles(area, players, foc_us_unused) {
  // var boundary = area.boundary; let wid = boundary.w*32, heig = boundary.h*32, world = game.worlds[players[0].world];
  var boundary = area.boundary;
  let wid = boundary.w*field_of_view;
  let heig = boundary.h*field_of_view;
  let world = game.worlds[players[0].world];
  var tile_image = tiles;
  const can_offscreen = createOffscreenCanvas(wid*field_of_view/32,heig*field_of_view/32)
  const ctx = can_offscreen.getContext('2d');
  ctx.translate(-Math.round(width / 2 + ((area.pos.x)) * field_of_view),-Math.round(height / 2 + ((area.pos.y)) * field_of_view))
  for (var i in area.zones) {
    var zone = area.zones[i];
    var areaXMinus = 0;
    var areaYMinus = 0;
    zone.size.x = Math.round(zone.size.x)
    zone.size.y = Math.round(zone.size.y)
    if(area.pos.x!=Math.round(area.pos.x))areaXMinus = Math.round(area.pos.x) - area.pos.x
    if(area.pos.y!=Math.round(area.pos.y))areaYMinus = Math.round(area.pos.y) - area.pos.y
    for (var j = 0; j < zone.size.x; j++) {
      for (var k = 0; k < zone.size.y; k++) {
        ctx.beginPath();
        var posX = ((area.pos.x + zone.pos.x + j) % 4);
        var posY = ((area.pos.y + zone.pos.y + k) % 4);
        if (posX < 0) {
          posX = 4 - Math.abs(posX);
        }
        if (posY < 0) {
          posY = 4 - Math.abs(posY);
        }
        var sizeX = zone.size.x;
        posX-=areaXMinus;
        posY-=areaYMinus;
        //console.log(Math.round(width / 2 + ((area.pos.x + zone.pos.x + j)) * fov))
        //console.log(Math.round(height / 2 + ((area.pos.y + zone.pos.y + k)) * fov))
        //console.log(width,height)
        var textureType = zone.type
        if(zone.type == 4){textureType = 2;}
        else if(zone.type == 5){textureType = 4;}
          ctx.imageSmoothingEnabled = true;
          ctx.drawImage(tile_image, Math.abs(posX) * 32 + textureType * 128, Math.abs(posY) * 32 + area.texture * 128, 32, 32, Math.round(width / 2 + ((area.pos.x + zone.pos.x + j)) * field_of_view), Math.round(height / 2 + ((area.pos.y + zone.pos.y + k)) * field_of_view), field_of_view, field_of_view);
          ctx.closePath();
          ctx.beginPath();
          ctx.fillStyle = area.background_color;
          ctx.fillRect(Math.round(width / 2 + ((area.pos.x + zone.pos.x + j)) * field_of_view), Math.round(height / 2 + ((area.pos.y + zone.pos.y + k)) * field_of_view), field_of_view, field_of_view);
          ctx.fill();
          ctx.closePath();
          if (zone.color) {
            ctx.beginPath();
            ctx.fillStyle = zone.background_color;
            ctx.fillRect(Math.round(width / 2 + ((area.pos.x + zone.pos.x + j)) * field_of_view), Math.round(height / 2 + ((area.pos.y + zone.pos.y + k)) * field_of_view), field_of_view, field_of_view);
            ctx.fill();
            ctx.closePath();
          }
      }
    }
  }
  return {can_html_offscreen:can_offscreen,ctx:ctx};
}

function renderFirstEntities(area, players, focu_s_8371) {
  var entities = area.entities
  for (var i in entities) {
    ctx.globalAlpha = 1;
    for (var j in entities[i]) {
      if (entities[i][j].renderFirst) {
        if (i=="shield") {
          ctx.save()
          ctx.translate((width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_8371.x) * field_of_view), (height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_8371.y) * field_of_view))
          ctx.rotate(entities[i][j].rot)
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.fillRect(-entities[i][j].size.x*field_of_view,-entities[i][j].size.y*field_of_view, entities[i][j].size.x*field_of_view*2, entities[i][j].size.y*field_of_view*2);
          //context.fillRect(-(width / 2 + (area.pos.x + entities[i][j].pos.x - focus.x) * fov), -(height / 2 + (area.pos.y + entities[i][j].pos.y - focus.y) * fov), entities[i][j].size.x*fov*2, entities[i][j].size.y*fov*2);
          ctx.fill();
          ctx.closePath();
          ctx.restore();
        }else {
          ctx.beginPath();
          ctx.fillStyle = entities[i][j].color;
          if (entities[i][j].Harmless&&!entities[i][j].texture) {
            ctx.globalAlpha = 0.4;
          }
          if(entities[i][j].radius * field_of_view>0){
          if(!entities[i][j].texture)ctx.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_8371.x) * field_of_view, height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_8371.y) * field_of_view, entities[i][j].radius * field_of_view, 0, Math.PI * 2, true);
          else{
            var Texture;
            switch(entities[i][j].texture){
              case "pumpkinOn": Texture = pumpkinOn;
              break;
              case "pumpkinOff": Texture = pumpkinOff;
              break;
              case "sweet_tooth_item": Texture = sweet_tooth_item;
              case "vengeance_projectile": Texture = vengeance_projectile;
            }
            if(Texture){
              ctx.imageSmoothingEnabled = true;
              ctx.drawImage(Texture,width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_8371.x-0.95) * field_of_view, height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_8371.y-0.95) * field_of_view,entities[i][j].radius * field_of_view*2,entities[i][j].radius * field_of_view*2)
              Texture = 0;
              ctx.imageSmoothingEnabled = false;
            }
          }
        }
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}
function renderPlayers(area, players, focu_s_18738) {
  for (var i in players) {
    var player = players[i];
    if (player.bandage) {
      ctx.beginPath();
      ctx.fillStyle = "#dedabe";
      ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, player.radius * field_of_view + 3, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }
    if(player.aura){
      if(player.auraType == 0){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 128, 189, 0.25)";
        ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, ((100+Math.abs(greaterMax(player))*5) / 32) * field_of_view, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      } else if(player.auraType == 1){
        ctx.beginPath();
        ctx.fillStyle = "rgba(77, 233, 242, 0.2)";
        ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, 210/32 * field_of_view, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      } else if(player.auraType == 2){
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
        ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, 230/32 * field_of_view, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      } else if(player.auraType == 3){
        ctx.beginPath();
        ctx.fillStyle = "rgba(153, 62, 6, 0.2)";
        ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, 190/32 * field_of_view, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      }
    }

    if(player.clownBall){
      const colors = ["rgb(2, 135, 4, .8)","rgb(228, 122, 42, .8)","rgb(255, 219, 118, .8)","rgb(4, 70, 255, .8)", "rgb(216, 48, 162, .8)"]
      ctx.beginPath();
      ctx.fillStyle = colors[player.prevColor]
      ctx.strokeStyle = "black"
      ctx.lineWidth = 2;
      ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, player.clownBallSize/32 * field_of_view, 0, Math.PI * 2, true);
      ctx.fill();
      if(settings.outline)ctx.stroke();
      ctx.closePath();
    }
    ctx.beginPath();
    if (!player.die) {
      if(player.wallGod){
        ctx.fillStyle = "rgba(139,0,0,.5)"
      } else if (player.god&&!player.reaperShade) {
        ctx.fillStyle = "purple";
      } else {
        ctx.fillStyle = player.tempColor;
        let rgb = hexToRgb(player.tempColor);
        if(player.night){ctx.fillStyle=`rgb(${rgb[0]},${rgb[1]},${rgb[2]},0.6)`}
        if(player.mortarTime>0&&player.mortarTime<1000){ctx.fillStyle=`rgb(${rgb[0]},${rgb[1]},${rgb[2]},${1-player.mortarTime/1000})`}
        if(player.fusion){ctx.fillStyle="rgba(60, 60, 75)"}
      }
    } else {
      ctx.fillStyle = "red";
    }
    if (player.type==7) {
      if (player.shape>0) {
        ctx.moveTo(width / 2 + (player.pos.x - focu_s_18738.x + player.radius * Math.cos(-Math.PI/2)) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y + player.radius * Math.sin(-Math.PI/2)) * field_of_view);
        var numberOfSides=4;
        if (player.shape==1) {
          numberOfSides=4;
        }
        if (player.shape==2) {
          numberOfSides=3;
        }
        if (player.shape==3) {
          numberOfSides=5;
        }
        for (var i = 1; i <= numberOfSides; i += 1) {
          ctx.lineTo(width / 2 + (player.pos.x - focu_s_18738.x + player.radius * Math.cos(i * 2 * Math.PI / numberOfSides-Math.PI/2)) * field_of_view,  height / 2 + (player.pos.y - focu_s_18738.y + player.radius * Math.sin(i * 2 * Math.PI / numberOfSides-Math.PI/2)) * field_of_view);
        }
      }else {
        ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, player.radius * field_of_view, 0, Math.PI * 2, true);
      }
    } else {
      if(!player.reaperShade)if(player.mortarTime<1000)ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, player.radius * field_of_view, 0, Math.PI * 2, true);
    }
    ctx.fill();
    ctx.closePath();
    if(player.poison){var poisoness = (player.poisonTimeLeft-player.poisonTime)/player.poisonTimeLeft; ctx.beginPath();ctx.fillStyle = "rgb(140, 1, 183,"+poisoness+")";ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, (player.radius+0.5/32) * field_of_view, 0, Math.PI * 2, true);ctx.fill();ctx.closePath();}
    if(player.frozen){var iceness = (player.frozenTimeLeft-player.frozenTime)/player.frozenTimeLeft; ctx.beginPath();ctx.fillStyle = "rgb(137, 231, 255,"+iceness+")";ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, (player.radius+0.5/32) * field_of_view, 0, Math.PI * 2, true);ctx.fill();ctx.closePath();}
    if(player.burningTimer>0){ctx.beginPath();ctx.fillStyle = "rgb(0, 0, 0,"+player.burningTimer/1000+")";ctx.arc(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view, player.radius * field_of_view, 0, Math.PI * 2, true);ctx.fill();ctx.closePath();}
    ctx.beginPath();
    if(document.getElementById("wreath").value!="None")if(!player.reaperShade)ctx.drawImage(hat, width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view - (25*((player.radius*32)/15)) / 32 * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view - (25*((player.radius*32)/15)) / 32 * field_of_view, 50 / 32 * field_of_view * ((player.radius*32)/15), 50 / 32 * field_of_view * ((player.radius*32)/15));
    ctx.closePath();
    ctx.beginPath();
    if(document.getElementById("wreath").value.endsWith("Crown"))if(!player.reaperShade)ctx.drawImage(gem, width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view - (25*((player.radius*32)/15)) / 32 * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view - (25*((player.radius*32)/15)) / 32 * field_of_view, 50 / 32 * field_of_view * ((player.radius*32)/15), 50 / 32 * field_of_view * ((player.radius*32)/15));
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    if(player.sweetToothConsumed){ctx.fillStyle = "rgb(255, 43, 143)";}
    if(!player.reaperShade)ctx.fillRect(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view - 18 / 32 * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view - player.radius * field_of_view - 8 / 32 * field_of_view, 36 / 32 * field_of_view * player.energy / player.maxEnergy, 7 / 32 * field_of_view);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "rgb(68, 118, 255)";
    ctx.lineWidth = 1;
    if(player.sweetToothConsumed){ctx.strokeStyle = "rgb(212, 0, 100)";}
    if(!player.reaperShade)ctx.strokeRect(width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view - 18 / 32 * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view - player.radius * field_of_view - 8 / 32 * field_of_view, 36 / 32 * field_of_view, 7 / 32 * field_of_view);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = 12 / 32 * field_of_view + "px Tahoma, Verdana, Segoe, sans-serif";
    ctx.textAlign = "center";
    if(!player.reaperShade)ctx.fillText(player.name, width / 2 + (player.pos.x - focu_s_18738.x) * field_of_view, height / 2 + (player.pos.y - focu_s_18738.y) * field_of_view - player.radius * field_of_view - 11 / 32 * field_of_view);
    ctx.closePath();
  }
}

function renderSecondEntities(area, players, focu_s_09133) {
  var entities = area.entities
  for (var i in entities) {
    for (var j in entities[i]) {
      if (entities[i][j].aura) {
        ctx.beginPath();
        ctx.fillStyle = entities[i][j].auraColor;
        ctx.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_09133.x) * field_of_view, height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_09133.y) * field_of_view, entities[i][j].auraSize * field_of_view, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  for (var i in entities) {
    for (var j in entities[i]) {
      ctx.globalAlpha = 1;
      if (!entities[i][j].renderFirst) {
        if (entities[i][j].shatterTime > 0) {
          ctx.globalAlpha = 0.4;
          var midX = width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_09133.x) * field_of_view;
          var midY = height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_09133.y) * field_of_view;
          var l = entities[i][j].radius / 4;
          var s = entities[i][j].radius;
          var u = 4e3 - entities[i][j].shatterTime;
          var f = (u - 500) / 500;
          var h = (u - 1e3) / 3e3;
          if (u < 250) {
            console.log("1");
            ctx.beginPath();
            ctx.fillStyle = entities[i][j].color;
            ctx.arc(midX, midY, Math.max(l, Math.max(l, entities[i][j].radius * (1 - u / 250))) * field_of_view, 0, 2 * Math.PI, !1);
            ctx.fill();
            ctx.closePath()
          } else if (u < 500) {
            console.log("2");
            ctx.beginPath();
            ctx.fillStyle = entities[i][j].color;
            ctx.arc(midX, midY, l * field_of_view, 0, 2 * Math.PI, !1);
            ctx.fill();
            ctx.closePath()
          } else if (u < 1e3) {
            console.log("3");
            let n = 5 * f;
            for (var o = 0; o < 8; o++) {
              ctx.beginPath();
              ctx.fillStyle = entities[i][j].color;
              ctx.arc(midX + (Math.cos(n) * f * s) * field_of_view, midY + (Math.sin(n) * f * s) * field_of_view, entities[i][j].radius / 3 * field_of_view, 0, 2 * Math.PI, !1);
              n += 2 * Math.PI / 3;
              ctx.fill();
              ctx.closePath();
            }
          } else {
            console.log("4");
            let n = 5 - 3 * h;
            for (var o = 0; o < 8; o++) {
              ctx.beginPath();
              ctx.fillStyle = entities[i][j].color;
              ctx.arc(midX + Math.cos(n) * (s - h * s) * field_of_view, midY + Math.sin(n) * (s - h * s) * field_of_view, Math.min(entities[i][j].radius, Math.max(l, entities[i][j].radius * h)) * field_of_view, 0, 2 * Math.PI, !1);
              n += 2 * Math.PI / 3;
              ctx.fill();
              ctx.closePath();
            }
          } ctx.globalAlpha = 1;
        } else {
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.fillStyle = entities[i][j].color;
          if (entities[i][j].Harmless&&!entities[i][j].texture) {
            ctx.globalAlpha = 0.4;
          }
          if (entities[i][j].alpha){
            if(!entities[i][j].Harmless){ctx.globalAlpha = entities[i][j].alpha;}
          }
          if (entities[i][j].color_change){
            const rgbColor = hexToRgb(entities[i][j].color);
            rgbColor[0] = parseInt(rgbColor[0])+entities[i][j].color_change;
            rgbColor[1] = parseInt(rgbColor[1])-1.45*entities[i][j].color_change;
            rgbColor[2] = parseInt(rgbColor[2])-1.3*entities[i][j].color_change;
            ctx.fillStyle = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`;
          }
          ctx.lineWidth = 2
          ctx.strokeStyle = "black"
          if(entities[i][j].radius * field_of_view>0){
            if(!entities[i][j].texture){ctx.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_09133.x) * field_of_view, height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_09133.y) * field_of_view, entities[i][j].radius * field_of_view, 0, Math.PI * 2, true);}
            else{
              var Texture;
              switch(entities[i][j].texture){
                case "pumpkinOn": Texture = pumpkinOn;
                break;
                case "pumpkinOff": Texture = pumpkinOff;
                break;
              }
              if(Texture){
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(Texture,width / 2 + (area.pos.x + entities[i][j].pos.x - focu_s_09133.x-entities[i][j].radius) * field_of_view, height / 2 + (area.pos.y + entities[i][j].pos.y - focu_s_09133.y-entities[i][j].radius) * field_of_view,entities[i][j].radius * field_of_view*2,entities[i][j].radius * field_of_view*2)
                Texture = 0;
                ctx.imageSmoothingEnabled = false;
              }
            }
            ctx.fill();
            if (entities[i][j].decayed) {
              ctx.fillStyle = "rgba(0, 0, 128, 0.2)"
              ctx.fill();
            }
            if(entities[i][j].defended){
              ctx.fillStyle = "rgba(0, 0, 0, 0.6)"
              ctx.fill();
            }
            if (entities[i][j].repelled) {
              ctx.fillStyle = "rgba(255, 230, 200, 0.5)"
              ctx.fill();
            }
            if (entities[i][j].outline && settings.outline) {
              ctx.stroke()
            }
            ctx.globalAlpha = 1;
            ctx.closePath();
          }
        }
      }
    }
  }
}

function renderMinimap(area, players, fo_cus_894891) {
  /*this.minimapWidth=this.maxWidth,this.minimapHeight=this.maxHeight;
  var e={};
  e.centerX=this.self.entity.x;
  e.centerY=this.self.entity.y;
  e.width=this.minimapWidth/.1;
  e.height=this.minimapHeight/.1;
  e.left=this.self.entity.x-e.width/2;
  e.top=this.self.entity.y-e.height/2;
  this.renderBackground(t,e);
  for(var i=0;i<this.entities.length;i++){
    var a=this.entities[i];
    n=.1*(a.x-e.centerX)+this.left+this.minimapWidth/2;
    r=.1*(a.y-e.centerY)+this.top+this.minimapHeight/2;
    if(a.wall){
      var h=.1*a.width;
      s=.1*a.height;
      renderWall(t,a,n,r,h,s)}
    else{
      var o=.1*a.radius;
      renderEntity(t,a,n,r,o);
    }}*/
  //drawNearbyMinimap(focus,context,canvas,area.zones,area.pos)
  var minimapSize = new Vector(370, 100)
  var bound = area.boundary;
  var xCoef = minimapSize.x / bound.w;
  var yCoef = minimapSize.y / bound.h;
  var coef = xCoef;
  if (yCoef < xCoef) {
    coef = yCoef;
  }
  var yOff = minimapSize.y - bound.h * coef
  for (var i in area.zones) {
    ctx.beginPath();
    if (area.zones[i].type == 0) {
      ctx.fillStyle = "rgb(255, 255, 255)"
    }
    if (area.zones[i].type == 1) {
      ctx.fillStyle = "rgb(195, 195, 195)"
    }
    if (area.zones[i].type == 2) {
      ctx.fillStyle = "rgb(255, 244, 108)"
    }
    if (area.zones[i].type == 3) {
      ctx.fillStyle = "rgb(106, 208, 222)"
    }
    ctx.fillRect((area.zones[i].pos.x - bound.x) * coef, height - minimapSize.y + (area.zones[i].pos.y - bound.y) * coef + yOff, area.zones[i].size.x * coef, area.zones[i].size.y * coef);
    ctx.closePath();
  }
  for (var i in players) {
    var newPos = new Vector((players[i].pos.x - area.pos.x - bound.x) * coef, (players[i].pos.y - area.pos.y - bound.y) * coef)
    ctx.beginPath();
    ctx.fillStyle = players[i].color;
    ctx.arc(newPos.x, height - minimapSize.y + newPos.y + yOff, 4, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
  }
}

function renderUI(area, players, focu_s_910930) {
  const c = hexToRgb(game.players[0].color);
  ctx.imageSmoothingEnabled = true;
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
  if(!(game.players[0].magnet||game.players[0].flashlight)){ctx.fillRect(width / 2 - 516 / 2, height - 85, 516, 85);}
  else{ctx.fillRect(width / 2 - 516 / 2, height - 85, 516+82, 85);}
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]},0.4)`
  if(!(game.players[0].magnet||game.players[0].flashlight)){ctx.fillRect(width / 2 - 516 / 2, height - 100, 516, 15);}
  else{ctx.fillRect(width / 2 - 516 / 2, height - 100, 516+82, 15);}
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = game.players[0].color
  if(!(game.players[0].magnet||game.players[0].flashlight)){ctx.fillRect(width / 2 - 516 / 2, height - 100, (game.players[0].currentExperience / game.players[0].maxExperience) * 516, 15);}
  else{ctx.fillRect(width / 2 - 516 / 2, height - 100, (game.players[0].currentExperience / game.players[0].maxExperience) * 598, 15);}
  ctx.fill();
  ctx.closePath();

  if(game.players[0].magnet||game.players[0].flashlight){
    ctx.beginPath();
    if(game.players[0].magnet){if(game.players[0].magnetDirection == "Down")ctx.drawImage(magnetDown,width/2+(516-132+82+82)/2,height-68,48,48)
    else if(game.players[0].magnetDirection == "Up")ctx.drawImage(magnetUp,width/2+(516-132+82+82)/2,height-68,48,48)}
    else if(game.players[0].flashlight){ctx.drawImage(flashlight,width/2+(516-132+82+82)/2,height-68,48,48)}
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(width/2+(516-84+82+82)/2,height-77, 3.6, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("[C] or [L]", width/2+(516-84+82+82)/2,height-8)
    ctx.closePath();
  } 

  if(game.players[0].hasAB){
    var text1 = "[Z] or [J]";
    var text2 = "[X] or [K]";
    var text3 = "Locked";
    for(var a = 0; a<2; a++){
      var text = (a==1) ? text1 : text2;
      var ab = (a==1) ? players[0].ab1 : players[0].ab2;
      var abL = (a==1) ? players[0].ab1L : players[0].ab2L;
      var abC = (a==1) ? players[0].firstAbilityCooldown : players[0].secondAbilityCooldown;
      var abTC = (a==1) ? players[0].firstTotalCooldown : players[0].secondTotalCooldown;
      var ab1ML = (a==1) ? players[0].ab1ML||false : players[0].ab2ML||false;
      if(!abL){text = text3;}
      var correct = (a==1) ? 0 : 82;
      ctx.fillStyle = "white";
      ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
      ctx.textAlign = "center";
      ctx.beginPath();
      ctx.drawImage(ab, width / 2 - 516 / 2 + 105 + 41 + 246 + correct - 24, height - 85 - 3 + 17 + 44 - 17 - 24,48,48)
      ctx.fillText(text, width / 2 - 516 / 2 + 105 + 41 + 246 + correct, height - 85 + 17/2 + 44 - 17 + 24 + 17)
      ctx.closePath();
      if(!abL){ctx.fillStyle="rgba(0, 0, 0, 0.6)"}
      else{ctx.fillStyle="rgba(0, 0, 0, 0.2)"};
      ctx.fillRect(width / 2 - 516 / 2 + 105 + 41 + 246 + correct - 24, height - 85 - 3 + 17 + 44 - 17 - 24,48,48)
      ctx.lineWidth = 1;
      for(var p = 0; p<5; p++){
        (!abL)?ctx.strokeStyle="rgb(150, 150, 150)":ctx.strokeStyle="rgb(200, 200, 200)"
        ctx.beginPath();
        var h = width / 2 - 516 / 2 + 105 + 41 + 246 + correct - 24 + 5; var f = h + 40; var y = height - 85 - 3 + 17 + 44 - 17 - 24 + 45 - 48 - 6;
        var b = (ab1ML)? (h+(f-h)*(2/(5-1))):h+(f-h)*(p/(5-1))
        ctx.arc(b,y,3,0,Math.PI * 2, true)
        ctx.stroke();
        ctx.closePath();
      }
      ctx.fillStyle = "rgb(255, 255, 0)";
      ctx.strokeStyle = "rgb(255, 255, 0)";
      for(var p = 0; p<abL; p++){
        ctx.beginPath();
        var h = width / 2 - 516 / 2 + 105 + 41 + 246 + correct - 24 + 5; var f = h + 40; var y = height - 85 - 3 + 17 + 44 - 17 - 24 + 45 - 48 - 6;
        var b = (ab1ML)? (h+(f-h)*(2/(5-1))):h+(f-h)*(p/(5-1))
        ctx.arc(b,y,3,0,Math.PI * 2, true)
        if(abL)ctx.fill();
        if(abL)ctx.stroke();
        ctx.closePath();
      }
      var cooldownTime = abC/abTC;
      ctx.fillStyle="rgba(0, 0, 0, 0.6)";
      sectorInRect(ctx,width / 2 - 516 / 2 + 105 + 41 + 246 + correct - 24,height - 85 - 3 + 17 + 44 - 17 - 24,48,48,360*(1-cooldownTime)-90)
    }
  }

  ctx.beginPath();
  ctx.font = 18 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = game.players[0].color;
  ctx.fillText(game.players[0].className, width / 2 - 516 / 2 + 55, height - 85 + 20)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = game.players[0].color;
  ctx.arc(width / 2 - 516 / 2 + 55, height - 85 + 55, 23, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white"
  ctx.fillText(game.players[0].level, width / 2 - 516 / 2 + 55, height - 85 + 63)
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(128, 128, 128,0.75)"
  ctx.moveTo(width / 2 - 516 / 2 + 105, height - 85);
  ctx.lineTo(width / 2 - 516 / 2 + 105, height);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.font = 13 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white"
  ctx.fillText("Points:", width / 2 - 516 / 2 + 136, height - 85 + 16)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(width / 2 - 516 / 2 + 169, height - 85 + 12, 8, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(players[0].points, width / 2 - 516 / 2 + 169, height - 85 + 16)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Speed", width / 2 - 516 / 2 + 105 + 41, height - 85 + 17 + 44)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(parseFloat(players[0].speed.toFixed(1)), width / 2 - 516 / 2 + 105 + 41, height - 85 + 17 + 44 - 17)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Energy", width / 2 - 516 / 2 + 105 + 41 + 82, height - 85 + 17 + 44)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText((Math.round(players[0].energy)) + " / " + players[0].maxEnergy, width / 2 - 516 / 2 + 105 + 41 + 82, height - 85 + 17 + 44 - 17)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Regen", width / 2 - 516 / 2 + 105 + 41 + 164, height - 85 + 17 + 44)
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText((Math.round(players[0].regen * 10) / 10), width / 2 - 516 / 2 + 105 + 41 + 164, height - 85 + 17 + 44 - 17)
  ctx.closePath();
}

function renderAssets(area, players, foc_us_09135) {
  ctx.globalAlpha = 1;
  var tile_image = tiles
  var player = players[0];
  for (var i in area.assets) {
    var zone = area.assets[i];
    for (var j = 0; j < zone.size.x; j++) {
      for (var k = 0; k < zone.size.y; k++) {
        var tileSize = 4;
        if (zone.texture == 4) {
          tileSize = 16
        }
        ctx.beginPath();
        var posX = ((area.pos.x + zone.pos.x + j) % tileSize);
        var posY = ((area.pos.y + zone.pos.y + k) % tileSize);
        if (posX < 0) {
          posX = tileSize - Math.abs(posX);
        }
        if (posY < 0) {
          posY = tileSize - Math.abs(posY);
        }
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(tile_image, Math.abs(posX) * 32, Math.abs(posY) * 32 + zone.texture * 128, 32, 32, width / 2 + ((area.pos.x + zone.pos.x + j) - foc_us_09135.x) * field_of_view, height / 2 + ((area.pos.y + zone.pos.y + k) - foc_us_09135.y) * field_of_view, field_of_view, field_of_view);
        ctx.closePath();
      }
    }
    if(zone.type==6){
      var posX = area.pos.x + zone.pos.x;
      var posY = area.pos.y + zone.pos.y;
      ctx.drawImage(torch, width/2+(posX-foc_us_09135.x)*field_of_view,height/2+(posY-foc_us_09135.y)*field_of_view)
    } else if(zone.type==7){
      var posX = area.pos.x + zone.pos.x;
      var posY = area.pos.y + zone.pos.y;
      ctx.drawImage(gate, width/2+(posX-foc_us_09135.x)*field_of_view,height/2+(posY-foc_us_09135.y)*field_of_view)
    } else if(zone.type==8){
      var posX = area.pos.x + zone.pos.x;
      var posY = area.pos.y + zone.pos.y;
      ctx.drawImage(torchUp, width/2+(posX-foc_us_09135.x)*field_of_view,height/2+(posY-foc_us_09135.y)*field_of_view)
    }
    else if(zone.type==5){
      var posX = area.pos.x + zone.pos.x;
      var posY = area.pos.y + zone.pos.y;
      ctx.drawImage(flashlight_item, width/2+(posX-foc_us_09135.x)*field_of_view,height/2+(posY-foc_us_09135.y)*field_of_view)
      if(posX-foc_us_09135.x<2&&posX-foc_us_09135.x>-2&&posY-foc_us_09135.y<2&&posY-foc_us_09135.y>-2){player.flashlight = true;}
    }
  }
}
