const mulTable = () => {
    let a = document.getElementById("num").value;
    for(let i=1; i<=10; i++){
        let ans = a*i;
        document.getElementById("row"+i).innerHTML = `<h2>${a} * ${i} = ${ans}</h2>`;
    }
}