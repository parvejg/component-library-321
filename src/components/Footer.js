import './Footer.css';
export const Footer=(props)=>{
    const {href, name}= props;
return   <div href={href} className="layout-footer-wrapper">
<a href={href} className="layout-footer-links layout-footer-links">{name ? name: "LinkedIn"}</a>
<a href={href} className="layout-footer-links layout-footer-links">{name ? name: "Github"}</a>
<a href={href} className="layout-footer-links layout-footer-links">{name ? name: "Instagram"}</a>
</div>
}