import './Category.css'

function Category({img, title, description}) {
  return (
    <div className='category'>
        <img loading='lazy' src={img} alt={title +' '+ description} />
        <p className='fs-20 blue-color fw-600 mb-10'>{title}</p>
        <p className='fs-16 gray-color'>{description}</p>
    </div>
  )
}

export default Category