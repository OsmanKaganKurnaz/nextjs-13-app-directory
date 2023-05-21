import {notFound} from "next/navigation"
import React from 'react'

function NormalPage({ searchParams }) {
    /*  
        // Error Test
        if (searchParams.error === "true") {
            throw new Error("This is an error");
        }
    */

    // Not Found Test
    if (searchParams.test === "true") {
        notFound();
    }

    return (
        <div>Normal Page</div>
    )
}

export default NormalPage