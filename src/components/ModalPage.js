import { Layout } from "./Layout"
import { SuccessfulModal,FormModal } from "./Modal"

export const ModalPage=()=>{
    return <Layout>
        <div className="modal-page-wrapper">
        <SuccessfulModal/>
        <div></div>
        <FormModal/>
        </div>
    </Layout>
}