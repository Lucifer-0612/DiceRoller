function rollDice()
{
    const numofdice= document.getElementById("inputbox").value;
    const diceresult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceImage");
    const image=[];
    const values=[];

    for(let i =0;i<numofdice;i++)
    {
        const value =Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="assests/${value}.png" max-height="10px" width="100px">`);

    }

    diceresult.textContent=`Dice:- ${values.join(", ")}`;
    diceimages.innerHTML=image.join(" ");

}