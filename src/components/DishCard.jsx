export default function DishCard({ name, description, price, img }) {
  return (
    <article className='w-[260px] h-[400px] bg-slate-200 rounded-lg'>
      <img
        src={img}
        alt={name}
        className='w-[260px] h-[130px] rounded-s-lg rounded-e-lg'
      />
      <section className='flex flex-col justify-evenly h-[280px] px-4'>
        <header className='flex justify-between'>
          <h1 className='text-xl'>{name}</h1>
          <p className='text-lg text-orange-500'>{price}</p>
        </header>
        <p>{description}</p>
        <a href='#' className='text-lg'>
          Order a delivery
        </a>
      </section>
    </article>
  )
}
