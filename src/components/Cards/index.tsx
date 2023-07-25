import "../../assets/Styles/sass/components/_cards.scss";
export default function Card({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <article className="card-logement">
      <img src={image} alt="logement" />
      <div className="card_mini_container">
        <p className="card_title">{title}</p>
      </div>
    </article>
  );
}
