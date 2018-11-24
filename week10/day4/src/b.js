//求和
export default function(...ary){
    let cont = 0
     for ( var i=0 ; i<ary.length ; i++) {
          if(!isNaN(ary[i])){
            cont+=Number(ary[i])
          }
     }
     return cont
}















































