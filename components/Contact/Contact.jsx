import React, {useContext, useId, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import contacts from "./contacts.module.scss"
import {dataContext} from "../../pages";
function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [focusName,setFocusName] = useState(false)
  const [focusEmail,setFocusEmail] = useState(false)
  const [focusMessage,setFocusMessage] = useState(false)
  const emailRegExp =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi;
  const nameRegExp = /^([A-Z])([a-z])+|^([\u0531-\u0556])([\u0561-\u0587])/g;
  function OnFocus(setFunc,state){
    setFunc(state)
  }
  function OnBlur(setFunc,state,e){
    console.log(e.target.value.length)
    if (e.target.value.length !== 0){
      setFunc(true)
    }else {
      setFunc(false)

    }
  }
  const {data,lang} = useContext(dataContext)
  const contactData =data.data.left.contact
  const {    register,    reset,    handleSubmit,    formState: { errors, isValid, isDirty },  } = useForm({    mode: 'all',  });
  const onSubmit = data1 => {
    axios({
      method: 'POST',
      url: 'https://formbold.com/s/3jGDo',
      data: data1,
    }).then(r => reset());
  };
  return (
  <section className={contacts.section} name={"contact"}>
    <h3 className="text-4xl   uppercase text-[#987750] mb-5">
      Contact
    </h3>
    <h2
      className="text-5xl ss:text-4xl sm:text-5xl xl:text-6xl mb-12 mt-6 inline-block  relative
          z-[1] after:absolute
                after:-bottom-7 after:left-0 after:w-[20%] after:h-[2px] after:z-[1]
                dark:after:bg-stone-400 after:bg-stone-600"
    >
      Get In Touch
    </h2>
    <p className={"font-regular text-xl text-gray-200/70"}>{contactData.description[lang]}</p>
    <div className={contacts.part}>
     <div className={contacts.errors}>
      {errors.name?.message && (
        <span className={contacts.error}>{errors.name.message+" |"}</span>
      )}
        
       {errors.email?.message && (
        <span className={contacts.error}>
											{errors.email.message+" |"}
										</span>
      )}
        
      {errors.message?.message && (
        <span className={contacts.error}>
										{errors.message.message}
									</span>
      )}
     </div>
      <form
          onSubmit={handleSubmit(onSubmit)}
        className={contacts.formField}>
      <div className={contacts.NameAndEmail}>
        <label htmlFor={nameId} className={contacts.label}>
          <span className={`${contacts.legend} ${focusName?contacts.focuesField:""}`}>{contactData.fields.name[lang]}</span>
          <div className={contacts.field}>
            <input
              onFocus={()=>OnFocus(setFocusName,true)}
              onBlur={(e)=>OnBlur(setFocusName,false,e)}
              onBlurCapture={(e)=>OnBlur(setFocusName,false,e)}
              tabIndex={7}
              required={true}
              className={`${contacts.nameField} ${contacts.field}`}
              type="text"
              {...register('name', {
                required: contactData.errors.name[lang],
                pattern: {
                  value: nameRegExp,
                  message: contactData.errors.name.pattern[lang],
                },
                minLength: {
                  value: 3,
                  message:contactData.errors.name.required[lang]
                },
              })}
            />
          </div>
        </label>
        <label htmlFor={emailId} className={contacts.label}>
          <span className={`${contacts.legend} ${focusEmail?contacts.focuesField:""}`} >{contactData.fields.email[lang]}</span>
          <div className={contacts.field}>
            <input
              onFocus={()=>OnFocus(setFocusEmail,true)}
              onBlur={(e)=>OnBlur(setFocusEmail,false,e)}
              onBlurCapture={(e)=>OnBlur(setFocusEmail,false,e)}
            
              required={true}
              className={contacts.field}
              type="email"
              tabIndex={8}
              {...register('email', {
                required: contactData.errors.email.required[lang],
                pattern: {
                  value: emailRegExp,
                  message: contactData.errors.email[lang]
                },
              })}
            />
          </div>
        </label>
      </div>
        <label htmlFor={messageId} className={`${contacts.label} mt-10`}>
          <span className={`${contacts.legend} ${focusMessage ? contacts.focuesField:""}`}>{contactData.fields.message[lang]}</span>
          <div className={contacts.field}>
									<textarea
                    onFocus={()=>OnFocus(setFocusMessage,true)}
                    onBlur={(e)=>OnBlur(setFocusMessage,false,e)}
                    onBlurCapture={(e)=>OnBlur(setFocusMessage,false,e)}
                    tabIndex={9}
                    style={{height:"200px"}}
                    id={messageId}
                    className={`${contacts.mess} ${contacts.field}`}
                    {...register('message', {
                      required: contactData.errors.message.required[lang],
                      minLength: {
                        value: 3,
                        message: contactData.errors.message[lang],
                      },
                    })}
                  />
          </div>
        </label>
        <button
          tabIndex={10}
          className={contacts.submitBtn}
          disabled={!isValid || !isDirty}
          type="submit">
          {contactData.fields.submit[lang]}
        </button>
      </form>
    </div>
  </section>
  );
}

export default Contact;