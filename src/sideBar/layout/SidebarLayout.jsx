/* eslint-disable react/prop-types */


export const SidebarLayout = ({ children }) => {
    return (
        <div 
            className="scrollbar sidebarStyle"
        >
            { children }
        </div>
    )
}

