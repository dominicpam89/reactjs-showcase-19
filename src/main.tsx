import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ContextMainProvider from "./data/context/main.tsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ContextMainProvider>
				<App />
			</ContextMainProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
