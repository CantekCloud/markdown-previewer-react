import { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, OffcanvasBodyProps, OffcanvasHeaderProps, OffcanvasProps } from 'reactstrap';
import { styled, css } from 'styled-components';


import './MarkdownGuide.css';


export default function MarkdownGuide (props) {


    return (
        <div className="toggler">
            <div>
                <Button
                    color="dark"
                    onClick={props.showGuide}
                >
                    Toggle Markdown Guide
                </Button>
                <Offcanvas
                >
                    <OffcanvasHeader toggle={props.onToggleGuide}>
                        Offcanvas
                     </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                    </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </div>
    )
}
