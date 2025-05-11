const ImageCard = ({ src, alt, className }) => {
    return (
      <div className={`overflow-hidden rounded-3xl shadow-lg ${className}`}>
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      </div>
    )
  }
  
  export default ImageCard
  