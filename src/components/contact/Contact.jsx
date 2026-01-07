import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Contact.css'
import { Mail, Phone, MapPin, SendHorizonal } from 'lucide-react'
import msg from '../../assets/msg-icon.png'

function Contact() {
    const [result, setResult] = useState("")
    const contactRef = useRef(null)
    const leftColRef = useRef(null)
    const rightColRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                        if (entry.target === contactRef.current) {
                            if (leftColRef.current) leftColRef.current.classList.add('animate-in')
                            if (rightColRef.current) rightColRef.current.classList.add('animate-in')
                        }
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("access_key", "")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()
        setResult(data.success ? "Success!" : "Error")
        event.target.reset()
    }

    return (

        <>
        <div className="contact" ref={contactRef}>
            <div className="contact-col" ref={leftColRef}>
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide
                    exceptional service to our community.</p>
                <ul>
                    <li><Mail />Ellison@gmail.com</li>
                    <li><Phone></Phone>+123 456 7890</li>
                    <li><MapPin></MapPin>Breipaal, Douglas 8730,<br /> Northern Cape</li>
                </ul>
            </div>

            <div className="contact-col" ref={rightColRef}>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required />
                    <label htmlFor="email">Email Address</label>
                    <input type='email' name='email' placeholder='Enter your email address' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id='message' placeholder="Enter your message" required></textarea>
                    <button type="submit">Send<SendHorizonal /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
         {/* Add Footer here */}
      <div className="services-footer">
        <p>© 2025 Deon Ellison Foundation. All rights reserved.</p>
      </div>
        </>
    )
}

export default Contact