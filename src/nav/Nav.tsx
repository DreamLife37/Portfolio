import style from './Nav.module.scss'
export const Nav=()=>{
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">About Me</a>
            <a href="">My projects</a>
            <a href="">Contacts</a>
        </div>
    )
}