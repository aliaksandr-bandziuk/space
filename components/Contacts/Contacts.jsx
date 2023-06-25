import { Map } from 'components/Map'
import React from 'react'
import Image from 'next/image';

import styles from './Contacts.module.scss';
import { BlockRenderer } from 'components/BlockRenderer';
import { FormspreeForm } from 'components/FormspreeForm';



export const Contacts = (props) => {
  const { blocks } = props;

  return (
    <div className={styles.contacts}>
      <div className={styles.contactsHero}>
        <div className={styles.contactsHeroImage}>
          <Image
            src="/img/bg-contact-2.jpg"
            alt="Contact us"
            width={1000}
            height={600}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.contactsHeroContent}>
          <h1 className={styles.heroTitle}>Contact us</h1>
          <p className={styles.heroText}>We always ready for new ideas and new contacts. Here you can call us, find us in social media or write your letter to our email. We are happy to hear, listen and see you.</p>
        </div>
      </div>
      {blocks && <BlockRenderer blocks={blocks} />}
      <div className={styles.directContact}>
        <div className={styles.contactForm}>
          <FormspreeForm />
        </div>
        <div className={styles.contactMap}>
          <Map />
        </div>
      </div>
    </div>
  )
}
