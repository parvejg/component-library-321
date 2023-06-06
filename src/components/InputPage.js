import { DateInput, PasswordInput, TextInput } from "./input"
import { Layout } from "./layout"
import './Input.css'
export const InputPage=()=>{
    return (
        <Layout>
            <div>
                <h2>Inputs</h2>
                <TextInput/>
                <div></div>
                <PasswordInput/>
                <div></div>
                <DateInput/>
                <div></div>
            </div>
        </Layout>
    )
}