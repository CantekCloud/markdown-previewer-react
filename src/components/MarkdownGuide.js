import { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, OffcanvasBodyProps, OffcanvasHeaderProps, OffcanvasProps, ListGroup, ListGroupItem } from 'reactstrap';
import { styled, css } from 'styled-components';


import './MarkdownGuide.css';

const myStyle = {

    color: 'pink',
    background: 'rgba(10,20,30,1)',
    opacity: '97%',

}

const myStyle2 = {

    color: 'red',
    font: 'Lucida Console',

}

const myStyle3 = {
    background: '#dd1313',
    borderradius: '15px',
    border: '0px',
}


export default function MarkdownGuide(props) {

   

    return (
        <div className="toggler">
            <div>
                <Button
                    color="dark"
                    onClick={props.onToggleGuide}
                    style={myStyle3}
                >
                    Toggle Markdown Guide
                </Button>
                <Offcanvas
                    backdrop={false}
                    direction="end"
                    fade={false}
                    isOpen={props.showGuide}
                    toggle={props.onToggleGuide}
                    zIndex={4}
                    style={myStyle}
                >
                    <OffcanvasHeader isOpen={props.showGuide} toggle={props.onToggleGuide} style={myStyle2}>
                        Markdown Guide
                     </OffcanvasHeader>
                    <OffcanvasBody style={myStyle}>
                        <strong>
                            Here are a common list of Markdown tags
                            <br />                          
                    </strong>

                        <br />
                        
                        
                        <table>
                            <tr>
                                <th>
                                    Headings
                                </th>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">#</td>
                                <td><h1>Heading #1</h1></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">##</td>
                                <td><h2>Heading #2</h2></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">###</td>
                                <td><h3>Heading #3</h3></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">####</td>
                                <td><h4>Heading #4</h4></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">#####</td>
                                <td><h5>Heading #5</h5></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">######</td>
                                <td><h6>Heading #6</h6></td>
                            </tr>
                        </table>

                        <br />

                        <table>
                            <tr>
                                <th>
                                    Text Styling
                                </th>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag2">&lt;p&gt; Paragraph 1 &lt;/p&gt; <br /> &lt;p&gt; Paragraph 2 &lt;/p&gt;</td>
                                <td><div className=""><p>Paragraph 1</p> <p>Paragraph 2</p></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">* <i>your text</i> *</td>
                                <td><div className="text-item"><b>Bold text</b></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">** <i>your text</i> **</td>
                                <td><div className="text-item"><i>Italic text</i></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">*** <i>your text</i> ***</td>
                                <td><div className="text-item"><b><i>Bold and Italic text</i></b></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag"> &gt; <i>your quote</i> </td>
                                <td><div className="text-item"><blockquote>Your quote</blockquote></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">` <i>your code</i> `</td>
                                <td><div className="text-item"><code>Your code</code></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">
                                    ***
                                    <br />
                                    ---
                                    <br />
                                    _________________
                                </td>
                                <td><div className="">Horizontal line <br /><hr /></div></td>
                            </tr>
                        </table>

                        <br />

                        <table>
                            <tr>
                                <th>
                                    Links and Images
                                </th>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag2">
                                    ![Image text](<i>www.yourimage.com/yourimage</i>)
                                </td>
                                <td><div className="text-item2"><img src={'https://1.bp.blogspot.com/-MJPIUGr6H2c/XnnFB3CKr2I/AAAAAAAAH0M/XZp196mRbNkM1-3fueRhvKsdv8r-2AmMwCLcBGAsYHQ/s1600/powerful-interview-tip-say-for-example.jpg' } /></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag2">
                                    [Example link text](<i>www.yourlink.com</i>)
                                </td>
                                <td><div className="text-item"><a href={'#'}>Example link text</a></div></td>
                            </tr>


                        </table>
                        <br />

                        <table>
                            <tr>
                                <th>
                                    Lists
                                </th>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">
                                    1. * <i>your text</i> * <br />
                                    2. * <i>your text</i> * <br />
                                    3. * <i>your text</i> *
                                </td>
                                <td><div className="text-item"><ol><li>Your text</li><li>Your text</li><li>Your text</li></ol></div></td>
                            </tr>
                            <tr>
                                <td onClick={props.onClick} className="tag">
                                    - * <i>your text</i> * <br />
                                    - * <i>your text</i> * <br />
                                    - * <i>your text</i> *
                                </td>
                                <td><div className="text-item"><ul><li>Your text</li><li>Your text</li><li>Your text</li></ul></div></td>
                            </tr>                       
                        </table>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </div>
    )
}
