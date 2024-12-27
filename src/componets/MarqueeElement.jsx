


function MarqueeElement({title="Title", description="I am a really cool piece of tech", img="https://placehold.co/40"}) {
  return (
    <div>
        <img src={img} alt={title} />
    </div>
  )
}

export default MarqueeElement
