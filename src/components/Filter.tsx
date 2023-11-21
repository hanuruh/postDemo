import React from "react";
import {ButtonGroup, Col, Row, ToggleButton} from "react-bootstrap";
import Input from "./Input";

export enum filters {
    NONE="No filter",
    USERNAME="Username",
    USER_ID="User Id",
    TEXT_BODY="Text"
}

type FilterProps = {
    handleFilterValueChange: (value: string) => void;
    handleFilterTypeChange: (value: filters) => void;
    filterValue: string;
    filterType: filters;

}

const Filter = ({
    filterValue,
    filterType,
    handleFilterValueChange,
    handleFilterTypeChange
}: FilterProps) => {

    return(
        <Row className={"filter"}>
            <Col md={5}>
                <Input
                    value={filterValue}
                    placeholder={"Filter posts"}
                    onChange={value => handleFilterValueChange(value)}
                    includeBtn={false}
                    colWidth={12}
                />
            </Col>
            <Col>
                <ButtonGroup className={"full-width"}>
                    {Object.values(filters).map((filter, index: number) => (
                        <ToggleButton
                            className={"filter"}
                            variant={"secondary"}
                            key={index}
                            id={`radio-${index}`}
                            type="radio"
                            name="radio"
                            value={filter}
                            checked={filter === filterType}
                            onChange={() => handleFilterTypeChange(filter)}
                        >
                            {filter}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default Filter;
