let n = 5;
let str1 = "";
let str2 = "";
let str3 = "";
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(i>=j) str1+="*";
        else str1+=" ";
    }
    str1+="\n";
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        str2+="*";
    }
    str2+="\n";
}

for(let i=0; i<n; i++){
    for(let j=0; j<2*n-1; j++){
        if( i>=j-n+1 && i+j >= n-1) str3+="*";
        else str3+=" ";
    }
    str3+="\n";
}

console.log(str1);
console.log(str2);
console.log(str3);