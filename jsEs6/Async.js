//Async js Programming
//Callback,Promises,Async & await

const datas = [
    {name:"ajay", Profession:"Software Engineer"},
    {name:"vijay", Profession:"Software Engineer"}

];

function getDatas(){
    setTimeout(()=>{

        let output="";
        datas.forEach((data,index)=>{
            output+= '<li>${index}</li>';
    })

    document.body.innerHTML=output

    },1000);
}

function craetedate(newdate){
    setTimeout(()=>{
        datas.push(newdate)


},2000);
getDatas();
craetedate({name:"vivek" ,Profession:"Software Engineer"})

}


