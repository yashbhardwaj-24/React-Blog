function Day2(){
    alert(sum())
    return(
        <div>
        <h1>Hello Day 2</h1>
        <Print/>
        </div>
    )
}
export default Day2


function Print(){
    return(
        <div>Hello Print</div>
    )
}

function sum(){
    return 10+10;
}