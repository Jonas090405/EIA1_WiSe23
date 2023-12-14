const input = document.querySelector(".userInput");
const output = document.getElementById("output");
let storychoices  = [ 
    'Du wachst auf und befindest dich in einem dunklen, heruntergekommenen Verlies. In der ganzen Stille nimmst du auf einmal ein leises, seltsames Geräusch wahr. Du kannst es nicht wirklich zuordnen, aber es hört sich an, als würde jemand Hilfe brauchen. Willst du dem "Geräusch nachgehen" oder "wegrennen" und einen Ausgang suchen?',
    'Die Geräusche führen dich in einen langen, altertümlichen Gang. Als du ihn langsam entlang gehst, trittst du mit einem Fuß auf eine herausstehende Steinplatte. Sie sinkt ein, und eine Fledermaus fliegt erschreckt durch das laute Geräusch weg, doch es passiert nichts weiter. Ein großer Stein liegt in Greifweite. Willst du "den Stein auf die Platte legen", um das Gewicht beim Herabsteigen beizubehalten, oder ohne weiteres schnell den "Fuß von der Steinplatte erheben" und wegrennen?',
    'Du rennst so schnell du kannst durch den dunklen Keller, um einen Ausgang zu finden. Du kommst zu einer Abzweigung. Aus dem linken Gang strahlt ein schwaches Licht von etwas weiter weg hervor. Du hörst ebenfalls ein leises glitschiges Knacken, das aus der gleichen Richtung zu kommen scheint. Der rechte Gang ist pechschwarz, doch du hörst dort nur absolute Stille. Nimmst du den "rechten Gang" oder den "linken Gang"?', 
    'Die Tür führte dich zu einer alten Farm, du hältst das nächstbeste Auto an der naheliegenden verlassenen-scheinenden Straße an. Die Fremden fragen dich was du hier tust und woher du kommst. Erzählst du ihnen die Wahrheit oder lügst du?',
    'Du begibst dich in die Dunkelheit. Du läufst, immer weiter und das sehr lange. Es fühlt sich an wie eine geraume Ewigkeit, doch plötzlich siehst du Licht aus einer Tür von oben auf deinen Arm hinabstrahlen. Du gehst die Treppe hinauf und kommst dem Licht immer näher. Du öffnest die Tür und traust deinen Augen nicht: Freiheit. Du befindest dich auf einer alten Farm und hältst das nächstbeste Auto an der naheliegenden Straße an. Die Fremden fragen dich was du hier tust und woher du kommst. Erzählst du ihnen die Wahrheit oder lügst du?', 
    
];



let storyendings = [
'Du erhebst deinen Fuß und rennst so schnell du kannst aus dem Gang raus. Nach kurzer Zeit rieselt Staub auf dich nieder, die Wände beginnen sich zusammenzuziehen, und der Gang schrumpft. Die alte Steinplatte hat einen Fallenmechanismus verspätet ausgelöst! Du rennst weiter und schaffst es auf die letzte Sekunde aus dem Gang heraus, bevor die Wände dich bei lebendigem Leibe zerquetscht hätten. Du gehst weiter und plötzlich siehst du Licht aus einer Tür von oben auf deinen Arm hinabstrahlen. Du gehst die Treppe hinauf und kommst dem Licht immer näher. Du öffnest die Tür und traust deinen Augen nicht: Freiheit. An der naheliehgeden Straße fährt zufällig ein einzelnes Taxi vorbei und nimmt dich sicher mit nachhause. *You Won!*',
'Du legst den Stein auf die alte Steinplatte und gehst weiter. Auf einmal hörst du ein lautes Krachen in den Wänden. Staub rieselt auf dich nieder, die Wände beginnen aufeinander zuzugehen, und der Gang schrumpft. Die Steinplatte hat einen Fallenmechanismus verspätet ausgelöst. Du rennst den ewig wirkenden Gang panisch entlang, doch es ist kein Ende in Sicht. Du wirst an lebendigem Leibe zerquetscht. *GAME OVER*', 
'Du erzählst den Fremden deine Geschichte und sie wirken sichtlich schockiert. Nach einigen weiteren  Minuten von plötzlicher, seltsamer Stille während der Autofahrt halten die Fremden das Fahrzeug an. Ehe du fragen konntest wieso sie angehalten haben gehen sie auf dich los und galten dich auf der Rückbank fest. Du spürst ein pieksen an deinem Hals und........Du wachst auf und befindest dich in einem dunklen, heruntergekommenen Verlies...*GAME OVER*',
'Du gehst den Gang entlang und kommst dem Licht und den sich immer merkwürdiger anhöhrenden Geräuschen näher. Als du den Raum betrittst siehst du eine Liege an die ein Mensch gefesselt wurde. Der Raum ähnelt einem Arztzimmer. Du drehst die Liege zu dir um den MEnschen zu befreien und dir fällt schockiernderweise auf, dass der Mensch tot ist. Er wurde auf brutalste Weise aufgeschnitten und ihm wurden sämtliche Organe entfernt. Auf ein mal hörst du einen leisen Schritt hinter dir. Bevor du dich umdrehen konntest hat ein Blutverschmierter Mann mit einem Doktorkittel dir mit einem Skalpell in den Hals gestochen. Du fällst zu Boden. Während du langsam ausblutest nimmst du wahr wie die Person dich aufnimmt und an die Liege fesstelt. Bevor du wahrnehmen konntest waa als nächstes passiert bist du aufgrund der Stichverletzung verblutet. *GAME OVER*', 
'Du erzählst den Fremden, dass su dich beim wandern verlaufen hast und zufällig auf die Farm und die naheliegende Straße getroffen bist. Obwohl die Fremden sich sichtlich komisch Verhalten, wollen sie dich am nächsten Bahnhof rauslassen. Als du aus dem Auto austeigst sagt der Fahrer: Lass dich hier nie wieder blicken! und fährt mit überhöhter Geschwindigkeit los. Trotz deiner Verwirrung über das was geschehen ist, schaffst du es mit dem Zug sicher nachhause. *You won!*', 

]

console.log(input);

let state = 0;

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (state === 0) {
            handlestate0imput();
        }
    }
});

function handlestate0imput() {
    if (input.value === "Geräusch nachgehen" || input.value === "nachgehen") {
        output.innerHTML = storychoices[1];
        state++;
    } else if (input.value === "wegrennen" || input.value === "rennen") {
        output.innerHTML = storychoices[2];
        state++;
    } else {
      
        return; 
    }
}



input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (state === 1) {
            handleState1Input();
            
        }
    }    
    return; 
}
);

function handleState1Input() {
    if (input.value === "Fuß von der Steinplatte erheben" || input.value === "Fuß erheben"|| input.value === "rennen") {
        output.innerHTML = storyendings[0];
        state++; 

    } else if (input.value==="den Stein auf die Platte legen" || input.value === "Den Stein auf die Platte legen") {
        output.innerHTML = storyendings[1];
        state++
        return; 
}
    }


    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (state === 2) {
                handleState2Input();
            }
        }
    });
    function handleState2Input() {
    if (input.value==="linker Gang"||input.value=== "links"||input.value==="heller Gang" )
    output.innerHTML= storyendings[3]
    else if (input.value==="rechter Gang" || input.value=== "rechts" || input.value==="dunkler Gang")
    output.innerHTML= storychoices[4]
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (state === 3) {
                handleState3Input();
            }
        }
    });
    function handleState3Input() {
if (input.value==="lügen"|| input.value==="Lügen"|| input.value==="Lüge")
output.innerHTML=storyendings[4]
else if (input.value==="Wahrheit"|| "wahrheit")
output.innerHTML=storyendings[2]
    }
    
    
