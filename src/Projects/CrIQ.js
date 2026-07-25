import "../Projects.css";
import criqTitleImg from "../images/criqtitleimg.png";
import model1Img from "../images/model1.png";
import model2Img from "../images/model2.png";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initTwoFingerSwipe } from '../twoFingerSwipe'; 

function CrIQ() {

  const navigate = useNavigate();
  
    useEffect(() => {
      const removeSwipeListener = initTwoFingerSwipe(() => {
        console.log("Navigating home now...");
        navigate('/'); 
      });
  
      return () => removeSwipeListener();
    }, [navigate]);
    
  const skills = [
    "React",
    "JavaScript",
    "UI/UX",
    "Problem Solving",
    "Testing",
    "Collaboration",
  ];

  return (
    <div className="page">
      <h1 className="title">crIQ</h1>
      <h2>  A Deep Learning Framework for Intelligent Cricket Strategy</h2>
      <br/>


      <div className="photo-container">
        <img src={criqTitleImg} alt="crIQ title" />
      </div>

      <div className="description">
        <h2 className="description-title">Description</h2>
        <p>
         This is an AI-based cricket analytics system for phase-wise score forecasting and field 
placement prediction using CatBoost, XGBoost, LightGBM, and Random Forest. Applied 
feature engineering, hyperparameter tuning, and regression/classification models to 
optimize predictions. Built a ball-by-ball simulation engine to evaluate bowling strategies 
and validate performance using R², MAE, and RMSE metrics.  
        </p>
      </div>


      <h2 className="description-title">Model 1: Phase-Wise Score Forecasting</h2>
      <div className="description">
        <p>The Phase-wise Score Forecasting module predicts the expected runs for the powerplay, middle overs, and death overs based on the selected opponent, venue, toss decision, and wickets remaining. It generates multiple match scenarios to estimate realistic phase-wise and total scores. The model recommends either an aggressive batting strategy or a defensive bowling strategy depending on whether the team bats or fields first. This enables teams to set achievable scoring targets or effective run-restriction goals for every stage of the innings. The predictions are designed to assist captains in making informed tactical decisions before and during the match. The output provides phase-wise score estimates along with an optimal target range for maximizing the probability of winning.</p>
      </div>
      <div className="photo-container" style={{ maxWidth: "400px" }}>
        <img src={model1Img} alt="Model 1 forecasting" />
      </div>
      <h2 className="description-title">Model 2: Field Placement Prediction</h2>
      <div className="description">
        <p>The Field Prediction module recommends optimal field placements for every delivery by analyzing contextual match information such as batsman, bowler, delivery characteristics, and game situation. A deep learning classification model predicts the most suitable fielder positions to reduce scoring opportunities. These predicted field placements are then used in match simulations to estimate the runs that could be saved. The system evaluates different machine learning regression models to measure overall effectiveness and forecasting accuracy. Performance is assessed using metrics including MAE, RMSE, and average run-saving percentage. Ball-by-ball analysis demonstrates that the proposed strategy can significantly reduce the opponent's total score through intelligent field placement.</p>
       </div>
      <div className="photo-container">
        <img src={model2Img} alt="Model 2 placement" />
      </div>
      <h2 className="section-title">Skills Involved</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="image-placeholder">Image</div>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrIQ;
