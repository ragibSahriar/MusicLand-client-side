import { FaMailBulk } from "react-icons/fa";


const Card = ({instructor}) => {
    // const instructor ={photo,name, email}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img  src={instructor.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p className="flex items-center gap-2"><FaMailBulk></FaMailBulk>{instructor.email}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default Card;