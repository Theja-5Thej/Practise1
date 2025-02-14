import { useEffect, useState } from "react";
const AutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [srchVal, setSrchVal] = useState("");
  const [cache, setCache] = useState({});
  const getData = async () => {
    if (cache[srchVal]) {
      console.log("cached data");
      setProducts(cache[srchVal]);
      return;
    }
    const res = await fetch(
      "https://dummyjson.com/recipes/search?q=" + srchVal
    );

    if (res.status === 200) {
      const result = await res.json();
      console.log("res", result);
      setProducts(result.recipes);
      setCache((prev) => ({ ...prev, [srchVal]: result.recipes }));
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => getData(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [srchVal]);
  const handleBlur = () => {
    setTimeout(() => setToggle(false), 200); // Delay to allow click event to trigger
  };
  const handleChange = (e) => {
    setSrchVal(e.target.value);
  };
  return (
    <>
      <div style={{ width: "300px" }}>
        <input
          style={{ width: "100%", height: "25px" }}
          onFocus={() => {
            setToggle(true);
          }}
          value={srchVal}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e)}
        />
        {toggle ? (
          <div className="dropDown">
            {products && products.length !== 0
              ? products.map((item) => (
                  <li
                    key={item.id + "sfh"}
                    onClick={(e) => setSrchVal(item.name)}
                  >
                    {item.name}
                  </li>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default AutoComplete;
