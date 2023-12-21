import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UIRootLayout from "./UI/RootLayout"
import UIErrorPage from "./UI/ErrorPage"
import HomePage, { loader as homeLoader } from "./features/Home"
import UILoadingPage from "./UI/LoadingPage.tsx"
const TodoPage = lazy(() => import("./features/Todo.tsx"))

const router = createBrowserRouter([
	{
		path: "/",
		element: <UIRootLayout />,
		errorElement: <UIErrorPage />,
		children: [
			{ index: true, loader: homeLoader },
			{ path: "welcome", element: <HomePage /> },
			{
				path: "app",
				element: (
					<Suspense fallback={<UILoadingPage />}>
						<TodoPage />
					</Suspense>
				),
			},
		],
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
