import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const ContextProvider = ({children}) => {
    const API_URL_BLOGS = 'http://localhost:8000/blogs'
    const API_URL_ROUTES = 'http://localhost:8000/routes'

    const {data: blogs, isPending: blogsPending, error:blogsError} = useFetch(API_URL_BLOGS)
    const {data: routes, isPending: routesPending, error: routesError} = useFetch(API_URL_ROUTES)

    return (
       <DataContext.Provider 
            value={{
                blogs, blogsPending, blogsError,
                routes, routesPending, routesError
            }}>
        {children}
       </DataContext.Provider>
    )
}

