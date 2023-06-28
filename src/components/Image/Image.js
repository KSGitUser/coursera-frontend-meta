const Image = ({ src, alt = 'picture', srcSet = '', media = '', ...props }) => {
  console.log('props =>', props)
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
