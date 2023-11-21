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
   colWidth = 8,
   btnSmall = false,
   includeBtn = true,
   placeholder = ""
}: InputProps) => {

    return(
        <Row className={"inputWrapper"}>
            <Col md={colWidth}>
                <input
                    style={{
                        padding: padding,
                        borderRadius: 5,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "black",
                        width: "100%"
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                />
            </Col>
            {includeBtn &&
                <Col>
                    <Button
                        className={"inputBtnColor"}
                        size={btnSmall ? "sm" : "lg"}
                        onClick={onPressBtn}
                    >{btnText}</Button>
                </Col>
            }
        </Row>
    )
}

export default Input;
