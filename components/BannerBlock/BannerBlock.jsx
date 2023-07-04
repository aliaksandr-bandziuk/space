import Link from 'next/link'
import styles from './BannerBlock.module.scss'
import Image from 'next/image'

export const BannerBlock = () => {
  return (
    <div className={styles.bannerBlock}>
      <Link className={styles.bannerLink} href="/comments/eminem-about-rental-room-in-warsaw">
        <Image className={styles.bannerImage} src="/img/banner-1.jpg" width={1220} height={30} alt='banner' />
      </Link>
    </div>
  )
}
