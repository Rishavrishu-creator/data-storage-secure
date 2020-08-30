var array=[]
var array1=[]
module.exports={
    store:function(a,b){
      var t=0;
      try{
      for(var i=0;i<array.length;i++)
      {
        if(array[i]==a)
        {
          t=1;
          throw "Sorry this value already exists"
          break;
        }
      }
    }
    catch(e)
    {
      console.log(e)
    }
    if(t==0)
    {
      array.push(a)
      array1.push(b)
    }
    else
    {
         t=0;
    }
  
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
      array1=[]
      array=[]
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
    },
    value:function(i){
      if(array1.length>i)
      {
         return array1[i]
      }
      else{
          return null;
      }
    }
}
