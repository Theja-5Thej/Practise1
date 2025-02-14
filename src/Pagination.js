import FetchData from "./CustomHooks/FetchData";
import PaginationContainer from "./PaginationContainer";
const Pagination = () => {
  const { data, loading, error } = FetchData(
    "https://dummyjson.com/products?limit=200"
  );
  const { PaginationUI, start, end } = PaginationContainer(
    data ? data.length : []
  );
  return (
    <>
      {loading ? (
        <p>Loading Please wait !</p>
      ) : (
        <>
          {PaginationUI}
          <div className="card-container">
            {data && data.length !== 0
              ? data.slice(start, end).map((item) => {
                  return (
                    <div className="card-item" key={item.id}>
                      <img
                        src={
                          item.images[0] ||
                          "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"
                        }
                        alt={item.title}
                        srcSet={item.images[0]}
                      />
                      <div className="card-content">
                        <h4>{item.title}</h4>
                        <h5>{item.price}/-</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })
              : "Products Are not Available"}
          </div>
        </>
      )}
    </>
  );
};
export default Pagination;
