function totalMarks(){
    totalMarks_individual = document.getElementsByClassName("total");

    total_marks = null
    for(let i=0;i<totalMarks_individual.length;i++){
        total_marks += totalMarks_individual[i]
    }
    console.log(total_marks)
}