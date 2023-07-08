const Image = ({ src, alt = 'picture', srcSet = '', media = '', ...props }) => {
  return (
    <picture {...props}>
      <source
        srcSet={srcSet}
        media={media}
      />
      <img src={src} alt={alt} />
    </picture>
  )
}

export default Image
