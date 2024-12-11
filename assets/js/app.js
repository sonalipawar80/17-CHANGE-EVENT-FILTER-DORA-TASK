let cl=console.log;

let selectColor=document.getElementById('selectColor');
let allDivs=[...document.querySelectorAll('.all')]

const onColorChange=(eve)=>{
    let selectedvalueName =eve.target.value;
    if(!selectedvalueName.includes('all')){
        allDivs.forEach(div=>div.classList.add('d-none'))
    }
    // if(!selectedvalueName.includes('dora1-1,dora1-2,dora1-3,dora1-4')){
        
    // }

//  cl(eve.target.value);

   let selectedDivs=[...document.querySelectorAll("."+selectedvalueName)];
   selectedDivs.forEach(div=>div.classList.remove('d-none'))
}





selectColor.addEventListener('change', onColorChange)























