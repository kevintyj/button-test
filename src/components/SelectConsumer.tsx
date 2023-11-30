import type { Setter } from 'solid-js';
import { For } from 'solid-js';

type SelectConsumerProps = {
	selectOptions: string[]
	setOptions: Setter<any>
	defaultValue?: string
};
const SelectConsumer = (props: SelectConsumerProps) => {
	return (
		<select
			onChange={(e) => {
				props.setOptions(e.currentTarget.value);
			}}
			value={props.defaultValue ?? props.selectOptions[0]}
		>
			<For each={props.selectOptions}>
				{option => (
					<option value={option}>{option}</option>
				)}
			</For>
		</select>
	);
};

export default SelectConsumer;
