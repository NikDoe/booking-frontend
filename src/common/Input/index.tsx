import { FC, HTMLProps } from "react";

import styles from "./input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
	isError?: boolean;
	validationText?: string;
}

const Input: FC<InputProps> = ({
	isError = false,
	validationText,
	...props
}) => {
	const classnames = isError
		? `${styles.Input} ${styles.Error}`
		: `${styles.Input}`;
	return (
		<>
			{isError && validationText && (
				<p className={styles.Validation}>{validationText}</p>
			)}
			<input className={classnames} {...props} />
		</>
	);
};

export default Input;
