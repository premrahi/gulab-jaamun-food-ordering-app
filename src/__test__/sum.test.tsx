import sum from "../components/sum";

test("sum of two number is calculated here" , ()=>{
    const result = sum(2,3) ;

    //assertion
    expect(result).toBe(5) ;
});