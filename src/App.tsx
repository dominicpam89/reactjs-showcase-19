import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootLayout from "./UI/RootLayout"
import UIErrorPage from "./UI/ErrorPage"
import HomePage, { loader as homeLoader } from "./features/Home"
import TodoPage from "./features/Todo"

const router = createBrowserRouter([
	{
		path: "/",
		element: <UIRootLayout />,
		errorElement: <UIErrorPage />,
		children: [
			{ index: true, loader: homeLoader },
			{ path: "welcome", element: <HomePage /> },
			{ path: "app", element: <TodoPage /> },
		],
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
