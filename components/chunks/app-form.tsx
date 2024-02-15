"use client"
import {Field, Form, Formik} from "formik";
import {motion} from "framer-motion";
import {useAppStore} from "@/store/zustand";
import {useRef} from "react";

export default function AppForm () {
  const { isLoading, setIsLoading, setVideoSrc } = useAppStore()
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <Formik
      initialValues={{}}
      onSubmit={async (values: any) => {
        if (formRef != null) {
          const formData = new FormData(formRef.current as HTMLFormElement)
          setIsLoading(true)
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/merge`, {
              method: 'POST',
              body: formData
            })
            const responseJSON = await response.json()
            if (responseJSON.Success === true) {
              setVideoSrc(`${process.env.NEXT_PUBLIC_API_URL}${responseJSON.VideoSrc}`)
            }
          } catch (err) {
            console.error(err)
          }
          setIsLoading(false)
        }
      }}
    >
      <Form className='flex flex-col gap-4 p-4' ref={formRef}>
        <label htmlFor="audioFile">Audio file</label>
        <Field
          id="audioFile"
          name="audioFile"
          type="file"
        />
        <label htmlFor="photoFile">Image file</label>
        <Field
          id="photoFile"
          name="photoFile"
          type="file"
        />
        <div className="flex justify-center">
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            type={"submit"}
            className="bg-white text-black rounded-xl p-2 w-fit"
            disabled={isLoading}
          >
            {
              !isLoading
                ? <>Create video</>
                : <>Creating...</>
            }
          </motion.button>
        </div>
      </Form>
    </Formik>
  )
}
