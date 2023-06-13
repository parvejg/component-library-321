import { NotificationBadge,CartBadge, MessageBadge, FolderBadge } from "./Badge"
import {Layout} from "./Layout"
export const BadgePage=()=>{
    return <Layout>
        <div>
        <NotificationBadge/>
<div></div>
<CartBadge/>
<div></div>
<MessageBadge/>
<div></div>
<FolderBadge/>
        </div>
    </Layout>
}