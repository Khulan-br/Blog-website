import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BasicLayout } from "./layout/BasicLayout";
import { AllBlogPost, Home, SinglePost } from "./components";
import { NotFound } from "./components/NotFound";
import { ContactUs } from "./components/ContactUs";

const App = () => {
    
   return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AllBlogPost" element={<AllBlogPost />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/:id" element={<SinglePost />}/>
      </Routes>
    </BasicLayout>
  );
}

export default App;