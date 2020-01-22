$(document).ready(function(){
    $("form#stress-test").submit(function(event){
        event.preventDefault();

        var total1 = 0;
        var total2 = 0;
        var total3 = 0;

        $("input:checkbox[name=stress]:checked").each(function(){
            total1 += 1
        })
        $("input:checkbox[name=symptom]:checked").each(function(){
            total2 += 1
        })
        $("input:checkbox[name=coping]:checked").each(function(){
            total3 += 1
        })
        console.log(total1);
        console.log(total2);
        console.log(total3);
        

        if(total1 + total2  >= 6 && total3 <1 ){
            $("#result3").show();
        } else if ( total1 + total2 >= 4 && total3 >= 2){
            $("#result2").show();
        } else if (total1 + total2 <=3 && total3 >=3){
            $("#result1").show();
        }
    })
})