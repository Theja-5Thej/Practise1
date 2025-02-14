import { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];
const Dropdown = () => {
  const [citiesData, setCitiesData] = useState(countries[0].cities);
  const handleChange = (e) => {
    const selectCountry = countries.find(
      (item) => item.value === e.target.value
    );
    setCitiesData(selectCountry.cities);
  };
  return (
    <>
      <h4>Drop down</h4>
      <p htmlFor="">Select Country</p>
      <select onChange={(e) => handleChange(e)}>
        {countries.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <p htmlFor="">Select City</p>
      <select name="" id="">
        {citiesData.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  );
};
export default Dropdown;
