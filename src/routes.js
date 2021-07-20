import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductForm from "./pages/admin/product/add";
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./pages/admin/product";

import DashBoard from "./pages/admin/dashboard";
import NotFound from "./pages/404";
import EditProductForm from "./pages/admin/product/edit";
const Routes = (props) => {
    return (
        <BrowserRouter>
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
                                    <Route path="*">
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </main>
                            </div>
                            </div>
                        </div>

                    </div>
        </BrowserRouter>
                );
};
                export default Routes;