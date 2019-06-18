var canvas = document.querySelector('canvas');
                                
canvas.width = 250;
canvas.height =600;

var c = canvas.getContext('2d');


var y1=500;
var x=(canvas.width);
var y=(canvas.height);

function particle(x,y,radius,color,radian){
    
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=color;

    this.radians=radian;
   


 this.update = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius,0,Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        this.draw();

    };
        

    this.draw=()  =>{

        

    this.velocity=0.00008;


     document.addEventListener("keydown", keyDown);
     document.addEventListener("keyup", keyUp);

    

  function keyDown(/** @type {KeyboardEvent} */ ev) {
            switch(ev.keyCode) {
                case 37: 

                
                // for(i=0;i<2;i++){
                //     if(particles[i].radians>Math.PI*2){
                //         particles[i].radians=2*Math.PI - particles[i].radians;
                        
                //     }
                // }

                 for(i=0;i<2;i++){

        particles[i].radians+=particles[i].velocity;
        particles[i].x = x - Math.cos(particles[i].radians)*80;
        particles[i].y = y - Math.sin(particles[i].radians)*80;


                 }
                    break;

                case 39:

                // for(i=0;i<2;i++){
                //     if(particles[i].radians>Math.PI*2){
                //         particles[i].radians=2*Math.PI - particles[i].radians;
                        
                //     }
                // }

                   for(i=0;i<2;i++){
                    particles[i].radians-=particles[i].velocity;
        particles[i].x = x + Math.cos(particles[i].radians)*80;
        particles[i].y = y + Math.sin(particles[i].radians)*80;
    }
                    break;
            }
        }

        function keyUp(/** @type {KeyboardEvent} */ ev) {
            switch(ev.keyCode) {
                case 37: // left arrow (stop rotating left)
                    
                    break;
                case 39: // right arrow (stop rotating right)
                     
                    break;
            }
        }

        
    };
    
   
     
}




// function obstacle(x,y,height,width){
    
//     this.x=x;
//     this.y=y;
//     this.height=height;
//     this.width=width;
//     this.velocity=0.8;

    

//     this.update=()  =>{
//        this.y += this.velocity;
//        this.draw();
//     };
    
//     this.draw = () => {
//         c.beginPath();
//         c.fillRect(this.x, this.y, this.height,this.width);
//         c.fillStyle = 'white';
//         c.fill();
//         c.closePath();
        
        
        

//     };
    
     
// }

let particles;

//let obstacles;


function init1() {
    particles = [];
    for(let i=0;i<1;i++){
        particles.push(new particle(canvas.width/2, canvas.height/2,10,'blue',0));
        
    }
     for(let i=0;i<1;i++){
        particles.push(new particle(canvas.width/2, canvas.height/2,10,'red',Math.PI));
        
    }
    
    console.log(particles);
    
}


// for(var i = 0; i < 100; i++){
        
//         constant = obstacle.width+gap;
//         c.fillRect(obstacle[i].x+ constant,obstacle[i].y,100,30);
       
             
//         obstacle[i].y--;
        
//         if( obstacle[i].y == 300){
//             obstacle.push({
//                 y : canvas.height,
//                 x : Math.floor(Math.random()*obstacle.width)-obstacle.width
//             }); 
//         }

//function init2(){
    
    
  //  obstacles = [];
    //
            //});   
        //}

        
    //console.log(obstacles);
    ///}
//}

init1();
//init2();

 var obstacle = [];

obstacle[0] = {
    x : 200,
    y : 100,
    height:100,
    width: 30,
    xv: 0,
    yv: Math.random() * 0.6
    
    
};

var gap;

animate();
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(40,40,40,0.1)';
    c.fillRect(0,0, innerWidth, innerHeight);

     particles.forEach(particle => {
        particle.update();
     });
    
    for(var i = 0; i < obstacle.length; i++){

        c.fillStyle="white";
        c.fillRect(obstacle[i].x, obstacle[i].y,100,30);
        obstacle[i].y++;

       

        if(! Colliding()){

          if( obstacle[i].y == 300 ){
            obstacle.push({
                x : Math.random()*canvas.width,
                y :0
            }); 
        }

    }



    
         



   
    //return (dx*dx+dy*dy<=(particles[i].radius*particles[i].radius));

    

          
          
           }


}

function Colliding(){


   for(i=0;i<2;i++){

    var distX1 = Math.abs(particles[0].x - obstacle[i].x-obstacle[i].width/2);
    var distX2 = Math.abs(particles[1].x - obstacle[i].x-obstacle[i].width/2);

    var distY1 = Math.abs(particles[0].y - obstacle[i].y-obstacle[i].height/2);
    var distY2 = Math.abs(particles[1].y - obstacle[i].y-obstacle[i].height/2);

    if (distX1 > (obstacle[i].width/2 + particles[0].radius)) { return false; }
    if (distX1 > (obstacle[i].width/2 + particles[1].radius)) { return false; }
    if (distX2 > (obstacle[i].width/2 + particles[0].radius)) { return false; }
    if (distX2 > (obstacle[i].width/2 + particles[1].radius)) { return false; }

    if (distY1 > (obstacle[i].height/2 + particles[0].radius)) { return false; }
    if (distY1 > (obstacle[i].height/2 + particles[1].radius)) { return false; }
    if (distY2 > (obstacle[i].height/2 + particles[0].radius)) { return false; }
    if (distY2 > (obstacle[i].height/2 + particles[1].radius)) { return false; }


    if (distX1 <= (obstacle[i].width/2)) 
        {  location.reload(true); } 
    if (distX2 <= (obstacle[i].width/2)) 
        {  location.reload(true); }

    if (distY1 <= (obstacle[i].height/2)) 
        { location.reload(true); }
    if (distY2 <= (obstacle[i].height/2)) 
        { location.reload(true); }

    var dx1=distX1-obstacle[i].width/2;
    var dx2=distX2-obstacle[i].width/2;
    var dy1=distY1-obstacle[i].height/2;
    var dy2=distY2-obstacle[i].height/2;


   if(dx1*dx1+dy1*dy1==particles[0].radius*particles[0].radius){
    location.reload(true);
   }


   if(dx2*dx2+dy2*dy2==particles[1].radius*particles[1].radius){
    location.reload(true);
   }

   }

}
// for(i=0;i<obstacle.length;i++){


// }

    //  if ( obstacle[i].y == 125 ){
        //    obstacle.push({
          //      x : Math.floor(Math.random()*canvas.width)-canvas.width,
            //    y : canvas.height
    
    
   
    


    
   // 
//c.fillRect(x,y,100,30);
//c.fillRect(x,y,100,30);
//c.fillRect(x,y,100,30);

 //}
//c.beginPath();
//c.arc(300,y1,10,0, Math.PI*2, false);
//c.arc(400,y1,10,0,Math.PI*2,false);
//c.stroke();
//y1=y1-1;
 
//console.log('canvas');


//
  //
  




//console.log(canvas);

