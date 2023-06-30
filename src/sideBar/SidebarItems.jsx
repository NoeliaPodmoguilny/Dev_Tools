/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


export const SidebarItems = ({ tools }) => {
    return (
        <div className="sidebarItemsStyle">
            { tools.map( tool =>
                <Link 
                    key={ tool.name }
                    to={ tool.link }
                    className="linksStyle fw-semibold"
                >
                    { tool.name }
                </Link>
                )
            }
        </div>
    )
}