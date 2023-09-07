import "../../assets/Styles/sass/components/_tag.scss"

export default function Tag(
  props: {
    tag: string,
  }
) {
  const { tag } = props;
  return (
    <div className="tag">
      <h3>{tag}</h3>
    </div>
  );
}
