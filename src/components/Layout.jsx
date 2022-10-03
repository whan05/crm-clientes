import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';


export const Layout = () => {

    const location = useLocation()


  return (
    <div className='md:flex md:min-h-screen'>
        <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
            <h2 className='text-4xl font-black text-white text-center'>CRM - Clientes</h2>

            <nav className='mt-10'>
                <Link 
                    className={`${location.pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`} 
                    to="/clientes/nuevo">
                        Nuevo Cliente
                </Link>
                <Link 
                    className={`${location.pathname === "/" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`} 
                    to="/">
                        Clientes
                </Link>
            </nav>
        </aside>
        <main className='md:w-3/4 md:h-screen p-10 overflow-scroll'>
            <Outlet/>
        </main>
    </div>
  )
}
