let Card = ({ imageurl, title, year, imdbID}) => {
    return (
        <>
       
          <div  className="flex flex-row w-[46%]  m-auto shadow-2xl items-center mt-10">
            
            <br />
            <div className="mr-10 p-4">
              <p className="text-3xl font-bold">Title: {title}</p>
              
              <p className="text-xl text-center font-bold">Year:{year}</p>
              <p className="text-center">IMBID:{imdbID}</p>
            </div>
            <div>
              <img src={imageurl} alt="" />
            </div>
          </div>
        </>
    )
}
export default Card;
