function collide(object1,object2){

    if(object1.x - object2.x  <=  (object1.width/2  + object2.width/2))
      object2.velocityX=0;
  
      var  damage;
      damage=((0.5*weight*speed*speed)/(thickness*thickness*thickness));
      console.log(damage);
     if(damage>10)
     object1.shapeColor="red";
     else 
    object1.shapeColor="green";
  
  }