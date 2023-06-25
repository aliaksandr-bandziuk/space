import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from './FormspreeForm.module.scss';

export const FormspreeForm = () => {
  const [state, handleSubmit] = useForm("xdornoay");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    event.target.reset(); // Сбросить значения полей формы после отправки
  };
  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formRow}>
					<div className={styles.inputData}>
            <input
              type="text"
              name="form[name]"
              data-error="Error"
              className={styles.input}
              required />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
						<div className={styles.underline}></div>
						<label htmlFor="form[name]">Name</label>
					</div>
          <div className={styles.inputData}>
              <input type="text" name="form[phone]" data-error="Error" className={styles.input} required />
              <ValidationError 
                prefix="Phone" 
                field="phone"
                errors={state.errors}
              />
							<div className={styles.underline}></div>
							<label htmlFor="form[phone]">Phone</label>
						</div>
				</div>
					<div className={styles.formRow}>
						 <div className={styles.inputData}>
                <input type="email" name="form[email]" data-error="Error" className={styles.input} required />
                  <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
								<div className={styles.underline}></div>
								<label htmlFor="form[email]">Email</label>
						 </div>
						 <div className={`${styles.inputData} ${styles.textarea}`}>
              <textarea rows="8" cols="80" required></textarea>
								<br />
								<div className="underline"></div>
								<label htmlFor="">Write your message</label>
								<br />
						 </div>
					</div>
        <div>
          <button className='btn' type="submit" disabled={state.submitting}>
            Submit
          </button> 
        </div>
      </form>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupWrapper}>
            <h3 className={styles.popupTitle}>Thank you!</h3>
            <p className={styles.popupMessage}>
              We have received your message and will reply to you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
