import styles from './Content.module.css'

function Content({author, date, content, img}){
    return(
        <div className={styles.container}>
            <h4>{author}</h4>
            <h5>{date}</h5>            
            <div className={styles.divContent}>
                <div>
                    <img className={styles.image} src ={img} alt="Zoo"/>
                </div>
                <div>
                    {content}
                </div>
            </div>
            <hr/>
           
        </div>
    )
}

export default Content;