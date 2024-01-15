import chalk from "chalk";

const colours = [chalk.blue, chalk.green, chalk.red,chalk.yellow,chalk.gray];
let colorIndex = 0;

 const textToShow = "What do lawyers wear to court? Lawsuits.".split(" ");

 for (const i in textToShow) {
        const word = textToShow[i];
        const colourFunction = colours[colorIndex];
        process.stdout.write(colourFunction(word) + " ");
        colorIndex++;
        if(colorIndex >= colours.length){
            colorIndex = 0;
        }
 }



 