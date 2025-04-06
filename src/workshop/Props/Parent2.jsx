import Child2 from "./Child2"

const Parent2 = () => {
    const user ={
        name:'mai',
        age:29
    }
  return (
    <>
    <Child2  {...user}/>
    </>
  )
}
export default Parent2