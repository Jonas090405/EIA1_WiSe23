let StartStory = prompt("Du befindest dich in deinem Kinderzimmer. Plötzlich betritt Morpheus aus Matrix dein Kinderzimmer. Er schaut dich erwartungsvoll und gestresst an und sagt: 'Wenn du die blaue Pille nimmst, schläfst du wieder ein, wachst morgen früh auf und denkst, was du denken sollst. Nimmst du die rote Pille, zeige ich dir, wie tief der Kaninchenbau wirklich geht.' Nimmst du die 'rote Pille' oder die 'blaue Pille'?'");

console.log("Benutzereingabe:(Auswahl der Pille)", StartStory);

if (StartStory.toLowerCase() === "blaue pille") {
    console.log("Du wachst auf, weil dich deine Mutter weckt, damit du nicht zu spät zur Schule kommst.");
    prompt("Du wachst auf, weil dich deine Mutter weckt, damit du nicht zu spät zur Schule kommst.");
} else if (StartStory.toLowerCase() === "rote pille") {
    console.log("Du wachst auf, weil dich deine Mutter weckt, damit du nicht zu spät zur Schule kommst.");
    prompt("Du wachst auf, weil dich deine Mutter weckt, damit du nicht zu spät zur Schule kommst.");
} else {
    console.log("Falsche Eingabe!");
    alert("Falsche Eingabe!");
}
