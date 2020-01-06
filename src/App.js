import React from 'react';
import './App.css';
import ComboBox from './ComboBox';

function App() {
	return (
		<div className="App">
			<div className="select-container">
				<ComboBox
					data={[
						{ valueField: 1, textField: 'One' },
						{ valueField: 2, textField: 'Two' },
						{ valueField: 3, textField: 'Three' },
						{ valueField: 4, textField: 'Four' },
						{ valueField: 5, textField: 'Five' },
						{ valueField: 6, textField: 'Six' },
						{ valueField: 7, textField: 'Seven' },
						{ valueField: 8, textField: 'Eight' },
						{ valueField: 9, textField: 'Nine' },
						{ valueField: 10, textField: 'Ten' }
					]}
					placeholder={'Type to Search...'}
					onSelectedItemChange={(valueFiled, textField) => {
						console.log(valueFiled, textField);
					}}
					valueField={2}
					textField={'Two'}
					className="values"
				/>
			</div>
		</div>
	);
}

export default App;
