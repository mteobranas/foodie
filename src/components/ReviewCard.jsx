export default function ReviewCard({ name, rating, avatar, review }) {
  let starArray = []
  for (let i = 0; i < rating; i++) {
    starArray.push(
      <img key={i} className='w-8 h-8' src='/star.jpg' alt='star icon' />
    )
  }

  return (
    <>
      <article className='bg-slate-200 w-[260px] h-[320px] p-4 rounded-lg flex flex-col justify-between'>
        <header className='flex items-center gap-2'>
          <img
            className='rounded-full w-16 h-16'
            src={avatar}
            alt={name + " avatar"}
          />
          <h1 className='text-xl'>{name}</h1>
        </header>
        <p>{review}</p>
        <div className='flex'>{starArray}</div>
      </article>
    </>
  )
}
