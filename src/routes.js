import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductForm from "./pages/admin/product/add";
import AddCateForm from "./pages/admin/category/add";
import Header from "./components/admin/header";
import Nav from "./components/admin/nav";
import Footer from "./components/admin/footer";
import Product from "./pages/admin/product";
import Category from "./pages/admin/category";
import Signup from "./pages/website/signup";
import DashBoard from "./pages/admin/dashboard";
import NotFound from "./pages/404";
import EditProductForm from "./pages/admin/product/edit";
import EditCateForm from "./pages/admin/category/edit";
import Signin from "./pages/website/signin";
const Routes = (props) => {
    return (
        <BrowserRouter>
        <>
            <div className="App">
                <div>
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <Nav />
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <Switch>
                                    <Route exact path="/">
                                        <DashBoard />
                                    </Route>
                                    <Route exact path="/product">
                                        <Product {...props} />
                                    </Route>
                                    <Route exact path="/product/add">
                                        <AddProductForm {...props} />
                                    </Route>
                                    <Route exact path="/product/:id/edit">
                                        <EditProductForm {...props} />
                                    </Route>
                                    <Route exact path="/category">
                                        <Category {...props} />
                                    </Route>
                                    <Route exact path="/category/add">
                                        <AddCateForm {...props} />
                                    </Route>
                                    <Route exact path="/category/:id/edit">
                                        <EditCateForm {...props} />
                                    </Route>
                                    <Route exact path="/signup">
                                        <Signup {...props} />
                                    </Route>
                                    <Route exact path="/signin">
                                        <Signin {...props} />
                                    </Route>
                                    <Route path="*">
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </main>
                            </div>
                            </div>
                        </div>
                    
                    </div>
                    </>
                    <Footer/>
        </BrowserRouter>
        
                );
};
                export default Routes;