import "./singleChampion.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useChampionService from '../services/championsService'

const SingleChampion = () => {


  const { getChampion } = useChampionService()
  const [skillName, setskillName] = useState()
  const [skillDesc, setskillDesc] = useState()
  const [skillVideo, setskillVideo] = useState()
  const [activeChampion, setactiveChampoion] = useState({})
  const { name, img, role, description, skils, difficulty } = activeChampion


  const getActiveChampion = (champ) => {
    setactiveChampoion(champ);
  }







  const { heroId } = useParams()


  useEffect(() => {
    getChampion(heroId).then(res => { getActiveChampion(res); setskillName(res.skils[0].name); setskillDesc(res.skils[0].description); setskillVideo(res.skils[0].video) });
  }, []);

  useEffect(() => {

  })




  const itemRef = useRef([])
  const focusOnItem = (id) => {
    itemRef.current.forEach(item => item.classList.remove('active'));
    itemRef.current[id].classList.add('active')
  }
  const activeSkill = (key) => {
    setskillName(skils[key].name)
    setskillDesc(skils[key].description)
    setskillVideo(skils[key].video)
    console.log(skillVideo);
  }
  const elem = activeChampion.skils && activeChampion.skils.map((item, i) => {

    let active = ''
    if (i == 0) {
      active = "preview__img active"
    } else {
      active = "preview__img"
    }
    return (
      <li className="preview__button " key={i} onClick={() => { activeSkill(i); focusOnItem(i) }}>
        <button>
          <div className={active} ref={el => itemRef.current[i] = el}>
            <img className="" src={item.img} alt="" />
          </div>
          <div className="circle"></div>
        </button>
      </li>
    )
  })



  const SetDifficutly = () => { 

    switch (difficulty) {
      case 'high':
         return <><div className="squere plus"> </div>
         <div className="squere plus"> </div>
         <div className="squere plus"> </div></>;
            
      
      case 'mid': 
        return <><div className="squere plus"> </div>
        <div className="squere plus"> </div>
        <div className="squere "> </div></>;

      default: 
        return <><div className="squere plus"> </div>
        <div className="squere "> </div>
        <div className="squere "> </div></>;
    }

                    
  }





  return (

    <div className="single-champion">
      <div className="champion">

        <div className="background">
          <div className="background__blackout">
            <img
              className="background__image"
              src={img}
              alt="hero background"
            />
          </div>
        </div>

        <div className="champion__face">
          <img
            className="champion__image"
            src={img}
          />

          <div className="champion__blackout"></div>
          <div className="champion__info">
            <h2 className="champion__title">
              <span>THE WEAPON OF THE FAITHFUL</span>
              <div>{name}</div>
            </h2>

            <div className="champion__info-inner">
              <ul className="champion__spec">
                <li className="role">
                  <img
                    src="https://raw.communitydragon.org/9.4/plugins/rcp-fe-lol-champion-details/global/default/role-icon-support.png"
                    alt=""
                    className="role__img"
                  />
                  <h2 className="spec__title">role</h2>
                  <span className="spec__desc">{role}</span>
                </li>

                <li className="difficutly">
                  <div className="level role__img">
                    <SetDifficutly/>
                  </div>
                  <h2 className="spec__title">DIFFICULTY</h2>
                  <span className="spec__desc">HIGH</span>
                </li>
              </ul>

              <div className="border"></div>

              <div className="info__desc">
                {description}
              </div>
            </div>

            <div className="champion__footer">
              <p className="footer__title">CHAMPION MASTERY</p>
              <a href="">OP.GG</a>
              <a href="">U.GG</a>
              <a href="">PROBUILDS.NET</a>
            </div>
          </div>
        </div>
      </div>

      <div />
      <div className="abilities">

        <div className="abilities__background">
          <img src="" alt="" />
        </div>

        <div className="abilities__inner">
          <div className="abilities__inner-preview">
            <h2 className="preview__title">ABILITIES</h2>
            <ul className="preview__list">
              {elem}
            </ul>

            <div className="abilities__desc">
              <span>PASSIVE</span>
              <h2 className="abilities__name">{skillName}</h2>
              <div>{skillDesc}</div>
            </div>
          </div>

          <div className="abilities__inner-video">
            <video muted autoPlay loop src={skillVideo} type="video/webm"></video>

          </div>


        </div>

      </div>
    </div>
  );
};

export default SingleChampion;
