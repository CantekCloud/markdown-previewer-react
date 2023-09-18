import { ChangeEvent, React } from 'react';

import styled from 'styled-components'




const Input = styled.textarea`
	width: 100%;
	height: 200vh;
	border-radius: 0px 0px 15px 15px;
	color: white;
	background-color: rgba(10,50,65,1);
	font-family: Lucida Console;
	font-size: 1rem;
	padding: 35px;
`;

const StyledTextArea = styled.div`
	font-family: Arial;
	font-size: 1.15rem;
	padding-bottom: 10px;
	padding-top:10px;
	background-color: black;
	border-radius: 15px 15px 0px 0px;
	text-align: center;
	cursor: pointer;
	color: white;

	&:hover {
		filter: brightness(0.97);
	}
`;

const Container = styled.div`
	width: 100%;
	height: 200vh;
	border-radius: 15px;
	color: white;
	background-color: rgba(140,150,165,1);
	opacity: 97%;
`


export default function MarkdownInput (props) {


		return (
		<>
			<StyledTextArea>MARKDOWN INPUT</StyledTextArea>
			<Container><Input onChange={props.onChange} value={props.value}></Input></Container>
		</>
		)
}
