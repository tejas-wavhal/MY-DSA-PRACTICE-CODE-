let a = [1,2,3,4,5]

let rev = (arr,start,end)=>{
  let temp ;
if(start < end){
  temp = arr[start]
  arr[start] = arr[end]
  arr[end] = temp

  rev(arr,start+1,end-1)
}
}

rev(a,0,a.length-1)

console.log(a)