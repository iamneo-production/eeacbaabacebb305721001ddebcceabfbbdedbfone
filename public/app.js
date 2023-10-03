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
        total_marks[i] = [total_marks_individual[i].innerHTML,i+1]
    
    }
    console.log(total_marks)

    const min_marks=[]
    for(let i=1;i<total_marks.length;i++){
        if(total_marks[i][0])
    }
}