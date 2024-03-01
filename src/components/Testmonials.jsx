import ReviewCard from "./ReviewCard"

export default function Testimonials() {
  let clients = [
    {
      name: "Maria Giménez",
      avatar: "/client.jpg",
      review:
        "Bursting with bold spices and tender meats, this dish tantalized my taste buds with each bite. A culinary symphony that left me craving more.",
      rating: 4,
    },
    {
      name: "Joaquín Lopez",
      avatar: "/client2.jpg",
      review:
        "A comforting hug on a plate, this dish's creamy textures and savory flavors transported me back to cherished family dinners. Nostalgia served ",
      rating: 3,
    },
    {
      name: "Sebastián Sosa",
      avatar: "/client3.jpg",
      review:
        " A culinary masterpiece showcased on my plate. From seared perfection to vibrant accompaniments, each element spoke of careful craftsmanship.",
      rating: 5,
    },
  ]

  return (
    <section className='py-8 bg-[#495E57] flex flex-col gap-8 px-64'>
      <h1 className='text-center text-4xl text-yellow-500'>
        Our clients reviews
      </h1>
      <div className='flex justify-between'>
        {clients.map((client, index) => {
          return (
            <ReviewCard
              key={index}
              name={client.name}
              avatar={client.avatar}
              review={client.review}
              rating={client.rating}
            />
          )
        })}
      </div>
    </section>
  )
}
