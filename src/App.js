import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";

function App() {
	return (
		<AppProvider>
			<div className="App">
				<div className="container">
					<h1 className="mb-4 mt-4">Shopping App</h1>
					<div className="row">
						<div className="col-sm">
							<CartValue />
						</div>
						<div className="col-sm">
							<Location />
						</div>
					</div>
					<h2 className="mt-4 mb-3">Shopping Cart</h2>
					<div className="row">
						<div className="col-sm">
							<ExpenseList />
						</div>
					</div>
					<h2 className="mt-3 mb-3">Add Items</h2>
					<div className="row">
						<div className="col-sm">
							<ItemSelected />
						</div>
					</div>
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
