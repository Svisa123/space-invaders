import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
//sprites 20x20

kaboom({
  background: [0, 0, 0],
  width: 800,
  height: 600,
  scale: 1,
  debug: true,
});
loadSprite("nave", "sprites/nave.png");

scene("game", () => {
  const nave = add([
    sprite("nave"),
    scale("3.5"),
    origin("center"),
    pos(350, 550),
    area(),
    {
      score: 0,
      lives: 3,
    },
    "nave",
  ]);
});

scene("gameOver", (score) => {});

go("game");
