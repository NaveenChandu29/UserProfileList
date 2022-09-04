import UserProfile from "./Components/UserProfile";
import "./styles.css";

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer"
  }
];

export default function App() {
  return (
    <div className="user-deatils-container">
      <h1>User Profile using Props</h1>
      <ul>
        {userDetailsList.map((eachItem) => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
        ))}
      </ul>
    </div>
  );
}
