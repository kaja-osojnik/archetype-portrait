// TarotCalculator.tsx

import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
  const [isFlippedMainPersonalityLight, setIsFlippedMainPersonalityLight] = useState(false);

  const handleCardClickMainPersonalityLight = () => {
    setIsFlippedMainPersonalityLight(!isFlippedMainPersonalityLight);
  };

  const [isFlippedMainPersonalityShadow, setIsFlippedMainPersonalityShadow] = useState(false);


  const handleCardClickMainPersonalityShadow = () => {
    setIsFlippedMainPersonalityShadow(!isFlippedMainPersonalityShadow);
  };

  const [isFlippedUnconsciousSuperSkill, setIsFlippedUnconsciousSuperSkill] = useState(false);

  const handleCardClickUnconsciousSuperSkill = () => {
    setIsFlippedUnconsciousSuperSkill(!isFlippedUnconsciousSuperSkill);
  };

  const [isFlippedLifetimeLessonExam, setIsFlippedLifetimeLessonExam] = useState(false);

  const handleCardClickLifetimeLessonExam = () => {
    setIsFlippedLifetimeLessonExam(!isFlippedLifetimeLessonExam);
  };
 
  const [isFlippedSocialExam, setIsFlippedSocialExam] = useState(false);

  const handleCardClickIsFlippedSocialExam = () => {
    setIsFlippedSocialExam(!isFlippedSocialExam);
  };
  
  const [isFlippedRealisationArea, setIsRealisationArea] = useState(false);

  const handleCardClickRealisationArea = () => {
    setIsRealisationArea(!isFlippedRealisationArea);
  };
 
  const [isFlippedGift, setIsGift] = useState(false);

  const handleCardClickGift = () => {
    setIsGift(!isFlippedGift);
  };

  const [isFlippedMission, setIsMission] = useState(false);

  const handleCardClickMission = () => {
    setIsMission(!isFlippedMission);
  };


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

    
    // const calculatedUnconsciousSuperSkill = (calculatedA + calculatedB + (2 * calculatedM)) % 22 == 0 ? 1 : (calculatedA + calculatedB + (2 * calculatedM)) % 22;˚ç
    const calculatedUnconsciousSuperSkill = (calculatedA + calculatedB + (2 * calculatedM)) > 22 ? (calculatedA + calculatedB + (2 * calculatedM)) - 22 : (calculatedA + calculatedB + (2 * calculatedM));
    const finalCalculatedUnconsciousSuperSkill = calculatedUnconsciousSuperSkill > 22 ? calculatedUnconsciousSuperSkill - 22 : calculatedUnconsciousSuperSkill;
    
    
    const calculatedLifetimeLessonExam = calculatedM;
    const calculatedSocialExam = (calculatedB + calculatedM) > 22 ? calculatedB + calculatedM - 22 : calculatedB + calculatedM;
    const finalCalculatedSocialExam = calculatedSocialExam > 22 ? calculatedSocialExam - 22 : calculatedSocialExam;

    const calculatedRealisationArea = calculatedB;
    
    const calculatedGift = (calculatedA + calculatedB + (3*calculatedM)) > 22 ? (calculatedA + calculatedB + (3*calculatedM)) - 22 : (calculatedA + calculatedB + (3*calculatedM));
    const finalCalculatedGift = calculatedGift > 22 ? calculatedGift - 22 : calculatedGift;
    const finalFinalCalculatedGift = finalCalculatedGift > 22 ? finalCalculatedGift - 22 : finalCalculatedGift;


    const calculatedMission = (calculatedA + calculatedB + calculatedM) > 22 ? (calculatedA + calculatedB + calculatedM) -22 : (calculatedA + calculatedB + calculatedM);
    const finalCalculatedMission = calculatedMission > 22 ? calculatedMission - 22 : calculatedMission;
   


    // Update the state variables with the results
    setMainPersonalityLight(calculatedMainPersonalityLight);
    setMainPersonalityShadow(finalCalculatedMainPersonalityShadow);
    setUnconsciousSuperSkill(finalCalculatedUnconsciousSuperSkill);
    setLifetimeLessonExam(calculatedLifetimeLessonExam);
    setSocialExam(finalCalculatedSocialExam);
    setRealisationArea(calculatedRealisationArea);
    setCalculatedGift(finalFinalCalculatedGift);
    setcalculatedMission(finalCalculatedMission);

   


    setIsCalculateDisabled(false);
    setShowArchetypes(true)
  };

  interface TarotCard {
    image: string;
    light: string[];
    shadow: string[];
  }


  const tarotCardData: Record<string, TarotCard> = {
    "The Magician": {
      image: TheMagician,
      light: ['Determination', 'Individuality', 'Giftedness'],
      shadow: ['Self Doubts', 'Prideful attitude', 'Manipulations']
    },
    "The High Priestess": {
      image: TheHighPreistess,
      light: ['Intuition', 'Wisdom', 'Harmony'],
      shadow: ['Victimhood', 'Hypocrisy', 'Deceitfulness'],
    },
    "The Empress":  {
      image: TheEmpress,
      light: ['Femininity', 'Self Love', 'Generosity'],
      shadow: ['Arrogance', 'Lack of Self Love', 'Blocked Femininity'],
    },
    "The Emperor": {
      image: TheEmperor,
      light: ['Masculinity', 'Protection', 'Reliability'],
      shadow: ['Tyranny', 'Hyper control', 'Irresponsibility'],
    },
    "The Hierophant": {
      image: TheHierophant,
      light: ['Curious learner', 'Impeccable teacher', 'Respectful'],
      shadow: ['Rigid mind', 'Judgemental', 'Impostor syndrome'],
    },
    "The Lovers":  {
      image: TheLovers,
      light: ['Open-hearted', 'Communicative', 'Creative'],
      shadow: ['Indecisiveness', 'Infantilism', 'Lack of self love'],
    },
    "The Chariot": {
      image:  TheChariot,
      light: ['Successful', 'Active', 'Leader'],
      shadow: ['Apathy', 'All over the place', 'Untapped potential'],
    },
    "The Justice": {
      image: Justice,
      light: ['Fairness', 'Honesty', 'Nobility'],
      shadow: ['Stubborness', 'Self Righteousness', 'Circumstancial victimness'],
    },
    "The Hermit":  {
      image: TheHermit,
      light: ['Wisdom', 'Solitude', 'Philosophy'],
      shadow: ['Closeness', 'Self doubts', 'Ascetism'],
    },
    "The Wheel of Fortune": {
      image: WeelofFortune,
      light: ['Lucky', 'Trusting', 'Flexible'],
      shadow: ['Misfortune', 'Distrust', 'Laziness'],
    },
    "The Strength":  {
      image: Strength,
      light: ['Strength', 'Endurance', 'Determination'],
      shadow: ['Agression', 'Hostility', 'Weakness'],
    },
    "The Hanged Man": {
      image: TheHangedMan,
      light: ['Extraordinary', 'Creative', 'Tender-hearted'],
      shadow: ['Victimhood', 'Apathy', 'Self-rejection'],
    },
    "The Death": {
      image: Death,
      light: ['Transformative', 'Extremeness', 'Seriousness'],
      shadow: ['Fears', 'Severity', 'Unreasonable risk'],
    },
    "The Temperance": {
      image: Temperance, 
      light: ['Harmony', 'Diplomacy', 'Art'],
      shadow: ['Distemper', 'Immoderation', 'Mundanity'],
    },
    "The Devil": {
      image: TheDevil,
      light: ['Intuition', 'Charisma', 'Vitality'],
      shadow: ['Egoism', 'Addictions', 'Obsessiveness'],
    },
    "The Tower": {
      image: TheTower,
      light: ['Fortitude', 'Courage', 'Creativity'],
      shadow: ['Fear of change', 'Destruction', 'Rage'],
    },
    "The Star": {
      image: TheStar, 
      light: ['Inspiring', 'Sensitive', 'Unique'],
      shadow: ['Betrayal', 'Self doubts', 'Arrogance'],
    },
    "The Moon": {
      image: TheMoon,
      light: ['Creative', 'Mysterious', 'Careful'],
      shadow: ['Depression', 'Fears', 'Dellusional'],
    },
    "The Sun": {
      image: TheSun,
      light: ['Brightness', 'Self expression', 'Leadership'],
      shadow: ['Pride', 'Vanity', 'Shame'],
    },
    "The Judgement":  {
      image: Judgement,
      light: ['Firmness', 'Spiritual Strength', 'Awareness'],
      shadow: ['Categoricalness', 'Judgemental', 'Disrespect'],
    },
    "The World": {
      image:  TheWorld,
      light: ['Diplomatic', 'Unlimited', 'World citizen'],
      shadow: ['Limitations', 'Conflictiveness', 'Warlike attitude'],
    },
    "The Fool":  {
      image:  TheFool,
      light: ['Lightness', 'Openness', 'Spontaneity'],
      shadow: ['Naivety', 'Instability', 'Impulsiveness'],
    },
  };
  


  // console.log(mainPersonalityLight)
  // console.log(mainPersonalityShadow)
  // console.log('super skill:' + unconsciousSuperSkill)
  // console.log(lifetimeLessonExam)
  // console.log(socialExam)
  // console.log('gift:' + gift)
  // console.log(mission)

  
  const mapToTarotCard = (number: number): { name: string; image: string; light: string[]; shadow: string[] } => {
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
    const cardData = tarotCardData[cardName];
  
    return {
      name: cardName,
      image: cardData.image || '',
      light: cardData.light || [],
      shadow: cardData.shadow || []
    };
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return `${day} ${months[month - 1]} ${year}`;
  };



  return (
    <div>



      {showArchetypes ?
                    <>
                      <Typography       
                      onClick={() => {setShowArchetypes(false)}}
                      sx={{
                        marginTop: '0', 
                        cursor: 'pointer',
                        width: 'auto',
                        padding: '11px 32px',
                        borderRadius: '29px',
                        marginBottom: '25px',
                        position: 'absolute',
                        letterSpacing: '-0.5px',
                        display: 'flex'
                       }} 
                      ><ArrowBackIosIcon/>BACK</Typography>
                    <Typography align='center' sx={{fontSize: '35px',
    marginBottom: '24px', fontFamily: '"txc-pearl", sans-serif', lineHeight: '1.2'
  }}>Core Archetypal Energies for:<br></br> {formatDate(dob)}</Typography>

                     <div className='flex cc wrap-sm'>
                        


                      {/* Main Personality "Light" */}
                      <div className='flex cc vert'>
                        <div className={`card ${isFlippedMainPersonalityLight ? 'is-flipped' : ''}`} onClick={handleCardClickMainPersonalityLight}>
                          <div className="card-face card-front">
                            <img src={mapToTarotCard(mainPersonalityLight).image} alt={mapToTarotCard(mainPersonalityLight).name} />
                          </div>
                          <div className="card-face card-back">
                            <div className='flex-col-mid'>
                              <Typography variant="h6">Light</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(mainPersonalityLight).name].light.map((trait, index) => (
                                  <li key={`light-${index}`}>{trait}</li>
                                ))}
                              </ul>
                              <Typography variant="h6">Shadow</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(mainPersonalityLight).name].shadow.map((trait, index) => (
                                  <li key={`shadow-${index}`}>{trait}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <Typography align='center'>Personality Light </Typography> */}
                        <Typography align='center' variant='h2'>  {mapToTarotCard(mainPersonalityLight).name}</Typography>
                      </div>



                      <div className='flex cc vert'>
                        <div className={`card ${isFlippedMainPersonalityShadow ? 'is-flipped' : ''}`} onClick={handleCardClickMainPersonalityShadow}>
                          <div className="card-face card-front">
                            <img src={mapToTarotCard(mainPersonalityShadow).image} alt={mapToTarotCard(mainPersonalityShadow).name} />
                          </div>
                          <div className="card-face card-back">
                            <div className='flex-col-mid'>
                              <Typography variant="h6">Light</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(mainPersonalityShadow).name].light.map((trait, index) => (
                                  <li key={`light-${index}`}>{trait}</li>
                                ))}
                              </ul>
                              <Typography variant="h6">Shadow</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(mainPersonalityShadow).name].shadow.map((trait, index) => (
                                  <li key={`shadow-${index}`}>{trait}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <Typography align='center'>Personality Shadow</Typography> */}
                        <Typography align='center' variant='h2'>  {mapToTarotCard(mainPersonalityShadow).name}</Typography>
                      </div>


                      <div className='flex cc vert'>
                        <div className={`card ${isFlippedUnconsciousSuperSkill ? 'is-flipped' : ''}`} onClick={handleCardClickUnconsciousSuperSkill}>
                          <div className="card-face card-front">
                            <img src={mapToTarotCard(unconsciousSuperSkill).image} alt={mapToTarotCard(unconsciousSuperSkill).name} />
                          </div>
                          <div className="card-face card-back">
                            <div className='flex-col-mid'>
                              <Typography variant="h6">Light</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(unconsciousSuperSkill).name].light.map((trait, index) => (
                                  <li key={`light-${index}`}>{trait}</li>
                                ))}
                              </ul>
                              <Typography variant="h6">Shadow</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(unconsciousSuperSkill).name].shadow.map((trait, index) => (
                                  <li key={`shadow-${index}`}>{trait}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <Typography align='center'>Super Skill</Typography> */}
                        <Typography align='center' variant='h2'>  {mapToTarotCard(unconsciousSuperSkill).name}</Typography>
                      </div>

                      <div className='flex cc vert'>
                        <div className={`card ${isFlippedLifetimeLessonExam ? 'is-flipped' : ''}`} onClick={handleCardClickLifetimeLessonExam}>
                          <div className="card-face card-front">
                            <img src={mapToTarotCard(lifetimeLessonExam).image} alt={mapToTarotCard(lifetimeLessonExam).name} />
                          </div>
                          <div className="card-face card-back">
                            <div className='flex-col-mid'>
                              <Typography variant="h6">Light</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(lifetimeLessonExam).name].light.map((trait, index) => (
                                  <li key={`light-${index}`}>{trait}</li>
                                ))}
                              </ul>
                              <Typography variant="h6">Shadow</Typography>
                              <ul>
                                {tarotCardData[mapToTarotCard(lifetimeLessonExam).name].shadow.map((trait, index) => (
                                  <li key={`shadow-${index}`}>{trait}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <Typography align='center'>Lifetime Lesson</Typography> */}
                        <Typography align='center' variant='h2'>  {mapToTarotCard(lifetimeLessonExam).name}</Typography>
                      </div>

                      

                  
                    </div>

                    <Typography align='center' sx={{marginTop: '32px', marginBottom: '32px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '649px'}}>Following Archetypal energies are also part of your portrait, however you may remain not aware of them until a certain stage of your life:</Typography>

                    <div className='flex cc wrap-sm'>
                        <div className='flex cc vert'>
                          <div className={`card ${isFlippedSocialExam ? 'is-flipped' : ''}`} onClick={handleCardClickIsFlippedSocialExam}>
                            <div className="card-face card-front">
                              <img src={mapToTarotCard(socialExam).image} alt={mapToTarotCard(socialExam).name} />
                            </div>
                            <div className="card-face card-back">
                              <div className='flex-col-mid'>
                                <Typography variant="h6">Light</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(socialExam).name].light.map((trait, index) => (
                                    <li key={`light-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                                <Typography variant="h6">Shadow</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(socialExam).name].shadow.map((trait, index) => (
                                    <li key={`shadow-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <Typography align='center'>Social Exam</Typography> */}
                          <Typography align='center' variant='h2'>  {mapToTarotCard(socialExam).name}</Typography>
                        </div>
  
  
  
                        <div className='flex cc vert'>
                          <div className={`card ${isFlippedRealisationArea ? 'is-flipped' : ''}`} onClick={handleCardClickRealisationArea}>
                            <div className="card-face card-front">
                              <img src={mapToTarotCard(realisationArea).image} alt={mapToTarotCard(realisationArea).name} />
                            </div>
                            <div className="card-face card-back">
                              <div className='flex-col-mid'>
                                <Typography variant="h6">Light</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(realisationArea).name].light.map((trait, index) => (
                                    <li key={`light-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                                <Typography variant="h6">Shadow</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(realisationArea).name].shadow.map((trait, index) => (
                                    <li key={`shadow-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <Typography align='center'>Realisation Area</Typography> */}
                          <Typography align='center' variant='h2'>  {mapToTarotCard(realisationArea).name}</Typography>
                        </div>
  
  
                        <div className='flex cc vert mb-24'>
                          <div className={`card ${isFlippedGift ? 'is-flipped' : ''}`} onClick={handleCardClickGift}>
                            <div className="card-face card-front">
                              <img src={mapToTarotCard(gift).image} alt={mapToTarotCard(gift).name} />
                            </div>
                            <div className="card-face card-back">
                              <div className='flex-col-mid'>
                                <Typography variant="h6">Light</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(gift).name].light.map((trait, index) => (
                                    <li key={`light-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                                <Typography variant="h6">Shadow</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(gift).name].shadow.map((trait, index) => (
                                    <li key={`shadow-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <Typography align='center'>Unconscious Super Skill</Typography> */}
                          <Typography align='center' variant='h2'>  {mapToTarotCard(gift).name}</Typography>
                        </div>
  
                        <div className='flex cc vert'>
                          <div className={`card ${isFlippedMission ? 'is-flipped' : ''}`} onClick={handleCardClickMission}>
                            <div className="card-face card-front">
                              <img src={mapToTarotCard(mission).image} alt={mapToTarotCard(mission).name} />
                            </div>
                            <div className="card-face card-back">
                              <div className='flex-col-mid'>
                                <Typography variant="h6">Light</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(mission).name].light.map((trait, index) => (
                                    <li key={`light-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                                <Typography variant="h6">Shadow</Typography>
                                <ul>
                                  {tarotCardData[mapToTarotCard(mission).name].shadow.map((trait, index) => (
                                    <li key={`shadow-${index}`}>{trait}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <Typography align='center'>Mission</Typography> */}
                          <Typography align='center' variant='h2'>  {mapToTarotCard(mission).name}</Typography>
                        </div>
                      </div>
                      <div className='flex cc-center'> 
                      <Button       
                      variant="outlined"
                      onClick={() => {setShowArchetypes(false)}}
                      sx={{
                        marginTop: '25px', 
                        // backgroundColor: '#1a2e5c',
                        width: 'auto',
                        padding: '11px 32px',
                        letterSpacing: '1px',
                        borderRadius: '29px',
                        marginBottom: '25px',
                       }} 
                      >Check another date</Button>
                      </div>
                      <div className="flex cc-center">
                        <Link href='https://instagram.com/myhealingstudio' target='_blank' sx={{fontSize: '32px', color:'navy', padding: '0 12px'}}>
                          <InstagramIcon />
                        </Link>
                        <Link href='https://facebook.com/myhealingstudio' target='_blank' sx={{fontSize: '32px', color:'navy', padding: '0 12px'}}>
                          <FacebookIcon />
                        </Link>
                        <Link href='mailto: alongwitheternity@gmail.com' target='_blank' sx={{fontSize: '32px', color:'navy', padding: '0 12px'}}>
                          <MailIcon />
                        </Link>
                      </div>
                    </>
                   
     :
     
     <div className='m-auto flex cc vert'>
        <Typography align='center' variant='h1' sx={{fontSize: '40px',
    marginBottom: '24px'}}>Archetypal Calculator</Typography>
     <TextField
       // label="Date of Birth"
       type="date"
       variant="outlined"
       value={dob}
       onChange={(e) => {
         setDob(e.target.value);
         setIsCalculateDisabled(!validateDateFormat(e.target.value));
       }}
       onKeyDown={(e) => {
        if (e.key === 'Enter' && !isCalculateDisabled) {
          calculateTarot();
        }
      }}
     />
     <Button
       variant="contained"
       onClick={calculateTarot}
       disabled={isCalculateDisabled}
       sx={{
       marginTop: '20px', 
       backgroundColor: '#1a2e5c',
       width: '200px',
       padding: '11px 32px',
       letterSpacing: '1px',
       borderRadius: '29px'
      }}
     >
       GET PROFILE
     </Button>
     </div>
     
     }

    </div>
  );
};

export default TarotCalculator;
