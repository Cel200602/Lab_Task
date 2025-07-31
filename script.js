const obj={
    firstname:"Celine",
    lastname:"Wilfred",
    age:19,
    graduated:false,
    joining_date:new Date("07/05/2024"),
    no_of_days:()=>{
        let curr = new Date()
        return curr - obj.joining_date
    }
}
let{firstname, lastname, age, graduated, joining_date, no_of_days}=obj
console.log(Math.floor(no_of_days()/(1000*3600*24)))