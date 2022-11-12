import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
//practice-purpose 
//const FormControl= styled.div` 
//   margin: 0.5rem 0;
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color :${props=>(props.inValid ? 'firebrick':'black')};
// }
// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>(props.inValid ? 'red':'#ccc')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }
// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;
// return (
//   <form onSubmit={formSubmitHandler}>
//       <div inValid={!isValid}>
//       <label >Course Goal</label>
//       <input  type="text" onChange={goalInputChangeHandler} />
//       </div>
//     <Button type="submit">Add Goal</Button>
//   </form>
// );
// };
const CourseInput = props => {
  const [isValid,setIsValid]=useState(true);
  const [enteredValue, setEnteredValue] = useState('');
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0)
    setIsValid(true);
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
return (
    <form onSubmit={formSubmitHandler}>
        <div className= {`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
        </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
