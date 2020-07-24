import data from "../Data/letters.json"

export const  buildData = (params) => {
    console.log(data);
    let newArray = [];
    let levels = [];
    data.forEach(d => {
        if(levels.findIndex(l => l===d.level) === -1){
            levels.push(d.level);
        }
        if(d.letter.includes("same")){
            return
        }
        else if(newArray.findIndex(l => l.letter === d.letter && l.color === d.color ) === -1){
            newArray.push(d)
        }

    });


    let options = ""

    levels.forEach(l => options+= `<option>${l}</option>`)

    console.log(options);

    console.log(newArray);
    console.log(levels)
    console.log(JSON.stringify(newArray))
};
