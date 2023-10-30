type RenderPhotosInOffer = {
  photo: string;
}

const RenderPhotosInOffer = ({photo}: RenderPhotosInOffer) => (
  <div className="property__image-wrapper">
    <img
      className="property__image"
      src={photo}
      alt="Photo studio"
    />
  </div>
);

export default RenderPhotosInOffer;

