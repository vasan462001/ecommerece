var products=document.getElementById("collection")
var search=document.getElementById("search")
var productlist=document.getElementById("div")

search.addEventListener("keyup",function(){
     var entervalue=event.target.value.toUpperCase()

     for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textcontent

        if(productname.toUpperCase().indexOf(entervalue<0))
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
     }

})