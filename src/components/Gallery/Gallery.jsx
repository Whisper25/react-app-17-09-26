import Picture from "../Picture/Picture";
import arrayPics from './../Picture/data';
import styles from './Gallery.module.css'
const Gallery = () => {
    const showPictures = (pic)=>{
        <Picture key={pic.id} src={pic.src} alt={pic.alt}/>
    }
    return (
        <section className={styles.container}>
            {arrayPics.map(showPictures)}
        </section>
            )
            
        
}

export default Gallery;
