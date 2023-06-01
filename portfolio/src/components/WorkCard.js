import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
             <img src="https://us.123rf.com/450wm/yavdat1/yavdat11804/yavdat1180400183/100440442-stethoscope-with-clipboard-and-laptop-on-desk.jpg?ver=6" alt="image" /> 
             <h2 className="project-title">HEALTH-Hero</h2>
             <div className="pro-details">
                <p>This is a hospital management system. It's an application where registered doctor(s) can create and update patient records </p>
                <div className="pro-btns">
                    <NavLink to="https://github.com/Iceprincess2/Health-Hero" className="btn">
                        View
                    </NavLink>
                </div>
                </div>  
            </div>
            <div className="project-card">
             <img src="https://media.istockphoto.com/id/1175815322/photo/make-the-healthy-choice-for-your-relationship.jpg?s=612x612&w=0&k=20&c=PVnB2oA3vjQ_lXmuYCbVoXgNKMFT9O6tDVeNLBeqiAw=" alt="image" /> 
             <h2 className="project-title">HEALTH-VIBES</h2>
             <div className="pro-details">
                <p>This is a mental health and fitness application. It is targeted towords the Genz(s). Registered users can book for fitness and therapy sessions. They can request for either physical or virtual sessions with professionals who are registered users of the app.</p>
                <div className="pro-btns">
                    <NavLink to="https://github.com/Iceprincess2/HealthVibes" className="btn">
                        View
                    </NavLink>
                </div>
                </div>  
            </div>

        </div>
    </div>
  )
}

export default WorkCard