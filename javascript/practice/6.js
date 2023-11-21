//scoping of variable

function savan(fname,sname)
{
    function getfullName()
    {
        return fname + " " + sname;
    }

    alert("hello" + ''+ getfullName());
    alert("bye" +' '+ getfullName());
}

savan("hiren","ghori");