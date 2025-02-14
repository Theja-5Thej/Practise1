import { useState } from "react";

const arr = ["Cricket", "Foot Ball", "Basket Ball", "Rugby"];
const CheckBoxDelete = () => {
  const resultarr = arr.map((item) => ({ name: item, checked: false }));
  const [data, setData] = useState(resultarr);
  const handleCheck = (e) => {
    setData((prev) =>
      prev.map((item) =>
        item.name === e.target.name
          ? { ...item, checked: e.target.checked }
          : item
      )
    );
  };
  return (
    <>
      <h5>Check box delete fun</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "8px",
        }}
      >
        {data.map((item) => (
          <div style={{ display: "flex", gap: "8px" }} key={item.name}>
            <input
              type="checkbox"
              name={item.name}
              id=""
              value={item.checked}
              onChange={(e) => handleCheck(e)}
            />
            {item.name}
            {item.checked && (
              <button
                onClick={() =>
                  setData((prev) =>
                    prev.filter((item1) => item1.name !== item.name)
                  )
                }
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default CheckBoxDelete;
