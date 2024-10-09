import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import './Dashboard.css'
Link
const Dashboard = () => {
  return (
    <main>
      <Header />
      <section className="panel-control">
        <nav>
           <Link to = 'vegetarianas'>Recetas Vegetarianas</Link>
           <Link to = 'no-vegetarianas'>Recetas no vegetarianas</Link>
        </nav>
        <section >
            <Outlet/>
        </section>
      </section>
    </main>
  );
};
export default Dashboard;
