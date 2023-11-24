// TarotCalculator.tsx

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

import Death from '../assets/Death.png';
import Judgement from '../assets/Judgement.png';
import Justice from '../assets/Justice.png';
import Strength from '../assets/Strength.png'
import Temperance from '../assets/Temperance.png';
import TheChariot from '../assets/TheChariot.png';
import TheDevil from '../assets/TheDevil.png';
import TheEmperor from '../assets/TheEmperor.png';
import TheEmpress from '../assets/TheEmpress.png';
import TheFool from '../assets/TheFool.png';
import TheHangedMan from '../assets/TheHangedMan.png';
import TheHermit from '../assets/TheHermit.png';
import TheHierophant from '../assets/TheHierophant.png';
import TheHighPreistess from '../assets/TheHighPriestess.png';
import TheLovers from '../assets/TheLovers.png';
import TheMagician from '../assets/TheMagician.png';
import TheMoon from '../assets/TheMoon.png';
import TheStar from '../assets/TheStar.png';
import TheSun from '../assets/TheSun.png';
import TheTower from '../assets/TheTower.png';
import TheWorld from '../assets/TheWorld.png'
import WeelofFortune from '../assets/WheelofFortune.png';

const TarotCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [mainPersonalityLight, setMainPersonalityLight] = useState<number>(0);
  const [mainPersonalityShadow, setMainPersonalityShadow] = useState<number>(0);
  const [unconsciousSuperSkill, setUnconsciousSuperSkill] = useState<number>(0);
  const [lifetimeLessonExam, setLifetimeLessonExam] = useState<number>(0);
  const [socialExam, setSocialExam] = useState<number>(0);
  const [realisationArea, setRealisationArea] = useState<number>(0);
  const [gift, setCalculatedGift] = useState<number>(0);
  const [mission, setcalculatedMission] = useState<number>(0);

  const [isCalculateDisabled, setIsCalculateDisabled] = useState<boolean>(true);
  const [showArchetypes, setShowArchetypes] = useState<boolean>(false);


  const validateDateFormat = (dateString: string): boolean => {
    // Add your date format validation logic here
    // For simplicity, I'm checking if the string matches the pattern YYYY-MM-DD
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateFormatRegex.test(dateString);
  };
  

  const calculateTarot = () => {
    if (!validateDateFormat(dob)) {
        alert('Invalid date format. Please enter date in DD/MM/YYYY format.');
        return;
    }


    // Extract day, month, and year from the input
    const [year, month, day] = dob.split('-').map(Number);

    // Perform the pre-calculations
    const calculatedA = day > 22 ? day - 22 : day;
        // Sum up the digits in the year
    const calculateB = Array.from(String(year), Number).reduce((acc, digit) => acc + digit, 0);
    const calculatedB = calculateB > 22 ? calculateB - 22 : calculateB
    // const calculatedM =  Array.from(String(month), Number).reduce((acc, digit) => acc + digit, 0);
    const calculateM = (month: number): number => {
        // Convert the month to a string
        const monthString = month.toString();
      
        // Check if the first digit is 0
        if (monthString[0] === '0') {
          // If yes, add up the digits
          return Array.from(monthString, Number).reduce((acc, digit) => acc + digit, 0);
        } else {
          // If no, return the month as is
          return month;
        }
      };

      const calculatedM = month < 10 ? calculateM(month) : month 
      

    // Perform the main calculations
    const calculatedMainPersonalityLight = calculatedA;
    const calculatedMainPersonalityShadow = (calculatedA + calculatedM) > 22 ? calculatedA + calculatedM - 22 : calculatedA + calculatedM;
    const finalCalculatedMainPersonalityShadow = calculatedMainPersonalityShadow > 44 ? calculatedMainPersonalityShadow - 44 : calculatedMainPersonalityShadow;

    const calculatedUnconsciousSuperSkill = (calculatedA + calculatedB + 2 * calculatedM) % 22;
    const calculatedLifetimeLessonExam = calculatedM;
    const calculatedSocialExam = (calculatedB + calculatedM) > 22 ? calculatedB + calculatedM - 22 : calculatedB + calculatedM;
    const finalCalculatedSocialExam = calculatedSocialExam > 44 ? calculatedSocialExam - 44 : calculatedSocialExam;

    const calculatedRealisationArea = calculatedB;
    
    const calculatedGift = (calculatedA + calculatedB + (3*calculatedM)) > 22 ? (calculatedA + calculatedB + (3*calculatedM)) - 22 : (calculatedA + calculatedB + (3*calculatedM));
    const finalCalculatedGift = calculatedGift > 44 ? calculatedGift - 44 : calculatedGift;


    const calculatedMission = (calculatedA + calculatedB + calculatedM) > 22 ? (calculatedA + calculatedB + calculatedM) -22 : (calculatedA + calculatedB + calculatedM);
    const finalCalculatedMission = calculatedMission > 22 ? calculatedMission - 22 : calculatedMission;


    console.log('A:' + calculatedA)
    console.log('B:' + calculatedB)
    console.log('MM:' + calculatedM)
    console.log('Mission:' + calculatedMission)

    // Update the state variables with the results
    setMainPersonalityLight(calculatedMainPersonalityLight);
    setMainPersonalityShadow(finalCalculatedMainPersonalityShadow);
    setUnconsciousSuperSkill(calculatedUnconsciousSuperSkill);
    setLifetimeLessonExam(calculatedLifetimeLessonExam);
    setSocialExam(finalCalculatedSocialExam);
    setRealisationArea(calculatedRealisationArea);
    setCalculatedGift(finalCalculatedGift);
    setcalculatedMission(finalCalculatedMission);

    console.log('Mission:' + finalCalculatedMission)

    setIsCalculateDisabled(false);
    setShowArchetypes(true)
  };

  const tarotCardImages = {
    "The Magician": TheMagician,
    "The High Priestess": TheHighPreistess,
    "The Empress": TheEmpress,
    "The Emperor": TheEmperor,
    "The Hierophant": TheHierophant,
    "The Lovers": TheLovers,
    "The Chariot": TheChariot,
    "The Justice": Justice,
    "The Hermit": TheHermit,
    "The Wheel of Fortune": WeelofFortune,
    "The Strength": Strength,
    "The Hanged Man": TheHangedMan,
    "The Death": Death,
    "The Temperance": Temperance,
    "The Devil": TheDevil,
    "The Tower": TheTower,
    "The Star": TheStar,
    "The Moon": TheMoon,
    "The Sun": TheSun,
    "The Judgement": Judgement,
    "The World": TheWorld,
    "The Fool": TheFool
  };
  
  const mapToTarotCard = (number: number): { name: string; image: string } => {
    const tarotCards = [
      "The Magician",
      "The High Priestess",
      "The Empress",
      "The Emperor",
      "The Hierophant",
      "The Lovers",
      "The Chariot",
      "The Justice",
      "The Hermit",
      "The Wheel of Fortune",
      "The Strength",
      "The Hanged Man",
      "The Death",
      "The Temperance",
      "The Devil",
      "The Tower",
      "The Star",
      "The Moon",
      "The Sun",
      "The Judgement",
      "The World",
      "The Fool"
    ];
  
    const cardName = tarotCards[number - 1] || ' ';
    const cardImage = tarotCardImages[cardName];
  
    return { name: cardName, image: cardImage || '' };
  };

  return (
    <div>



      {showArchetypes ?
                    <>
                    <Typography align='center' sx={{fontSize: '28px',
    marginBottom: '24px'}}>Your Core Archetypal Energies:</Typography>
     <Typography align='center' sx={{fontSize: '28px',
    marginBottom: '24px'}}>{dob}</Typography>
                     <div className='flex cc'>
                         
                    
                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(mainPersonalityLight).image} alt={mapToTarotCard(mainPersonalityLight).name} />
                        <Typography align='center'> Main Personality "Light":</Typography>
                        <Typography align='center'>  {mapToTarotCard(mainPersonalityLight).name}</Typography>
                      </div>
                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(mainPersonalityShadow).image} alt={mapToTarotCard(mainPersonalityShadow).name} />
                        
                        <Typography align='center'>  Main Personality "Shadow":</Typography>
                        <Typography align='center'> {mapToTarotCard(mainPersonalityShadow).name}</Typography>
                      </div>

                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(unconsciousSuperSkill).image} alt={mapToTarotCard(unconsciousSuperSkill).name} />
                        
                        <Typography align='center'>Unconscious "Super Skill":</Typography>
                        <Typography align='center'>  {mapToTarotCard(unconsciousSuperSkill).name}</Typography>
                      </div>

                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(lifetimeLessonExam).image} alt={mapToTarotCard(lifetimeLessonExam).name} />
                       
                        <Typography align='center'>  Lifetime Lesson "Exam":  </Typography>
                        <Typography align='center'> {mapToTarotCard(lifetimeLessonExam).name}</Typography>
                      </div>

                  
                    </div>

                    <Typography align='center' sx={{marginTop: '32px', marginBottom: '32px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '979px'}}>Following Archetypal energies are also part of your portrait, however you may be not aware of them until a certain stage of your life. When Core Archetypes (above) will be mastered, these energies will become more active, present and meaningful for you:</Typography>
                    <div className='flex cc'>
                         
                
                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(socialExam).image} alt={mapToTarotCard(socialExam).name} />
                        {/* <Typography align='center'>Social Mask:</Typography> */}
                        <Typography align='center'> {mapToTarotCard(socialExam).name}</Typography>
                      </div>

                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(realisationArea).image} alt={mapToTarotCard(realisationArea).name} />
                       
                        {/* <Typography align='center'>Realisation Area:</Typography>  */}
                        <Typography align='center'>{mapToTarotCard(realisationArea).name}</Typography>
                    
                        
                      </div>


                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(gift).image} alt={mapToTarotCard(gift).name} />
                       {/* <Typography align='center'> Gift:</Typography>  */}
                       <Typography align='center'>{mapToTarotCard(gift).name}</Typography>
                      </div>

                      <div className='flex cc vert'>
                        <img src={mapToTarotCard(mission).image} alt={mapToTarotCard(mission).name} />
                        {/* <Typography align='center'>Mission:</Typography>  */}
                        <Typography align='center'>{mapToTarotCard(mission).name}</Typography>
                      </div>
                    </div>
                    </>
                   
     :
     
     <div className='m-auto flex cc'>
     <TextField
       // label="Date of Birth"
       type="date"
       variant="outlined"
       value={dob}
       onChange={(e) => {
         setDob(e.target.value);
         // Update the disabled state based on the validation result
         setIsCalculateDisabled(!validateDateFormat(e.target.value));
       }}
     />
     <Button
       variant="contained"
       onClick={calculateTarot}
       disabled={isCalculateDisabled}
     >
       Calculate
     </Button>
     </div>
     
     }

      {/* Display the results using Typography or other Material UI components */}

    </div>
  );
};

export default TarotCalculator;
