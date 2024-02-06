import DishCard from "./DishCard"

export default function Highlights() {
  let dishes = [
    {
      name: "Bruchetta",
      price: "$5.00",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      img: "/bruchetta.jpg",
    },
    {
      name: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Montevideo style feta cheese, garnished with crunchy garlic.",
      img: "/greek salad.jpg",
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      img: "/lemon dessert.jpg",
    },
  ]

  return (
    <section className='h-[600px] px-64'>
      <header className='flex justify-between py-12'>
        <h1 className='text-4xl'>This weeks specials!</h1>
        <button className='bg-yellow-500 w-[250px] h-[50px] rounded-lg text-lg'>
          Online Menu
        </button>
      </header>
      <div className='flex justify-between'>
        {dishes.map((dish, index) => {
          return (
            <DishCard
              key={index}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              img={dish.img}
            />
          )
        })}
      </div>
    </section>
  )
}
