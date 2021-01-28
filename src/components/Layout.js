import s from './Layout.module.css';


const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    const styleBackground = urlBg ?  {backgroundImage: `url(${urlBg})`} : {backgroundColor: "#D0FF4F"}

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
                                { descr }
                            </p>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default Layout;