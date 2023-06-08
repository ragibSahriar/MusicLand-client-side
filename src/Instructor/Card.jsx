

const Card = ({instructor}) => {
    // const instructor ={photo,name, email}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={instructor.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Card;