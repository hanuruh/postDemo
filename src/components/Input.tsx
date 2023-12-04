import {Button, Col, Row} from "react-bootstrap";
import React from "react";

type InputProps = {
    value: string;
    btnText?: string;
    padding?: number;
    colWidth?: number;
    placeholder?: string;
    btnSmall?: boolean;
    onChange: (value: string) => void;
    includeBtn?: boolean;
    onPressBtn?: () => void;
}

const Input = ({
   value,
   btnText,
   onChange,
   onPressBtn,
   padding = 6,
   colWidth = 5,
   btnSmall = false,
   includeBtn = true,
   placeholder = ""
}: InputProps) => {

    return(
        <Row className={"input-wrapper"}>
            <Col md={colWidth}>
                <input
                    className={"input full-width"}
                    style={{padding}}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                />
            </Col>
            {includeBtn &&
                <Col>
                    <Button
                        className={"input-btn-color"}
                        size={btnSmall ? "sm" : "lg"}
                        onClick={onPressBtn}
                    >{btnText}</Button>
                </Col>
            }
        </Row>
    )
}

export default Input;
