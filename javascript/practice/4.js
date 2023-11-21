let obj={
    name:"savan",
    age:30,

    sayhi(){
       let a=()=>{
           console.log(this.name);
       }
        a();
    }

}

function hello()
{
    let name="34";
    obj.sayhi();
}