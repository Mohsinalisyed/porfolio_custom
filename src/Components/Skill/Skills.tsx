import React from 'react';
import './style.scss';
interface IProps {
  skillName: string
  icon: any
}
const Skill: React.FC<IProps> = ({ skillName, icon}) => {
  return (
    <div className='item'>
      {icon } {skillName}
    </div>
  );
};

export default Skill;
