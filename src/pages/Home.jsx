import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { enrutadorApp } from "../routes/enrutador";
import Dashboard from "./Dashboard";
let router = createBrowserRouter(enrutadorApp);
const Home = () =>{
  return <RouterProvider router={router}/>;
};
export default Home;
