jogo.cutscene = function (){};

var background;

var content = [
    "Há muito tempo atrás, havia uma ânfora que segundo a",
    "lenda, se ela fosse aberta o caos reinaria sobre",
    "todo o planeta em que estivesse.",
    "",
	"Por volta de 1990 pesquisadores encontraram-na por acaso,", 
    "e a curiosidade humana fez com que esta fosse aberta, e no",
    "mesmo instante, todos os males que ali haviam foram libertados",
    "e assolaram a humanidade por muitos e muitos anos...",
	"No ano de 2043, um jovem piloto chamado Bruce vive em uma terra", 
    "desolada e com poucos sobreviventes do ataque dos monstros no seu",
    "refúgio chamado Greckos.", 
    "Não aceitando mais a condição de seu povo, Bruce se oferece para lutar contra",
    "as frentes inimigas e salvar Greckos.",
"                                        ",

];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

function nextWord() {
    text.text = text.text.concat(line[wordIndex] + " ");
    wordIndex++;
    if (wordIndex === line.length)
    {
        text.text = text.text.concat("\n");
        game.time.events.add(lineDelay, nextLine, this);
    }
}

function nextLine() {

    if (lineIndex === content.length)
    {
        return game.state.start('fase1');
    }
    line = content[lineIndex].split(' ');
    wordIndex = 0;
    game.time.events.repeat(wordDelay, line.length, nextWord, this);
    lineIndex++;
}

jogo.cutscene.prototype = {
    preload: function (){
        game.load.image('cutscene3', 'assets/cutscene3.jpg');
        game.load.audio('temaGame', 'assets/audio/Temagame.ogg');
    },
    create: function (){
         background = game.add.tileSprite(0,0, 800, 600,'cutscene3');
         text = game.add.text(32, 32, '',
                                  {
                                    font: "bold 14px Arial",
                                    fill: "#19de65"
                                    //fontWeight = "bold"
                                  }
                              );
         theme = game.add.audio('temaGame');
         theme.play();
         theme.loop = true;
         nextLine();
    },
    update: function (){}
};
