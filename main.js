
let x=0
$(clickMe).on('click',function(){ 
  if(x===1){
   $(popover).hide()
    x=0
 }else{
   $(popover).show()
    x +=1
 }
 setTimeout(function(){
   $(document).one('click',function(){
     $(popover).hide()
     x=0
    })
      },0)
})
$(wrapper).on('click',function(e){
  e.stopPropagation()
  
})
   