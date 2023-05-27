function Rating(props) {
  const { children } = props;
  let rate = Math.round(children);

  switch (rate) {
    case 0:
      return <div className="text-5xl">☆☆☆☆☆</div>;
    case 1:
      return <div className="text-5xl">★☆☆☆☆</div>;
    case 2:
      return <div className="text-5xl">★★☆☆☆</div>;
    case 3:
      return <div className="text-5xl">★★★☆☆</div>;
    case 4:
      return <div className="text-5xl">★★★★☆</div>;
    case 5:
      return <div className="text-5xl">★★★★★</div>;
    default:
      return 'Default';
  }
}

export default Rating;
