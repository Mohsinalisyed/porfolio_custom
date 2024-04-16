import React from 'react';
import './style.scss';
import Skill from './Skills';
import { FaReact, FaHtml5, FaJava, FaCss3, FaSass, FaFigma, FaGithub, } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiStrapi, SiWeb3Dotjs } from "react-icons/si";
import { MdOutlineImportantDevices, MdLineStyle } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { TbBrandBitbucket, TbBrandTypescript } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsList = () => {
    return (
        <div className='main-skill'>
            <div className='skill'>
                <h2>Skills</h2>
                <div className="grid-container">
                    <Skill skillName="React js" icon={<FaReact />} />
                    <Skill skillName="Next js" icon={<TbBrandNextjs />} />
                    <Skill skillName="Redux" icon={<SiRedux />} />
                    <Skill skillName="HTML5" icon={<FaHtml5 /> }/>     
                    <Skill skillName="JavaScript" icon={<FaJava />} />
                    <Skill skillName="TypeScript" icon={<TbBrandTypescript />} />
                    <Skill skillName="CSS3" icon={<FaCss3 />} />
                    <Skill skillName="Sass" icon={<FaSass />} />
                    <Skill skillName="Tailwind Css" icon={<SiTailwindcss />} />
                    <Skill skillName="Bootstrap" icon={<BsBootstrap />} />
                    <Skill skillName="Styled components" icon={<MdLineStyle />} />
                    <Skill skillName="Responsive Design" icon={<MdOutlineImportantDevices />} />
                    <Skill skillName="Figma" icon={<FaFigma />} />
                    <Skill skillName="Strapi(cms)" icon={<SiStrapi />} />
                    <Skill skillName="Api integration" icon={<AiOutlineApi />} />
                    <Skill skillName="Github" icon={<FaGithub />} />
                    <Skill skillName="BitBucket" icon={< TbBrandBitbucket />} />
                    <Skill skillName="Web3" icon={<SiWeb3Dotjs />} />
                </div>
            </div>
        </div>
    );
};

export default SkillsList;
