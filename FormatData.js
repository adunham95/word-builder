const path = require("path");
const fs = require("fs");

const csvFilePath = "./src/Data/raw.csv";
const jsonFilePath = "./src/Data/letters.json";
fs.readFile(csvFilePath, "utf8", (err, data)=>{
    console.log(`CSV Path ${csvFilePath}`)
    console.log(`JSON Path ${jsonFilePath}`)
    // console.log(data);

    const jsonData = csvJSON(data);

    const formattedData = buildData(jsonData);
    
    fs.writeFile(jsonFilePath, JSON.stringify(formattedData), (err, data)=> {
        if(err) {console.log(err)}
        console.log(`Writing to ${jsonFilePath}`)
    })
})


function csvJSON(csvText) {
    console.log("Reading csv data")
    let lines = [];
    const linesArray = csvText.split('\n');
    // for trimming and deleting extra space 
    linesArray.forEach((e) => {
        const row = e.replace(/[\s]+[,]+|[,]+[\s]+/g, ',').trim();
        lines.push(row);
    });
    // for removing empty record
    lines.splice(lines.length - 1, 1);
    const result = [];
    const headers = lines[0].split(",");
    
    for (let i = 1; i < lines.length; i++) {
    
        const obj = {};
        const currentline = lines[i].split(",");
    
        for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    const updatedResults = result.map(r => {
        console.log(r)
        return {
            color: r.color,
            level: r.level,
            letter: r.letter,
            isConstOrPrefix: r.isConstPfix === 'true' ?true:false,
            rowEnd: r.rowEnd?true:false
        }
    })

    // console.log(updatedResults);

    return updatedResults;
}

const  buildData = (data) => {
    console.log("Building data")
    // console.log(data);

    let row = 0;
    let newArray = [[]];
    let levels = [];
    data.forEach(d => {
        d.letter = d.letter.replace(/_/g, '-')
        if(levels.findIndex(l => l===d.level) === -1){
            levels.push(d.level);
        }
        if(d.letter.toLowerCase().includes("same")){
            return
        }
        else if(d.letter.toLowerCase().includes("transparent")){
            return
        }
        else if(newArray.findIndex(l => l.letter === d.letter && l.color === d.color ) === -1){
            newArray[row].push(d)
            if(d.rowEnd){
                row = row + 1;
                newArray[row] = [];
            }
        }
    });


    let optionsString = ""

    levels.forEach(l => optionsString+= `<option>${l}</option>`)

    return newArray;
};