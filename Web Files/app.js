window.onload = function(){
    //Start application and to screen
    const app = new PIXI.Application(
        {
            background: "#ADD8E6",
            resizeTo: window, //resize the PIXI application when window size is changed
        }
    );
    document.body.appendChild(app.view);
    //Make PIXI application fullscreen 
    app.view.style.position = 'absolute';
    app.view.style.display = 'block';
    app.view.style.width = '100%';
    app.view.style.height = '100%';
    app.view.style.top = '0';
    app.view.style.left = '0';

    //Load textures
    const catFishermanTexture = PIXI.Texture.from("Assets/Cat-Fisherman.png");
    const catFisherman = new PIXI.Sprite(catFishermanTexture);
    catFisherman.x = app.view.width/2;
    catFisherman.y = app.view.height/2;
    catFisherman.anchor.x = 0.5;
    catFisherman.anchor.y = 0.5;
    app.stage.addChild(catFisherman);

    //update loop
    app.ticker.add(() => {
        catFisherman.rotation += app.ticker.deltaTime * 0.1;
    })
}