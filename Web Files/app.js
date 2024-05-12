window.onload = function(){
    const app = new PIXI.Application(
        {
            background: "#ADD8E6",
            resizeTo: window, //resize the PIXI application when window size is changed
            width: window.innerWidth,
            height: window.innerHeight
        }
    );

    //code to make the PIXI application take up the entire screen 
    app.view.style.position = 'absolute';
    app.view.style.display = 'block';
    app.view.style.width = '100%';
    app.view.style.height = '100%';
    app.view.style.top = '0';
    app.view.style.left = '0';

    document.body.appendChild(app.view);

    const catFishermanTex = PIXI.Texture.from("Assets/Cat-Fisherman.png");
    const catFisherman = new PIXI.Sprite(catFishermanTex);
    catFisherman.x = app.view.width/2;
    catFisherman.y = app.view.height/2;
    catFisherman.anchor.x = 0.5;
    catFisherman.anchor.y = 0.5;
    app.stage.addChild(catFisherman);

    //update loop
    app.ticker.add(() => {
        catFisherman.rotation += app.ticker.deltaTime * 0.1;
    })

    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        catFisherman.x = app.view.width/2;  //Find better way to do this, not realistic to reposition evert sprite
        catFisherman.y = app.view.height/2;
    });
}