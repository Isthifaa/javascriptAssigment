document.getElementById("mybutton").onclick=function(){
    let sentence=document.getElementById("mytext").value;

    let words=sentence.split(" ");
    let reverse="";
    for(let i=0;i<words.length;i++){
        let word=words[i];
        for(let j=word.length-1;j>=0;j--){
            reverse=reverse+word[j];
        }
        reverse=reverse+" ";
    }
    document.getElementById("label1").textContent=reverse;    
}

//sort and array in descending order
let arr=[1,2,3,4,5,6,7,8,9,10];
let temp;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

document.getElementById("sortedArray").textContent=arr;
