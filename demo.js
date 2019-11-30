// const A=[-4,-1,0,3,10];
let compare=(a,b)=>{
    if(a<b) {
        return -1;
    }else if (a==b){
        return 0;
    }else{
        return 1;
    }
}
let  sorttedSquares =A =>{
    const resArr=[];
    for(let i=0;i<A.length;i++){
        resArr.push(A[i]*A[i]);
    }
    resArr.sort(compare);
    return resArr;
    
}
let arr = sorttedSquares ([-4,-1,0,3,10]);
console.log(arr);
//class类继承
 class Father{
     constructor(name,age,height){
         this.name=name;
         this.age = age;
         this.height = height
     }
     tostring(){
         return(this.name + ''+this.age + ''+this.height);
     }
 }
 let father =new Father("李明",45,170)
 console.log(father);
 class Son extends Father{
     constructor(name,age,height){
     super(name,age,height);
     } 
     tostring(){
         return super.tostring()
     } 
 }
 let son1=new Son('李华',18,178);
 son1 instanceof Son;
 console.log(son1);
 //
 
const promise = new Promise((resolve,reject) =>{
        let array = [2,3,7,5,2,6,9,7,0];
        console.log(array)
        let newArr = Array.from(new Set(array));//数组去重
        let set1 = new Set(newArr)//数组转换为set
        let iMax = Math.max(...set1);//找到最大值
        console.log(iMax)
        set1.delete(iMax);//删除最大值
        console.log(set1)
        if('set1.delete(iMax)'){
            resolve();
        }else{
            reject();
        }        
 })
promise
  .then(() => {
    console.log('9已成功删除！')
})
  .catch(()=>{
      console.log('删除数据时出现错误！')

})
//
const obj = [
    {name:'张三',age:18},
    {name:'李四',age:19},
    {name:'王五',age:20},
]
    let num1 =[]
    obj.map(item =>{
       num1.push(item.age)
    })
   console.log(num1)//将age变为数组
const check = new Promise((resolve) =>{
    let sum = 0
    num1.forEach(ele =>{
    sum += ele;
    return sum;//将数组中age相加
    })
    if('return sum'){
        resolve(sum);
    }
})
check.then(val => {
    console.log(val)
})
//计算x的n次方
let myPow = (x,n) =>{
    return Math.pow(x,n)
}
console.log(myPow(2,10))
console.log(myPow(2,-2))
