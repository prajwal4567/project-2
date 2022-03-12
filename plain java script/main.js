var red,blue;
var a=[];
var k=[];
var ac=[];
var kc=[];
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
        ac.push({x:a[i].x,y:a[i].y});
    }
    for(var f = 0 ; f<6 ;f++){
        k[f]=createSprite(Math.round(random(0,1000)),Math.round(random(0,1000)),10,10);
        k[f].addImage("red",red);
        kc.push({x:k[f].x,y:k[f].y});
    }
    allvalue.push(ac,kc)
    pairstore.push({x:allvalue[0][0].x,y:allvalue[0][0].y,ax:allvalue[1][0].x,ay:allvalue[1][0].x});
}
function draw(){
    background("black");
    //var k=repel();
    var n=attract(pairstore[0].x,pairstore[0].y,pairstore[0].ax,pairstore[0].ay);
    drawSprites();
    a[0].x=n[0];
    a[0].y=n[1]; 
    console.log(a[0].x);             
}  
function attract(x,y,ax,ay){
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
    if(distanceay=0){
        ay =ay+ 0;
    }
    if(distanceax=0){
        ax =ax+ 0;
    }
    var p=[ax,ay];
    return p;
}
function repel(x,y,ax,ay){
var distanceax=x-ax;
var distanceay=y-ay;
var directionax=Math.sign(distanceax);
var directionay=Math.sign(distanceay);
var changeax,changeay;
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
var p=[ax,ay];
return p;
} 