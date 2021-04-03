import Header from "./Header";
import "./App.css";
import "./Header.css";

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Sritaj",
      phone: "8399393933",
    },
    {
      id: 2,
      name: "test",
      phone: "8494494949",
    },
  ];
  return (
    <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {subscribers.map((sub) => {
          return (
            <div key={sub.id} className="grid-container heading-container">
              <span className="grid-item name-heading">{sub.name}</span>
              <span className="grid-item phone-heading">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
