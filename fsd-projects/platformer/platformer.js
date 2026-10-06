$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  //   toggleGrid();


  // TODO 2 - Create Platforms
createPlatform (300,620,200,20);
createPlatform(500,500,200,20);
createPlatform(300,375,200,20);
createPlatform(475,250,200,20);
createPlatform(960,690,200,20);
createPlatform(770,570,200,20);
createPlatform(1150,565,200,20);
createPlatform(950,440,200,20);
createPlatform(720,330,200,20);
createPlatform(920,220,200,20);




//createPlatform(850,,200,20);


    // TODO 3 - Create Collectables
createCollectable ("steve",590,200)
createCollectable ("steve",400,330)
createCollectable ("steve",950,190)
createCollectable ("steve",850,510)

    
    // TODO 4 - Create Cannons
createCannon ("top",400,2000)
createCannon("top",700,2000)
createCannon("top",1100,2000)
createCannon("right",210,2000)
createCannon("right",420,2000)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
