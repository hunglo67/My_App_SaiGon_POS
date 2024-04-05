import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Customer2 from "./pages/Customer2";
import Menu from "./pages/Menu";
import Table from "./pages/Table";
import History1 from "./pages/History1";
import Report from "./pages/Report";
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Menu4 from "./pages/Menu4";
import Table1 from "./pages/Table1";
import Menu5 from "./pages/Menu5";
import Menu6 from "./pages/Menu6";
import Menu7 from "./pages/Menu7";
import Customer1 from "./pages/Customer1";
import History2 from "./pages/History2";
import Employee from "./pages/Employee";
import Report1 from "./pages/Report1";
import Report2 from "./pages/Report2";
import Report3 from "./pages/Report3";
import Report4 from "./pages/Report4";
import Menu8 from "./pages/Menu8";
import Menu13 from "./pages/Menu13";
import Menu14 from "./pages/Menu14";
import Table2 from "./pages/Table2";
import Employee1 from "./pages/Employee1";
import Menu9 from "./pages/Menu9";
import Menu10 from "./pages/Menu10";
import Menu11 from "./pages/Menu11";
import Menu12 from "./pages/Menu12";
import History3 from "./pages/History3";
import Customer from "./pages/Customer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer11":
        title = "";
        metaDescription = "";
        break;
      case "/menu1":
        title = "";
        metaDescription = "";
        break;
      case "/table1":
        title = "";
        metaDescription = "";
        break;
      case "/history":
        title = "";
        metaDescription = "";
        break;
      case "/report":
        title = "";
        metaDescription = "";
        break;
      case "/menu2":
        title = "";
        metaDescription = "";
        break;
      case "/menu3":
        title = "";
        metaDescription = "";
        break;
      case "/menu4":
        title = "";
        metaDescription = "";
        break;
      case "/menu5":
        title = "";
        metaDescription = "";
        break;
      case "/table2":
        title = "";
        metaDescription = "";
        break;
      case "/menu6":
        title = "";
        metaDescription = "";
        break;
      case "/menu7":
        title = "";
        metaDescription = "";
        break;
      case "/menu8":
        title = "";
        metaDescription = "";
        break;
      case "/customer2":
        title = "";
        metaDescription = "";
        break;
      case "/history1":
        title = "";
        metaDescription = "";
        break;
      case "/employee":
        title = "";
        metaDescription = "";
        break;
      case "/report01":
        title = "";
        metaDescription = "";
        break;
      case "/report011":
        title = "";
        metaDescription = "";
        break;
      case "/report02":
        title = "";
        metaDescription = "";
        break;
      case "/report03":
        title = "";
        metaDescription = "";
        break;
      case "/menu11":
        title = "";
        metaDescription = "";
        break;
      case "/menu12":
        title = "";
        metaDescription = "";
        break;
      case "/menu13":
        title = "";
        metaDescription = "";
        break;
      case "/table11":
        title = "";
        metaDescription = "";
        break;
      case "/employee1":
        title = "";
        metaDescription = "";
        break;
      case "/menu22":
        title = "";
        metaDescription = "";
        break;
      case "/menu33":
        title = "";
        metaDescription = "";
        break;
      case "/menu44":
        title = "";
        metaDescription = "";
        break;
      case "/menu55":
        title = "";
        metaDescription = "";
        break;
      case "/history11":
        title = "";
        metaDescription = "";
        break;
      case "/customer1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer11" element={<Customer2 />} />
      <Route path="/menu1" element={<Menu />} />
      <Route path="/table1" element={<Table />} />
      <Route path="/history" element={<History1 />} />
      <Route path="/report" element={<Report />} />
      <Route path="/menu2" element={<Menu1 />} />
      <Route path="/menu3" element={<Menu2 />} />
      <Route path="/menu4" element={<Menu3 />} />
      <Route path="/menu5" element={<Menu4 />} />
      <Route path="/table2" element={<Table1 />} />
      <Route path="/menu6" element={<Menu5 />} />
      <Route path="/menu7" element={<Menu6 />} />
      <Route path="/menu8" element={<Menu7 />} />
      <Route path="/customer2" element={<Customer1 />} />
      <Route path="/history1" element={<History2 />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/report01" element={<Report1 />} />
      <Route path="/report011" element={<Report2 />} />
      <Route path="/report02" element={<Report3 />} />
      <Route path="/report03" element={<Report4 />} />
      <Route path="/menu11" element={<Menu8 />} />
      <Route path="/menu12" element={<Menu13 />} />
      <Route path="/menu13" element={<Menu14 />} />
      <Route path="/table11" element={<Table2 />} />
      <Route path="/employee1" element={<Employee1 />} />
      <Route path="/menu22" element={<Menu9 />} />
      <Route path="/menu33" element={<Menu10 />} />
      <Route path="/menu44" element={<Menu11 />} />
      <Route path="/menu55" element={<Menu12 />} />
      <Route path="/history11" element={<History3 />} />
      <Route path="/customer1" element={<Customer />} />
    </Routes>
  );
}
export default App;
