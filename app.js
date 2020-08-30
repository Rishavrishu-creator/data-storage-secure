var array=[]
var array1=[]
module.exports={
    store:function(a,b){
      array.push(a)
      array1.push(b)
    },
    delete:function(a){
      for(var i=0;i<array.length;i++)
      {
        if(array[i]==a)
        {
          array.splice(i,i)
          array1.splice(i,i)
          break
        }
      }
    },
    clear:function(){
      
    },
    get:function(a){
      var result=null;
      for(var i=0;i<array.length;i++)
      {
         if(array[i]==a)
         {
            result=array1[i]
            break
         }
      }
      if(result==null)
      {
        return null
      }
      else{
      return result;
      }
      
    },
    size:function(){
        return array.length
    }
}
