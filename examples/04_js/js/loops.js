document.getElementById("btn-display").oneclick = () =>{
    const displaySection = document.getElementById("loop-results");
    const ul = document.createElement("ul");
    displaySection.append(ul);
    for(let i=0; i<10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
}