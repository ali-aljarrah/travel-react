import './ExploreCard.css'

function ExploreCard({bgImage, smallText, title, btnText}) {
  return (
    <div className='explore-card' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='text-center'>
            <p className='text-uppercase fs-18 white-color fw-700'>{smallText}</p>
            <p className='fs-40 white-color fw-700 mb-20 font-volkhov'>{title}</p>
            <button className='btn-outline-white'>{btnText}</button>
        </div>
    </div>
  )
}

export default ExploreCard