import React, { useState } from 'react';
import styles from './app.module.css';
import './App.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [display, setDisplay] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const handleNumberClick = (num) => {
		if (!operator) {
			setOperand1((prev) => prev + num);
			setDisplay((prev) => prev + num);
		} else {
			setOperand2((prev) => prev + num);
			setDisplay((prev) => prev + num);
		}
		setIsResult(false);
	};

	const handleOperatorClick = (op) => {
		if (operand1 && operand2) {
			handleAmountClick();
		}
		setOperator(op);
		setDisplay((prev) => prev + op);
	};

	const handleAmountClick = () => {
		if (operand1 && operand2) {
			const num1 = parseInt(operand1, 10);
			const num2 = parseInt(operand2, 10);
			let result = 0;
			if (operator === '+') {
				result = num1 + num2;
			} else if (operator === '-') {
				result = num1 - num2;
			}
			setDisplay(result.toString());
			setOperand1(result.toString());
			setOperand2('');
			setOperator('');
			setIsResult(true);
		}
	};

	const handleClearClick = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setDisplay('');
		setIsResult(false);
	};

	return (
		<div className={styles.calculator}>
			<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
				{display}
			</div>
			<div className={styles.buttons}>
				{NUMS.map((num) => (
					<button key={num} onClick={() => handleNumberClick(num)}>
						{num}
					</button>
				))}
				<button onClick={() => handleOperatorClick('+')}>+</button>
				<button onClick={() => handleOperatorClick('-')}>-</button>
				<button onClick={handleAmountClick}>=</button>
				<button onClick={handleClearClick}>C</button>
			</div>
		</div>
	);
};

export default App;
