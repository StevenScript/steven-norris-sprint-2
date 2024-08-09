const BrandLogo = ({ href, imgSrc, altText }) => (
  <div className="brandlogo">
    <a href={href}>
      <img src={imgSrc} alt={altText} />
    </a>
  </div>
);

export default BrandLogo;
