import { AlertError, SecurityAlert, SuccessfulAlert } from "./Alert"
import { Layout } from "./Layout"

export const AlertPage = () =>{
    return(
        <Layout>
            <di>
                <h2>Alert</h2>
                <SuccessfulAlert/>
                <div></div>
                <SecurityAlert/>
                <div></div>
                <AlertError childClass="alert-css"/>
                <div></div>
            </di>
        </Layout>
    )
}