export default function Hero() {
  return (
    <main className='bg-[#495E57] h-[500px] px-64 flex items-center justify-between'>
      <aside className='flex flex-col justify-center gap-8 h-full w-[400px]'>
        <header>
          <h1 className='text-yellow-500 text-6xl'>Foodie</h1>
          <h2 className='text-xl text-white'>Montevideo</h2>
        </header>
        <p className='text-white'>
          Welcome to Foodie - Your Culinary Haven! Discover a symphony of
          flavors at your fingertips. From gourmet indulgences to daily
          essentials, we curate the finest selection to satisfy your cravings.
          Elevate your dining experience with Foodie – where passion meets
          palate. Order now and let the feast begin!
        </p>
        <button className='w-[250px] h-[50px] rounded-lg bg-yellow-500 text-xl'>
          Reserve a table
        </button>
      </aside>
      <figure>
        <img
          className='w-[400px] h-[400px] rounded-lg'
          src='/restauranfood.jpg'
          alt='#'
        />
      </figure>
    </main>
  )
}
