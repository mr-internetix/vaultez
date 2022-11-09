import Card from "./Card"

const CardList = ({data}) =>  {
    console.log(typeof(data))
    let cards = data.map(data=> <Card props={data}/>)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-around content-around items-center w-full mt-20 absolute p-3" >
               {cards} 

        </div>
    )
}



export default CardList
