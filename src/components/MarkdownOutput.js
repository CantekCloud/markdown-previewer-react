import { ChangeEvent, React } from 'react';
import ReactMarkdown from 'react-markdown';

import styled from 'styled-components'




const Output = styled.div`
	width: 100%;
	height: 200vh;
	border-radius: 0px 0px 15px 15px;
	
	color: black;
	background-color: white;
	font-family: Arial;
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
	background-color: white;
	opacity: 97%;
`


export default function MarkdownOutput(props) {


	return (
		<>
			<StyledTextArea>MARKDOWN OUTPUT</StyledTextArea>
			<Container><Output><ReactMarkdown children={props.markdown}/></Output></Container>
		</>
	)
}
