import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import Home from "../Pages/Home.jsx"
import About from '../Pages/About.jsx'
import CreateJob from "../Pages/CreateJob.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import SalaryPage from "../Pages/SalaryPage.jsx";
import UpdateJob from "../Pages/UpdateJob.jsx";
import Login from "../component/Login.jsx";
import JobDetails from "../Pages/JobDetails.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post-job",
                element: <CreateJob/>
            },
            {
                path: "/my-jobs",
                element: <MyJobs/>
            },
            {
                path: "/salary",
                element: <SalaryPage/>
            },
            {
                path: "edit-job/:id",
                element: <UpdateJob/>,
                loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/job/:id",
                element:<JobDetails/>
            }
        ],
    },
]);

export default router; 