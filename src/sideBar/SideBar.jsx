import { SidebarLayout } from "./layout/SidebarLayout"
// import { SidebarSearch } from "./SidebarSearch"
import { SidebarItems } from "./SidebarItems"
import { tools } from "../data"


export const SideBar = () => {
    return (
        <SidebarLayout>
            {/* <SidebarSearch /> */}
            <p className="fw-semibold text-p">
                DevTools
            </p>
            <SidebarItems tools= {tools} />
        </SidebarLayout>
    )
}

