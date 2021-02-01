import s from './Layout.module.css';


const Layout = ({ id, title, urlBg, colorBg, children}) => {

    const styleBackground = urlBg ?  {backgroundImage: `url(${urlBg})`} : {backgroundColor: colorBg}

    return(
            <section className={s.root}
                     style={styleBackground}
                     id={ id }>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            <h3>
                                { title }
                            </h3>
                            <span className={s.separator}></span>
                        </div>
                        <div className={`${s.desc} ${s.full}`}>
                            <p>
                                { children }
                            </p>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default Layout;