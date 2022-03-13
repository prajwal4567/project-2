var red,blue;
var a=[];
var k=[];
var allvalue=[];
var pairstore=[];
var m;
function preload(){
    red = loadImage("blue_circle2.png");
    blue = loadImage("blue_circle1.png");
}
function setup(){
    createCanvas(1000,1000);
    for(var i = 0 ; i<21 ;i++){
        a[i]=createSprite(Math.round(random(0,1000)),Math.round(random(0,1000)),10,10);
        a[i].addImage("blue",blue);
    }
    for(var f = 0 ; f<6 ;f++){
        k[f]=createSprite(Math.round(random(0,1000)),Math.round(random(0,1000)),10,10);
        k[f].addImage("red",red);
        console.log(k);
    }
}
function draw(){
    background("black");
    repel(k[0],a[0].x,a[0].y,k[0].x,k[0].y);
    attract(a[0],k[0].x,k[0].y,a[0].x,a[0].y);
    console.log(k[0].y);             
    drawSprites();
}  
function attract(s,x,y,ax,ay){
var distanceax=x-ax;
var distanceay=y-ay;
var directionax=Math.sign(distanceax);
var directionay=Math.sign(distanceay);
var changeax,changeay;
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
    if(distanceax=0){
        ax = ax+0;
    }
    if(distanceay=0){
        ay = ay+0;
    }
    s.x=ax;
    s.y=ay;
}
function repel(s,x,y,ax,ay){
var rdistanceax=x-ax;
var rdistanceay=y-ay;
var rdirectionax=Math.sign(rdistanceax);
var rdirectionay=Math.sign(rdistanceay);
var rchangeax,rchangeay;
    if(rdistanceax <100 || rdistanceay<100 || rdistanceax >-100 || rdistanceay>-100){
        if(rdirectionax = 1){
            rchangeax=100-rdistanceax;
            ax = ax+rchangeax;
        }
        if(rdirectionax = -1){
            rchangeax=100-(rdistanceax*-1);
            ax = ax-rchangeax;
        }
        if(rdirectionay = 1){
            rchangeay=100-rdistanceay;
            ay = ay+rchangeay;
        }
        if(rdirectionay = -1){
            rchangeay=100-(rdistanceay*-1);
            ay = ay-rchangeay;
        }
    }
    if(rdistanceax >100 || rdistanceay>100 || rdistanceax <-100 || rdistanceay<-100){
        ax=ax+0;
        ay=ay+0;
    }
s.x=ax;
s.y=ay;
} 