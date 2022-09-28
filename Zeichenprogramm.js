//Erstellt Arbeitsfläche
function setup() {
  createCanvas(windowWidth, windowHeight); //Variable anhand der Fenstergröße
  background(240);
}

//Funktion um Textfeld zu erstellen
  function textfeld(r,g,b,x,y,textlel,size)
    {
      fill(r,g,b);
      textSize(size);
      text(textlel,x,y);
    }
//Funktion für Brushgröße -- funktioniert nicht
  let brushSize = 20;
  function keyPressed(){
    if (keyCode === LEFT_ARROW)
      {
        brushSize = (brushSize - 1);
      }
    //if (keyCode === RIGHT_ARROW)
    //  {
        brushSize = (brushSize + 1);
    //  }
  }

//Variablen setzen
stifttoggled = false;
colour = 'black'

//Erstellt Symbolleiste
  function erzeugeSymbolleiste(){
    //Hintergrund der Symbolleiste
    function grundformSymbolleiste(){
      fill(175);
      rect(0,0,displayWidth,40,0) //Variable Breite
      noStroke();
  }
    
  //Window Buttons zur Bedienung des Fensters
  function windowButton(x,y,c){
    fill(c);
    circle(x,y,15);
  }
  
  //Definition eines normalen Buttons
  function normalButton(x,w,c,t,active){
    if (active===true){
      fill ('white')
      rect(x,5,w,30);
      textfeld(0,0,0,x+5,25,t,16)
    }
    if (active===false){
      fill(c);
      rect(x,5,w,30);
      textfeld(0,0,0,x+5,25,t,16)
    }
  }
  
  //Definition eines Farbbuttons
  function colorButton(x,c){
    normalButton(x,30,c,' ',false);
    if(mouseIsPressed === true && mouseX > x && mouseX < x+30 && mouseY > 5 && mouseY < 35)
      {
        colour = c
      }
  }
  
  //Window-Buttons:
  function schliessen(){
      windowButton(20,20,'red');
  }
  function minimieren(){
      windowButton(40,20,'yellow');
  }
  function vollbild(){
    windowButton(60,20,'green');
    if(mouseIsPressed === true && mouseX > 55 && mouseX < 65 && mouseY > 15 && mouseY < 25)
    {
    let fs = fullscreen();
    fullscreen(!fs);
    }
  }
    
  //Brush-Tool Button:
  function stift(){
    if (stifttoggled===true)
      {
        normalButton(100,40,'grey','Stift',true);
      }
    else {
      normalButton(100,40,'grey','Stift',false);
    }
    if(mouseIsPressed === true && mouseX > 100 && mouseX < 140 && mouseY > 5 && mouseY < 35)
    {
      stifttoggled = true
      normalButton(100,40,'grey','Stift',true);
    }
    
  }
  function stiftaus(){
    if (stifttoggled===true)
      {
        normalButton(145,70,'grey','Stift aus',false);
      }
    else 
      {
        normalButton(145,70,'white','Stift aus',true);
      }
    if(mouseIsPressed === true && mouseX > 145 && mouseX < 220 && mouseY > 5 && mouseY < 35)
    {
      stifttoggled = false
      normalButton(100,40,'grey','Stift',false);
    }
    
  }
    
  //Speichern-Button
  function speichern(){
    if(mouseIsPressed === true && mouseX > 220 && mouseX < 280 && mouseY > 5 && mouseY < 35)
      {
        normalButton(220,85,'white','Speichern',true);
        save();
      }
    else
      {
        normalButton(220,85,'grey','Speichern',false);
      }
  }
    
  //Löschen-Button
  function loeschen(){
    if(mouseIsPressed === true && mouseX > 310 && mouseX < 385 && mouseY > 5 && mouseY < 35)
      {
        normalButton(310,75,'white','Löschen',true);
        background(240);
      }
    else
      {
        normalButton(310,75,'grey','Löschen',false);
      }
  }
    
  //farbeauswahl:
  function farbauswahl(){
    colorButton(450,'red')
    colorButton(485,'green');
    colorButton(520,'blue');
    colorButton(555,'yellow');
    colorButton(590,'white');
    colorButton(625,'black');
  }
    
  //Aufruf der Funktionen 
  grundformSymbolleiste();
  schliessen();
  minimieren();
  vollbild();
  stift();
  stiftaus();
  speichern();
  farbauswahl();
  loeschen();
   
}

//Funktion für Brush
  function stifttool(colour){
      if (mouseIsPressed===true){
        fill (colour)
        noStroke();
        circle(mouseX,mouseY,brushSize)
      }
  }

function draw() {
  erzeugeSymbolleiste();
  if (stifttoggled===true)
  {
  stifttool(colour);
  }
}