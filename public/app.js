function totalMarks(){
    const totalMarks_individual = document.getElementsByClassName("total");

    let total_marks = null
    for(let i=0;i<totalMarks_individual.length;i++){
        total_marks += parseInt(totalMarks_individual[i].innerHTML)
       
    }
    window.alert(total_marks)
}

function leastMarks(){
    const total_marks_individual = document.getElementsByClassName("total");
    const total_marks=[]
    for(let i=0;i<total_marks_individual.length;i++){
        total_marks[i] = parseInt(total_marks_individual[i].innerHTML)
    
    }

    let min_marks=Math.min(...total_marks)
    for(let i=0;i<total_marks_individual.length;i++){
        if(parseInt(total_marks_individual[i].innerHTML) === min_marks){
            document.getElementById(i+1).className = "highlight"
        }
    }
}