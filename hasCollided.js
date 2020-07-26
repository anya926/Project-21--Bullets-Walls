function hasCollided(bullet,wall) {
    if(wall.x-bullet.x<wall.width/2+bullet.width/2){
        return true
    }
    else{
        return false;
    }
  }