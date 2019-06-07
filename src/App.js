import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Vente Complément Alimentaire  ***  Ghiles YBEGGAZENE  </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://ghiles.000webhostapp.com">YBEGGAZENE Ghiles</a>, code source  <a href="https://github.com/ghiles-ybeggazene/">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
