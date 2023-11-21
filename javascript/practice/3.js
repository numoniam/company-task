let user={
    name:"johan",
    age:30
}

let admin={
    name:"ravi",
    age:34
}

function savan()
{
    console.log(this.name);
    console.log(this.age);
}

user.savan=savan;//add function in user object and take user object property because it call bye user so this take 
//admin.savan=savan;

user.savan();
//admin.savan();