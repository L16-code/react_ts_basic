const routes ={

    HOME:'/',
    LOGIN: '/login',
    MYORDERS: "/myorders",
    MYPROFILE :'/profile'

}


 export const beforeLoginRoutes = [
    routes.HOME,
    routes.LOGIN,
]

export default routes;