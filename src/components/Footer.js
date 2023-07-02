import './Footer.css';
export const Footer=(props)=>{
    const {href, name}= props;
return   <div href={href} className="layout-footer-wrapper">
<a href="https://www.linkedin.com/in/md-parvez-6b6a5a259/" className="layout-footer-links layout-footer-links">{name ? name: "LinkedIn"}</a>
<a href="https://github.com/parvejg/component-library-321" className="layout-footer-links layout-footer-links">{name ? name: "Github"}</a>
<a href="https://instagram.com/parvez321pg" className="layout-footer-links layout-footer-links">{name ? name: "Instagram"}</a>
</div>
}