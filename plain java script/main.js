let block1,block2,block3,block4,block5,i;
function setup(){
    createCanvas(1000,1000);
    for(i = 0 ; i<6 ;i++){
        a= new Array(0+i);
        a=createSprite(Math.round(random(0,1000)),Math.round(random(0,1000)),10,10);
        console.log(a[1]);
    }
}
function draw(){
    background("black");
    drawSprites();
}  
function attarct(x,y,ax,ay){
let distanceax=x-ax;
let distanceay=y-ay;
let directionax=Math.sign(distanceax);
let directionay=Math.sign(distanceay);
let changeax,changeay;
    if(directionax = 1){
        changeax=100/distanceax;
        ax = ax+changeax;
    }
    if(directionax = -1){
        changeax=100/(distanceax*-1);
        ax = ax-changeax;
    }
    if(directionay = 1){
        changeay=100/distanceay;
        ay = ay+changeay;
    }
    if(directionay = -1){
        changeay=100/(distanceay*-1);
        ay = ay-changeay;
    }
    if(distanceay=0){
        ay =ay+ 0;
    }
    if(distanceax=0){
        ax =ax+ 0;
    }
}
function repail(x,y,ax,ay){
let distanceax=x-ax;
let distanceay=y-ay;
let directionax=Math.sign(distanceax);
let directionay=Math.sign(distanceay);
let changeax,changeay;
    if(distanceax <101 || distanceay<101 || distanceax <-101 || distanceay<-101){
        if(directionax = 1){
            changeax=100-distanceax;
            ax = ax+changeax;
        }
        if(directionax = -1){
            changeax=100-(distanceax*-1);
            ax = ax-changeax;
        }
        if(directionay = 1){
            changeay=100-distanceay;
            ay = ay+changeay;
        }
        if(directionay = -1){
            changeay=100-(distanceay*-1);
            ay = ay-changeay;
        }
    }
} 